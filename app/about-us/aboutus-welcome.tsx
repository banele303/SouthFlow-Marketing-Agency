
export default function AboutUswelcome() {

  return (
    <div className="dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] px-[2rem] md:px-[8rem]">
      <div className="w-full h-[280px]  md:h-[400px] rounded-b-[10%]">
        <h3 className="text-center font-Poppins text-2xl md:text-5xl pt-[-8rem] md:pt-[8rem] leading-9 text-white font-bold">
          More than just a Elite Plumber - Burgeon Plumbing
        </h3>
      </div>

      <div className="flex flex-col justify-center px-4  md:px-[4rem]">
        <button className="bg-slate-800 no-underline group md:w-[26rem] mt-[-10rem] md:mt-[-10rem] items-center mx-auto cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-4 ring-1 ring-white/10 ">
            <span className="text-[16px] mx-auto text-center">
              Get A FREE QUOTE
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <h3 className="text-slate-300 mt-[4rem] md:text-[20px] px-[.5rem] pb-[2rem]  leading-9">
          Undertaking plumbing tasks such as repairs, installations,
          and replacements without the necessary professional skills or experience can be hazardous.
          Errors during these tasks can lead to concealed leaks, which
          can consume valuable time and resources in the future.

          By choosing to use the services of skilled and certified plumbers, you not only
          save money but also gain peace of mind. You can be confident that your plumbing system
          is in good hands and consistently meets the required standards
        </h3>


        <h2 className="font-Poppins text-xl md:text-[35px] pt-[2rem] text-white font-bold">
        All Burgeon Plumbers are Qualified and the best at what <br/><br/> they do.
        </h2>

        <p className="font-Poppins text-xl md:text-xl pt-[2rem] text-slate-400 ">
        Burgeon Plumbers offers an extensive array of Plumbing Services in Elite. If you&apos;re in search of the most affordable plumber in Elite, your search ends here.
        <br />
          <br />
Burgeon Plumbers operates around the clock to ensure all your plumbing requirements are met. We provide a wide range of plumbing services.

Whether it&apos;s Plumbing Repairs or Plumbing Installations in Elite, we&apos;re always ready to assist, regardless of the time of day. Whenever you need a plumber in Elite, we always have a Plumber on standby.
<br />
          <br />
          I firmly believe that it is our responsibility to earn your business.
          Month-after-month.
         
        </p>
      </div>
    </div>
  )
}
