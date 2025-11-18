import React from "react";

const Education = () => {
  return (
    <div className="Seccontainer mt-20 mb-10 flex flex-col items-start md:flex-row justify-between">
      {/* LEFT SIDE */}
      <div className="w-full md:w-[40%]">
        <h2>EDUCATION</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[60%] flex flex-col gap-10">
        {/* BS CS */}
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold">BS Computer Science</h5>
          <p>FG College Peshawar</p>
          <div className="flex items-center justify-between ">
            <p>CGPA: 3.3</p>
            <p>2023 – 2027</p>
          </div>
        </div>

        {/* FSC */}
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold">FSC (Computer Science)</h5>
          <p>Islamia College Peshawar</p>
          <div className="flex items-center justify-between ">
            <p>77.7%</p>
            <p>2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
