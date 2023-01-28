import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
   <div>
  <Component {...pageProps} />
  <Footer />
  </div>
  );
}
