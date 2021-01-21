import React from 'react';
import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin';

const DesignationList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='_id' />
                <TextField source='state' />
                <TextField source='name' />
                <TextField source='givenMobileNumber' />
                <TextField source='gender' />
                <TextField source='story' />
                <TextField source='consultantName' />
                <DateField source='appointmentDate' />
                <DateField source='appointmentTime' />
                <DateField source='dob' />
                <EditButton basePath='/appointment' />
                <DeleteButton basePath='/appointment' />
            </Datagrid>
        </List>
    )
}

export default DesignationList
