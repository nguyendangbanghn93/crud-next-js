import { useCallback, useMemo, useState } from 'react';

const useInput = (validateValue, options) => {
    const [enteredValue, setEnteredValue] = useState(options.default);
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = useMemo(() => !valueIsValid && isTouched, [valueIsValid, isTouched]);
    const changeHandler = useCallback((event) => setEnteredValue(event.target.value), [])
    const blurHandler = useCallback((event) => setIsTouched(true), [])
    const setDefaultValue = useCallback((value) => setEnteredValue(value), [])
    const reset = useCallback(() => {
        setEnteredValue('');
        setIsTouched(false);
    }, []);

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        changeHandler,
        blurHandler,
        setDefaultValue,
        reset,
        ...options
    };
};

export default useInput;