import { useLoaderData, } from "react-router-dom";

const MyconfarmCard = () => {

const mycard = useLoaderData()
console.log(mycard)

    return (
        <div className="hero min-h-screen h-screen w-[40%] mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={mycard.photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{mycard.name}</h1>
            <p className="py-6">{mycard.description} </p>
            <button className="btn btn-primary"> {mycard.marks}</button>
           
          </div>
        </div>
      </div>
   
    );
};

export default MyconfarmCard;