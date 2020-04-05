namespace Utils {

    export interface Valid {
        value;
        required?;
        minStrLength?;
        maxStrLength?;
        minNum?;
        maxNum?;
    }

    export function validate(valid: Valid) {
        let isValid = true;
        if (valid.required) {
            isValid = isValid && valid.value.trim().length != 0;
        }
        return isValid;
    }
}
