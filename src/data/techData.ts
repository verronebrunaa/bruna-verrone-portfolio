import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiElixir,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiGithub,
  SiFigma,
  SiPostman,
  SiJest,
  SiCypress,
  SiDocker,
  SiVercel,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { PiFileCSharpDuotone } from "react-icons/pi";

export const techData = {
  linguagens: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: FaJava },
    { name: "C#", icon: PiFileCSharpDuotone },
    { name: "Elixir", icon: SiElixir },
  ],
  frontend: [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Three.js", icon: SiThreedotjs },
  ],
  ferramentas: [
    { name: "Git e GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Jest", icon: SiJest },
    { name: "Cypress", icon: SiCypress },
  ],
  infra: [
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
  ],
};
