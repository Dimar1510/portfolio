import FooterSocialItem from "./FooterSocialItem";
import CV from "../../assets/cv/cv.pdf";

const links = [
  {
    name: "Github",
    href: "https://github.com/Dimar1510",
    icon: "devicon-github-original",
  },
  {
    name: "Telegram",
    href: "https://t.me/dimar1150",
    icon: "bx bxl-telegram",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9164811962",
    icon: "bx bxl-whatsapp",
  },
  {
    name: "Email",
    href: "mailto:dimar1150@gmail.com",
    icon: "bx bx-envelope",
  },
  {
    name: "Резюме",
    href: CV,
    icon: "bx bx-file",
  },
];

export default function Footer() {
  return (
    <footer className="bg-container-clr transition-colors duration-500 border-t-2 border-black/10 py-12">
      <div className="custom-container flex flex-col gap-8">
        <div className="flex justify-center gap-12">
          {links.map((link) => {
            return (
              <FooterSocialItem
                name={link.name}
                href={link.href}
                icon={link.icon}
                key={link.name}
              />
            );
          })}
        </div>
        <span className="text-center uppercase text-sm text-text-clr transition-colors duration-500">
          Dmitry Martynov
        </span>
      </div>
    </footer>
  );
}
