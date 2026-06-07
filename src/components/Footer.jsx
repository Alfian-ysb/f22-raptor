import React from "react";

const Footer = () => {
  const footerLinks = {
    "Explore": [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
    ],
    "Reference": [
      { name: "Lockheed Martin", href: "#" },
      { name: "U.S. Air Force", href: "#" },
      { name: "Military.com", href: "#" },
    ],
    "Legal": [
      { name: "Contact us", href: "#" },
      { name: "Terms & conditions", href: "#" },
      { name: "Privacy policy", href: "#" },
    ]
  };
    
  return (
    <div id="footer" className="w-full h-auto py-16 grid grid-cols-1 md:grid-cols-5 gap-8 scroll-mt-28">
      {/* Container Logo - Tengah di mobile, Kiri di desktop */}
      <div className="w-full max-w-[226px] h-auto col-span-1 mx-auto md:mx-0 flex justify-center md:justify-start">
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 226 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M105.393 113V47.2986H9.49339V56.3386C9.49339 61.5043 13.6769 65.8629 18.9868 65.8629H86.4059V113H105.393ZM105.393 9.68571C105.393 4.35857 101.209 0.161426 95.8993 0.161426H0V9.04C0 14.3671 4.34444 18.5643 9.49339 18.5643H105.393V9.68571Z"
            fill="#F1F1F1"
          />
          <path
            d="M224.069 32.9314C224.069 47.1371 214.737 59.89 201.221 64.2486L226 113H212.323C207.818 113 203.634 110.579 201.542 106.543L180.947 65.8629H135.25V103.476C135.25 108.803 130.905 113 125.595 113H116.263V47.2986H191.245C199.129 47.2986 205.404 40.8414 205.404 32.9314C205.404 25.0214 199.129 18.5643 191.245 18.5643H125.756C120.446 18.5643 116.263 14.2057 116.263 9.04V0.161426H190.279C190.44 0 190.923 0 191.245 0C209.266 0 224.069 14.8514 224.069 32.9314Z"
            fill="#F1F1F1"
          />
        </svg>
      </div>

      {/* Container Links - Menumpuk vertikal di mobile, Sejajar horizontal di desktop */}
      <div className="w-full h-auto col-span-1 md:col-span-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between md:justify-end gap-8 md:gap-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4 min-w-30">
              <h3 className="text-lg font-bold">{category}</h3>
              <ul className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-primary/90 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;