import test from 'ava'

/**
 * Library under test
 */

import DerivedRecord from '../src/derived-record'

test('DerivedRecord is importable', t => {
    t.pass()
})

test('DerivedRecord is of expected form', t => {
    function returnDerivedRecord(): DerivedRecord {
        return {
            Time: 1,
            Close: 5
        }
    }
    const derivedRecord: DerivedRecord = returnDerivedRecord()
    t.pass()
})
