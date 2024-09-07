import React from "react";
import Image from "next/image";
import Link from "next/link";
import Qidame from "./../../assets/QidameGebeya-1.png";
import Yeron from "./../../assets/Yeron1.png";
import Technolab from "./../../assets/Technolab5.png";
import Yeshi from "./../../assets/yeshi3.png";
import Hotel from "./../../assets/hotel98.png";
import Rental from "../../assets/CarRental6.png";

const page = () => {
  return (
    <div>
      <div className="h-full pt-3 pb-3 md:pt-0 md:pb-0 md:min-h-screen w-full bg-pint3 grid md:grid-cols-3 gap-4 place-items-center">
        <div className="w-4/5 md:h-96 h-72 bg-pint rounded-lg ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="h-2/3 w-4/5 rounded-lg">
              <Image src={Qidame} alt="Qidame" className="rounded" />
            </div>
            <div className="h-1/5 w-full flex flex-row ">
              <div className="w-2/4 h-full text-gray-900 flex items-center justify-center text-xl md:text-xl text-center ">
                <h1 className="flex items-center justify-center text-xl md:text-xl text-center">
                  Qidame Gebeya E-commerce Website
                </h1>
              </div>
              <Link href="../../components/qidame" className="w-2/5 h-full">
                <div className="w-full h-full bg-pint3 hover:text-pint4 hover:bg-pint2 rounded-xl flex items-center justify-center text-xl md:text-xl text-center ">
                  <h1 className="font-bold text-pint hover:text-pint4 ">
                    Show More
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-4/5 md:h-96 h-72 bg-pint rounded-lg ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="h-2/3 w-4/5 rounded-lg">
              <Image src={Yeron} alt="Yeron" className="rounded" />
            </div>
            <div className="h-1/5 w-full flex flex-row ">
              <div className="w-2/4 h-full text-gray-900 flex items-center justify-center text-xl md:text-xl text-center ">
                <h1 className="flex items-center justify-center text-xl md:text-xl text-center">
                  Yeron Landing Page Website
                </h1>
              </div>
              <Link href="./yeron" className="w-2/5 h-full">
                <div className="w-full h-full bg-pint3 hover:text-pint4 hover:bg-pint2 rounded-xl flex items-center justify-center text-xl md:text-xl text-center ">
                  <h1 className="font-bold text-pint hover:text-pint4 ">
                    Show More
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-4/5 md:h-96 h-72 bg-pint rounded-lg ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="h-2/3 w-4/5 rounded-lg">
              <Image src={Technolab} alt="Technolab" className="rounded" />
            </div>
            <div className="h-1/5 w-full flex flex-row ">
              <div className="w-2/4 h-full text-gray-900 flex items-center justify-center text-xl md:text-xl text-center ">
                <h1 className="flex items-center justify-center text-xl md:text-xl text-center">
                  Cloned Technolab <br /> website
                </h1>
              </div>
              <Link href="./techno" className="w-2/5 h-full">
                <div className="w-full h-full bg-pint3 hover:text-pint4 hover:bg-pint2 rounded-xl flex items-center justify-center text-xl md:text-xl text-center ">
                  <h1 className="font-bold text-pint hover:text-pint4 ">
                    Show More
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-4/5 md:h-96 h-72 bg-pint rounded-lg ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="h-2/3 w-4/5 rounded-lg">
              <Image src={Yeshi} alt="Yeshi" className="rounded" />
            </div>
            <div className="h-1/5 w-full flex flex-row ">
              <div className="w-2/4 h-full text-gray-900 flex items-center justify-center text-xl md:text-xl text-center ">
                <h1 className="flex items-center justify-center text-xl md:text-xl text-center">
                  Simple movies link <br /> website
                </h1>
              </div>
              <Link href="./yeshi" className="w-2/5 h-full">
                <div className="w-full h-full bg-pint3 hover:text-pint4 hover:bg-pint2 rounded-xl flex items-center justify-center text-xl md:text-xl text-center ">
                  <h1 className="font-bold text-pint hover:text-pint4 ">
                    Show More
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-4/5 md:h-96 h-72 bg-pint rounded-lg ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="h-2/3 w-4/5 rounded-lg">
              <Image src={Hotel} alt="hotel" className="rounded" />
            </div>
            <div className="h-1/5 w-full flex flex-row ">
              <div className="w-2/4 h-full text-gray-900 flex items-center justify-center text-xl md:text-xl text-center ">
                <h1 className="flex items-center justify-center text-xl md:text-xl text-center">
                  Simple Hotel
                </h1>
              </div>
              <Link href="./hotel" className="w-2/5 h-full">
                <div className="w-full h-full bg-pint3 hover:text-pint4 hover:bg-pint2 rounded-xl flex items-center justify-center text-xl md:text-xl text-center ">
                  <h1 className="font-bold text-pint hover:text-pint4 ">
                    Show More
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-4/5 md:h-96 h-72 bg-pint rounded-lg ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="h-2/3 w-4/5 rounded-lg">
              <Image src={Rental} alt="hotel" className="rounded" />
            </div>
            <div className="h-1/5 w-full flex flex-row ">
              <div className="w-2/4 h-full text-gray-900 flex items-center justify-center text-xl md:text-xl text-center ">
                <h1 className="flex items-center justify-center text-xl md:text-xl text-center">
                  Car Rental app
                </h1>
              </div>
              <Link href="./rental" className="w-2/5 h-full">
                <div className="w-full h-full bg-pint3 hover:text-pint4 hover:bg-pint2 rounded-xl flex items-center justify-center text-xl md:text-xl text-center ">
                  <h1 className="font-bold text-pint hover:text-pint4 ">
                    Show More
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
