import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt3-оценка-подробно', 'Unit | Model | i-i-s-proekt3-оценка-подробно', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt3-отчёт-об-оценке',
    'model:i-i-s-proekt3-оценка-подробно',
    'model:i-i-s-proekt3-оценка',
    'model:i-i-s-proekt3-сотрудники',
    'model:i-i-s-proekt3-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
