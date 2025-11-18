import React from "react";

const Services = () => {
  return (
    <div className="Seccontainer mt-20 mb-10 flex flex-col items-start md:flex-row justify-between">
      {/* LEFT SIDE */}
      <div className="w-full md:w-[40%]">
        <h2>SERVICES</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[60%] flex flex-col gap-10">
        {/* Service 1 */}
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold">Front-End Development</h5>
          <p className="text-[1.4rem] opacity-80">
            Building fast, responsive and visually appealing websites using
            React.js, Next.js and modern UI frameworks like Tailwind CSS.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold">UI / UX Implementation</h5>
          <p className="text-[1.4rem] opacity-80">
            Converting Figma designs into perfectly structured, pixel-perfect
            front-end code with careful attention to user experience and design
            consistency.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold">Responsive Design</h5>
          <p className="text-[1.4rem] opacity-80">
            Ensuring websites look and work great across all screen sizes — from
            large desktops to mobile devices — with fluid layouts and modern
            breakpoints.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
