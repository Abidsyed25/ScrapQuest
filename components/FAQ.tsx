"use client"
import { useRouter } from "next/navigation";

export default function FAQButton() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/faq');
  };
  
  return (
    <button 
      onClick={handleNavigation} 
      type="button" 
      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-1 mr-2">
      FAQ
    </button>
  );
}
