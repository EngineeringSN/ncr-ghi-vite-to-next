"use client";
import axios from "axios";
import { useEffect, useState } from "react";
// import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  MapPin,
  Phone,
  User,
  Mail,
  Users,
  Building,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BreadcrumbNav from "../BreadcrumbNav";
import BreadcrumbSchema from "../BreadcrumbSchema";
const formSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  cityName: z.string().min(2, "City name is required"),
  fullName: z.string().min(2, "Full name is required"),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  emailAddress: z.string().email("Please enter a valid email address"),
  employeeCount: z.string().min(1, "Employee count is required"),
});
const Quotation = () => {
  const { toast } = useToast();
  const [cities, setCities] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      cityName: "",
      fullName: "",
      mobileNumber: "",
      emailAddress: "",
      employeeCount: "",
    },
  });
  const [companyName, setCompanyName] = useState("");
  const [cityName, setCityName] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
        const response = await axios.get(
          `https://securenow.in/profession/api/v1/getCityList`
        );
        const cityList = response.data?.data;
        if (Array.isArray(cityList)) {
          setCities(cityList);
        }
      } catch (error) {
        console.error("Failed to fetch cities", error);
      }
    };
    fetchCities();
  }, []);
  useEffect(() => {
    if (search) {
      const results = cities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  }, [search, cities]);

  // const handleSubmit = (values: z.infer<typeof formSchema>) => {
  // toast({
  // title: "Quote request submitted",
  // description: "We'll get back to you with a customized quote soon.",
  // });
  // form.reset();
  // setCompanyName("");
  // setCityName("");
  // setFullName("");
  // setMobileNumber("");
  // setEmailAddress("");
  // setEmployeeCount("");

  // window.location.href =
  // "https://securenow.in/group-insurance/group-health-insurance";
  // };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsBtnLoading(true);
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(
        `https://securenow.in/profession/api/v1/createOrUpdateProspect`,
        {
          company: companyName,
          location: cityName,
          mobile: mobileNumber,
          email: emailAddress,
          product: "1",
          channel: "SEO GHI PAGE",
          googleClickID: "",
          isSuccess: "",
          leadSource: "https://grouphealthinsurance.co",
          name: fullName,
          partnerId: "",
          prospectId: "",
          rmId: "",
        }
      );
      const { isSuccess, status } = response.data;
      if (isSuccess === true) {
        form.reset();
        setIsBtnLoading(false);
        setCompanyName("");
        setCityName("");
        setFullName("");
        setMobileNumber("");
        setEmailAddress("");
        setEmployeeCount("");
        window.location.href = `https://securenow.in/group-insurance/group-health-insurance/group-health-quote?prospectid=${encodeURIComponent(
          response.data.data.prospectId
        )}&count=${encodeURIComponent(employeeCount)}`;
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again later.",
          variant: "destructive",
        });
        setIsBtnLoading(false);
      }
    } catch (error) {
      console.error("API Error:", error);
      setIsBtnLoading(false);
      toast({
        title: "Something went wrong",
        description: "Unable to submit your quote request.",
        variant: "destructive",
      });
    }
  };
  const breadcrumbItems = [{ label: "Quotation" }];
  return (
    <>
    <BreadcrumbSchema/>
    <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get a Customized Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fill out the form below to receive a tailored group health insurance
            quote for your business in Delhi NCR.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-securenow-blue mb-6">
                  Request a Quote
                </h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                className="pl-10"
                                placeholder="Enter company name"
                                value={companyName}
                                onChange={(e) => {
                                  setCompanyName(e.target.value);
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cityName"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel>City Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                className="pl-10"
                                placeholder="Enter city name"
                                value={cityName}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setSearch(val);
                                  setCityName(val);
                                  field.onChange(val);
                                }}
                                onBlur={() => {
                                  setTimeout(() => setFilteredCities([]), 100);
                                }}
                              />
                              {filteredCities.length > 0 && (
                                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow max-h-60 overflow-y-auto">
                                  {filteredCities.map((city, index) => (
                                    <li
                                      key={index}
                                      onMouseDown={() => {
                                        setSearch(city);
                                        setCityName(city);
                                        field.onChange(city);
                                        setFilteredCities([]);
                                      }}
                                      className="px-4 py-2 cursor-pointer hover:bg-securenow-blue hover:text-white"
                                    >
                                      {city}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                className="pl-10"
                                placeholder="Enter full name"
                                value={fullName}
                                onChange={(e) => {
                                  setFullName(e.target.value);
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                className="pl-10"
                                placeholder="Enter mobile number"
                                value={mobileNumber}
                                onChange={(e) => {
                                  setMobileNumber(e.target.value);
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="emailAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                className="pl-10"
                                placeholder="Enter email address"
                                value={emailAddress}
                                onChange={(e) => {
                                  setEmailAddress(e.target.value);
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="employeeCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employee Count</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                className="pl-10"
                                placeholder="Enter number of employees"
                                value={employeeCount}
                                onChange={(e) => {
                                  setEmployeeCount(e.target.value);
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {isBtnLoading ? (
                      <div
                        role="status"
                        className="w-full bg-securenow-blue hover:bg-securenow-blue/90 flex justify-center p-2 items-center gap-2"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="text-white">Loading...</span>
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full bg-securenow-blue hover:bg-securenow-blue/90"
                      >
                        Submit Quote Request
                      </Button>
                    )}
                  </form>
                </Form>
              </div>

              <div className="md:w-1/3 bg-securenow-blue p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  {[
                    "IRDAI licensed insurance broker",
                    "Multiple insurer comparison",
                    "Best premium rates in the market",
                    "Dedicated service support",
                    "End-to-end claims assistance",
                    "3000+ satisfied corporate clients",
                  ].map((text, i) => (
                    <div className="flex items-start" key={i}>
                      <CheckCircle className="h-5 w-5 text-securenow-orange mr-3 mt-1" />
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-10 border-t border-white/20">
                  <h3 className="text-lg font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-securenow-orange" />
                      +91 9696683999
                    </p>
                    <a
                      href="mailto:support@securenow.in"
                      className="text-securenow-orange hover:underline"
                    >
                      support@securenow.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Quotation;
