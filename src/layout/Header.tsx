import React from "react";
import SearchBar from "@components/SearchBar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "../components/BackButton";

function Header() {
  return (
    <div className="flex justify-between px-4 pt-2 pb-8 items-center">
      <div className="flex items-center gap-4 m-4 h-4">
        <img src="/youtubeLogo.svg" alt="로고" className="m-10 h-10" />
      </div>
      <SearchBar />
      <button className="w-28 h-11 ml-5 border rounded-[35px] p-4 border-[#e6e6e6] focus:border-none hover:bg-[#DEF0FE] flex justify-center items-center gap-2">
        <FontAwesomeIcon icon={faUser} />
        <span className="w-11">로그인</span>
      </button>
      <BackButton />
    </div>
  );
}

export default Header;
