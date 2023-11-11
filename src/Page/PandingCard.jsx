import { Link, useLoaderData } from "react-router-dom";


const PandingCard = () => {
    const panding = useLoaderData();
    return (
        <div className="overflow-x-auto bg-gray-400 mt-12 p-6 h-[30vh] ">
  <table className="table">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>photo</th>
        <th>name</th>
        <th>email</th>
        <th>price</th>
        <th>date </th>
        <th> marks </th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={panding.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {panding.name}
          <br/>
        </td>
        <td>{panding.email}</td>
       
        <th>
          <button className="btn btn-ghost btn-xs">{panding.marks}</button>
         
        </th>
        <th> <td>{panding.date}</td></th>
        <th> <td>{panding.marks}</td></th>

        <th> <Link to={`/myconfarmcard/${panding._id}`}><button className="btn btn-outline bg-blue-400 "> PLEASE CONFARME </button></Link> </th>
        <th> <Link to={"/marks"}><button className="btn btn-outline bg-green-300 "> GIVE MARK </button> </Link></th>


      </tr>


    </tbody>
  </table>
</div>
    );
};

export default PandingCard;
