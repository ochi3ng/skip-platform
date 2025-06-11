"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const breadcrumbItems = [
  { name: "Postcode", href: "#", color: "text-green-600 dark:text-green-400" },
  { name: "Waste Type", href: "#", color: "text-green-600 dark:text-green-400" },
  { name: "Select Skip", href: "#", color: "text-blue-600 dark:text-blue-400" },
  { name: "Permit Check", href: "#" },
  { name: "Choose Date", href: "#" },
  { name: "Payment", href: "#" },
];

const BreadcrumbNav = () => {

  return (
    <div className="w-full border-b bg-gray-50 dark:bg-neutral-900 py-4 px-4 sm:px-6 lg:px-8">

      {/* Desktop Breadcrumb */}
      <div className="hidden lg:flex justify-center">
        <Breadcrumb className="inline-flex min-w-max whitespace-nowrap">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.href}
                  className={`font-semibold ${item.color || ""}`}
                >
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </Breadcrumb>
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden flex justify-center">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md bg-white dark:bg-neutral-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700">
            Navigation
            <ChevronDown className="h-4 w-4" />
          </Menu.Button>
          <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {breadcrumbItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={`block px-4 py-2 text-sm ${
                        item.color || "text-gray-700 dark:text-gray-200"
                      } ${active ? "bg-gray-100 dark:bg-neutral-700" : ""}`}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default BreadcrumbNav;
