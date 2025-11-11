import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

// Memoized Social Icon
const SocialIcon = memo(
  ({ href, Icon }: { href: string; Icon: React.FC<any> }) => (
    <a
      href={href}
      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
      aria-label="Social link"
    >
      <Icon className="w-4 h-4 text-white" />
    </a>
  )
);
SocialIcon.displayName = "SocialIcon";

// Memoized Nav List Item
const NavItem = memo(
  ({ href, children }: { href: string; children: string }) => (
    <li>
      <a
        href={href}
        className="hover:text-green-400 transition-colors block text-sm font-light"
      >
        {children}
      </a>
    </li>
  )
);
NavItem.displayName = "NavItem";

// Memoized Contact Item
const ContactItem = memo(
  ({ Icon, children }: { Icon: React.FC<any>; children: string }) => (
    <li className="flex items-start space-x-2">
      <Icon className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
      <span className="text-sm font-light">{children}</span>
    </li>
  )
);
ContactItem.displayName = "ContactItem";

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 sm:pt-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                <Image
                  src="/logo-black.svg"
                  alt="Logo"
                  width={200}
                  height={50}
                  priority
                  className="h-auto w-auto"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed max-w-xs font-light text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="#" Icon={Facebook} />
              <SocialIcon href="#" Icon={Twitter} />
              <SocialIcon href="#" Icon={Linkedin} />
              <SocialIcon href="#" Icon={Youtube} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <NavItem href="#">Software Team</NavItem>
              <NavItem href="#">Technologies</NavItem>
              <NavItem href="#">Resources</NavItem>
              <NavItem href="#">Company</NavItem>
              <NavItem href="#">Contact us</NavItem>
              <NavItem href="#">FAQ</NavItem>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Services
            </h3>
            <ul className="space-y-2">
              <NavItem href="#">Dedicated Development</NavItem>
              <NavItem href="#">Staff Augmentation Services</NavItem>
              <NavItem href="#">Software Development</NavItem>
              <NavItem href="#">Development Center</NavItem>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <ContactItem Icon={MapPin}>
                Envato, Level 13, 2 Elizabeth Victoria 3000 India
              </ContactItem>
              <ContactItem Icon={Phone}>+91 861 944 176</ContactItem>
              <ContactItem Icon={Mail}>ezyoga@gmail.com</ContactItem>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 sm:mt-12 pt-6 sm:pt-8">
        <div className="bg-green -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-white text-xs sm:text-sm font-light">
            logoname. 2023. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
