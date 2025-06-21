import { SkillImage, SkillsList } from "../../lib/data/common.data";

const Skill = () => {
  return (
    <div className="mx-auto grid w-7/10 grid-cols-12 gap-5 gap-y-8 py-11">
      <div className="col-span-12 flex justify-center flex-col items-center gap-2">
        <p className="text-4xl text-primary-orange">Skill</p>
        <p>Fuel Behind My Projects</p>
      </div>
      {SkillsList.map((item) => (
        <div className="border-primary-grey col-span-6 flex flex-col gap-5 rounded-2xl border-2">
          <div className="border-primary-grey flex w-full items-center gap-2 border-b-2 p-3">
            <div className="bg-mac-red h-3 w-3 rounded-full"></div>
            <div className="bg-mac-yellow h-3 w-3 rounded-full"></div>
            <div className="bg-mac-green h-3 w-3 rounded-full"></div>
            <p>{item.title}</p>
          </div>
          <div className="flex flex-wrap gap-5 p-3">
            {item.list.map((listItem) => (
              <img
                src={SkillImage[listItem.image]}
                alt={listItem.name}
                className="pointer-events-none h-25"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
