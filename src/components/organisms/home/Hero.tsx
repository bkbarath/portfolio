import IconComponent from "../../../assets/icons/IconComponent";
import {
  CurvedArrow,
  GitHub,
  LeetCode,
  LinkedIn,
  Profile,
} from "../../../assets/images";

const Hero = () => {
  const Designation = ["Full-Stack", "Developer"];

  const socialLinks = [
    {
      icon: GitHub,
      link: "https://github.com/bkbarath/",
      color: "bg-git",
    },
    {
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/barath-k-9a510b266/",
      color: "bg-linkedin",
    },
    {
      icon: LeetCode,
      link: "https://leetcode.com/u/bpbarathk/",
      color: "bg-leetcode",
    },
  ];

  const Stack = [
    { icon: "android", text: "Android" },
    { icon: "web", text: "Web" },
    { icon: "api", text: "Backend" },
  ];
  return (
    <div className="flex h-full w-full justify-center">
      <div className="text-primary-font text-shadow-primary-orange absolute top-20 flex w-full justify-evenly text-center text-[140px] text-shadow-lg">
        {Designation.map((item) => (
          <p className="">{item}</p>
        ))}
      </div>
      {/* custom arrow  */}
      <img
        src={CurvedArrow}
        alt="arrow"
        className="arrow-image-bounce absolute top-[25%] left-[15%] h-[30%] -rotate-[10deg] transform opacity-25 transition-all duration-1000"
      />

      {/* Intro Container */}
      <div className="absolute top-[40%] left-[10%]">
        {/* Text Container */}
        <div className="user-s text-5xl leading-loose">
          <p> Hello, I'm</p>
          <p className="text-primary-orange text-6xl">Barath Pandian</p>
          <p className="flex w-full gap-4">I'm a</p>
        </div>

        {/* Link Container */}
        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <a href={item.link} target="_blank">
              <img
                src={item.icon}
                alt={item.link}
                className="border-primary-grey h-10 cursor-pointer rounded-lg border-1 p-1 transition-all duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
      <img
        src={Profile}
        className="object-fit z-1 max-h-screen drop-shadow-lg"
      />

      {/* Intro Container */}
      <div className="absolute top-[40%] right-[10%] z-10">
        {/* Text Container */}
        <div className="text-right text-4xl leading-loose">
          <div>
            <p>Worked across </p>
            <div className="flex cursor-pointer justify-end gap-2">
              {Stack.map((item) => (
                <div className="group relative cursor-pointer">
                  <IconComponent iconName={item.icon} className="text-4xl" />
                  <p className="absolute -top-5 text-sm opacity-0 group-hover:opacity-100">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            delivering{" "}
            <p className="text-primary-orange text-6xl">Full-Stack App</p>{" "}
            solutions.
          </div>
        </div>
        <div className="flex justify-end">
          {/* Link Container */}
          <div className="flex items-center gap-5">
            <button className="group relative h-[40px] w-[100px] cursor-pointer overflow-hidden rounded-[10px] border-none bg-transparent text-[17px] font-semibold uppercase shadow-[0_10px_20px_rgba(51,51,51,0.2)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none active:scale-[0.95]">
              <span className="pointer-events-none absolute inset-0 z-[2] flex origin-bottom translate-y-[90%] items-center justify-center bg-[linear-gradient(135deg,#fa982c,#f95720)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0">
                Download
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="text-primary-grey/20 pointer-events-none absolute top-[50%] left-0 -rotate-90 transform">
        Scroll Down
      </div>
      <div className="text-primary-grey/20 pointer-events-none absolute top-[50%] right-0 rotate-90 transform">
        Scroll Down
      </div>
    </div>
  );
};

export default Hero;
