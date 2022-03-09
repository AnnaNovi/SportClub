import { Route, Routes } from 'react-router-dom';
import './App.css';

import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Head from './pages/Head';
import RequireAuth from './pages/hoc/RequireAuth';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { ClientsList } from './components';
import { TrainersList } from './components';
import GroupsList from './components/GroupsList/GroupsList';

function App() {
  const currentUser = useSelector((state: RootState) => state.user)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/admin" element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }>
          <Route path="clients" element={<ClientsList />} />
          <Route path="trainers" element={<TrainersList />} />
          <Route path="groups" element={<GroupsList />} />
        </Route>
        <Route path="/head" element={
          <RequireAuth>
            <Head />
          </RequireAuth>
        }/>
      </Routes>
    </div>
  );
}

export default App;
