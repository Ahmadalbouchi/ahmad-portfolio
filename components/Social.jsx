import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp  } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: " https://github.com/Ahmadalbouchi" },
  { icon: <FaLinkedinIn />, path: "  https://www.linkedin.com/in/ahmad-al-bouchi/ " },
  { icon: <FaWhatsapp />, path: "               https://wa.me/qr/3TZOB643FACOH1    " },
  { icon: <FaTwitter />, path: " https://x.com/AhmadAlboushi2?s=08" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default Social;

  