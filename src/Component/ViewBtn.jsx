import { Link, useLoaderData } from "react-router-dom";


const ViewBtn = () => {
    const view = useLoaderData()
    console.log(view)
    return (
        <div className="hero w-auto h-[80vh] bg-gray-500">
  <div className="hero-content flex justify-around lg:gap-44 gap-10 ">
    <img src={view.photo} className=" rounded-lg lg:w-full shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> {view.name} </h1>
      <p className="py-6 font-semibold text-xl text-black">{view.description} </p>
     <div className="flex gap-4  shadow-2xl">

     <h2 className="font-bold text-xl text-black rounded-lg btn-sm bg-sky-300 uppercase " >
       Marks:{view.marks}
       
      </h2>
      <h2 className="font-bold text-xl bg-orange-200 rounded-lg uppercase btn-sm "> {view.level} </h2>
     </div>
      <div className="flex mt-3 gap-4">
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<Link to={`/panding/${view._id}`}><button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Take Assement</button></Link>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-sky-300 gap-4">
  <form >
  <input type="text"  placeholder="pdf link" className="input mt-3 mb-3 input-bordered input-success w-full max-w-xs" />
  <input type="text" placeholder="comment" className="input input-bordered input-success w-full max-w-xs" />
    
      
        {/* if there is a button in form, it will close the modal */}
         <button className="btn btn-outline ml-3">OK</button>
      </form>
    
  </div>
</dialog>
      </div>
    </div>
  </div>
</div>
    );
};

export default ViewBtn;