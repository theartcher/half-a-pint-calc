import { Inter } from "next/font/google";
import CalcComponent from "@/components/calculation-component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="bg-yellow-100 flex h-screen flex-col items-center justify-center">
        <div className=" text-indigo-600">
          Hoeveel godverdomme halve pinten zitten daarin?
        </div>
        <br />
        <CalcComponent />
      </div>
    </main>
  );
}
