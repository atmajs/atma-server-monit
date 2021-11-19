export namespace Csv {
    export function escape (str: string) {
        if (str == null) {
            return '';
        }
        if (typeof str === 'number') {
            return str;
        }

        str = String(str).replace(/\n/g, '\\\\n')

        if (str.includes(',') === false) {
            return str;
        }
        str = str.replace(/"/g, "'");
        return `"${str}"`;
    }
    export function getTypeFromValue (value: any) {
        if (value == null) {
            return 'object';
        }

        let type = typeof value;
        if (type !== 'object') {
            if (type === 'string') {
                if (value.length > 1000) {
                    // Larger strings considered to be text.
                    return 'text';
                }
            }
            return type;
        }

        if (value instanceof Date) {
            return 'date';
        }

        let key = Object.prototype.toString.call(value);
        let match = /(\w+)\]/.exec(key);
        return match?.[1] ?? 'object';
    }
}
