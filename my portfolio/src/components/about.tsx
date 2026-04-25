import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import avatar from "../assets/testimonials/avatar.jpg";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Giới thiệu</p>
          <h2 className={styles.sectionHeadText}>Tổng quan.</h2>
        </motion.div>

        {/* Body */}
        <div className="mt-6 flex flex-col md:flex-row gap-8 md:items-start">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
          >
            Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Trường Đại học
            Kỹ thuật - Công nghệ Cần Thơ, tập trung vào phát triển backend và
            tích hợp AI. Với tư duy code tốt và cách tiếp cận sáng tạo khi giải
            quyết vấn đề, tôi biến các yêu cầu phức tạp thành những sản phẩm ổn
            định, đáng tin cậy. Tôi chủ động học hỏi, có trách nhiệm cao và luôn
            hướng đến việc xây dựng kiến trúc RESTful an toàn cùng hệ thống dữ
            liệu có khả năng mở rộng.
          </motion.p>

          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full md:w-[280px] lg:w-[320px] shrink-0"
          >
            <Tilt
              options={{
                max: 25,
                scale: 1.04,
                speed: 500,
                perspective: 1200,
                glare: true,
                "max-glare": 0.25,
              }}
            >
              <div className="relative green-pink-gradient p-[1px] rounded-2xl shadow-[0_0_30px_rgba(145,94,255,0.35)]">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={avatar}
                    alt="Ho My Thuan avatar"
                    className="w-full h-[320px] object-cover bg-tertiary transition-transform duration-500 hover:scale-110"
                  />

                  {/* soft overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* animated shimmer stripe */}
                  <motion.div
                    aria-hidden
                    animate={{ x: ["-120%", "140%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-10 bottom-0 w-16 rotate-12 bg-white/20 blur-sm"
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
