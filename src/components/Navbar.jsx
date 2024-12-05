import { useState } from "react";
import { logo } from "../assets/home";
import Container from "./Container";

function Navbar({ isFormOpen, setIsFormOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-2 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4 items-center">
            <img
              className="h-[40px] cursor-pointer  w-[120px]"
              src={
                "https://media.licdn.com/dms/image/v2/D4E22AQGPm9Yn-om5Hw/feedshare-shrink_800/feedshare-shrink_800/0/1718646445687?e=2147483647&v=beta&t=E7-F_PlPZ8bI1Jj_HJlLDBYnWtfFjS3RbcsGZComa-s"
              }
              onClick={() => setIsFormOpen(!isFormOpen)}
              alt="Workflow"
            />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                {/* <a
                  href="#about"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a> */}
                <a
                  href="#eligibility"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Eligibility Criteria
                </a>
                <a
                  href="#benefits"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Benefits
                </a>
                <a
                  href="#application"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Application Process
                </a>
                <a
                  href="#jio"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Why Choose Jio?
                </a>
                <a
                  href="#testimonials"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#faqs"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQs
                </a>
                <a
                  href="#contact"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden transition-all" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
              <a
                href="#home"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              {/* <a
                href="#about"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </a> */}
              <a
                href="#eligibility-criteria"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Eligibility Criteria
              </a>
              <a
                href="#benefits"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Benefits
              </a>
              <a
                href="#application-process"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Application Process
              </a>
              <a
                href="#why-choose-jio"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Why Choose Jio?
              </a>
              <a
                href="#testimonials"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Testimonials
              </a>
              <a
                href="#faqs"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                FAQs
              </a>
              <a
                href="#contact-us"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
