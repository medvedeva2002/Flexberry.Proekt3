import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПричиныEnum from '../enums/i-i-s-proekt3-причины';

export default FlexberryEnum.extend({
  enum: ПричиныEnum,
  sourceType: 'IIS.Proekt3.Причины'
});
