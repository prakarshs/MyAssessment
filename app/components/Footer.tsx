import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Github from "../../public/assets/Github.svg";
import Resume from "../../public/assets/Resume.svg";
import LinkedIn from "../../public/assets/LinkedIn.svg";
import Medium from "../../public/assets/Medium.svg";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" />
        <p className="font-bold text-[#36485C] text-[17px]"><a href="https://prakarshs.github.io/Web-Portfolio/" target="_blank">Prakarsh Srivastava</a></p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <a href="https://github.com/prakarshs/" target="_blank"><Image src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/prakarsh2101/" target="_blank"><Image src={LinkedIn} alt="LinkedIn" /></a>
        <a href="https://drive.google.com/drive/u/0/folders/1g2SO-bdVpNWQDCuSkEU3zETUhhr_CkrY" target="_blank"><Image src={Resume} alt="Resume" /></a>
        <a href="https://medium.com/@prakarsh2101" target="_blank"><Image src={Medium} alt="Medium" /></a>
        
        
        
      </div>
    </div>
  );
}
