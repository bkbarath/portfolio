import { Profile } from "../../../assets/images";

const Hero = () => {
  const Designation = ["Software", "Engineer"];
  return (
    <div className="flex h-full w-full justify-center">
      <div className="text-head-font absolute top-20 flex justify-around w-full text-center text-[140px] text-shadow-amber-200 text-shadow-lg">
        {Designation.map((item) => (
          <p className="">{item}</p>
        ))}
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
