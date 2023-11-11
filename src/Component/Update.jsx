import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const lodeData = useLoaderData();



  const handelUpdatedProduct = (event) => {
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
    const update ={ name,
        level,
        description,
        marks,
        photo,
        date,
        email,
        price,
    };
    console.log(update);

fetch(`  https://online-grup-study-server.vercel.app/users/${lodeData._id}`,{ 
    method : 'PUT',
    headers : {
        'content-type': 'application/json'
    },
    body: JSON.stringify(update)
})

.then(res => res.json())
.then(data =>{
    console.log(data)
    if(data.modifiedCount > 0){
        toast.success('Successfully Update!')

    }
})




  }


  return (
    <div  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <form onSubmit={handelUpdatedProduct}>
        <div className="text-center bg-[#F4F3F0] p-10 mb-14 mt-11 ">
          <h2 className="text-2xl font-bold"> Update Asserment </h2>

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
                  defaultValue={lodeData.name}
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
                <input
                  type="text"
                  placeholder="level"
                  defaultValue={lodeData.level}
                  name="level"
                  className="input input-bordered bg-white text-black w-full "
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
                  defaultValue={lodeData.date}
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
                  defaultValue={lodeData.photo}
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
                  defaultValue={lodeData.description}
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
                  defaultValue={lodeData.marks}
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
                  name="email"
                  defaultValue={lodeData.email}
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
                  defaultValue={lodeData.price}
                  name="Price"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>
          </div>
          <div className="mt-4 ">
            <input
              type="submit"
              value="submit"
              className="btn btn-group bg-slate-600 w-80 text-black"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
