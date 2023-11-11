
const Marks = () => {
    return (
        <div>
          
           <h1 className="items-center uppercase text-center mt-7 text-2xl font-bold"> please give marks</h1>
        <div className="flex justify-between items-center px-16">

            <div >
                   <img src="https://i.ibb.co/wrvxZwQ/Assessment.png" alt="" className="" />
            </div>

            <div>
<h2> give marks</h2>
<form > 
<input type="text"  placeholder="Marks" className="input input-bordered mb-3 input-info w-full max-w-xs" />
<br />

<input type="text" placeholder="Feed back" className="input input-bordered input-info w-full max-w-xs" />
</form>

            </div>
        </div>

        </div>
    );
};

export default Marks;