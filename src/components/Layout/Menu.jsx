import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import {
  ArrowLeft,
  ArrowRightUp,
  CaretDown,
  ClockMenu,
} from "../../assets/icon";
import {
  BG_Mountain,
  Cardmenu1,
  Cardmenu2,
  Cardmenu3,
  Cardmenu4,
  Close,
  Logo,
  MenuRight,
} from "../../assets/img";
import { CardMenu } from "../card";
const BgMenu = styled.div`
  background: linear-gradient(
      180deg,
      #122718 0%,
      rgba(18, 39, 24, 0) 35%,
      rgba(18, 39, 24, 0) 70%,
      #122718 100%
    ),
    url(${BG_Mountain}) lightgray 50% / cover no-repeat;
  background-color: #1a543a;
  .scroll_custom {
    overflow-x: auto;
  }
  .scroll_custom::-webkit-scrollbar {
    display: block;
    height: 0.3125rem;
    /* max-height: 50%;
    height: 50%; */
  }
  .scroll_custom::-webkit-scrollbar-track {
    background: transparent;
    margin-right: 95px;
    border-radius: 10px;
  }

  .scroll_custom::-webkit-scrollbar-thumb {
    background-color: white;
    border-right: none;
    border-left: none;
    border-radius: 10px;
    cursor: grab;
  }
  .scroll_custom::after {
    content: "";
    position: fixed;
    bottom: 4.75rem;
    right: 5.25rem;
    width: 49rem;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.4);
  }
  /* .scroll_custom::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  } */

  /* .scroll_custom::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 10px;
  } */
`;
const ULMenuStyle = styled.div`
  list-style-type: none;
  width: 22.5rem;
  li {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  li:last-child {
    border-bottom: 0;
  }
  .borderTop {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  .item {
    width: 12.3rem;
    /* background-color: aquamarine; */
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
  .sub_menu {
    /* background-color: antiquewhite; */
    margin-top: 1rem;
    li {
      padding: 1.125rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-weight: 500;
      opacity: 0.5;
      cursor: pointer;
    }
    li:first-child {
      opacity: 1;
    }
    li:last-child {
      border-bottom: 0;
      padding: 1.25rem 0 0;
    }
  }
`;
const Menu = ({ tgMenu, handleCloseMenu }) => {
  const [tgSubMenu, setTgSubMenu] = useState(false);
  const itemRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleOpenSubMenu = () => {
    setTgSubMenu(true);
  };
  const handleCloseSubMenu = () => {
    setTgSubMenu(false);
  };
  // onMouseDown={handleMouseDown}
  // onMouseLeave={HandleMouseLeave}
  // onMouseUp={handleMouseUp}
  // onMouseMove={handleMouseMove}
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemRef.current.offsetLeft);
    setScrollLeft(itemRef.current.scrollLeft);
    // console.log(e.pageX);
  };
  const HandleMouseLeave = () => {
    setIsMouseDown(false);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemRef.current.offsetLeft;
    const walk = x - startX;
    itemRef.current.scrollLeft = scrollLeft - walk;
    // console.log({ x, startX });
  };
  return (
    <>
      <div
        onClick={handleCloseMenu}
        className={`lg:inline-block hidden absolute top-0 left-0 bg-black ${
          tgMenu ? "opacity-45 " : "opacity-0 pointer-events-none"
        } h-full w-full transition-all duration-700`}
      ></div>
      <BgMenu
        className={`w-full hidden lg:block absolute top-0 h-[40.125rem] overflow-hidden  ${
          tgMenu ? " translate-y-0" : "translate-y-[-100%] pointer-events-none"
        } transition-all duration-500 w-[100rem] left-0 bg-slate-400 rounded-b-3xl`}
      >
        <div className={`flex justify-between ${tgSubMenu ? "relative " : ""}`}>
          <div className="w-1/2 pt-[1.5rem] pl-[5rem] pb-[1.5rem]">
            <div>
              <img src={Logo} alt="" />
            </div>
            {/* ul li */}
            <div className="mt-[4rem] overflow-hidden  h-[30rem] ">
              <ULMenuStyle className="trip_font text-[2rem] font-bold">
                <LiMenu>Home</LiMenu>
                <LiMenu>About Us</LiMenu>
                <div
                  className={`${
                    tgSubMenu
                      ? "h-[12.7rem] opacity-100"
                      : "h-0 opacity-0 pointer-events-none"
                  } transition-all duration-700 w-[11.3rem]`}
                >
                  <div
                    className="flex items-center gap-x-2 cursor-pointer"
                    onClick={handleCloseSubMenu}
                  >
                    <div className="">
                      <ArrowLeft color="#CF4124"></ArrowLeft>
                    </div>
                    <div className="text-[#CF4124]">Tours</div>

                    <div className="">
                      <ArrowRightUp></ArrowRightUp>
                    </div>
                  </div>
                  <div
                    className={`w-full  ${
                      tgSubMenu
                        ? "opacity-100 h-[10.3rem]"
                        : "opacity-0 h-[0.3rem]"
                    } transition-all duration-700`}
                  >
                    <ul className="sub_menu trip_font text-[1.25rem]">
                      <li>Best Budget</li>
                      <li>Standard</li>
                      <li>Premium</li>
                    </ul>
                  </div>
                </div>
                <LiMenu
                  stt={2}
                  onClick={handleOpenSubMenu}
                  className={`${
                    tgSubMenu ? "opacity-0 pointer-events-none" : "opacity-100"
                  } transition-all duration-500`}
                >
                  Tours
                </LiMenu>
                <LiMenu
                  className={`${tgSubMenu ? "borderTop" : "opacity-100"} `}
                >
                  Activity
                </LiMenu>
                <LiMenu>Destination</LiMenu>
                <LiMenu>Blog</LiMenu>
                <LiMenu>FAQ</LiMenu>
                <LiMenu>Contact</LiMenu>
              </ULMenuStyle>
            </div>
          </div>

          <div
            className={` w-1/2 h-[40.125rem] relative ${
              tgSubMenu ? "opacity-0 pointer-events-none" : "opacity-100"
            } transition-all duration-1000 `}
          >
            <img
              src={MenuRight}
              alt=""
              className="h-full object-cover w-full"
            />
            <div
              className="btn bg-cyan-400 w-[3.25rem] h-[3.25rem] rounded-full opacity-0 absolute top-[1.56rem] right-[1.66rem] cursor-pointer"
              onClick={handleCloseMenu}
            ></div>
          </div>
        </div>
        {/* khi tgSubMenu == true*/}
        {/* overflow-x-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-slate-500 */}
        <div
          className={` absolute top-[9rem] left-[45.75rem] ${
            tgSubMenu ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        >
          <div className="trip_font font-bold text-[1.25rem] mb-[2.86rem]">
            Find your tour:
          </div>
          <div
            className="flex gap-x-[1rem] scroll_custom w-[55rem] pb-4"
            ref={itemRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={HandleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <CardMenu></CardMenu>
            <CardMenu img={Cardmenu2}></CardMenu>
            <CardMenu img={Cardmenu3}></CardMenu>
            <CardMenu img={MenuRight}></CardMenu>
            <div className="pr-[4.45rem]">
              <CardMenu img={Cardmenu4}></CardMenu>
            </div>
          </div>
        </div>
        <div
          className={`${
            tgSubMenu
              ? "absolute top-[1.56rem] right-[1.66rem] opacity-100"
              : "opacity-0 pointer-events-none"
          } cursor-pointer transition-all duration-500`}
          onClick={handleCloseMenu}
        >
          <img src={Close} alt="" />
        </div>
      </BgMenu>
    </>
  );
};
export function LiMenu({
  children = "Home",
  stt = 1,
  className,
  onClick = () => {},
}) {
  return (
    <>
      <li className={` h-[3.375rem] ${className} `}>
        <div className="item group cursor-pointer " onClick={onClick}>
          <div className="arrow_right group-hover:opacity-100 opacity-0 transition-all duration-500">
            <ArrowLeft></ArrowLeft>
          </div>
          <div className=" group-hover:translate-x-0 translate-x-[-1.35rem] transition-all duration-700">
            {children}
          </div>
          {stt == 1 ? (
            ""
          ) : (
            <div className="group-hover:opacity-0 opacity-100 -ml-[1.5rem] transition-all duration-500">
              <CaretDown></CaretDown>
            </div>
          )}
        </div>
      </li>
    </>
  );
}
export default Menu;
