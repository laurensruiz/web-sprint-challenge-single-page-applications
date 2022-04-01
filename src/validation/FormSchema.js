import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .trim()
        .required('Size is required'),
    toppings: yup
        .boolean()
        .oneOf([true], 'Must choose toppings!'),
    special: yup
        .string()
        .trim()
        .required('give special instructions')
        .min(0, 'name must be at least 2 characters'),
    
    
})

export default formSchema;