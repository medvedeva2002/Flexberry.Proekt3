import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОценкаПодробноMixin
} from '../mixins/regenerated/models/i-i-s-proekt3-оценка-подробно';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОценкаПодробноMixin, Validations, {
});

defineProjections(Model);

export default Model;
