import React from "react";
import {
  Earth,
  Follow1,
  FollowFb,
  FollowInsta,
  FollowTiktok,
  FollowYoutube,
  HomeFooter,
  HumanIcon,
  LineFooter,
  Mail,
} from "../../assets/icon";
import { CloudFooter, Group1, Logo_black } from "../../assets/img";
import { FieldFooter } from "../field";

const Footer = () => {
  return (
    <div className="w-full lg:h-[34.6875rem] bg-white relative mt-[1.5rem] ">
      <div className="w-full relative">
        <img
          src={Group1}
          alt=""
          className="opacity-30 h-[20rem] lg:h-[33rem]"
        />
        <img
          src={CloudFooter}
          alt=""
          className="absolute right-0 top-[8rem] lg:top-0 h-[20rem] lg:h-[37rem]"
        />
        <div className="absolute top-[3.75rem] lg:left-[5rem]">
          <img src={Logo_black} alt="" />
        </div>
        <div className=" h-[16rem] lg:h-0 "></div>
        <div className="absolute top-[11.44rem] lg:left-[6.25rem] lg:pl-0 pl-[1.5rem]">
          <div className=" lg:flex items-start gap-x-[7.5rem] ">
            <div className="lg:hidden inline-block mb-10 right">
              <div className="trip_font text-[1rem] font-bold ">
                <span className="text-[#2E2E2E]"> ALLTOUR</span>
              </div>
              <div className="mt-[1rem]">
                <FieldFooter icon={<HumanIcon></HumanIcon>}>
                  <span className="font-bold"> Best Budget</span>
                </FieldFooter>
                <FieldFooter icon={<HumanIcon></HumanIcon>}>
                  <span className="font-bold"> Standard Tour</span>
                </FieldFooter>
                <FieldFooter icon={<HumanIcon></HumanIcon>}>
                  <span className="font-bold"> Premium Tour </span>
                </FieldFooter>
              </div>
            </div>
            <div className="left">
              <div className="trip_font text-[1rem] font-bold ">
                <span className="text-[#2E2E2E]"> CONTACT US</span>
              </div>
              <div className="mt-[1rem]">
                <FieldFooter></FieldFooter>
                <FieldFooter icon={<Mail></Mail>}>
                  honghaotravel@gmail.com
                </FieldFooter>
                <FieldFooter icon={<HomeFooter></HomeFooter>}>
                  No. 10 Pham Hong Thai, Minh Khai Ward, City. Ha Giang.
                </FieldFooter>
                <FieldFooter icon={<Earth></Earth>}>
                  honghaotravel.com.vn
                </FieldFooter>
              </div>
            </div>
            <div className="hidden lg:inline-block right">
              <div className="trip_font text-[1rem] font-bold ">
                <span className="text-[#2E2E2E]"> ALLTOUR</span>
              </div>
              <div className="mt-[1rem]">
                <FieldFooter icon={<HumanIcon></HumanIcon>}>
                  <span className="font-bold"> Best Budget</span>
                </FieldFooter>
                <FieldFooter icon={<HumanIcon></HumanIcon>}>
                  <span className="font-bold"> Standard Tour</span>
                </FieldFooter>
                <FieldFooter icon={<HumanIcon></HumanIcon>}>
                  <span className="font-bold"> Premium Tour </span>
                </FieldFooter>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:absolute top-[25.81rem] left-[6.25rem] lg:pl-0 pl-[1.5rem]">
          <div className="trip_font text-[1rem] font-bold ">
            <span className="text-[#2E2E2E]">FOLLOW US</span>
          </div>
          <div className="flex gap-x-[1rem] mt-[1rem]">
            <FollowIconLayout className="bg-[#33E0A0]">
              <Follow1></Follow1>
            </FollowIconLayout>
            <FollowIconLayout>
              <FollowTiktok></FollowTiktok>
            </FollowIconLayout>
            <FollowIconLayout>
              <FollowInsta></FollowInsta>
            </FollowIconLayout>
            <FollowIconLayout>
              <FollowFb></FollowFb>
            </FollowIconLayout>
            <FollowIconLayout></FollowIconLayout>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:absolute top-[32.81rem] left-[6.25rem]">
          <div className="hidden lg:inline-block">
            {" "}
            <LineFooter></LineFooter>
          </div>
          <div className="trip_font text-[0.875rem] border-2 lg:border-0 lg:pt-0 pt-5 font-bold text-center mt-[0.94rem] pb-[2.5rem]">
            <span className="text-[#A9A9A9]">© DESIGNED BY OKHUB AGENCY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export function FollowIconLayout({
  children = <FollowYoutube></FollowYoutube>,
  className = "bg-[#F0F0F0]",
}) {
  return (
    <div
      className={` ${className}  w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full py-[0.25rem] px-[0.6875rem]`}
    >
      {children}
    </div>
  );
}
export default Footer;
