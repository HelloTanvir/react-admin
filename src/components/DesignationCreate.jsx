import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const DesignationCreate = (props) => {
    return (
        <Create title='Create a Designation' {...props}>
            <SimpleForm>
                <TextInput source='designation' />
            </SimpleForm>
        </Create>
    )
}

export default DesignationCreate
