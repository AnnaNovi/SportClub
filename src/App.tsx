import { Route, Routes } from 'react-router-dom';

import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Head from './pages/Head';
import RequireAuth from './pages/hoc/RequireAuth';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { ClientsList } from './components';
import { TrainersList } from './components';
import GroupsList from './components/GroupsList/GroupsList';
import Modal from './components/Modal/Modal';
import Schedule from './components/Schedule/Schedule';
import Payment from './components/Payment/Payment';

function App() {
  const modalState = useSelector((state:RootState) => state.modal);
  return (
    <>
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
            <Route path="payment" element={<Payment />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
          <Route path="/head" element={
            <RequireAuth>
              <Head />
            </RequireAuth>
          }/>
        </Routes>
      </div>
      {modalState.modalOpenState && <Modal />}
    </>
    
  );
}

export default App;
