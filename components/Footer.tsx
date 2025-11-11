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

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-x-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-xl font-bold">
                <Image
                  src="/logo-black.svg"
                  alt="logo"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed max-w-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Software Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Dedicated Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Staff Augmentation Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Development Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                <span>Envato, Level 13, 2 Elizabeth Victoria 3000 India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green" />
                <span>+91 861 944 176</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green" />
                <span>ezyoga@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-12 pt-8">
        <div className="bg-green -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-white text-sm">
            logoname. 2023. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
