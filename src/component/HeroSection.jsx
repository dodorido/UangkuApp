import HitungModal from '../HitungModal';
import statistik from '../assets/statistik.mp4'
import uang from '../assets/uang.mp4'
import { Link } from "react-router-dom";
 export const HeroSection = () => {
   return (
     <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h10 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide">
            <span className="bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">
            UANGKU  
            </span>
                {"  "}Kelola Pengeluaran Anda dengan Mudah dan Efisien!
        </h10>
        <h10>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Aplikasi pencatatan pengeluaran yang membantu Anda melacak dan menganalisis keuangan pribadi, sehingga Anda dapat membuat keputusan keuangan yang lebih baik.
            </p>
            <div className="flex justify-center my-10">
            <Link
                      to="/uangku" // Rute tujuan
                      className="bg-gradient-to-r from-green-500 to-green-700 py-3 px-4 mx-3 rounded-md text-white"
                    >
                      Mulai
            </Link>
            </div>
        </h10>
        <div className="flex mt-10 justify-center gap-4">
          <video autoPlay loop muted className="rounded-lg w-1/2 border-green-800 shadow-green-300 mx-2 my-4" >
           <source src={statistik} type="video/mp4"/> 
           Your browser does not support video tag
          </video>
          <video autoPlay loop muted className="rounded-lg w-1/2 border-green-800 shadow-green-300 mx-2 my-4" >
           <source src={uang} type="video/mp4"/> 
           Your browser does not support video tag
          </video>
        </div>
     </div>
   )
 }
 export default HeroSection;