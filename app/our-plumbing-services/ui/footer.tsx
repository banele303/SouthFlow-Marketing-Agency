import Link from "next/link";
import Logo from "./Logo";


export default function Footer() {
    return (
        <div className="dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] ">
            <footer className="footer p-10 ">
                <aside className="flex flex-row gap-[-1rem]">
                <Logo/>
                    <p className="text-slate-200 mt-5">Burgeon Plumbing<br />Providing reliable tech since 2021</p>
                
               
                </aside>
                <nav className="flex flex-col">
                    <h6 className="footer-title text-semibold text-slate-200 text-[17px] ">Gotcha Plumbing</h6>
                    <a className="link link-hover text-slate-400">Home</a>
                    <a className="link link-hover text-slate-400">About Us</a>
                    <a className="link link-hover text-slate-400">Services</a>
                    <a className="link link-hover text-slate-400">Geyser Installation</a>
                </nav>
                <nav>
                    <h6 className="footer-title  text-slate-200 text-[19px]">Services</h6>
                    <a className="link link-hover text-slate-400">Emergency Plumbing</a>
                    <a className="link link-hover text-slate-400">Geyser Installation</a>
                    <a className="link link-hover text-slate-400">Drains</a>
                    <a className="link link-hover text-slate-400">All plumbing services</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-slate-200 text-[19px]">Legal</h6>
                    <a className="link link-hover text-slate-400">Terms of use</a>
                    <a className="link link-hover text-slate-400">Privacy policy</a>
                    <a className="link link-hover text-slate-400">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer items-center p-4 ext-neutral-content">
  <aside className="items-center grid-flow-col">

    <p className="text-slate-200 mr-3">Build and created by <span className="text-blue-600"> <Link href='/southflowagency.co.za'>SouthFlow Marketing Agency</Link></span>© 2024 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a>
   
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </nav>
</footer>
        </div>
    )
}
