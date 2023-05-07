import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
// import "tw-elements/dist/css/tw-elements.min.css
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="blue" />
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
