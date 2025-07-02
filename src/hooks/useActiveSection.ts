import { useEffect, useState } from "react";
import { MenuList } from "../lib/data/common.data";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const sectionIds = MenuList.map((item) => item.path.replace("#", ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }),
      { rootMargin: "-20% 0px -20% 0px", threshold: 0.3 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
  return { activeSection, setActiveSection };
};

export default useActiveSection;
