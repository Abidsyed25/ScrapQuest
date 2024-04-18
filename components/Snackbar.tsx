"use client"
import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";


export default function Snackbar({state,setstate}:any){

  const handleCloseSnackbar = () => {
    setstate(() => null);
  }
     return <>
         <Toast className="fixed top-14 right-2 md:right-10">
         <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{state}</div>
        <Toast.Toggle />
      </Toast>
     </>
} 