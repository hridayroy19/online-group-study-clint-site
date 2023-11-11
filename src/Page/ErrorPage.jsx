import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
                 <>
           
           {/* <main className="grid h-[100vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
         
           </main> */}


<div className="hero min-h-screen  w-full" style={{backgroundImage: 'url(https://i.ibb.co/MNbWSW8/404-error-with-cute-animal-concept-illustration-114360-5528.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <div className="text-center">
               {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
               {/* <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1> */}
               {/* <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p> */}
               <div className="mt-16   flex items-center  justify-center gap-x-6">
               <Link to={"/"} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
           
                   Go back home
               
               </Link>
                 <a href="#" className="text-sm font-semibold text-gray-900">
                   Contact support <span aria-hidden="true">&rarr;</span>
                 </a>
               </div>
             </div>
    </div>
  </div>
</div>



         </>
        </div>
    );
};

export default ErrorPage;