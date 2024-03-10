import { ButtonCallToAction } from "./button-call-to-action";
import { BookCallAppointment } from "./form";


export default function ContactInfo() {
    return (
        <div className="py-[4rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 px-[2rem] md:px-[4rem]">


                <div className="flex flex-col gap-3">

                    <h3 className="text-[20px]  md:text-2xl    md:pt-[2rem] text-blue-500">
                        Connect Instantly With A Professional Plumber
                    </h3>


                    <p className="mb-6 text-[13px] md:text-[17px]  text-slate-800 text-xl   mt-6 ">
                        Our experts are here to help, whether you need emergency services or a no-risk estimate.
                    </p>

                    <h3 className=" text-[20px]  md:text-2xl    text-blue-500">
                    Risk Free
                    </h3>


                    <p className="text-[16px] md:text-[17px]  text-slate-800 text-xl">
                    We provide our pricing upfront, no surprise charges or hidden costs.
                    </p>
                    <h3 className="text-[20px]  md:text-2xl   text-blue-500">
                    Fast Emergency Service
                    </h3>


                    <p className="text-[16px] md:text-[20px] font-semibold text-slate-800 text-xl">
                    Our network of local professionals is ready to help, 24/7.
                    </p>
<div className="md:max-w-[23rem] mt-6 md:mt-1"><ButtonCallToAction/></div>
                    
                </div>
                <div className="mt-[4rem] md:mt-2">
                    <BookCallAppointment/>
                </div>
            </div>
        </div>
    )
}