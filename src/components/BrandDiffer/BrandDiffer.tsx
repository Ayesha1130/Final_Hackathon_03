import React from "react";
import { CiDeliveryTruck, CiCircleCheck } from "react-icons/ci";
import { MdOutlinePriceChange } from "react-icons/md";
import { PiFlowerTulip } from "react-icons/pi";

const BrandDiffer = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center text-xl mb-10">
        What makes our brand different
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-9 gap-5 mb-20 p-8 ">
        <div className="bg-[#F9F9F9] border w-[250px] h-[220px] p-10">
          <div className="">
            <CiDeliveryTruck />
            <h2>Next day as standard</h2>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
        </div>
        <div className="bg-[#F9F9F9] border w-[250px] h-[220px] p-10">
          <div>
            <CiCircleCheck />
            <h2>Made by true artisans</h2>
            <p>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
        </div>
        <div className="bg-[#F9F9F9] border w-[250px] h-[220px] p-10">
          <div>
            <MdOutlinePriceChange />
            <h2>Unbeatable prices</h2>
            <p>
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
        </div>
        <div className="bg-[#F9F9F9] border w-[250px] h-[220px] p-10">
          <div>
            <PiFlowerTulip />
            <h2>Recycled packaging</h2>
            <p>
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDiffer;
