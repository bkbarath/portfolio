import { motion } from "framer-motion";
import { Profile } from "../../assets/images";
import { fadeIn } from "../../styles/variant";

const Projects = () => {
  return (
    <div className="h-full p-5">
      {/* Header of the section */}
      <div className="col-span-12 flex flex-col items-center justify-center gap-2">
        <p className="text-primary-orange text-4xl">Projects</p>
        <p>A showcase of shipped thoughts and sleepless nights.</p>
      </div>
      <div className="m-auto flex h-full w-7/10 flex-col gap-2 p-5">
        <motion.div
          variants={fadeIn("down", 1)}
          whileInView="animate"
          initial="initial"
          className="border-primary-grey h-[65vh] rounded-lg border-1 flex justify-center items-center"
        >
          <img src={Profile} className="h-full" />
        </motion.div>

        <div className="relative z-0 flex w-full justify-between gap-2 overflow-x-auto overflow-hidden pt-6 pb-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              variants={fadeIn("up", i * 0.1)}
              whileInView="animate"
              initial="initial"
              key={i}
              className="group relative z-10 cursor-pointer flex justify-center items-center"
            >
              <img
                src={Profile}
                className="border-primary-grey h-30 min-w-50 transform border-1 transition duration-300 ease-in-out group-hover:-translate-y-5"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
