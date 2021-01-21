import restProvider from 'ra-data-simple-rest';
import { Admin, fetchUtils, Resource } from 'react-admin';
import authProvider from './authProvider';
import AppointmentCreate from './components/AppointmentCreate';
import AppointmentEdit from './components/AppointmentEdit';
import AppointmentList from './components/AppointmentList';
import DesignationCreate from './components/DesignationCreate';
import DesignationEdit from './components/DesignationEdit';
import DesignationList from './components/DesignationList';

const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: `Bearer ${localStorage.getItem('auth')}`
  };
  // options.headers.set('Content-Range', 'page 0-10/10');
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={restProvider('/api', httpClient)}>
      <Resource name='consultent/designation' list={DesignationList} create={DesignationCreate} edit={DesignationEdit} />
      <Resource name='consultent/appointment' list={AppointmentList} create={AppointmentCreate} edit={AppointmentEdit} />
    </Admin>
  );
}

export default App;
