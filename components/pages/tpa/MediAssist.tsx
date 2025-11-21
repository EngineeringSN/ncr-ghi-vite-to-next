
import React from 'react';
import { Phone, Mail, MapPin, Building, Clock, Users } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const MediAssist = () => {
  const hospitals = [
    { name: "Max Super Speciality Hospital", location: "Saket, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Fortis Hospital", location: "Shalimar Bagh, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Apollo Hospital", location: "Indraprastha, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Artemis Hospital", location: "Gurugram, Haryana", type: "Super Specialty", cashless: "24x7" },
    { name: "BLK Super Speciality Hospital", location: "Pusa Road, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Sir Ganga Ram Hospital", location: "Rajinder Nagar, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Primus Super Speciality Hospital", location: "Chanakyapuri, Delhi", type: "Super Specialty", cashless: "24x7" },
    { name: "Pushpawati Singhania Hospital", location: "Sheikh Sarai, Delhi", type: "Multi-Specialty", cashless: "Business Hours" },
    { name: "Max Hospital", location: "Patparganj, Delhi", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Fortis Memorial Research Institute", location: "Sector 44, Gurugram", type: "Super Specialty", cashless: "24x7" },
    { name: "Medanta The Medicity", location: "Sector 38, Gurugram", type: "Super Specialty", cashless: "24x7" },
    { name: "Asian Hospital", location: "Sector 21, Faridabad", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Metro Hospital", location: "Sector 11, Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Kailash Hospital", location: "Sector 27, Noida", type: "Multi-Specialty", cashless: "Business Hours" },
    { name: "Sharda Hospital", location: "Greater Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Felix Hospital", location: "Sector 137, Noida", type: "Multi-Specialty", cashless: "24x7" },
    { name: "Jaypee Hospital", location: "Sector 128, Noida", type: "Super Specialty", cashless: "24x7" },
    { name: "Cloudnine Hospital", location: "Sector 51, Noida", type: "Maternity & Child Care", cashless: "24x7" },
    { name: "W Pratiksha Hospital", location: "Sector 110, Gurugram", type: "Multi-Specialty", cashless: "Business Hours" },
    { name: "Yashoda Super Speciality Hospital", location: "Kaushambi, Ghaziabad", type: "Super Specialty", cashless: "24x7" }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Medi Assist India TPA Services</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Leading Third Party Administrator providing comprehensive cashless healthcare services across Delhi NCR
            </p>
          </div>
        </div>
      </section>

      {/* About TPA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">About Medi Assist</h2>
              <p className="text-gray-600 mb-4">
                Medi Assist India TPA Services Limited is one of India's leading Third Party Administrators (TPA) 
                providing comprehensive health insurance services. With over two decades of experience, Medi Assist 
                has been at the forefront of healthcare administration.
              </p>
              <p className="text-gray-600 mb-6">
                They specialize in cashless claim processing, pre-authorization services, and maintaining extensive 
                hospital networks to ensure seamless healthcare experiences for policyholders.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-4">Key Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">24x7 Pre-Authorization Services</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">15,000+ Network Hospitals</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Dedicated Customer Support</span>
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
                  <span className="text-gray-700">1800-102-4477 (Toll Free)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                  <span className="text-gray-700">care@mediassist.in</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-securenow-blue mr-3 mt-1" />
                  <span className="text-gray-700">
                    5th Floor, Prestige Meridian 2, MG Road, Bangalore - 560001
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">Pre-Authorization Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 1: Hospital Admission</h4>
                  <p className="text-gray-600 text-sm">Present your health card at network hospital</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 2: Pre-Authorization</h4>
                  <p className="text-gray-600 text-sm">Hospital submits request to Medi Assist</p>
                </div>
                <div className="border-l-4 border-securenow-blue pl-4">
                  <h4 className="font-bold text-gray-800">Step 3: Approval</h4>
                  <p className="text-gray-600 text-sm">Get approval within 2-4 hours for emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Health Insurance with Medi Assist TPA?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get comprehensive health coverage with seamless cashless treatment at top hospitals.
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

export default MediAssist;
