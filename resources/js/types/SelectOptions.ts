export enum SelectType {
    text = 'text',
    number = 'number',
    date = 'date',
    select = 'select',
    textarea = 'textarea',
    checkbox = 'checkbox',
    radio = 'radio',
}


export const SelectOptions = [
    {
        key: SelectType.text,
        value: 'Texto'
    },
    {   
        key: SelectType.number,
        value: 'Número'
    },
    {   
        key: SelectType.date,
        value: 'Fecha'
    },
    {   
        key: SelectType.select,
        value: 'Lista de Valores'
    },
    {   
        key: SelectType.textarea,
        value: 'Area de Texto'
    },
    {   
        key: SelectType.checkbox,
        value: 'Checkbox'
    },
    {   
        key: SelectType.radio,
        value: 'Radio'
    }
];