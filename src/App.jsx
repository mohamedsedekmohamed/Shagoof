import ShagoofLandingPage from "./ShagoofLandingPage"

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
const App = () => {

useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
  });
}, []);
  return (
<ShagoofLandingPage/>
  )
}

export default App