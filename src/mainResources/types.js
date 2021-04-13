import * as React from "react";
import { List, Datagrid, TextField, Pagination, EmailField } from 'react-admin';


const PostTitle = ( props ) => {
    return <span>{props ? `"${props.title}"` : 'w'}</span>;
};


const Types = props => {
    console.log(props)
    return (
        <List perPage={25}  title={<PostTitle title={'Available types'}/>} sort={{ field: 'id', order: 'ASC' }} {...props}>
            <Datagrid >
                {/* <TextField source="id" /> */}
                <TextField source="id" />
                <TextField source="type" />
            </Datagrid>
        </List>
    )
};

export default Types