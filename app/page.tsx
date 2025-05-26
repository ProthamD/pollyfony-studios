import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
            <main className="relative bg-black-100 flex flex-col justify-center items-center  mx-auto sm:px-10 px-5 overflow-clip w-full">
          <div className="w-screen">
           

              <Hero />

              </div>

    
        </main>
  );
}
