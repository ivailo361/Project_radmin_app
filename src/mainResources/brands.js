import * as React from "react";
import { List, Datagrid, TextField, Pagination, EmailField } from 'react-admin';


const PostTitle = ( props ) => {
    return <span>Post {props ? `"${props.title}"` : 'w'}</span>;
};

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

const Brands = props => {
    console.log(props)
    return (
        <List title={<PostTitle title={'Available brands'}/>} sort={{ field: 'sapid', order: 'ASC' }} {...props}>
            <Datagrid >
                {/* <TextField source="id" /> */}
                <TextField source="id" />
                <TextField source="name" />
            </Datagrid>
        </List>
    )
};

export default Brands