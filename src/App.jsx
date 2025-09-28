
import { Suspense } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import PricingCardContainer from "./pricing/PricingCardContainer";

const pricePromise = () => {
  return fetch('./pricing.json')
  .then(res => res.json())
}
const pricePromiseData = pricePromise()


function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<h3>Loading.....</h3>}>
    <PricingCardContainer pricePromiseData={pricePromiseData}></PricingCardContainer>

    </Suspense>
     
    </>
  );
}

export default App;
