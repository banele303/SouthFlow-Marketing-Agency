import { Mateors } from "./utils/under-process";

const data = [
  {
    title: "Marketing",
    description:
      "Getting your markets attention, generating leads, appointments, and hot prospects ready to buy.",
  },
  {
    title: "Lead Nurturing",
    description:
      "We nuture the leads for you using our system that genarete over a 70% show up rate on all generated leads",
  },
  {
    title: "Data reactivation",
    description:
      "By launching your first proprietary DR campaign, you can generate 50-500 top-tier appointments at no cost.",
  },
  {
    title: "Sales",
    description:
      "On the first appointment, you'll engage with prospects, employ ethical persuasion techniques, address any concerns or objections they may have,",
  },
  {
    title: "Problem solving",
    description:
      "Learn to sharpen your thinking skills, quickly solve problems, and accurately predict the outcomes of ten future moves ahead.",
  },
  {
    title: "Funnels",
    description:
      "We create website and landing page without any other addition fees",
  },
  {
    title: "Scaling ",
    description:
      "How to scale from 10 - 30 new patients a month to 100 new patients a month at breakneck speed with systems/automation",
  },
  {
    title: "Operations",
    description:
      "How to manage your entire machine, systemize, optimize for efficiency, leverage technology.",
  },
  {
    title: "Facebook Ads",
    description:
      "We run ads that have been proven to have high ROI for our gym clients",
  },
  {
    title: "Youtube& TickTok",
    description:
      "When you are ready to hangle 90 + or multiple location not recommended for small gyms ",
  },
  {
    title: "PPC",
    description:
      "We can optimise your PPC ads that are already running or starting one but we dont recommend as it is not scalable",
  },
];

export default function Process() {
  return (
    <div className="w-full dark:bg-white bg-black pt-[-4rem] pb-[3rem] dark:bg-dot-black/[0.2] bg-dot-white/[0.2]">
      <h2 className="md:text-center  font-Poppins text-xl md:text-[35px] pt-[10rem] text-white font-bold">
        We use the following Strategies to Grow your business
      </h2>

      <p className="md:text-center  font-Poppins text-xl md:text-xl pt-[2rem] text-blue-500 ">
        We Set everything you need to generate Leads or new Appointments today,
        tomorrow, in the future, and against any storm.
      </p>

      <h3 className="text-2xl font-bold pt-[3rem] text-center font-Poppins text-slate-400 mb-4">
        This Is How Our Marketing System Can Help you
      </h3>
      <div className="flex flex-col  justify-center items-center  mx-auto pt-[3rem] px-[1rem]">
        <div className="text-center"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mx-auto">
          {data.map((card, index) => (
            <>
              <div key={index} className="h-[40rem] w-80 md:w-[21rem] mb-[-16rem] mx-auto">
                <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-x bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>

                    <h3 className="font-bold text-xl text-white mb-4 relative z-50">
                      {card.title}
                    </h3>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      {card.description}
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                      I want More Clients
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Mateors number={10} />
                  </div>
                </div>
              </div>
            </>

            /*

<div
            key={index}
            className="bg-slate-900  rounded-lg overflow-hidden w-80 md:w-72 mx-auto"
          >
            
            <div className="py-4 px-6">
              <h3 className="text-lg font-semibold mb-2  font-Poppins text-slate-300 text-[19px]">{card.title}</h3>
              <p className="text-slate-400 font-Poppins text-[16px]">{card.description}</p>
            </div>
          </div>
</>




*/
          ))}
        </div>
      </div>
    </div>
  );
}
