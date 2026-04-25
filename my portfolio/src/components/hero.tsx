import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div className="max-w-2xl">
          <h1
            className={cn(
              styles.heroHeadText,
              "text-white lg:text-[64px] sm:text-[50px] xs:text-[40px] text-[34px] lg:leading-[78px]",
            )}
          >
            Xin chào, tôi là <span className="text-[#915eff]">Hồ Mỹ Thuận</span>
          </h1>
          <p
            className={cn(
              styles.heroSubText,
              "mt-2 text-white-100 lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[15px] lg:leading-[34px]",
            )}
          >
            Tôi xây dựng hệ thống backend có khả năng mở rộng,{" "}
            <br className="sm:block hidden" />
            dịch vụ tích hợp AI và ứng dụng web full-stack
          </p>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
