import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import securenowLogo from "@/public/home/securenow_logo.svg";
import insuropediaLogo from "@/public/home/insuropediaLogo.png";
const Footer = () => {
  return (
    <footer className="bg-securenow-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Company Logo Left */}
          <Link
            href="https://securenow.in/"
            className="inline-block bg-slate-50 p-2 rounded mb-6 md:mb-0"
          >
            <Image
              src={securenowLogo}
              alt="SecureNow Logo"
              className="h-6 w-auto object-scale-down"
            />
          </Link>

          {/* Insuropedia Logo Right - Updated URL */}
          <a
            href="https://insuropedia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-50 p-2 rounded mr-[250px]"
          >
            <Image
              src={insuropediaLogo}
              alt="Insuropedia"
              width={140}
              className=""
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <p className="mb-4">
              India's leading insurance broker specialized in providing
              comprehensive group health insurance solutions in Delhi NCR.
            </p>
            <div className="flex items-center mt-4">
              <Phone size={16} className="mr-2" />
              <span>+91 9696683999</span>
            </div>
            <div className="flex items-center mt-2">
              <Mail size={16} className="mr-2" />
              <span>support@securenow.in</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPin size={16} className="mr-2 flex-shrink-0" />
              <span>
                No, 68 Plot, Sarhaul, Sector 18, Delhi NCR, Gurugram, Haryana
                122001
              </span>
            </div>

            {/* Add Map Component */}
            {/* <div className="mt-4">
              <Map height="200px" />
            </div> */}
            <div className="pt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.804590456069!2d77.06389877478061!3d28.485430975745377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190fb50c3971%3A0x5be968b48c203b66!2sSecureNow%20Insurance%20Broker%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1747118368835!5m2!1sen!2sin"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product-features"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Product Features
                </Link>
              </li>
              <li>
                <Link
                  href="/insurers"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Insurers
                </Link>
              </li>
              <li>
                <Link
                  href="/claim-process"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Claim Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/technology"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/quotation"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="hover:text-securenow-orange transition duration-150 ease-in-out"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} SecureNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
