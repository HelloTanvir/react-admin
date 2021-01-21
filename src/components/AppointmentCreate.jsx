import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const DesignationCreate = (props) => {
    return (
        <Create title='Create a Designation' {...props}>
            <SimpleForm>
                <TextInput source='state' />
                <TextInput source='name' />
                <TextInput source='givenMobileNumber' />
                <TextInput source='gender' />
                <TextInput source='consultantName' />
            </SimpleForm>
        </Create>
    )
}

export default DesignationCreate
