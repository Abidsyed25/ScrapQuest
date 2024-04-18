import { Blockquote } from "flowbite-react";
import Form from "./Form";
import Snackbar from "./Snackbar";


export default function Hero() {
    return <>
   

        <div className="h-5/6 flex flex-col justify-center items-center">
            <div>


                <Blockquote className="text-center my-10">
                    Unlock insights from the web with our powerful web scraper
                </Blockquote>
                <Form/>
            </div>
        </div>
        


    </>
}