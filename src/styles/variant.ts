import type { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
): Variants => {
  let y = 0;
  if (direction === "up") {
    y = 40;
  } else if (direction === "down") {
    y = -60;
  }

  let x = 0;
  if (direction === "left") {
    x = 40;
  } else if (direction === "right") {
    x = -40;
  }
  return {
    initial: {
      y: y,
      x: x,
      opacity: 0,
    },

    animate: {
      y: 0,
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const fallIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0,
): Variants => {
  let y = 0;
  if (direction === "up") {
    y = 1000;
  } else if (direction === "down") {
    y = -1000;
  }

  let x = 0;
  if (direction === "left") {
    x = 1000;
  } else if (direction === "right") {
    x = -1000;
  }
  return {
    initial: {
      y: y,
      x: x,
      opacity: 0,
    },

    animate: {
      y: 0,
      x: 0,
      opacity: 1,

      transition: {
        delay: delay,
        type: "spring",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
};

export const bounce = (
  align: "vertical" | "horizontal" = "vertical",
  delay: number = 1,
): Variants => {
  return {
    initial: {},
    animate: {
      y: align === "vertical" ? [5, 0, 5] : 0,

      transition: {
        delay: delay,
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
};
