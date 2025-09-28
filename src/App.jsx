import { Suspense } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import "./App.css";
import Navbar from "./navbar/Navbar";
import PricingCardContainer from "./pricing/PricingCardContainer";

const pricePromise = () => {
  return fetch("./pricing.json").then((res) => res.json());
};
const pricePromiseData = pricePromise();
const studentData = [
  {
    "id": 1,
    "name": "Rahim",
    "math": 85,
    "bangla": 78,
    "english": 90
  },
  {
    "id": 2,
    "name": "Karim",
    "math": 72,
    "bangla": 88,
    "english": 80
  },
  {
    "id": 3,
    "name": "Ayesha",
    "math": 95,
    "bangla": 92,
    "english": 89
  },
  {
    "id": 4,
    "name": "Rafi",
    "math": 60,
    "bangla": 70,
    "english": 65
  },
  {
    "id": 5,
    "name": "Mina",
    "math": 88,
    "bangla": 85,
    "english": 92
  }
]


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <PricingCardContainer
          pricePromiseData={pricePromiseData}
        ></PricingCardContainer>
      </Suspense>

      <LineChart className="ml-5" width={500} height={500} data={studentData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
          <Line dataKey="bangla" stroke="black"></Line>
          <Line dataKey="english"></Line>
      </LineChart>
    </>
  );
}

export default App;
