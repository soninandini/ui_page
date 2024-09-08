import Image from "next/image";
import Header from "./components/Header";
import "./globals.css"
import Section from "./components/Section";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";
import Section_5 from "./components/Section_5";
import Section_6 from "./components/Section_6";
export default function Home() {
  return (
       <>
       <Header/>
       <Section/>
       <Section_2/>
       <Section_3/>
       <Section_4/>
        <Section_5/>
        <Section_6/>
       </>
  );
}
