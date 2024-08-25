import React from 'react';

const types: { [key: string]: { regex: RegExp; message: string } } = {
    email: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Preencha um e-mail válido"
    },
    senha: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: "A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres."
    },
}

function useForm(type: string) {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState<string | null>(null);

    const validate = (value: string) => {
        if (!type) return true;
        if(value.length === 0) {
            setError(types[type].message);
            return false;
        } else if(types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError("");
            return true;
        }
    }
    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        console.log(error)
        error && validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm;