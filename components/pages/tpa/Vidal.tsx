
import React from 'react';
// import MainLayout from '@/layouts/MainLayout';
import { Phone, Mail, MapPin, Building, Clock, Users } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const Vidal = () => {
  const hospitals = [
    { name: "Indraprastha Apollo Hospital", location: "Sarita Vihar, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Max Super Speciality Hospital", location: "Vaishali, Ghaziabad", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Fortis Hospital", location: "Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Metro Hospital", location: "Sector 11, Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Kailash Hospital", location: "Sector 27, Noida", type: "Multi-Specialty", cashless: "Business Hours" },
    { name: "Yashoda Super Speciality Hospital", location: "Kaushambi, Ghaziabad", type: "Super Specialty", cashless: "24x7" },
    { name: "Sharda Hospital", location: "Greater Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Felix Hospital", location: "Sector 137, Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Jaypee Hospital", location: "Sector 128, Noida", type: "Super Specialty", cashless: "24x7" },
    { name: "Cloudnine Hospital", location: "Sector 51, Noida", type: "Maternity & Child Care", cashless: "24x7" },
    { name: "Wish Clinic", location: "Sector 50, Noida", type: "Multi-Specialty", cashless: "Business Hours" },
    { name: "Ganpati Netralaya", location: "Sector 11, Noida", type: "Eye Specialty", cashless: "Business Hours" },
    { name: "Bhardwaj Hospital", location: "Greater Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Surya Hospital", location: "Mehrauli, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Delhi Heart & Lung Institute", location: "Panchsheel Park, Delhi", type: "Cardiac & Pulmonary", cashless: "24x7" },
    { name: "Kapoor Skin & Laser Clinic", location: "Lajpat Nagar, Delhi", type: "Dermatology", cashless: "Business Hours" },
    { name: "Moolchand Hospital", location: "Lajpat Nagar, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Sant Parmanand Hospital", location: "Civil Lines, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Dharamshila Narayana Superspeciality Hospital", location: "Vasundhara Enclave, Delhi", type: "Cancer Specialty", cashless: "24x7" },
    { name: "Action Cancer Hospital", location: "Paschim Vihar, Delhi", type: "Cancer Specialty", cashless: "24x7" }
  ];

  const breadcrumbItems = [
    { label: "Tpa", href: "/tpa" },
    { label: "Vidal" },
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Vidal Health TPA Services</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Comprehensive Third Party Administration services with focus on quality healthcare delivery
            </p>
          </div>
        </div>
      </section>

      {/* About TPA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">About Vidal Health</h2>
              <p className="text-gray-600 mb-4">
                Vidal Health TPA Services is a prominent Third Party Administrator providing comprehensive 
                healthcare administration services. Known for their efficient claim processing and extensive 
                hospital network, Vidal Health ensures seamless healthcare experiences.
              </p>
              <p className="text-gray-600 mb-6">
                They specialize in corporate health insurance administration, individual policy servicing, 
                and maintaining strong relationships with healthcare providers across the country.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-4">Key Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Quick Pre-Authorization</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">8,000+ Network Hospitals</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Expert Claims Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cashless Hospitals */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Cashless Hospitals in Delhi NCR</h2>
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
                  <span className="text-gray-700">1800-123-4567 (Toll Free)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                  <span className="text-gray-700">care@vidalhealth.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-securenow-blue mr-3 mt-1" />
                  <span className="text-gray-700">
                    Corporate Office, Connaught Place, New Delhi - 110001
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">Claim Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 1: Pre-Authorization</h4>
                  <p className="text-gray-600 text-sm">Submit pre-auth request with medical documents</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 2: Approval</h4>
                  <p className="text-gray-600 text-sm">Receive approval within 4-6 hours</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 3: Treatment</h4>
                  <p className="text-gray-600 text-sm">Receive cashless treatment at network hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Health Insurance with Vidal Health TPA</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience hassle-free healthcare with our comprehensive TPA services and network hospitals.
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

export default Vidal;
