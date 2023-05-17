import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
// import "tw-elements/dist/css/tw-elements.min.css
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="blue" options={{ showSpinner: false }} />
      <div className={`${poppins.className} flex flex-col justify-between min-h-screen`}>
        <div className="">
          <Navbar />
          <Sidebar />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
