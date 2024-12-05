import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Front({ isOpen, setIsOpen }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <section id="home" className="z-10">
      <div className="sm:w-11/12 mx-auto">
        <div
          className={`py-8 sm:rounded-3xl relative w-full h-[620px] bg-homefrontbg bg-top sm:bg-cover lg:bg-center bg-no-repeat `}
        >
          <div className="absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
            {searchBar && (
              <form className="flex items-end gap-4 flex-wrap">
                <SearchBar />
                <button className="bg-white px-2 py-3 w-24 font-bold uppercase text-sm text-black hover:text-white hover:bg-black hover:bg-opacity-50 rounded-md">
                  Find
                </button>
              </form>
            )}
            {!searchBar && (
              <button onClick={()=>setIsOpen(!isOpen)} className="sm:text-[20px] bg-button-primary text-[#6C6252] hover:bg-button-primary-hover transition-colors sm:px-10 px-3 py-3 rounded-md capitalize sm:w-auto w-full font-bold">
                Start Now
              </button>
            )}

            {/* {!searchBar && (
              <button
                onClick={() => setSearchBar(!searchBar)}
                className="sm:text-[20px] text-white sm:px-10 px-3 py-3 rounded-md border-[1px] border-white capitalize sm:w-auto w-full font-bold"
              >
                Check Availibilty
              </button>
            )} */}
          </div>
          <article className="lg:flex hidden items-end absolute top-[30%] right-0 w-[30%] border-l-2 h-1/2 px-2 border-l-white">
            <div className="text-white text-19px font-bold sm:text-[36px] w-[80%]">
              Grow your business with our platform
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
