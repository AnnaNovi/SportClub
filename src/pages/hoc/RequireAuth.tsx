import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function RequireAuth({children} : {children:any}) {
  const authStatus = useSelector((state:RootState) => state.user);

  if(authStatus === 'none') {
    return <Navigate to='/' />
  }
  return children;
}

export default RequireAuth;