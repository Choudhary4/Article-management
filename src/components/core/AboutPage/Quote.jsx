import React from 'react';
import HighLightText from '../HomePage/HighlightText';

const Quote = () => {
  return (
    <div className="text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
      We are passionate about transforming how research is managed and accessed. Our innovative platform
      <HighLightText text={"leverages technology"} />,
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        {""}
        expertise
      </span>
      , and collaboration to provide an
      {" "}
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        unparalleled research storage experience.
      </span>
    </div>
  );
};

export default Quote;
