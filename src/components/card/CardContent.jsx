import React from "react";
import { Bus, Clock, Home, MotoBike, User } from "../../assets/icon";
import { HaGiangTour1, OverCard } from "../../assets/img";

const CardContent = ({ img = HaGiangTour1 }) => {
  return (
    <div className="card w-[47.3125rem] h-[34.375rem] pb-[1.5rem] rounded-3xl relative">
      <div className=" w-full h-full">
        <img src={img} alt="" className="rounded-3xl" />
      </div>
      <div className="absolute bottom-0">
        <img src={OverCard} alt="" className="rounded-3xl" />
      </div>
      <div className="absolute top-[1.5rem] right-[1.5rem]">
        <div className="px-[0.75rem] py-[0.375rem] flex gap-x-[0.5rem] items-center border-solid backdrop-blur-sm bg-[rgba(255,255,255,0.2)] text-[1rem] rounded-[1.5rem]">
          <Clock></Clock>
          <span className="trip_font font-normal opacity-80">
            4 Days 5 Nights
          </span>
        </div>
      </div>
      <div className="absolute bottom-[1.66rem] left-[1.6rem]">
        <div className="trip_font text-[1.5rem] font-bold mb-[0.5rem] tracking-tight">
          Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
        </div>
        <div className="trip_font text-[1.5rem] font-bold flex">
          <Home></Home>
          <span className="trip_font text-[1rem] font-bold ml-[0.5rem]">
            Accomodation:
          </span>
          <span className="trip_font text-[1rem] tracking-[0.0125rem] font-normal opacity-90 ml-[0.25rem]">
            Phòng Doom
          </span>
        </div>
        <div className="trip_font text-[1.5rem] font-bold flex -ml-1">
          <MotoBike></MotoBike>
          <span className="trip_font text-[1rem] font-bold ml-[0.5rem]">
            Motorbike::
          </span>
          <span className="trip_font text-[1rem] tracking-[0.0125rem] font-normal opacity-90 ml-[0.25rem]">
            Xe Wave, Vision
          </span>
        </div>
        <div className="trip_font text-[1.5rem] font-bold flex -ml-1">
          <User></User>
          <span className="trip_font text-[1rem] font-bold ml-[0.5rem]">
            Tour guide
          </span>
        </div>
        <div className="trip_font text-[1.5rem] font-bold flex -ml-1">
          <Bus></Bus>
          <span className="trip_font text-[1rem] font-bold ml-[0.5rem]">
            Transport:
          </span>
          <span className="trip_font text-[1rem] tracking-[0.0125rem] font-normal opacity-90 ml-[0.25rem]">
            Xe VIP, có trung chuyển
          </span>
        </div>
      </div>
      <div className="absolute right-[1.87rem] bottom-[1rem]">
        <div className="trip_font text-[1rem] opacity-80 tracking-[0.0125rem] text-right">
          From to
        </div>
        <div className="trip_font text-[3rem] font-bold -mt-3">$199</div>
      </div>
    </div>
  );
};

export default CardContent;
