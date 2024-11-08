import Herosection from "@/components/Herosection"
import Service from "@/components/Service"
import Getintouch from "@/components/Getintouch"
import Reviews from "@/components/Reviews"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Back from "@/components/Back"

export default function Home() {
  return (
    <>
    <Navbar/>
    {/* <Herosection/> */}
    <Back/>
    <Service/>
    <Getintouch/>
    <Reviews/>
    <Footer/>
    </>
  );
}
