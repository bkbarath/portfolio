import { Profile } from "../../../assets/images";

const Home = () => {
  return (
    <div className="flex h-full">
      <p className="text-head-font absolute left-[30%] font-[tamil] text-[140px] text-wrap text-shadow-amber-200 text-shadow-lg">
        TWj
      </p>
      <img
        src={Profile}
        className="object-fit z-1 max-h-screen drop-shadow-lg"
      />

      <div className="absolute left-0 top-[50%] transform -rotate-90 text-primary-grey/20 pointer-events-none">Scroll Down</div>
      <div className="absolute right-0 top-[50%] transform rotate-90 text-primary-grey/20 pointer-events-none">Scroll Down</div>
    </div>
  );
};

export default Home;
