import React from 'react';

const stats = [
    { count: "10K+", label: "Articles Stored" },
    { count: "150+", label: "Departments" },
    { count: "500+", label: "Researchers" },
    { count: "20K+", label: "Citations Tracked" },
];

const StatsComponent = () => {
  return (
    <section className="bg-richblack-700">
        <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                {stats.map((data, index) => (
                    <div className="flex flex-col py-10" key={index}>
                        <h1 className="text-[30px] font-bold text-richblack-5">
                            {data.count}
                        </h1>
                        <h2 className="font-semibold text-[16px] text-richblack-500">
                            {data.label}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default StatsComponent;
