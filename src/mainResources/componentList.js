import * as React from "react";
import { List, Datagrid, TextField, Pagination, ReferenceField } from 'react-admin';
import { Filter, TextInput, SearchInput } from 'react-admin';
import Typography from '@material-ui/core/Typography';

// import { useGetList } from 'react-admin';


const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="h6">Post details</Typography>
        <Typography variant="body2">
            Posts will only be published once an editor approves them
        </Typography>
    </div>
);

const PostTitle = (props) => {
    return <span>Post {props ? `"${props.title}"` : 'w'}</span>;
};

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

const PostFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="sapNum" alwaysOn />
        <TextInput label="Title" source="manNum" defaultValue="Hello, World!" />
    </Filter>
)

const ComponentList = props => {
    console.log(props)
    return (
        <List filters={<PostFilter />} title={<PostTitle title={'ivo'}/>} sort={{ field: '_id', order: 'ASC' }} aside={<Aside />} {...props}>
            <Datagrid >
                {/* <TextField source="id" /> */}
                <ReferenceField  label="Manufacturer" source="manufacturer" reference="brands">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceField  label="Type" source="type" reference="types">
                    <TextField source="type" />
                </ReferenceField>
                <TextField source="sapNum" />
                {/* <TextField source="username" /> */}
                <TextField source="manNum" />
                {/* <TextField source="address.street" /> */}
                <TextField source="description" />
                <TextField source="qty" />
                <TextField source="price" label='Price EUR'/>
            </Datagrid>
        </List>
    )
};

export default ComponentList