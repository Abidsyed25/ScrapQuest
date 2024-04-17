import { Blockquote } from "flowbite-react";

export default function Hero() {
    return <>
     <div className="h-5/6 flex flex-col justify-center items-center ">
        <div>


        <Blockquote className="text-center my-10">
            Unlock insights from the web with our powerful web scraper
        </Blockquote>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Type a website url</label>
            <input type="text" id="success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 mb-5" placeholder="https://www.example.com"/>
             
<button type="button" className="block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto">Download now</button>
        </div>
        </div>
     </div>

    </>
}