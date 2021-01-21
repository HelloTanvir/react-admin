import React from 'react';
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin';

const DesignationList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='_id' />
                <TextField source='designation' />
                <EditButton basePath='/designation' />
                <DeleteButton basePath='/designation' />
            </Datagrid>
        </List>
    )
}

export default DesignationList
