import Image from "next/image";
import Navbar from "@/components/navbar/index"
import Main from "@/components/main/index"
import About from "@/components/about/index"
import Bg from "@/components/bg/index"
import Question from "@/components/question/index"
import Counter from "@/components/counter/index"
import Footer from "@/components/footer/index"

export default function Home() {
  return (
    <main  >
      <Navbar/>
      <Main/>
      <About/>
      <Bg/>
      <Question/>
      <Counter/>
      <Footer/>
    </main>
  );
}
