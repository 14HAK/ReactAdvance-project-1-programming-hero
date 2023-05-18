import { Link, NavLink } from 'react-router-dom';
import './man.css';
import { useContext } from 'react';
import { MyContext } from '../../context/Context';

const Header = () => {
  const { user, setUser, logOut } = useContext(MyContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser({});
        console.log('logOut success');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <header className='text-gray-600 bg-slate-600 body-font'>
        <nav className='container mx-auto flex flex-wrap flex-col md:flex-row items-center'>
          <Link
            to={'/'}
            className='flex title-font font-medium items-center cursor-pointer text-gray-900 md:mb-0'
          >
            <span className='text-3xl font-[Elephant]'>
              <span className='text-white'>L</span>
              <span className='text-[#ffca5c] hover:text-[#ffffff] '>OGO</span>
            </span>
          </Link>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <NavLink
              to={'/home'}
              className='mr-5 cursor-pointer text-[#ffca5c] hover:text-[#ffffff] hover:underline'
            >
              Home
            </NavLink>
            <NavLink
              to={'/login'}
              className='mr-5 cursor-pointer text-[#ffca5c] hover:text-[#ffffff] hover:underline'
            >
              Log In
            </NavLink>
            <NavLink
              to={'/resister'}
              className='mr-5 cursor-pointer text-[#ffca5c] hover:text-[#ffffff] hover:underline'
            >
              Resister
            </NavLink>

            <NavLink
              className="className='mr-5 cursor-pointer text-[#ffca5c] hover:text-[#ffffff] hover:underline'"
              to='/orders'
            >
              Orders
            </NavLink>

            <div className='ml-5'>
              {user && (
                <NavLink
                  className="className='mr-5 cursor-pointer text-[#ffca5c] hover:text-[#ffffff] hover:underline'"
                  to='/personal'
                >
                  Personal
                </NavLink>
              )}
            </div>
          </nav>
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className='inline-flex font-medium items-center bg-yellow-500 border-0 py-3 px-3 focus:outline-none hover:bg-white hover:text-slate-600 rounded-s-md text-base mt-4 -mr-2 md:mt-0'
              >
                LogOut
              </button>
              <div className='p-2 whitespace-nowrap'>
                <div className='flex items-center bg-slate-500 px-3 py-1 rounded-e-md'>
                  <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
                    <img
                      className='rounded-full'
                      src={
                        user?.photoURL ||
                        `https://www.shutterstock.com/shutterstock/photos/1140726713/display_1500/stock-vector-cute-little-man-profile-1140726713.jpg`
                      }
                      width='60'
                      height='60'
                      alt='user-photo'
                    />
                  </div>
                  <div className='font-medium text-white'>{user?.email}</div>
                </div>
              </div>
            </>
          ) : (
            <div className='p-2 whitespace-nowrap'>
              <div className='flex items-center bg-slate-600 px-3 py-1 rounded-e-md'>
                <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'></div>
                <div className='font-medium text-white'>user not here</div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
