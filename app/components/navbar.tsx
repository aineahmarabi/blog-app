'use client'
import Link from "next/link"
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Navbar(){
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [currentDate, setCurrentDate] = useState("");

   useEffect(() => {
       const date = new Date();
       const options: Intl.DateTimeFormatOptions = { 
           year: 'numeric' as const,
           month: 'long' as const,
           day: 'numeric' as const
       };
       setCurrentDate(date.toLocaleDateString('en-US', options));
   }, []);

   return(
       <div className="px-4 md:px-10 relative bg-white">
           <div className="hidden md:grid md:grid-cols-3 items-center border-b border-black h-24 bg-white">
               {/* Blog Categories */}
               <ul className="md:flex space-x-10">
                   <li className="relative group">
                       <Link 
                           href="/?category=Mining" 
                           className="text-purple-800 hover:text-purple-950"
                       >
                           Mining
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                       </Link>
                   </li>
                   <li className="relative group">
                       <Link 
                           href="/?category=Mentorship" 
                           className="text-purple-800 hover:text-purple-950"
                       >
                           Mentorship
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                       </Link>
                   </li>
                   <li className="relative group">
                       <Link 
                           href="/?category=Faith" 
                           className="text-purple-800 hover:text-purple-950"
                       >
                           Faith
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                       </Link>
                   </li>
                   <li className="relative group">
                       <Link 
                           href="/?category=Travel" 
                           className="text-purple-800 hover:text-purple-950"
                       >
                           Travel
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                       </Link>
                   </li>
                   <li className="relative group">
                       <Link 
                           href="/?category=Reflections" 
                           className="text-purple-800 hover:text-purple-950"
                       >
                           Reflections
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                       </Link>
                   </li>
                   <li className="relative group">
                       <Link 
                           href="/?category=Relationships" 
                           className="text-purple-800 hover:text-purple-950"
                       >
                           Relationships
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                       </Link>
                   </li>
               </ul>

               {/* Centered Title */}
               <div className="text-center">
                   <Link href="/">
                       <h1 className="text-3xl font-bold text-purple-800 hover:text-purple-950">
                           JewelInTheMines
                       </h1>
                   </Link>
               </div>

               {/* Web Pages */}
               <div className="flex justify-end">
                   <ul className="flex space-x-10">
                       <li className="relative group">
                           <Link href="/about" className="text-purple-800 hover:text-purple-950">
                               About
                               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                           </Link>
                       </li>
                       <li className="relative group">
                           <Link href="/contact-us" className="text-purple-800 hover:text-purple-950">
                               Contact
                               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                           </Link>
                       </li>
                   </ul>
               </div>
           </div>

           {/* Mobile View */}
           <div className="md:hidden flex items-center justify-between border-b border-black h-24 bg-white">
               <FaBars 
                   className="cursor-pointer text-purple-800"
                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               />

               <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
                   <h1 className="text-2xl font-bold text-purple-800">
                       JewelInTheMines
                   </h1>
               </Link>
           </div>

           {/* Date and Author */}
           <div className="flex justify-between items-center py-2 text-sm text-gray-600 bg-white">
               <span>{currentDate}</span>
               <span>By <span className="italic text-purple-800">Imelda Nasubo</span></span>
           </div>

           {/* Mobile Side Menu */}
           <div 
               className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
                   isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
               }`}
           >
               <div className="p-4">
                   <button 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="text-3xl mb-6 text-purple-800 hover:text-purple-600"
                   >
                       &times;
                   </button>
                   <ul className="space-y-6">
                       <li>
                           <Link 
                               href="/?category=Mining" 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="block text-purple-800 hover:text-purple-600 font-medium"
                           >
                               Mining
                           </Link>
                       </li>
                       <li>
                           <Link 
                               href="/?category=Mentorship" 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="block text-purple-800 hover:text-purple-600 font-medium"
                           >
                               Mentorship
                           </Link>
                       </li>
                       <li>
                           <Link 
                               href="/?category=Travel" 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="block text-purple-800 hover:text-purple-600 font-medium"
                           >
                               Travel
                           </Link>
                       </li>
                       <li>
                           <Link 
                               href="/?category=Faith" 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="block text-purple-800 hover:text-purple-600 font-medium"
                           >
                               Faith
                           </Link>
                       </li>
                       <li>
                           <Link 
                               href="/?category=Relationships" 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="block text-purple-800 hover:text-purple-600 font-medium"
                           >
                               Relationships
                           </Link>
                       </li>
                       <li className="border-t border-gray-200 pt-6">
                           <Link 
                               href="/about" 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="block text-purple-800 hover:text-purple-600 font-medium"
                           >
                               About
                           </Link>
                       </li>
                       <li>
                           <Link 
                               href="/contact-us" 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="block text-purple-800 hover:text-purple-600 font-medium"
                           >
                               Contact
                           </Link>
                       </li>
                   </ul>
               </div>
           </div>

           {/* Overlay */}
           {isMobileMenuOpen && (
               <div 
                   className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                   onClick={() => setIsMobileMenuOpen(false)}
               />
           )}
       </div>
   );
}