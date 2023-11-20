import React from "react";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  const [searchBarClicked, setSearchBarClicked] = useState(false);

  const handleSearchBarClicked = (event: React.MouseEvent<Element>) => {
    const targetElement = event.target as HTMLInputElement;

    // input 요소인지 확인
    if (targetElement.tagName.toLowerCase() === "input") {
      setSearchBarClicked((prevClicked) => !prevClicked);
    }
  };
  return (
    <div className="flex justify-center items-center border rounded-[35px] w-[39.375rem] h-[2.5rem]">
      <form action="post" className="flex justify-between w-[39.375rem]">
        <div
          className={`w-[37.5rem] h-[2.5rem] ${
            searchBarClicked ? "border-[#e6e6e6]" : "border-[#1A62B9]"
          } border flex items-center rounded-s-[35px] pl-4`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[14px] font-light text-[#111]"
          />
          <input
            type="text"
            placeholder="검색"
            className="w-[30rem] mx-4 focus:outline-none"
            onClick={handleSearchBarClicked}
          />
        </div>
        <button
          type="button"
          aria-label="검색"
          className="w-[4.0625rem] bg-[#F0F0F0] border-l-0 border rounded-e-[35px] hover:bg-slate-200 hover:border-gray-300 hover:border "
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#111]" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
