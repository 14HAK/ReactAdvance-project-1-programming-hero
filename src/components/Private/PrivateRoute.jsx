import { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user.uid) {
    return children;
  }
  return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;
