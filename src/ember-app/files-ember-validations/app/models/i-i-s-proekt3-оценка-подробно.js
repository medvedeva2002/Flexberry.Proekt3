import {
  defineNamespace,
  defineProjections,
  Model as ОценкаПодробноMixin
} from '../mixins/regenerated/models/i-i-s-proekt3-оценка-подробно';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОценкаПодробноMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
