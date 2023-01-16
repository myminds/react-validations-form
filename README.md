
# React form validations  

npm i react-validations-form
```javascript

import React, { useState } from 'react'

import Validations, { errorChecker, showError } from 'react-validations-form'

const ELEMENTS = {
    NAME: 'name',
    PASSWORD: 'password',
    EMAIL: 'email',
    PHONE: 'phone',
    PIN_CODE: 'pin_code',
}
const init_state = {
    [ELEMENTS.NAME]: "",
    [ELEMENTS.PASSWORD]: "",
    [ELEMENTS.EMAIL]: "",
    [ELEMENTS.PHONE]: "",
    [ELEMENTS.PIN_CODE]: "",
}

export const UserForm = () => {
    // all form states
    const [form, setForm] = useState(init_state)
    // error setter 
    const [error, setError] = useState(init_state)

    const onChange = (e) => {
        const { name, value, type } = e.target
        if (type === "number" && isNaN(value)) return false;  // if type is number then string is not allowed. please pass type="number" attribute in input field
        setForm(prev => ({ ...prev, [name]: value }))
    }


    const onSubmit = () => {
        let error_obj = Validations(form, rules) //Validations(all states as an object, array of rules) 
        setError(error_obj)  // set object in setter function
        let isError = errorChecker(error_obj) // if error then it will return field name 
        if (isError) return false;
        //call api here 
    }

    return <div className='text-start'>
        <div className='mt-2'>
            <label>Name</label>
            <input
                name={ELEMENTS.NAME}
                value={form[ELEMENTS.NAME]}
                onChange={onChange}
                className='form-control' />
            {showError(error[ELEMENTS.NAME])}
        </div>
        <div className='mt-2'>
            <label>Password</label>
            <input
                name={ELEMENTS.PASSWORD}
                value={form[ELEMENTS?.PASSWORD]}
                onChange={onChange}
                className='form-control' />
            {showError(error[ELEMENTS.PASSWORD])}
        </div>
        <div className='mt-2'>
            <label>Email</label>
            <input
                name={ELEMENTS.EMAIL}
                value={form[ELEMENTS?.EMAIL]}
                onChange={onChange}
                className='form-control'
            />
            {showError(error[ELEMENTS.EMAIL])}
        </div>
        <div className='mt-2'>
            <label>Phone</label>
            <input
                type="number"
                name={ELEMENTS.PHONE}
                value={form[ELEMENTS?.PHONE]}
                onChange={onChange}
                className='form-control' />
            {showError(error[ELEMENTS.PHONE])}
        </div>
        <div className='mt-2'>
            <label>Pin code</label>
            <input
                type="number"
                name={ELEMENTS.PIN_CODE}
                value={form[ELEMENTS?.PIN_CODE]}
                onChange={onChange}
                className='form-control' />
            {showError(error[ELEMENTS.PIN_CODE])}
        </div>

        <div className='mt-2'>
            <button onClick={() => onSubmit()} className='text-secondary'>Submit</button>
        </div>
    </div>
}
// there are rules for validate the fields 
const rules = [{
    field_name: "Name", // label of input box 
    field_key: ELEMENTS.NAME, // field key 
    type: 'string',  // value type
    required: true, // it take boolean values if false then pass on no value (e.g if email optional , phone , pin code like that fields are optional then required then we false so if user fill any wrong value then it checker will check )
},
{
    field_name: "Email",
    field_key: ELEMENTS.EMAIL,
    type: 'email',
    required: true,
}
    , {
    field_name: "Phone",
    field_key: ELEMENTS.PHONE,
    type: 'mobile',
    required: true, 
},
{
    field_name: "Password",
    field_key: ELEMENTS.PASSWORD,
    type: 'string',
    required: true, 
}, {
    field_name: "Pin Code",
    field_key: ELEMENTS.PIN_CODE,
    type: 'string',
    required: true,
}]
```
# Rules configuration explained blow 
{
    field_name: "Email", 
    field_key: ELEMENTS.EMAIL,
    type: 'email',
    required: true,
}

## Field Config

| Rule keys  | Rule key types                    | Rule key descriptions                                                                                                                           |
| ---------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| field_name | Any string (input label name)     | field label, for example, field_name: "Name" or field_name: "Phone" and so on.                                                                  |
| ----       | -----                             | -------                                                                                                                                         |
| field_key  | any input state name, e.g., email | key name in which the value is kept?                                                                                                            |
| ----       | -----                             | -------                                                                                                                                         |
| type       | type of value to validate         | type of value entered, e.g., email, string, number, mobile, etc.                                                                                |
| ----       | -----                             | -------                                                                                                                                         |
| required   | boolean                           | if true, field is required, if false, field is optional, but fill any value and it will validate the value, such as email or phone format, etc. |