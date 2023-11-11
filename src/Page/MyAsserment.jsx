import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
// import Addasssermnt from "../Component/Addasssermnt";
// import Swal from "sweetalert2";

const MyAsserment = () => {
  const myasserment = useLoaderData();
  console.log(myasserment);

  const [lodeuser, setLodeuser] = useState(myasserment);
  const handelDelet = (_id) => {
    console.log("delet", _id);
    axios.delete(
        `https://online-grup-study-server.vercel.app/users/${_id}`,
      )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          toast.success("Successfully delete");
          const remaining = lodeuser.filter((user) => user._id !== _id);
          setLodeuser(remaining);
        }
      });
  };

  return (
    <div>
      <div className="md:p-16 mt-8 grid lg:grid-cols-3 gap-4 lg:gap-6 md:gap-6 md:grid-cols-2 grid-cols-1">
        {myasserment.map((myasserment) => (
          <div key={myasserment._id}>
            <div className="card lg:w-96 w-72 md:gap-5 h-72 shadow-xl">
              <figure>
                <img src={myasserment.photo} alt="Shoes" className="w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{myasserment.name}</h2>
                <p> {myasserment.description} </p>
                <div className="flex justify-between">
                  <h3>{myasserment.level} </h3>
                  <h3>marks:{myasserment.marks} </h3>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/view/${myasserment._id}`}>
                    <button className="badge py-3 bg-green-300 badge-outline">
                      view
                    </button>
                  </Link>
                  <Link to={`/update/${myasserment._id}`}>
                    <button className="badge py-3 bg-green-300 badge-outline">
                      Update
                    </button>
                  </Link>
                  <div
                    onClick={() => handelDelet(myasserment._id)}
                    className="badge py-3 bg-orange-400 badge-outline"
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAsserment;
