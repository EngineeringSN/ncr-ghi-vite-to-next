
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ClaimSettlementRate = () => {
  const claimSettlementData = [
    { name: "Star Health", settlementRate: 94.5, avgProcessingDays: 4 },
    { name: "HDFC Ergo", settlementRate: 92.8, avgProcessingDays: 5 },
    { name: "ICICI Lombard", settlementRate: 93.2, avgProcessingDays: 3 },
    { name: "Bajaj Allianz", settlementRate: 91.7, avgProcessingDays: 6 },
    { name: "Tata AIG", settlementRate: 90.5, avgProcessingDays: 7 },
    { name: "Reliance", settlementRate: 89.3, avgProcessingDays: 8 },
    { name: "Max Bupa", settlementRate: 92.1, avgProcessingDays: 5 },
    { name: "SBI General", settlementRate: 89.8, avgProcessingDays: 7 }
  ];

  const quarterlyTrends = [
    { quarter: 'Q1 2024', StarHealth: 94.2, HDFC: 92.5, ICICI: 93.0, Bajaj: 91.5 },
    { quarter: 'Q2 2024', StarHealth: 94.3, HDFC: 92.6, ICICI: 93.1, Bajaj: 91.6 },
    { quarter: 'Q3 2024', StarHealth: 94.4, HDFC: 92.7, ICICI: 93.2, Bajaj: 91.7 },
    { quarter: 'Q4 2024', StarHealth: 94.5, HDFC: 92.8, ICICI: 93.3, Bajaj: 91.8 },
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Claim Settlement Rate</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transparent data on how efficiently our insurance partners process and settle claims, helping you make informed decisions for your business.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-securenow-blue">Understanding Claim Settlement Rates</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Claim settlement rate is the percentage of claims settled by an insurer against the total claims received in a financial year. 
              A higher percentage indicates better chances of your claim being approved.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-securenow-blue mb-6">2024 Claim Settlement Comparison</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={claimSettlementData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[88, 96]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="settlementRate" name="Settlement Rate %" fill="#1e40af" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Time Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-securenow-blue">Average Claim Processing Time</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Faster claim processing means quicker access to funds and less paperwork. Here's how our partner insurers compare in claim processing efficiency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-securenow-blue mb-6">Average Days to Process Claims</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={claimSettlementData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgProcessingDays" name="Avg. Days" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Quarterly Trends Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-securenow-blue">Quarterly Settlement Rate Trends</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Track how consistently our top insurance partners maintain their claim settlement performance over time.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-securenow-blue mb-6">2024 Quarterly Comparison</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={quarterlyTrends}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis domain={[90, 95]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="StarHealth" name="Star Health" fill="#1e40af" />
                  <Bar dataKey="HDFC" name="HDFC Ergo" fill="#f59e0b" />
                  <Bar dataKey="ICICI" name="ICICI Lombard" fill="#10b981" />
                  <Bar dataKey="Bajaj" name="Bajaj Allianz" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-securenow-orange">
            <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              The claim settlement data presented is based on information publicly disclosed by insurance companies 
              and may vary slightly from the actual figures. Data is updated quarterly and represents overall company performance, 
              which might differ across specific product categories. Always consult with our insurance experts for the most current information.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ClaimSettlementRate;
