import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const AppointmentEdit = (props) => {
    return (
        <Edit title='Edit a Appointment' {...props}>
            <SimpleForm>
                <TextInput disabled source='_id' />
                <TextInput source='state' />
            </SimpleForm>
        </Edit>
    )
}

export default AppointmentEdit
