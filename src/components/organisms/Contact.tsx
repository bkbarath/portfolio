import {
  animate,
  motion,
  useMotionValue,
  type AnimationPlaybackControls,
  type PanInfo,
} from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import IconComponent from "../../assets/icons/IconComponent";
import { Profile } from "../../assets/images";
import { Input } from "../atoms";

const Contact = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Values:");
  };

  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 p-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-primary-orange text-4xl">Contact</p>
        <p>Your Vision, My Code &#45; Let&#39;s Connect the Dots</p>
      </div>
      <div className="flex items-center p-5">
        <form
          className="flex w-full flex-3/5 flex-col items-center justify-end gap-4 rounded-2xl border-1 p-8 text-4xl leading-relaxed font-medium"
          onSubmit={onSubmit}
        >
          <p>👋 Hello there,</p>
          <div className="flex w-full items-center gap-4">
            <p className="text-nowrap">My name is</p>
            <Input
              onChange={() => {}}
              name="username"
              placeholder="Type your name here..."
            />
          </div>
          <div className="flex w-full items-center gap-4">
            <p className="text-nowrap">and I come from</p>
            <Input
              onChange={() => {}}
              name="company"
              placeholder="Enter Your company or city"
            />
          </div>
          <div className="flex w-full items-center gap-4">
            <p className="text-nowrap">You can reach me at</p>
            <Input
              onChange={() => {}}
              name="email"
              type="email"
              placeholder="Please Fill with Your Email"
            />
          </div>
          <div className="flex w-full items-center gap-4">
            <p className="text-nowrap">I'd love to talk about</p>
            <textarea
              onChange={() => {}}
              name="topic"
              rows={4}
              className="placeholder:text-primary-orange/20 text-primary-orange w-full resize-none text-[24px] outline-none"
              placeholder="e.g., collaboration, project idea, freelance"
            />
          </div>
          <SwipeButton />
          <p className="text-right text-[18px]">
            Looking forward to connecting!
          </p>
        </form>
        <div className="flex-2/5">
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

const SwipeButton = () => {
  const [swiped, setSwiped] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  const x = useMotionValue(0);
  const handleDragEnd = (_: MouseEvent, info: PanInfo) => {
    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    if (info.offset.x > buttonWidth - 100) {
      animate(x, buttonWidth - 60, {
        type: "spring",
        stiffness: 300,
        damping: 20,
        onComplete: () => {
          setSwiped(true);
          setTimeout(() => {
            setSwiped(false);
            animate(x, 0, {
              type: "spring",
              stiffness: 300,
              damping: 20,
            });
          }, 1000);
        },
      });
    } else {
      animate(x, 0, {
        type: "spring",
        stiffness: 300,
        damping: 20,
      });
    }
  };

  const handleHoverStart = () => {
    controlsRef.current = animate(x, [0, 10, 0], {
      type: "tween",
      stiffness: 300,
      damping: 15,
      repeat: Infinity,
      repeatType: "loop",
      duration: 1,
    });
  };

  const handleHoverEnd = () => {
    controlsRef.current?.stop();
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
  };

  return (
    <div
      ref={buttonRef}
      className="relative flex h-14 w-full max-w-sm cursor-pointer items-center overflow-hidden rounded-xl border-1 p-1 shadow-inner"
      onMouseLeave={handleHoverEnd}
      onMouseEnter={handleHoverStart}
    >
      {swiped ? (
        <div className="bg-primary-orange flex h-full w-full items-center justify-center rounded-xl text-lg font-semibold transition-all duration-500">
          Submitted
        </div>
      ) : (
        <>
          <div className="absolute inset-0 mt-2 flex items-center justify-center font-medium">
            Slide It
          </div>
          <motion.div
            className="bg-primary-orange relative z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg text-white shadow-md"
            drag="x"
            dragConstraints={{ left: 0, right: 260 }}
            style={{ x }}
            onDragEnd={handleDragEnd}
            whileTap={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <IconComponent iconName="rightArrow" />
          </motion.div>
        </>
      )}
    </div>
  );
};
