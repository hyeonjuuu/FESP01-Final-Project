import React from "react";
import SearchBar from "../components/SearchBar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="flex justify-between px-[1.75rem] pt-[5px] pb-[35px] items-center">
      <div className="flex items-center gap-5">
        <img src="/youtubeLogo.svg" alt="로고" className="w-[4rem] h-[3rem]" />
      </div>
      <SearchBar />
      <button className="w-[6rem] h-[2.5rem] border rounded-[35px] border-[#e6e6e6] focus:border-none hover:bg-[#DEF0FE] flex justify-center items-center gap-2">
        <FontAwesomeIcon icon={faUser} />
        <span>로그인</span>
      </button>
    </div>
  );
}

export default Header;
