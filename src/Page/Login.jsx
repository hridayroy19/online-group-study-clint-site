import { useContext, } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link,useNavigate } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
const {logIn,siginGoogle} =useContext(AuthContext);

const navigate = useNavigate();

// const [loginError,setLoginError] =useState('')
// const [ seccess,setSeccess]=useState('')




const handleLogin = event =>{
  event.preventDefault();
  console.log('hello');
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,  password)

  logIn(email, password)
  .then( res => {
    const user = res.user;
    toast.success('Successfully Login!')
    console.log(user)
    navigate("/")
const users ={email};
    axios.post(' https://online-grup-study-server.vercel.app/jwt', users,)
    .then(res =>{
      console.log(res)
    
    })
    
  })
.catch(error => console.log(error));
return toast.error(" please try again ")

}

const handelGoogleSignWith=()=>{
  siginGoogle()
  .then(res=>{
  console.log(res.user)
 navigate("/")
 toast.success('Successfully Login!')
  })

  .catch(error=>{
    console.error(error)
  
  });


}

  return (

<div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="card w-full image-full">
  <figure><img src="https://i.ibb.co/b31Q0np/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg" alt="" className="w-full h-full" /></figure>
  <div className="card-body">
  <div className="hero h-[100vh] ">
    <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card flex-shrink-0 w-full h-full shadow-2xl bg-gray-500">
      <div className="card-body">
        <form onSubmit={handleLogin}>
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

        <h2 className="font-semibold "> please now <Link className="font-bold  uppercase" to={"/reg"}> Registation </Link> </h2>

        <div  className=" grid grid-cols-2 text-center  rounded-lg w-36 bg-blue-400  gap-3 mx-auto  items-center border">
       <p className="uppercase font-bold px-2 "> google</p> <button onClick={handelGoogleSignWith} className=" text-2xl "> <BiLogoGoogle></BiLogoGoogle> </button>
        </div>
      
        </div>
       
      </div>
    </div>
  </div>
  </div>
</div>

  );
};

export default Login;