import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt3-увольнение', 'Unit | Serializer | i-i-s-proekt3-увольнение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt3-увольнение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proekt3-причины',
    'transform:i-i-s-proekt3-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
