/* eslint-disable react/prop-types */


const Addasssermnt = ({myasserments}) => {
    const { _id, name,photo,description,marks, level}=myasserments || {}

    const handelDelet =(_id) =>{
        console.log(_id)
    }

    return (
        <div>
                <div className="card lg:w-96 w-72 md:gap-5 h-72 shadow-xl">
                <figure><img src={photo} alt="Shoes" className="w-full" /></figure>
                <div className="card-body">
                  <h2 className="card-title"> 
                    {name}
                  
                  </h2>
                  <p>  {description} </p>
                  <div className="flex justify-between">
                  <h3>{level}  </h3>
                  <h3>marks:{marks}  </h3>
                  </div>
                  <div className="card-actions justify-end">
                    <div className="badge py-3 bg-green-300 badge-outline">Update</div> 
                    <div onClick={handelDelet} className="badge py-3 bg-orange-400 badge-outline">Delete</div>
                  </div>
                </div>
              </div>
                </div>
    );
};

export default Addasssermnt;