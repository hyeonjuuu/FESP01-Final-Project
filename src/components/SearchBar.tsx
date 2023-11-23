import { useState } from "react"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilState } from "recoil"
// import { filterVideoAtom, videoAtom } from "@store/videoAtom"
import { searchBarValueAtom } from "@store/searchBarValueAtom"

function SearchBar() {
  // const videoData = useRecoilValue(videoAtom)
  const [searchBarValue, setSearchBarValue] = useRecoilState(searchBarValueAtom)
  const [searchBarClicked, setSearchBarClicked] = useState(false)

  const handleSearchBarClicked = () => {
    setSearchBarClicked((prevClicked) => !prevClicked)
  }

  const handleSearchPopularVideo = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchBarValue(event.target.value)
    console.log(searchBarValue)
  }

  return (
    <div className="flex justify-center items-center border rounded-[35px] sm:w-full pc:w-[39.375rem] tb:w-[38.85rem] mo:w-[37rem] dark:bg-[#202124] dark:text-white">
      <form
        action="post"
        className="flex justify-between w-full sm:w-full md:w-full lg:w-[39.375rem] pc:w-[39.375rem]"
      >
        <div
          className={`w-full h-[2.5rem] ${
            searchBarClicked ? "border-[#e6e6e6]" : "border-[#1A62B9]"
          } border flex items-center rounded-s-[35px] pl-4`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[14px] font-light text-[#111] dark:text-white"
          />
          <input
            type="text"
            placeholder="검색"
            className="w-full mx-4 focus:outline-none dark:bg-[#202124]"
            onClick={handleSearchBarClicked}
            onChange={handleSearchPopularVideo}
          />
        </div>
        <button
          type="button"
          aria-label="검색"
          className="w-[4.0625rem] bg-[#F0F0F0] border-l-0 border rounded-e-[35px] hover:bg-slate-200 hover:border-gray-300 hover:border"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#111]" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
