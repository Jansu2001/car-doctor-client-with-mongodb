import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
const Register = () => {

    const { createUser } = useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error.message);
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row w-4/5">
                <div className=" w-1/2">
                    <img src={logo} alt="" />

                </div>
                <div className="card   w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <h1 className="text-4xl text-center font-bold">Register Now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <div className='text-center pt-3'>
                                <h3 className='mb-4'>Or Sign in with </h3>
                                <button className='text-2xl '><FaFacebook></FaFacebook> </button>
                                <button className='text-2xl ml-4'><FaGoogle></FaGoogle> </button>
                                <button className='text-2xl ml-4'><FaGithub></FaGithub> </button>
                                <p className='pt-4'>Have an Account? <Link className='text-orange-700' to='/login'>Login</Link> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;