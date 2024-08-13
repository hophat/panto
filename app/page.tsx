import Header from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between min-[550px]:p-8 max-[550px]:p-4" >
      <div className="lg:container z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <Header></Header>
      </div>
      <div className="lg:container z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <Section></Section>
      </div>
      
    </main>
  );
}
