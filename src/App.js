import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataprovider'
import ComponentList from './mainResources/componentList'
import Brands from './mainResources/brands'
import Types from './mainResources/types'

  const App = () => (
    <Admin /*customRoutes={customRoutes} menu={Menu} dashboard={Dashboard} theme={theme}*/ dataProvider={dataProvider} >

        <Resource name="components" list={ComponentList} />
        <Resource name="brands" list={Brands} />
        <Resource name="types" list={Types} />

    </Admin>
);
export default App;
