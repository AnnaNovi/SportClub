import { Route, Link, Routes } from 'react-router-dom';
import './App.css';

import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Head from './pages/Head';
import RequireAuth from './pages/hoc/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/admin" element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }/>
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
