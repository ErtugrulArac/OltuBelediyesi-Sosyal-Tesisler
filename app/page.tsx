import Image from "next/image";
import Main from "@/components/main/index"
import About from "@/components/about/index"
import Bg from "@/components/bg/index"
import Question from "@/components/question/index"
import Counter from "@/components/counter/index"
import Gif from "@/components/gif/index"
import Resim from "@/components/image/index"

export default function Home() {
  return (
    <main  >
      <Main />
      <About />
      <Bg />
      <Question />
      <Resim />

      <Gif />
      <Counter />
    </main>
  );
}
