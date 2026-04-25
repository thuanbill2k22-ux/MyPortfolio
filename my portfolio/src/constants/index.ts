// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  avtDoinogiup,
  avtTravelPlanner,
  user1,
  user2,
  user3,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "Giới thiệu",
    link: null,
  },
  {
    id: "work",
    title: "Kinh nghiệm",
    link: null,
  },
  {
    id: "contact",
    title: "Liên hệ",
    link: null,
  },
  {
    id: "source-code",
    title: "Mã nguồn",
    link: "https://github.com/HoThuann",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Phát triển Backend",
    icon: web,
  },
  {
    title: "Tích hợp AI",
    icon: mobile,
  },
  {
    title: "Thiết kế API và Hệ thống",
    icon: backend,
  },
  {
    title: "Kỹ thuật định hướng nghiên cứu",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Express.js",
    icon: reactjs,
  },
  {
    name: "Next.js Route Handlers",
    icon: redux,
  },
  {
    name: "FastAPI",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MySQL / Firestore",
    icon: mongodb,
  },
  {
    name: "Gemini API",
    icon: threejs,
  },
  {
    name: "Git / GitHub",
    icon: git,
  },
  {
    name: "Postman",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Kỹ sư Backend (Dự án sinh viên)",
    company_name: "Ngành Kỹ thuật Phần mềm CTUT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024 - Nay",
    points: [
      "Xây dựng và vận hành dịch vụ backend cho ứng dụng đa người dùng với kiến trúc RESTful có khả năng mở rộng.",
      "Tập trung vào validation phía server và thiết kế schema cơ sở dữ liệu rõ ràng để đảm bảo toàn vẹn dữ liệu.",
      "Tích hợp tính năng thời gian thực và quy trình có AI vào môi trường dự án gần với thực tế.",
      "Làm việc nhóm hiệu quả đồng thời đảm nhận vai trò định hướng kỹ thuật backend.",
    ],
  },
  {
    title: "Trưởng nhóm và Kiến trúc sư Backend",
    company_name: "Nền tảng Travel Planner",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Thiết kế API Node.js cho nghiệp vụ CRUD chuyến đi và quy trình cộng tác nhóm.",
      "Triển khai chat thời gian thực bằng Socket.IO để tăng khả năng phối hợp.",
      "Phát triển module theo dõi chi phí, quản lý ngân sách và xuất báo cáo PDF tự động.",
      "Tối ưu mô hình quan hệ MySQL để giữ tính nhất quán khi có nhiều người dùng đồng thời.",
    ],
  },
  {
    title: "Lập trình viên Backend AI",
    company_name: "DoiNoGiup",
    icon: shopify,
    iconBg: "#383E56",
    date: "2025 - 2026",
    points: [
      "Tích hợp Google Gemini thông qua @ai-sdk/google cho tương tác tư vấn đòi nợ theo thời gian thực.",
      "Xây dựng route handler an toàn trên Next.js cho quy trình gửi email và thông báo theo sự kiện.",
      "Áp dụng validation chặt chẽ cùng cấu hình theo môi trường để tăng độ ổn định hệ thống.",
      "Triển khai logic backend cân bằng giữa trải nghiệm người dùng, tuân thủ và kiểm soát vận hành.",
    ],
  },
  {
    title: "Đóng góp Nghiên cứu và Đổi mới",
    company_name: "Hội nghị AI trong Chuyển đổi số",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "01/2026",
    points: [
      "Trình bày nghiên cứu về website chẩn đoán y khoa sơ bộ bằng chatbot.",
      "Khảo sát hướng ứng dụng AI để mở rộng khả năng tiếp cận dịch vụ y tế.",
      "Đạt chứng nhận Gemini Certified Student từ Google for Education.",
      "Nhận giải Sinh viên 5 tốt cấp trường CTUT với thành tích toàn diện.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Thuận luôn chủ động nhận các bài toán backend phức tạp và bàn giao giải pháp ổn định, cấu trúc tốt.",
    name: "Đồng đội dự án",
    designation: "Lập trình viên Frontend",
    company: "Nhóm Travel Planner",
    image: user1,
  },
  {
    testimonial:
      "Cách Thuận tích hợp AI rất thực tế, có định hướng sản phẩm rõ ràng, đặc biệt ở validation và độ tin cậy.",
    name: "Người đánh giá kỹ thuật",
    designation: "Kỹ sư phần mềm",
    company: "Dự án DoiNoGiup",
    image: user2,
  },
  {
    testimonial:
      "Thuận kết hợp được tư duy nghiên cứu và năng lực triển khai thực tế, nên thích ứng rất nhanh ở lĩnh vực mới.",
    name: "Người hướng dẫn học thuật",
    designation: "Giảng viên",
    company: "CTUT",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "DoiNoGiup",
    description:
      "Hệ thống tư vấn đòi nợ ứng dụng AI với Gemini streaming theo thời gian thực, route handler an toàn và quy trình email tự động để đảm bảo tuân thủ.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "nodemailer",
        color: "pink-text-gradient",
      },
    ],
    image: avtDoinogiup,
    source_code_link: "https://github.com/HoThuann/DoiNoGiup.git",
    live_site_link: "https://doinogiup.netlify.app/",
  },
  {
    name: "Travel Planner",
    description:
      "Nền tảng quản lý du lịch cộng tác nhóm với REST API Node.js, xử lý dữ liệu đa người dùng, chat Socket.IO thời gian thực và module tài chính thông minh.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: avtTravelPlanner,
    source_code_link: "https://github.com/HoThuann/Travel-Planner.git",
    live_site_link: "https://do-an-04.vercel.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/HoThuann",
  },
] as const;
