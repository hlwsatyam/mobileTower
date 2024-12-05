import { logo_2 } from "../assets/home";
import Container from "./Container";

export default function Footer() {
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#" },
        { name: "Services", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Memberships", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Experts", href: "#" },
        { name: "Organizations", href: "#" },
        { name: "Funding", href: "#" },
        { name: "Awards", href: "#" },
        { name: "Donors", href: "#" },
        { name: "News", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "RSS", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#212121] py-14 text-white">
      <Container>
        <div className="grid place-items-center sm:text-left text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* Logo and Dashboard Login */}
          <div>
            <img src={logo_2} alt="Grant canyon" className="w-44 h-14 mb-6" />
            <button onClick={()=> window.location.href = "/admin"} type="button"className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-all">
              Dashboard Login
            </button>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">{section.title}</h1>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:text-blue-400">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
