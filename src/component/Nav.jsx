import React from 'react'
import giminilogo from "../assets/gimini/giminilogo.png"
import { BiSolidGrid } from "react-icons/bi";
import Hari from "../profile/Hari.png"


export default function Nav() {
  return (
  <>
 <div>
 <ul className='absolute right-0 mt-6 me-7 '>
    <li className='inline mx-2 bg-gray-200 px-5 py-3 rounded-2xl'><img src={giminilogo} className='w-7 inline-block pe-2'  /><span className='font-[300] rounded-2xl text-[15px] '>Developed By Hari</span></li>
    <li className='inline mx-2'><i class="fa-solid fa-folder-open"></i></li>
    <li className='inline mx-2'> <i class="fa-solid fa-ellipsis-vertical"></i></li>
    <li className='inline mx-2'><img src={Hari} className='w-10 inline rounded-full' /></li>
  </ul>
 </div>
  </>
  )
}
