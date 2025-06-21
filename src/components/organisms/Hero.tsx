import { motion } from "framer-motion";
import IconComponent from "../../assets/icons/IconComponent";
import {
  CurvedArrow,
  GitHub,
  LeetCode,
  LinkedIn,
  Profile,
} from "../../assets/images";
import { bounce, fadeIn, fallIn } from "../../styles/variant";

const Hero = () => {
  const Designation = ["Full-Stack", "Developer"];

  const socialLinks = [
    {
      icon: GitHub,
      link: "https://github.com/bkbarath/",
      color: "bg-git",
      delay: 0.9,
    },
    {
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/barath-k-9a510b266/",
      color: "bg-linkedin",
      delay: 0.6,
    },
    {
      icon: LeetCode,
      link: "https://leetcode.com/u/bpbarathk/",
      color: "bg-leetcode",
      delay: 0.3,
    },
  ];

  const Stack = [
    { icon: "web", text: "Web", delay: 0.9 },
    { icon: "android", text: "Mobile", delay: 0.6 },
    { icon: "api", text: "Backend", delay: 0.3 },
  ];
  return (
    <div className="flex h-full w-full justify-center">
      <motion.div
        variants={fadeIn("up")}
        animate="animate"
        initial="initial"
        className="text-primary-font text-shadow-primary-orange absolute top-20 flex w-full justify-evenly text-center text-[140px] text-shadow-lg"
      >
        {Designation.map((item) => (
          <p className="">{item}</p>
        ))}
      </motion.div>
      {/* custom arrow  */}
      <motion.img
        variants={bounce()}
        animate="animate"
        initial="initial"
        src={CurvedArrow}
        alt="arrow"
        className="arrow-image-bounce absolute top-[30%] left-[15%] h-[30%] -rotate-[10deg] transform opacity-25 transition-all duration-1000"
      />
      {/* Intro Container */}
      <div className="absolute top-[40%] left-[10%]">
        {/* Text Container */}
        <motion.div
          variants={fadeIn("right")}
          animate="animate"
          initial="initial"
          className="user-s text-5xl leading-loose"
        >
          <p> Hello, I'm</p>
          <p className="text-primary-orange text-6xl">Barath Pandian</p>
          <p className="flex w-full gap-4">I'm a</p>
        </motion.div>

        {/* Link Container */}
        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <motion.a
              variants={fallIn("right", item.delay)}
              animate="animate"
              initial="initial"
              className="flex gap-4"
              href={item.link}
              target="_blank"
            >
              <img
                src={item.icon}
                alt={item.link}
                className="border-primary-grey h-10 cursor-pointer rounded-lg border-1 p-1 transition-all duration-500 hover:scale-105"
              />
            </motion.a>
          ))}
        </div>
      </div>
      {/* profile image */}
      <motion.img
        variants={fallIn("down", 1.2)}
        animate="animate"
        initial="initial"
        src={Profile}
        className="object-fit z-1 max-h-screen drop-shadow-lg"
      />
      {/* Tech Container */}
      <div className="absolute top-[40%] right-[10%] z-10">
        {/* Text Container */}
        <motion.div
          variants={fadeIn("left")}
          animate="animate"
          initial="initial"
          className="text-right text-4xl leading-loose"
        >
          <div>
            <p>Worked across </p>
            <div className="flex cursor-pointer justify-end gap-2">
              {Stack.map((item) => (
                <div className="group relative cursor-pointer">
                  <motion.div
                    variants={bounce("vertical", item.delay)}
                    animate="animate"
                    initial="initial"
                  >
                    <IconComponent iconName={item.icon} className="text-4xl" />
                  </motion.div>
                  <p className="absolute -top-5 translate-y-2 text-sm opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            delivering{" "}
            <p className="text-primary-orange text-6xl">Full-Stack App</p>{" "}
            solutions.
          </div>
        </motion.div>
        <div className="flex justify-end">
          {/* CV Container */}
          <motion.div
            variants={fallIn("left", 1.4)}
            animate="animate"
            initial="initial"
            className="group border-primary-orange relative flex items-center gap-5 rounded-xl border-1"
          >
            <IconComponent
              iconName="download"
              className="absolute left-[25%] transition-all duration-300 group-hover:translate-y-2"
            />
            <button className="relative h-[40px] w-[50px] cursor-pointer overflow-hidden rounded-[10px] border-none bg-transparent text-[17px] font-semibold uppercase shadow-[0_10px_20px_rgba(51,51,51,0.2)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[120px] focus:outline-none active:scale-[0.95]">
              <span className="pointer-events-none absolute inset-0 z-[2] flex origin-bottom translate-y-[90%] items-center justify-center bg-[linear-gradient(135deg,#fa982c,#f95720)] text-nowrap transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0">
                Download CV
              </span>
            </button>
          </motion.div>
        </div>
      </div>
      <div className="text-primary-grey/50 pointer-events-none absolute top-[50%] left-0 -rotate-90 transform">
        Scroll Down
      </div>
      <div className="text-primary-grey/50 pointer-events-none absolute top-[50%] right-0 rotate-90 transform">
        Scroll Down
      </div>
    </div>
  );
};

export default Hero;
