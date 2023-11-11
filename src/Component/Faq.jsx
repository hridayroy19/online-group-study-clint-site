import { BsFillChatSquareFill, BsFillEnvelopeFill, BsFillTelephoneFill} from "react-icons/bs";

const Faq = () => {
    return (
        <div className=" grid md:grid-cols-2 mt-12 grid-cols-1 ">
            <div className=" ml-16 mb-3 lg:ml-1" >
                <h2 className=" font-bold text-2xl">Ask Our Team</h2>
                 <p className=" mt-2 font-semibold"> Want to contact us directly? No problem. <br />
                  We are always here for you.</p>

                  <div className="avatar-group mt-6 -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/LzWxcQc/assignment-helps-fbdf10d1.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/7zn0Gc0/editing-help-service-d5ba1cce.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/8NSMWkR/every-student-ment-f7a30282.webp" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>  
<div className="mt-9">
    <div className="flex items-center gap-2">
    <BsFillTelephoneFill></BsFillTelephoneFill>
    <p className="  font-bold">  0177770077</p>
         
    </div>
    <div className="flex items-center gap-2">
        <BsFillEnvelopeFill></BsFillEnvelopeFill>
        <h2>hrhridoyroy@gmail.com </h2>
    </div>
    

    <button className="btn mt-6 bg-green-500 btn-outline btn-secondary"> <span><BsFillChatSquareFill></BsFillChatSquareFill></span> Start Live chart</button>

</div>

</div>



            <div>

<h2 className=" font-bold text-2xl  mb-3">
Frequently Asked Questions
</h2>

<div className="collapse mt-5 mb-3 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Is Studybay legit?
  </div>
  <div className="collapse-content"> 
    <p>Studybay is absolutely legit. We know it’s hard to trust 
There are more than 3 million students and 50,000 verified experts from over 100 countries registered </p>
  </div>
</div>
<div className="collapse mb-3 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How does Studybay use and store my personal data?
  </div>
  <div className="collapse-content"> 
    <p>Using Studybay is absolutely safe. We care about security, therefore we encrypt all personal data to make every user feel safe while using Studybay and we dont share any personal information with any third parties without your permission.</p>
  </div>
</div>
<div className="collapse mb-3 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How does Studybay use and store my personal data?
  </div>
  <div className="collapse-content"> 
    <p>Using Studybay is absolutely safe. We care about security, therefore we encrypt all personal data to make every user feel safe while using Studybay and we dont share any personal information with any third parties without your permission.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Is Studybay reliable?
  </div>
  <div className="collapse-content"> 
    <p>Studybay is absolutely reliable, in fact, its commonly used by the students of the worlds top universities. Our processes are very transparent so you can see the final price right after you fill your project request form. We don’t charge any hidden fees or anything like that, and you know the final price right from the start. But if you’re still hesita</p>
  </div>
</div>

            </div>
        </div>
    );
};

export default Faq;