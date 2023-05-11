import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

    const { signInUser } = useContext(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                setSuccess('User Login SuccessFully')
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row w-4/5">
                <div className=" w-1/2">
                    <img src={logo} alt="" />

                </div>
                <div className="card   w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn}>
                        <div className="card-body">
                            <h1 className="text-4xl text-center font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <p>{success}</p>
                                <p>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='text-center pt-3'>
                                <h3 className='mb-4'>Or Sign in with </h3>
                                <button className='text-2xl '><FaFacebook></FaFacebook> </button>
                                <button className='text-2xl ml-4'><FaGoogle></FaGoogle> </button>
                                <button className='text-2xl ml-4'><FaGithub></FaGithub> </button>
                                <p className='pt-4'>New to Car Doctor? <Link className='text-orange-700' to='/register'>Register</Link> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;