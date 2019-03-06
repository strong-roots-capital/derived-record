/**
 * derived-record
 * Interface for data derived from time-series record data
 */


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

export default DerivedRecord
