import Image from "next/image";
import Kidus from "./assets/kidus.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" ">
        <div className="h-full md:h-screen w-full bg-pint3 flex justify-center items-center">
          <div className="flex w-full md:flex-row flex-col pb-2 md:pb-0">
            <div className="w-full md:w-1/2 h-3/4 pb-5 md:pb-0 md:h-auto">
              <Image
                src={Kidus}
                alt="Kidus"
                className="w-full rounded-b-full"
              />
            </div>
            <div className="flex flex-col justify-center pt-2 text-xl md:text-4xl gap-3 text-gray-800 font-bold items-center md:w-1/2">
              <h1 className="text-center">My name is Kidus Zekarias</h1>
              <h1 className="text-center">I am a Software Developer</h1>
              <Link href="./components/personalinfo">
                <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 border-pint3 hover:border-pint4 hover:before:[box-shadow:_20px_20px_20px_30px_#5E98DE] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-pint relative bg-pint2 h-16 w-64 border text-left p-3 text-gray-800 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-pint before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-pint3 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
