// import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
      <div className="mt-3 flex items-center pl-4 pr-10 border bg-[#F3F3F3] rounded-sm h-[80px]">
        <button className="rounded-md mr-1 text-lg text-white w-[110px] h-[48px] bg-[#D72050]">
          Latest
        </button>
        <Marquee className="text-[#403F3F] text-xl" pauseOnHover={true} speed={100}>
          <Link className="mr-10" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-10" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-10" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    );
};

export default BreakingNews;