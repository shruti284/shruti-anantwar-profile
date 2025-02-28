import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const logo = require("./../assets/Shruti-Logo.png");

const navigation = [
  { name: "Home", to: "/" },
  { name: "Work", to: "/work" },
  // { name: "Education", to: "/education" },
  { name: "Contact", to: "/contact" },
];

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Disclosure as="nav" className="bg-black">
        {({ open, close }) => ( // Extract 'close' function from Disclosure
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block size-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block size-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo and Desktop Navigation */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center">
                    <Link to="/" onClick={() => close()}>
                      <img alt="Shruti Anantwar" src={logo} className="h-14 w-auto" />
                    </Link>
                  </div>
                  <div className="hidden sm:block ml-20 pt-3">
                    <ul className="flex space-x-4">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.to}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel as="div" className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                    onClick={() => close()} // Close menu on click
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
