import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const DesignationEdit = (props) => {
    return (
        <Edit title='Edit a Designation' {...props}>
            <SimpleForm>
                <TextInput disabled source='_id' />
                <TextInput source='designation' />
            </SimpleForm>
        </Edit>
    )
}

export default DesignationEdit
