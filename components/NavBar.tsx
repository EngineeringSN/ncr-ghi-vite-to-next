"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LayoutDashboard, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerWithLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import securenowLogo from "@/public/home/securenow_logo.svg";
import Image from "next/image";
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustryMenuOpen, setIsIndustryMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path: string) => pathname === path;
  const isTechPath = pathname.startsWith("/technology");
  const isServicePath = pathname.startsWith("/service");
  const isClaimProcessPath = pathname.startsWith("/claim-process");
  const isInsurersPath = pathname.startsWith("/insurers");
  const isQuotationPath = pathname.startsWith("/quotation");
  const isProductFeaturesPath = pathname.startsWith("/product-features");

  const handleNavigation = (e: any, path: string) => {
    e.preventDefault();
    router.push(path);
  };

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Product Features", path: "/product-features", hasSubmenu: true },
    { name: "Insurers", path: "/insurers", hasSubmenu: true },
    { name: "Claim Process", path: "/claim-process", hasSubmenu: true },
    { name: "Quotation", path: "/quotation", hasSubmenu: true },
    { name: "Industry", hasSubmenu: true },
    { name: "Technology", path: "/technology", hasSubmenu: true },
    { name: "Service", path: "/service", hasSubmenu: true },
  ];

  const industrySubpages = [
    { name: "Tech", path: "/industry/tech" },
    { name: "Consulting", path: "/industry/consulting" },
    { name: "E-Commerce", path: "/industry/e-commerce" },
    { name: "Food", path: "/industry/food" },
    { name: "Construction", path: "/industry/construction" },
    // { name: "Small Business", path: "/industry/small-business" },
    { name: "Gig Workers", path: "/industry/gig-workers" }, // Added Gig Workers subpage
  ];

  const techSubpages = [
    {
      name: "Overview",
      path: "/technology",
      icon: <Menu className="h-4 w-4 mr-2" />,
    },
    {
      name: "Dashboard",
      path: "/technology/dashboard",
      icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
    },
    {
      name: "E-Claims",
      path: "/technology/e-claims",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Flexi Plans",
      path: "/technology/flexi-plans",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
  ];

  const serviceSubpages = [
    {
      name: "Overview",
      path: "/service",
      icon: <Menu className="h-4 w-4 mr-2" />,
    },
    {
      name: "Endorsement",
      path: "/service/endorsement",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "SLA",
      path: "/service/sla",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Service Calls",
      path: "/service/service-calls",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
  ];

  // Add claim process subpages
  const claimProcessSubpages = [
    {
      name: "Overview",
      path: "/claim-process",
      icon: <Menu className="h-4 w-4 mr-2" />,
    },
    {
      name: "Cashless",
      path: "/claim-process/cashless",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Reimbursement",
      path: "/claim-process/reimbursement",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Pre-Post Hospitalization",
      path: "/claim-process/pre-post-claim",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "GIPSA",
      path: "/claim-process/gipsa",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Claim Status",
      path: "/claim-process/claim-status",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
  ];

  // Add insurers subpages with TPA
  const insurersSubpages = [
    {
      name: "Overview",
      path: "/insurers",
      icon: <Menu className="h-4 w-4 mr-2" />,
    },
    {
      name: "Policy Wordings",
      path: "/insurers/policy-wordings",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Claim Settlement Rate",
      path: "/insurers/claim-settlement-rate",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "TPA Services",
      path: "/tpa",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
  ];

  // Add quotation subpages
  const quotationSubpages = [
    {
      name: "Overview",
      path: "/quotation/overview",
      icon: <Menu className="h-4 w-4 mr-2" />,
    },
    {
      name: "Process",
      path: "/quotation/process",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Raters",
      path: "/quotation/raters",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Claim Ratio",
      path: "/quotation/claim-ratio",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Installments",
      path: "/quotation/installments",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Voluntary Perks",
      path: "/quotation/voluntary-perks",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "OPD",
      path: "/quotation/opd",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Top Up",
      path: "/quotation/top-up",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
  ];

  // Add product features subpages
  const productFeaturesSubpages = [
    {
      name: "Overview",
      path: "/product-features",
      icon: <Menu className="h-4 w-4 mr-2" />,
    },
    {
      name: "Room Rent Capping",
      path: "/product-features/room-rent-capping",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Copay",
      path: "/product-features/copay",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Cashless OPD",
      path: "/product-features/cashless-opd",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              href="https://securenow.in/"
              className="flex-shrink-0 flex items-center"
            >
              <Image
                src={securenowLogo}
                alt="SecureNow Logo"
                className="h-5 w-[140px] object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) =>
                  item.hasSubmenu && item.name === "Industry" ? (
                    <NavigationMenuItem key="Industry">
                      <NavigationMenuTriggerWithLink
                        href="/industry"
                        onClick={(e) => handleNavigation(e, "/industry")}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                          pathname.startsWith("/industry") &&
                            "text-securenow-blue"
                        )}
                      >
                        Industry
                      </NavigationMenuTriggerWithLink>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-2 p-4 md:w-[400px]">
                          {industrySubpages.map((sub) => (
                            <li key={sub.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.path}
                                  className={cn(
                                    "block select-none rounded-md px-3 py-2 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground",
                                    pathname === sub.path && "bg-accent"
                                  )}
                                >
                                  {sub.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasSubmenu && item.name === "Technology" ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTriggerWithLink
                        href="/technology"
                        onClick={(e) => handleNavigation(e, "/technology")}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                          isTechPath && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTriggerWithLink>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {techSubpages.map((subpage) => (
                            <li key={subpage.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subpage.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActivePath(subpage.path) && "bg-accent"
                                  )}
                                >
                                  <div className="flex items-center">
                                    {subpage.icon}
                                    <span className="text-sm font-medium">
                                      {subpage.name}
                                    </span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasSubmenu && item.name === "Service" ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTriggerWithLink
                        href="/service"
                        onClick={(e) => handleNavigation(e, "/service")}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                          isServicePath && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTriggerWithLink>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {serviceSubpages.map((subpage) => (
                            <li key={subpage.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subpage.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActivePath(subpage.path) && "bg-accent"
                                  )}
                                >
                                  <div className="flex items-center">
                                    {subpage.icon}
                                    <span className="text-sm font-medium">
                                      {subpage.name}
                                    </span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasSubmenu && item.name === "Claim Process" ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTriggerWithLink
                        href="/claim-process"
                        onClick={(e) => handleNavigation(e, "/claim-process")}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                          isClaimProcessPath && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTriggerWithLink>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {claimProcessSubpages.map((subpage) => (
                            <li key={subpage.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subpage.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActivePath(subpage.path) && "bg-accent"
                                  )}
                                >
                                  <div className="flex items-center">
                                    {subpage.icon}
                                    <span className="text-sm font-medium">
                                      {subpage.name}
                                    </span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasSubmenu && item.name === "Insurers" ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTriggerWithLink
                        href="/insurers"
                        onClick={(e) => handleNavigation(e, "/insurers")}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                          isInsurersPath && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTriggerWithLink>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {insurersSubpages.map((subpage) => (
                            <li key={subpage.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subpage.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActivePath(subpage.path) && "bg-accent"
                                  )}
                                >
                                  <div className="flex items-center">
                                    {subpage.icon}
                                    <span className="text-sm font-medium">
                                      {subpage.name}
                                    </span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasSubmenu && item.name === "Quotation" ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTriggerWithLink
                        href="/quotation"
                        onClick={(e) => handleNavigation(e, "/quotation")}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                          isQuotationPath && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTriggerWithLink>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {quotationSubpages.map((subpage) => (
                            <li key={subpage.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subpage.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActivePath(subpage.path) && "bg-accent"
                                  )}
                                >
                                  <div className="flex items-center">
                                    {subpage.icon}
                                    <span className="text-sm font-medium">
                                      {subpage.name}
                                    </span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasSubmenu && item.name === "Product Features" ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTriggerWithLink
                        href="/product-features"
                        onClick={(e) =>
                          handleNavigation(e, "/product-features")
                        }
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                          isProductFeaturesPath && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTriggerWithLink>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {productFeaturesSubpages.map((subpage) => (
                            <li key={subpage.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subpage.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActivePath(subpage.path) && "bg-accent"
                                  )}
                                >
                                  <div className="flex items-center">
                                    {subpage.icon}
                                    <span className="text-sm font-medium">
                                      {subpage.name}
                                    </span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        href={item.path || "#"}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out",
                          isActivePath(item.path ?? "") && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              className="bg-securenow-orange hover:bg-orange-600 text-white ml-4"
              onClick={() =>
                (window.location.href = "https://securenow.in/ghi-calculator")
              }
            >
              Get a Quote
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-securenow-darkgray hover:text-securenow-blue hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {mainNavItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.hasSubmenu && item.name === "Claim Process" ? (
                  <div>
                    <button
                      className={cn(
                        "flex justify-between items-center w-full text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md text-base font-medium",
                        isClaimProcessPath && "text-securenow-blue"
                      )}
                      onClick={() => setIsMobileMenuOpen(true)}
                    >
                      <span>Claim Process</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isClaimProcessPath && (
                      <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                        {claimProcessSubpages.map((subpage) => (
                          <Link
                            key={subpage.path}
                            href={subpage.path}
                            className={cn(
                              "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                              isActivePath(subpage.path) &&
                                "text-securenow-blue bg-gray-50"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subpage.icon}
                            {subpage.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.hasSubmenu && item.name === "Insurers" ? (
                  <div>
                    <button
                      className={cn(
                        "flex justify-between items-center w-full text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md text-base font-medium",
                        isInsurersPath && "text-securenow-blue"
                      )}
                      onClick={() => setIsMobileMenuOpen(true)}
                    >
                      <span>Insurers</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isInsurersPath && (
                      <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                        {insurersSubpages.map((subpage) => (
                          <Link
                            key={subpage.path}
                            href={subpage.path}
                            className={cn(
                              "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                              isActivePath(subpage.path) &&
                                "text-securenow-blue bg-gray-50"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subpage.icon}
                            {subpage.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.hasSubmenu && item.name === "Quotation" ? (
                  <div>
                    <button
                      className={cn(
                        "flex justify-between items-center w-full text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md text-base font-medium",
                        isQuotationPath && "text-securenow-blue"
                      )}
                      onClick={() => setIsMobileMenuOpen(true)}
                    >
                      <span>Quotation</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isQuotationPath && (
                      <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                        {quotationSubpages.map((subpage) => (
                          <Link
                            key={subpage.path}
                            href={subpage.path}
                            className={cn(
                              "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                              isActivePath(subpage.path) &&
                                "text-securenow-blue bg-gray-50"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subpage.icon}
                            {subpage.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.hasSubmenu && item.name === "Product Features" ? (
                  <div>
                    <button
                      className={cn(
                        "flex justify-between items-center w-full text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md text-base font-medium",
                        isProductFeaturesPath && "text-securenow-blue"
                      )}
                      onClick={() => setIsMobileMenuOpen(true)}
                    >
                      <span>Product Features</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isProductFeaturesPath && (
                      <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                        {productFeaturesSubpages.map((subpage) => (
                          <Link
                            key={subpage.path}
                            href={subpage.path}
                            className={cn(
                              "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                              isActivePath(subpage.path) &&
                                "text-securenow-blue bg-gray-50"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subpage.icon}
                            {subpage.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path || "#"}
                    className={cn(
                      "block text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md text-base font-medium",
                      isActivePath(item.path ?? "") && "text-securenow-blue"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.hasSubmenu &&
                  item.name === "Industry" &&
                  pathname.startsWith("/industry") && (
                    <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                      {industrySubpages.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          className={cn(
                            "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                            pathname === sub.path &&
                              "text-securenow-blue bg-gray-50"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                {item.hasSubmenu &&
                  item.name === "Technology" &&
                  isTechPath && (
                    <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                      {techSubpages.map((subpage) => (
                        <Link
                          key={subpage.path}
                          href={subpage.path}
                          className={cn(
                            "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                            isActivePath(subpage.path) &&
                              "text-securenow-blue bg-gray-50"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subpage.icon}
                          {subpage.name}
                        </Link>
                      ))}
                    </div>
                  )}
                {item.hasSubmenu &&
                  item.name === "Service" &&
                  isServicePath && (
                    <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                      {serviceSubpages.map((subpage) => (
                        <Link
                          key={subpage.path}
                          href={subpage.path}
                          className={cn(
                            "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                            isActivePath(subpage.path) &&
                              "text-securenow-blue bg-gray-50"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subpage.icon}
                          {subpage.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </React.Fragment>
            ))}
            <Button
              className="bg-securenow-orange hover:bg-orange-600 text-white w-full mt-2"
              onClick={() =>
                (window.location.href = "https://securenow.in/ghi-calculator")
              }
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
