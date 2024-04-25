

const Footer = () => {
  return (
    <>
    <div className="bg-black  text-[#4d4d4d] h-screen">
      <div className="container  sm:w-[70%] w-[90%] mx-auto sm:py-12 py-8 sm:text-xl font-semibold">
       <div>
        <h1 className="sm:text-xl font-semibold ">Questions? Call 000-800-919-1694</h1>
        </div>
        <div className=" grid sm:grid-cols-4 grid-cols-1 sm:mt-5 mt-3   ">
            <div className=" w-fit  ">
                <ul className="space-y-4">
                <li className="underline">FAQ</li>
                <li className="underline">Investor Relations</li>
                <li className="underline">Privacy</li>
                <li className="underline">Speed Test</li>   
                </ul>
              
            </div>
            <div className=" w-fit">
            <ul className="space-y-4">
                <li className="underline">Help Centre</li>
                <li className="underline">Jobs</li>
                <li className="underline">Cookie Preferences</li>
                <li className="underline">Legal Notices </li>   
                </ul>
            </div>
            <div className=" w-fit">
            <ul className="space-y-4">
                <li className="underline">Account</li>
                <li className="underline">Ways to Watch</li>
                <li className="underline">Corporate Information</li>
                <li className="underline">Only on Netflix</li>   
                </ul>
                </div>
            <div className=" w-fit">
            <ul className="space-y-4">
                <li className="underline">Media Centre</li>
                <li className="underline">Terms of Use</li>
                <li className="underline">Contact Us</li>
                
                </ul>
                </div>
        </div>
        <div>
        <select className="border-2  mt-12 gap-2 px-4 py-2 bg-transparent rounded-lg font-semibold">
                <option className=" text-black"> English</option>
                <option className=" text-black"> Hindi</option>
              </select>
              <p className="my-6">Netflix India</p>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Footer
