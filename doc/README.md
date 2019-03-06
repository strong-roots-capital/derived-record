
derived-record [![Build status](https://travis-ci.org/strong-roots-capital/derived-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/derived-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/derived-record.svg)](https://npmjs.org/package/@strong-roots-capital/derived-record)
================================================================================================================================================================================================================================================================================================================================

> Interface for data derived from time-series record data

Install
-------

```shell
npm install @strong-roots-capital/derived-record
```

Use
---

```typescript
import derivedRecord from '@strong-roots-capital/derived-record'
```

The `DerivedRecord` interface is defined as

```typescript
/**
 * An atomic unit of time-series data.
 */
interface DerivedRecord {
    /**
     * Time that the current Record began, in units of milliseconds
     * elapsed since January 1, 1970.
     */
    Time: number,
    /**
     * Closing value of current Record.
     */
    Close: number
}
```

Related
-------

*   [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)

## Index

---

