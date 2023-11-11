import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const Login = () => {

  const { crateUser}= useContext(AuthContext);
  const navigate = useNavigate();

  const handeRegistation = event =>{
    event.preventDefault();
    console.log('hello');
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,  password)


    crateUser(email,password)
    .then(res =>{
      const user = res.user;
      console.log(user)
      toast.success('Successfully Registation!')
      navigate("/")
    })
.catch(error => console.log(error));

  }
  


    return (
    
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/b31Q0np/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    

  <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Registation now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-gray-400">
        <div className="card-body">
          <form onSubmit={handeRegistation}>


          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>

  
          <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input  className="btn btn-primary" type="submit" value="login" />
            </div>
          </form>

          <h2 className="font-semibold "> please now <Link className="font-bold  uppercase" to={"/login"}> Login </Link> </h2>

          </div>
        </div>
      </div>
    </div>


  </div>
</div>

    );
};

export default Login;