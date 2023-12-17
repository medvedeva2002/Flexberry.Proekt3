import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  сотрудники: DS.belongsTo('i-i-s-proekt3-сотрудники', { inverse: null, async: false }),
  оценкаПодробно: DS.hasMany('i-i-s-proekt3-оценка-подробно', { inverse: 'отчётОбОценке', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-proekt3-отчёт-об-оценке.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt3-отчёт-об-оценке.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оценкаПодробно: {
    descriptionKey: 'models.i-i-s-proekt3-отчёт-об-оценке.validations.оценкаПодробно.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчётОбОценкеE', 'i-i-s-proekt3-отчёт-об-оценке', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt3-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    оценкаПодробно: hasMany('i-i-s-proekt3-оценка-подробно', 'Оценка подробно', {
      номер: attr('Номер', { index: 0 }),
      сотрудники: belongsTo('i-i-s-proekt3-сотрудники', 'Сотрудники', {
        фИО: attr('ФИО', { index: 2, hidden: true }),
        должность: attr('Должность', { index: 3 })
      }, { index: 1, displayMemberPath: 'фИО' }),
      оценка: belongsTo('i-i-s-proekt3-оценка', 'Оценка', {
        датаПроведения: attr('Дата проведения', { index: 5 }),
        статус: attr('Статус', { index: 6 }),
        комментарий: attr('Комментарий', { index: 7, hidden: true })
      }, { index: 4, displayMemberPath: 'комментарий' })
    })
  });

  modelClass.defineProjection('ОтчётОбОценкеL', 'i-i-s-proekt3-отчёт-об-оценке', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt3-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
