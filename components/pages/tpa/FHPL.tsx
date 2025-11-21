
import React from 'react';
import { Phone, Mail, MapPin, Building, Clock, Users } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const FHPL = () => {
  const hospitals = [
    { name: "Fortis Hospital", location: "Vasant Kunj, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Fortis Flt Lt Rajan Dhall Hospital", location: "Aruna Asaf Ali Marg, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Fortis Hospital", location: "Shalimar Bagh, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Fortis Memorial Research Institute", location: "Sector 44, Gurugram", type: "Super Specialty", cashless: "24x7" },
    { name: "Fortis Hospital", location: "Sector 62, Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Fortis Escorts Heart Institute", location: "Okhla Road, Delhi", type: "Cardiac Specialty", cashless: "24x7" },
    { name: "BLK Super Speciality Hospital", location: "Pusa Road, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Max Super Speciality Hospital", location: "Saket, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Artemis Hospital", location: "Sector 51, Gurugram", type: "Super Specialty", cashless: "24x7" },
    { name: "Medanta The Medicity", location: "Sector 38, Gurugram", type: "Super Specialty", cashless: "24x7" },
    { name: "Manipal Hospital", location: "Dwarka, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Columbia Asia Hospital", location: "Sector 34, Gurugram", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Paras Hospital", location: "Sector 43, Gurugram", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Sarvodaya Hospital", location: "Sector 8, Faridabad", type: "Multi-Specialty", cashless: "Business Hours" },
    { name: "Metro Heart Institute", location: "Sector 16A, Faridabad", type: "Cardiac Specialty", cashless: "24x7" },
    { name: "Yashoda Super Speciality Hospital", location: "Nehru Place, Delhi", type: "Super Specialty", cashless: "24x7" },
    { name: "Park Hospital", location: "Sector 47, Gurugram", type: "Multi-Specialty", cashless: "Business Hours" },
    { name: "Rockland Hospital", location: "Manesar, Gurugram", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Marengo Asia Hospital", location: "Sector 56, Gurugram", type: "Super Specialty", cashless: "24x7" },
    { name: "CK Birla Hospital", location: "Sector 51, Gurugram", type: "Multi-Specialty", cashless: "24x7" }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Family Health Plan Limited (FHPL)</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Leading TPA services with extensive hospital network and efficient healthcare administration
            </p>
          </div>
        </div>
      </section>

      {/* About TPA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">About FHPL</h2>
              <p className="text-gray-600 mb-4">
                Family Health Plan Limited (FHPL) is a premier Third Party Administrator with extensive 
                experience in healthcare administration. FHPL provides comprehensive TPA services to 
                insurance companies, corporates, and individual policyholders.
              </p>
              <p className="text-gray-600 mb-6">
                Known for their robust technology platform and efficient claim processing, FHPL has 
                established itself as a trusted partner in the health insurance ecosystem with a 
                strong network of quality healthcare providers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-4">Key Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Fast Pre-Authorization Processing</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">10,000+ Network Hospitals</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">24x7 Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cashless Hospitals */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Premium Network Hospitals in Delhi NCR</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hospital Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Cashless Available</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hospitals.map((hospital, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{hospital.name}</TableCell>
                    <TableCell>{hospital.location}</TableCell>
                    <TableCell>{hospital.type}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        hospital.cashless === '24x7' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {hospital.cashless}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-securenow-blue mr-3" />
                  <span className="text-gray-700">1800-102-4414 (Toll Free)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                  <span className="text-gray-700">customercare@fhpl.net</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-securenow-blue mr-3 mt-1" />
                  <span className="text-gray-700">
                    FHPL House, Sector 18, Gurugram, Haryana - 122015
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">Cashless Treatment Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 1: Hospital Visit</h4>
                  <p className="text-gray-600 text-sm">Visit any FHPL network hospital with your health card</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 2: Pre-Authorization</h4>
                  <p className="text-gray-600 text-sm">Hospital submits pre-auth request to FHPL</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 3: Treatment</h4>
                  <p className="text-gray-600 text-sm">Receive approved treatment without any payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Choose FHPL for Reliable Healthcare</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get comprehensive health insurance with FHPL's extensive network and efficient services.
          </p>
          <a
            href="https://securenow.in/ghi-calculator"
            className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Get Quote
          </a>
        </div>
      </section>
    </>
  );
};

export default FHPL;
