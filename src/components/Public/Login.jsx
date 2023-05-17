import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/Context';

const Login = () => {
  const { logIn, googleLogIn } = useContext(MyContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        form.reset();
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='p-10'>
        <section className='max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300'>
          <h1 className='text-4xl font-medium'>Login</h1>

          <div className='my-5'>
            <button
              onClick={handleGoogleLogin}
              className='w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150'
            >
              <img
                src='https://www.svgrepo.com/show/355037/google.svg'
                className='w-6 h-6'
                alt=''
              />{' '}
              <span>Login with Google</span>
            </button>
          </div>
          <form onSubmit={handleLogIn} className='my-10'>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='email'>
                <p className='font-medium text-slate-700 pb-2'>Email address</p>
                <input
                  id='email'
                  name='email'
                  type='email'
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='@gmail.com'
                />
              </label>
              <label htmlFor='password'>
                <p className='font-medium text-slate-700 pb-2'>Password</p>
                <input
                  id='password'
                  name='password'
                  type='password'
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='******'
                />
              </label>
              <div className='flex flex-row justify-between'>
                <div>
                  <label htmlFor='remember' className=''>
                    <input
                      type='checkbox'
                      id='remember'
                      className='w-4 h-4 border-slate-200 focus:bg-indigo-600'
                    />
                    Remember me
                  </label>
                </div>
                <div>
                  <button className='font-medium hover:underline text-indigo-600'>
                    Forgot Password?
                  </button>
                </div>
              </div>
              <button className='w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                  />
                </svg>
                <span>Login</span>
              </button>
              <p className='text-center'>
                Not registered yet?{' '}
                <button className='text-indigo-600 hover:underline font-medium inline-flex space-x-1 items-center'>
                  <Link to={'/resister'}>
                    <span>Register now</span>
                  </Link>
                </button>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
