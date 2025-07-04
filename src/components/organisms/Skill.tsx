import IconComponent from "../../assets/icons/IconComponent";
import { SkillImage, SkillsList } from "../../lib/data/common.data";
import { fadeIn } from "../../styles/variant";
import Tooltip from "../atoms/common/Tooltip";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="mx-auto grid w-full grid-cols-12 gap-5 gap-y-8 px-5 py-11 transition-all duration-300 md:w-9/10 lg:w-7/10">
      {/* Header of the section */}
      <div className="col-span-12 flex flex-col items-center justify-center gap-2">
        <p className="text-primary-orange text-4xl">Skill</p>
        <p>Fuel Behind My Projects</p>
      </div>

      {/* Skill list container */}
      {SkillsList.map((item) => (
        <motion.div
          initial="initial"
          whileInView="animate"
          // viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn(item.fadeDirection)}
          className="border-primary-grey col-span-12 flex flex-col gap-5 rounded-2xl border-2 md:col-span-6 lg:col-span-6"
        >
          <div className="border-primary-grey flex w-full items-center gap-2 border-b-2 p-3">
            {/* IOS min/max close buttons */}
            <div className="group flex gap-2">
              <div className="bg-mac-red h-3 w-3 rounded-full">
                <IconComponent
                  iconName="cancel"
                  className="text-secondary-font hidden text-xs group-hover:flex"
                />
              </div>
              <div className="bg-mac-yellow h-3 w-3 rounded-full">
                <IconComponent
                  iconName="minimize"
                  className="text-secondary-font hidden text-xs group-hover:flex"
                />
              </div>
              <div className="bg-mac-green expand-icon h-3 w-3 rounded-full">
                <IconComponent
                  iconName="expand"
                  className="text-secondary-font hidden rotate-135 transform cursor-pointer text-xs group-hover:flex"
                />
              </div>
            </div>
            {/* Skill header */}
            <p>{item.title}</p>
          </div>
          {/* Icon Container */}
          <div className="relative flex flex-wrap justify-center gap-5 p-3">
            {item.list.map((listItem) => (
              <div>
                <Tooltip text={listItem.name}>
                  <img
                    src={SkillImage[listItem.image]}
                    alt={listItem.name}
                    className="h-15 cursor-pointer duration-300 transform-3d hover:rotate-z-10 md:h-20 lg:h-25"
                  />
                </Tooltip>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skill;
