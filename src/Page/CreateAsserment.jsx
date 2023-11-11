import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const CreateAsserment = () => {

  const { user}=useContext(AuthContext)


  const handelAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const level = form.level.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const photo = form.photo.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.Price.value;
    const newproduct = {
      name,
      level,
      description,
      marks,
      photo,
      date,
      email,
      price,
    };
    console.log(newproduct);

    fetch('  https://online-grup-study-server.vercel.app/users',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(newproduct)
    })
    .then(res => res.json())
    .then( data =>{
      console.log(data);
      if (data.insertedId){
        toast.success(' Asserment Create Successfully!')
        form.reset();
      }

    

    })

  };

  return (
    <div  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <form onSubmit={handelAddProduct}>
        <div className="text-center bg-[#F4F3F0] p-10 mb-14 mt-11 ">
          <h2 className="text-2xl font-bold"> Add Asserment </h2>

          {/* fomre name  row */}
          <div className="md:flex  justify-center gap-4">
            <div className="form-control w-1/3 ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/3 ">
              <label className="label">
                  <span className="label-text"> level</span>
                </label>
                <label className="input-group">
                  <input type="text"
              placeholder="level"  name="level" className="input input-bordered bg-white text-black w-full "
              
              />
                </label>
            </div>
          </div>
          <div className="md:flex justify-center gap-4">
            <div className="form-control w-1/3 ">
              <label className="label">
                <span className="label-text">date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  placeholder="date"
                  name="date"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/3 ">
              <label className="label">
                <span className="label-text">photo url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  name="photo"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>
          </div>
          {/* category */}
          <div className="md:flex justify-center gap-4">
            <div className="form-control w-1/3 ">
              <label className="label">
                <span className="label-text"> description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Short description"
                  name="description"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/3  ">
              <label className="label">
                <span className="label-text">marks</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="marks"
                  name="marks"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="md:flex justify-center gap-4">
            <div className="form-control w-1/3 ">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  name="email"
                  className="input input-bordered  bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/3  ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  name="Price"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>
          </div>

{/*  */}
          <div className="mt-4 ">
            <input
              type="submit"
              value="submite"
              className="btn btn-group bg-slate-600 w-80 text-black"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAsserment;
