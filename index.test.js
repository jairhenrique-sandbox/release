import add from './index.js'

import assert from 'node:assert'
import test from 'node:test'

test('should sum values', (context) => {
    assert.equal(add(1, 2), 3)
});