'use client'

import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {

  const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
  const [index,setIndex] = useState(0);
  const router = useRouter();

  const {data:session} = useSession()
  console.log(session?.user?.token)
  return (
    <div className={styles.banner} onClick={()=>{
      setIndex((index+1)%4);
    }}>
        <Image
            src={covers[index]}
            alt='cover'
            fill
            priority
            className="object-cover" />
            {
              session?<div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">Welcome {session.user?.name}</div>:null
            }
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>Seamless Venues, Effortless Events!</h3>
            </div>
            <button className="bg-white text-cyan-700 border-4 border-cyan-900 font-semibold py-2 px-2 m-2 rounded-xl z-30 absolute bottom-0 right-0
              hover:bg-cyan-600 hover:text-white hover:border-transparent" 
              onClick={(e)=>{
                e.stopPropagation();
                router.push('/venue');
              }}>
              Select Venue
            </button>
    </div>
  );
}