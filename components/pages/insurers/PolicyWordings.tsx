import React, { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Search, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

//pdfs
import startPdf from "../../../public/lovable-uploads/insurerPdfs/Star-Group-Health-Insurance.pdf";
import hdfcPdf from "../../../public/lovable-uploads/insurerPdfs/HDFC-Group-Health-Insurance_Policy Wording.pdf";
import iciciPdf from "../../../public/lovable-uploads/insurerPdfs/icicipolicy-wordings.pdf";
import bajajPdf from "../../../public/lovable-uploads/insurerPdfs/bajaj_policy_wording.pdf";
import adityaPdf from "../../../public/lovable-uploads/insurerPdfs/aditya-birla-policy-wording.pdf";
import nivaBupa from "../../../public/lovable-uploads/insurerPdfs/niva_bupa_wordings.pdf";
import newIndiaPdf from "../../../public/lovable-uploads/insurerPdfs/New India Mediclaim Policy.pdf";
import reliancePdf from "../../../public/lovable-uploads/insurerPdfs/reliance_Policy_Wording.pdf";
import sbiPdf from "../../../public/lovable-uploads/insurerPdfs/sbi_wordings.pdf";
import tatapdf from "../../../public/lovable-uploads/insurerPdfs/Tata_AIG_Medi_Care_82932b277a.pdf";
import orientalPdf from "../../../public/lovable-uploads/insurerPdfs/OICHLGP449V022021_2020-2021.pdf";

//logos
import bajajLogo from "../../../public/lovable-uploads/bajajlogo.png";
import starLogo from "../../../public/lovable-uploads/starlogo.png";
import hdfcErgo from "../../../public/lovable-uploads/hdfergo.png";
import iciciLogo from "../../../public/lovable-uploads/icicilogo.png";
import aditya from "../../../public/lovable-uploads/abhi-logo.png";
import nivaLogo from "../../../public/lovable-uploads/Niva-Bupa-Logo.png";
import newIndia from "../../../public/lovable-uploads/niaBlue2.png";
import relianceLogo from "../../../public/lovable-uploads/reliance_GI.png";
import sbiLogo from "../../../public/lovable-uploads/sbig-logo.png";
import tataLogo from "../../../public/lovable-uploads/TataAIG.png";
import orientalLogo from "../../../public/lovable-uploads/oriental.png";
import pdfFavicon from "../../../public/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png";

const PolicyWordings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Create a blob URL for each PDF to retain the domain origin
  const [blobUrls, setBlobUrls] = useState<{[key: string]: string}>({});
  
  useEffect(() => {
    // Create blob URLs for all PDFs to keep them on the same domain
    const fetchPdfsAndCreateBlobs = async () => {
      const pdfs: {[key: string]: string} = {
        'Star Health Insurance': startPdf,
        'HDFC Ergo': hdfcPdf,
        'ICICI Lombard': iciciPdf,
        'Bajaj Allianz': bajajPdf,
        'Aditya Birla': adityaPdf,
        'Niva Bupa': nivaBupa,
        'New India Assurance': newIndiaPdf,
        'Reliance General': reliancePdf,
        'SBI General': sbiPdf,
        'Tata AIG': tatapdf,
        'Oriental Insurance': orientalPdf
      };
      
      const newBlobUrls: {[key: string]: string} = {};
      
      for (const [insurer, pdfPath] of Object.entries(pdfs)) {
        try {
          // Fetch the PDF document
          const response = await fetch(pdfPath);
          const blob = await response.blob();
          
          // Create a blob URL that maintains the same domain origin
          const blobUrl = URL.createObjectURL(blob);
          newBlobUrls[insurer] = blobUrl;
        } catch (error) {
          console.error(`Error creating blob for ${insurer}:`, error);
          // Fall back to direct path if blob creation fails
          newBlobUrls[insurer] = pdfPath;
        }
      }
      
      setBlobUrls(newBlobUrls);
    };
    
    fetchPdfsAndCreateBlobs();
    
    // Cleanup function to revoke blob URLs when component unmounts
    return () => {
      Object.values(blobUrls).forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, []);
  
  const insurerPolicies = [
    {
      insurer: "Star Health Insurance",
      document: startPdf,
      logo: starLogo,
    },
    {
      insurer: "HDFC Ergo",
      document: hdfcPdf,
      logo: hdfcErgo,
    },
    {
      insurer: "ICICI Lombard",
      document: iciciPdf,
      logo: iciciLogo,
    },
    {
      insurer: "Bajaj Allianz",
      document: bajajPdf,
      logo: bajajLogo,
    },
    {
      insurer: "Aditya Birla",
      document: adityaPdf,
      logo: aditya,
    },
    {
      insurer: "Niva Bupa",
      document: nivaBupa,
      logo: nivaLogo,
    },
    {
      insurer: "New India Assurance",
      document: newIndiaPdf,
      logo: newIndia,
    },
    {
      insurer: "Reliance General",
      document: reliancePdf,
      logo: relianceLogo,
    },
    {
      insurer: "SBI General",
      document: sbiPdf,
      logo: sbiLogo,
    },
    {
      insurer: "Tata AIG",
      document: tatapdf,
      logo: tataLogo,
    },
    {
      insurer: "Oriental Insurance",
      document: orientalPdf,
      logo: orientalLogo,
    },
  ];

  const filteredPolicies = insurerPolicies.filter(policy =>
    policy.insurer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadClick = (insurer: string, documentUrl: string) => {
    console.log(`Opening policy document for ${insurer}`);
    
    // Use the blob URL if available, otherwise fall back to the direct URL
    const urlToOpen = blobUrls[insurer] || documentUrl;
    
    // Create and open a custom HTML document in a new window
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      const faviconPath = "/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png";
      // Get the absolute URL for the favicon
      const absoluteFaviconUrl = new URL(faviconPath, window.location.origin).href;
      
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${insurer} - Policy Document | SecureNow</title>
          <link rel="icon" href="${absoluteFaviconUrl}" type="image/png">
          <link rel="shortcut icon" href="${absoluteFaviconUrl}" type="image/png">
          <link rel="apple-touch-icon" href="${absoluteFaviconUrl}">
          <style>
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow: hidden;
            }
            iframe, object {
              width: 100%;
              height: 100%;
              border: none;
            }
          </style>
        </head>
        <body>
          <object data="${urlToOpen}" type="application/pdf" width="100%" height="100%">
            <p>It appears you don't have a PDF plugin for this browser. 
            <a href="${urlToOpen}" target="_blank">Click here to download the PDF file.</a></p>
          </object>
        </body>
        </html>
      `);
      newWindow.document.close();
      
      // Show success message
      toast.success(`Opened policy document for ${insurer}`);
    } else {
      // If popup is blocked, offer direct link
      toast.error("Popup blocked. Please allow popups to view the document.");
      
      // Fallback to direct link
      const link = document.createElement('a');
      link.href = documentUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <MainLayout>
      <head>
        {/* Add favicon link that will be inherited by child windows */}
        <link 
          rel="icon" 
          href="/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png" 
          type="image/png"
        />
      </head>
      
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Policy Wordings</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access and download comprehensive policy documents from our partner
            insurers. Understanding your policy is the first step to making
            informed decisions.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">
              Find Policy Documents
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by insurer or policy name"
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-securenow-blue focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <Button className="bg-securenow-orange hover:bg-orange-600 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Documents Section - Updated to use Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-12 text-center">
            Available Policy Documents
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPolicies.length > 0 ? (
              filteredPolicies.map((insurer, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleDownloadClick(insurer.insurer, insurer.document)
                  }
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-24 flex items-center justify-center mb-4">
                        <img
                          src={insurer.logo}
                          alt={`${insurer.insurer} logo`}
                          className="max-h-16 max-w-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src =
                              "https://placehold.co/200x100/e2e8f0/64748b?text=" +
                              encodeURIComponent(insurer.insurer);
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                        {insurer.insurer}
                      </h3>
                      <div className="mt-4 flex items-center justify-center text-securenow-orange hover:underline group">
                        <FileText className="mr-2 h-5 w-5" />
                        <span>View Policy Wordings</span>
                        <img 
                          src={pdfFavicon} 
                          alt="PDF" 
                          className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                        <Download className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg text-gray-500">No policies found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Help Understanding Your Policy?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our insurance experts can help explain policy terms, coverage
            details, and exclusions to ensure you have the right protection for
            your business.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-securenow-blue hover:bg-blue-700 text-white">
              Contact an Expert
            </Button>
            <Button
              variant="outline"
              className="border-securenow-blue text-securenow-blue hover:bg-securenow-blue hover:text-white"
            >
              Compare Policies
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PolicyWordings;
