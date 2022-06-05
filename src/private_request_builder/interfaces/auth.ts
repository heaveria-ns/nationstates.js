/**
 * Defines the structure of the _authentication object in the API class.
 * @interface
 */
interface Auth {
    status: boolean,
    _nation?: string,
    _xPassword?: string,
    _xAutoLogin?: string,
    _xPin?: string
}
