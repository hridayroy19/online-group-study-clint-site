import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className=" w-full   max-w-[1430px] mx-auto ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-1 px-2 mx-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.ibb.co/0J3qbG4/stock-vector-success-teme-2189184573.jpg"
                  alt=""
                  className=" w-[10%] rounded-lg max-h-[10%] "
                />
                <p className=" font-bold text-xl">
                  Online Group-Study assignment
                </p>
              </div>
            </div>

            <div className="flex-none hidden lg:block">
              <div className=" flex gap-3">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " btn " : " btn btn-ghost"
                  }
                >
                  Home
                </NavLink>
                {/* <NavLink
                  to={"/allaserment"}
                  className={({ isActive }) =>
                    isActive ? " btn " : " btn btn-ghost"
                  }
                >
                  All Assignments
                </NavLink> */}

                <NavLink
                  to={"/crate"}
                  className={({ isActive }) =>
                    isActive ? "btn " : " btn btn-ghost"
                  }
                >
                  create assignments
                </NavLink>

                <NavLink
                  to={"/myasserment"}
                  className={({ isActive }) =>
                    isActive ? "btn " : " btn btn-ghost"
                  }
                >
                all assignments
                </NavLink>
                <NavLink
                  to={"/myconfarmcard"}
                  className={({ isActive }) =>
                    isActive ? "btn " : " btn btn-ghost"
                  }
                >
                My Asserment
                </NavLink>
                {/* { user ?.email ? 
            
  
            
            <button onClick={handelLogut}>logOut</button>
            :
                <NavLink to={"/login"}  className={({isActive})=> isActive?  'btn ' : ' btn btn-ghost' } >
                login
            </NavLink>
            } */}


<div className="flex">

{
    user ?
    <>
    <div className= " flex justify-center items-center gap-2">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          {
            user &&
            <img src={user.photoUrl} alt="" />
          }
         
        </div>

      </label>
      { user &&
        <div className="gap-2"><p>{user.displayName}</p>
           
        </div>
     
        }
    </div>

    <button onClick={handelLogut} className="btn btn-outline">LoGOut</button>
    </>
    : <Link to='/login' ><button  className="btn">Login</button></Link>
  }
</div>
              </div>

              

            </div>



          </div>
        </div>

        {/* Page content here */}
      </div>
      <div className="drawer-side z-30 h-[30vh] ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Sidebar content here */}
        <div className="menu p-4 w-80 min-h-full bg-base-200 flex flex-col">
        <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " btn " : " btn btn-ghost"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to={"/crate"}
                  className={({ isActive }) =>
                    isActive ? "btn " : " btn btn-ghost"
                  }
                >
                  create assignments
                </NavLink>

                <NavLink
                  to={"/myasserment"}
                  className={({ isActive }) =>
                    isActive ? "btn " : " btn btn-ghost"
                  }
                >
                  all assignments
                </NavLink>
                {/* { user ?.email ? 
            
  
            
            <button onClick={handelLogut}>loGOut</button>
            :
                <NavLink to={"/login"}  className={({isActive})=> isActive?  'btn ' : ' btn btn-ghost' } >
                login
            </NavLink>
            } */}


<div className=" flex ">

{
    user ?
    <>
    <div className= " flex justify-center  items-center gap-2">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          {
            user &&
            <img src={user.photoUrl} alt="" />
          }
         
        </div>

      </label>
      { user &&
        <div className="gap-2"><p>{user.displayName}</p>
           
        </div>
     
        }
    </div>

    <button onClick={handelLogut} className="btn  btn-outline">LoGOut</button>
    </>
    : <Link to='/login' ><button  className="btn">Login</button></Link>
  }
</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
