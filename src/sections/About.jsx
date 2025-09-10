import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { mySocials } from "../constants";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Vishwa Teja</p>
            <p className="subtext">
              Passionate software developer skilled in web development and machine learning.
              I design efficient solutions, improve system performance, and enjoy contributing
              to innovative, high‑impact projects.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            {/* Work tech: React, JS, Tailwind, Three.js */}
            <Card
              style={{ rotate: "-20deg", top: "20%", left: "18%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "55%", left: "40%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "65deg", bottom: "30%", left: "68%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "8%" }}
              image="assets/logos/threejs.svg"
              containerRef={grid2Container}
            />
            {/* Data/Cloud & tools */}
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Pandas"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "62%", left: "8%" }}
              text="TensorFlow"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/azure.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "72%", left: "25%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "28%", left: "74%" }}
              image="assets/logos/github.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "45%", left: "4%" }}
              image="assets/logos/microsoftsqlserver.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">Based in IST (UTC+5:30), open to remote work worldwide.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Connect with me on LinkedIn, Instagram, and GitHub
            </p>
            <div className="flex items-center gap-4">
              {mySocials
                .filter((s) => ["LinkedIn", "Instagram", "GitHub"].includes(s.name))
                .map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 transition-colors border rounded-md border-white/10 hover:bg-white/10"
                  >
                    <img src={s.icon} className="w-5 h-5" alt={s.name} />
                    <span className="text-sm">{s.name}</span>
                  </a>
                ))}
            </div>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
