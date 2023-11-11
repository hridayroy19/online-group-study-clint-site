
import Banner from "../Component/Banner";
import Faq from "../Component/Faq";
import Future_section from "../Component/Future_section";
import Process from "../Component/Process";


const Home = () => {
    return (
        <>
        <div  className=" w-full max-w-[1230px] mx-auto ">
            <Banner></Banner>
            <Future_section></Future_section>
            
           <div className=" w-full max-w-[1000px] mx-auto " >
           <Faq></Faq>
           </div>

           
        </div>
      <Process></Process>

        </>
    );
};

export default Home;