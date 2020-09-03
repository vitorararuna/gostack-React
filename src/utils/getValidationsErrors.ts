import { ValidationError } from 'yup';

interface Errors { // posso receber qqr nome à esquerda, desde que seja string
    [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
    const validationErrors: Errors = {};
    err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
    });
    console.log(validationErrors, 'validationErros');
    return validationErrors;
}