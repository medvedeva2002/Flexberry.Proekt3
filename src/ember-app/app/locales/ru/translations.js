import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProekt3ОтчётОбОценкеLForm from './forms/i-i-s-proekt3-отчёт-об-оценке-l';
import IISProekt3ОценкаLForm from './forms/i-i-s-proekt3-оценка-l';
import IISProekt3СотрудникиLForm from './forms/i-i-s-proekt3-сотрудники-l';
import IISProekt3УвольнениеLForm from './forms/i-i-s-proekt3-увольнение-l';
import IISProekt3ОтчётОбОценкеEForm from './forms/i-i-s-proekt3-отчёт-об-оценке-e';
import IISProekt3ОценкаEForm from './forms/i-i-s-proekt3-оценка-e';
import IISProekt3СотрудникиEForm from './forms/i-i-s-proekt3-сотрудники-e';
import IISProekt3УвольнениеEForm from './forms/i-i-s-proekt3-увольнение-e';
import IISProekt3ОтчётОбОценкеModel from './models/i-i-s-proekt3-отчёт-об-оценке';
import IISProekt3ОценкаПодробноModel from './models/i-i-s-proekt3-оценка-подробно';
import IISProekt3ОценкаModel from './models/i-i-s-proekt3-оценка';
import IISProekt3СотрудникиModel from './models/i-i-s-proekt3-сотрудники';
import IISProekt3УвольнениеModel from './models/i-i-s-proekt3-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt3-отчёт-об-оценке': IISProekt3ОтчётОбОценкеModel,
    'i-i-s-proekt3-оценка-подробно': IISProekt3ОценкаПодробноModel,
    'i-i-s-proekt3-оценка': IISProekt3ОценкаModel,
    'i-i-s-proekt3-сотрудники': IISProekt3СотрудникиModel,
    'i-i-s-proekt3-увольнение': IISProekt3УвольнениеModel
  },

  'application-name': 'Proekt3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt3',
          title: 'Proekt3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        оценка: {
          caption: 'Оценка',
          title: 'Оценка',
          'i-i-s-proekt3-отчёт-об-оценке-l': {
            caption: 'Отчёт об оценке',
            title: ''
          },
          'i-i-s-proekt3-оценка-l': {
            caption: 'Оценка',
            title: ''
          }
        },
        увольнение: {
          caption: 'Увольнение',
          title: 'Увольнение',
          'i-i-s-proekt3-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-proekt3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt3-отчёт-об-оценке-l': IISProekt3ОтчётОбОценкеLForm,
    'i-i-s-proekt3-оценка-l': IISProekt3ОценкаLForm,
    'i-i-s-proekt3-сотрудники-l': IISProekt3СотрудникиLForm,
    'i-i-s-proekt3-увольнение-l': IISProekt3УвольнениеLForm,
    'i-i-s-proekt3-отчёт-об-оценке-e': IISProekt3ОтчётОбОценкеEForm,
    'i-i-s-proekt3-оценка-e': IISProekt3ОценкаEForm,
    'i-i-s-proekt3-сотрудники-e': IISProekt3СотрудникиEForm,
    'i-i-s-proekt3-увольнение-e': IISProekt3УвольнениеEForm
  },

});

export default translations;
