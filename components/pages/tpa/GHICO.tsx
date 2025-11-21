
import React from 'react';
import { Phone, Mail, MapPin, Building, Clock, Users } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const GHICO = () => {
  const hospitals = [
    { name: "AIIMS Delhi", location: "Ansari Nagar, Delhi", type: "Government", cashless: "24x7" },
    { name: "Safdarjung Hospital", location: "Safdarjung, Delhi", type: "Government", cashless: "24x7" },
    { name: "Ram Manohar Lohia Hospital", location: "Connaught Place, Delhi", type: "Government", cashless: "Business Hours" },
    { name: "Lady Hardinge Medical College", location: "Shaheed Bhagat Singh Marg, Delhi", type: "Government", cashless: "Business Hours" },
    { name: "Lok Nayak Hospital", location: "Delhi Gate, Delhi", type: "Government", cashless: "24x7" },
    { name: "Guru Teg Bahadur Hospital", location: "Dilshad Garden, Delhi", type: "Government", cashless: "24x7" },
    { name: "All India Institute of Medical Sciences", location: "New Delhi", type: "Government", cashless: "24x7" },
    { name: "Central Government Health Scheme", location: "Various Locations, Delhi", type: "Government", cashless: "Business Hours" },
    { name: "Dr. Baba Saheb Ambedkar Hospital", location: "Rohini, Delhi", type: "Government", cashless: "24x7" },
    { name: "Bhagwan Mahavir Hospital", location: "Pitampura, Delhi", type: "Government", cashless: "Business Hours" },
    { name: "Deen Dayal Upadhyay Hospital", location: "Hari Nagar, Delhi", type: "Government", cashless: "24x7" },
    { name: "Chacha Nehru Bal Chikitsalaya", location: "Geeta Colony, Delhi", type: "Pediatric Government", cashless: "24x7" },
    { name: "Sanjay Gandhi Memorial Hospital", location: "Mangolpuri, Delhi", type: "Government", cashless: "Business Hours" },
    { name: "Maharishi Valmiki Hospital", location: "Pooth Khurd, Delhi", type: "Government", cashless: "24x7" },
    { name: "ESIC Hospital", location: "Okhla, Delhi", type: "Government", cashless: "Business Hours" },
    { name: "Railway Hospital", location: "New Delhi Railway Station", type: "Government", cashless: "24x7" },
    { name: "Hindu Rao Hospital", location: "Civil Lines, Delhi", type: "Government", cashless: "24x7" },
    { name: "Rajiv Gandhi Super Speciality Hospital", location: "Tahirpur, Delhi", type: "Government", cashless: "24x7" },
    { name: "LNJP Hospital", location: "Delhi Gate, Delhi", type: "Government", cashless: "24x7" },
    { name: "Northern Railway Central Hospital", location: "Basant Lane, Delhi", type: "Government", cashless: "Business Hours" }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">GHICO (Government Health Insurance Company)</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Specialized TPA services for government health insurance schemes and public sector employees
            </p>
          </div>
        </div>
      </section>

      {/* About TPA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">About GHICO</h2>
              <p className="text-gray-600 mb-4">
                Government Health Insurance Company (GHICO) is a specialized Third Party Administrator 
                focusing on government health insurance schemes, CGHS (Central Government Health Scheme), 
                and public sector employee health benefits.
              </p>
              <p className="text-gray-600 mb-6">
                GHICO manages healthcare services for government employees, pensioners, and their dependents, 
                ensuring seamless access to quality healthcare through government and empaneled hospitals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-4">Key Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">CGHS Claim Processing</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Government Hospital Network</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Employee Health Benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cashless Hospitals */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Government Network Hospitals in Delhi NCR</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hospital Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Services Available</TableHead>
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
                  <span className="text-gray-700">1800-180-1111 (CGHS Helpline)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                  <span className="text-gray-700">cghs@gov.in</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-securenow-blue mr-3 mt-1" />
                  <span className="text-gray-700">
                    CGHS Building, Lodhi Road, New Delhi - 110003
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">CGHS Benefits Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 1: Card Verification</h4>
                  <p className="text-gray-600 text-sm">Present CGHS card at empaneled hospital</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 2: Treatment Authorization</h4>
                  <p className="text-gray-600 text-sm">Hospital verifies eligibility for treatment</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 3: Cashless Treatment</h4>
                  <p className="text-gray-600 text-sm">Receive treatment without upfront payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Government Employee Health Benefits</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive healthcare coverage for government employees and their families.
          </p>
          <a
            href="https://securenow.in/ghi-calculator"
            className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </section>
    </>
  );
};

export default GHICO;
