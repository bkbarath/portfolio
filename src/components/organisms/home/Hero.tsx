import IconComponent from "../../../assets/icons/IconComponent";
import { CurvedArrow, Profile } from "../../../assets/images";

const Hero = () => {
  const Designation = ["Full-Stack", "Developer"];

  const socialLinks = [
    {
      icon: "git",
      link: "",
      color: "",
    },
    {
      icon: "linkedin",
      link: "",
      color: "",
    },
    {
      icon: "leetcode",
      link: "",
      color: "",
    },
    {
      icon: "leetcode",
      link: "",
      color: "",
    },
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
        alt=""
        className="absolute top-[25%] left-[15%] h-[30%] -rotate-[10deg] transform opacity-25"
      />

      {/* Intro Container */}
      <div className="absolute top-[40%] left-[10%]">
        {/* Text Container */}
        <div className="text-5xl leading-loose">
          <p> Hello, I'm</p>
          <p className="text-primary-orange text-6xl">Barath Pandian</p>
          <p className="flex w-full gap-4">I'm a</p>
        </div>

        {/* Link Container */}
        <div className="flex gap-2">
          {socialLinks.map((item) => (
            <IconComponent key={item.icon} iconName={item.icon} />
          ))}
        </div>
      </div>
      <img
        src={Profile}
        className="object-fit z-1 max-h-screen drop-shadow-lg"
      />

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
