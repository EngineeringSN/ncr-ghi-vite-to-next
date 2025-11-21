import React from "react";
import BreadcrumbSchema from "../BreadcrumbSchema";
import BreadcrumbNav from "../BreadcrumbNav";

const TermsConditions = () => {
  const breadcrumbItems = [{ label: "Terms and Conditions" }];
  return (
    <>
      <BreadcrumbSchema />
      <BreadcrumbNav items={breadcrumbItems} />
      <div className="py-6">
        <h1 className="text-2xl text-center font-medium text-gray-500 underline">
          TERMS AND CONDITIONS
        </h1>
        <div className="px-10 py-6">
          <div className="text-gray-500 text-sm">
            The contents of this site, including but not limited to the text,
            videos, presentations andimages herein and their arrangement, are a
            property of SecureNow Insurance Broker Pvt. Ltd.,C4/4 Safdarjung
            Development Area, New Delhi 110016. All Rights Reserved.
            <span>
              By submitting your contact details, you mandate SecureNow to take
              quotations andplace policies with insurers on your behalf.
            </span>
            SecureNow hereby authorizes you to copy and display the content
            herein, but only for yourpersonal or informational and
            non-commercial purposes. However, the content herein shallnot be
            copied or posted in any network computer or broadcast in any media.
            Any copy youmake must explicitly mention SecureNow as the original
            owner.
            <br></br>
            SecureNow has created this website to provide general information
            for its users. By using thiswebsite, you are consenting to be bound
            by the following terms and conditions of use withoutlimitation or
            qualification.
            <br></br>
            Please read these conditions carefully before using this website.
            SecureNow may modify anyof the terms and conditions at any time and
            at our sole discretion by updating this posting.Your continued use
            of the content and service following our posting will constitute
            bindingacceptance of the change. You are advised therefore to
            periodically visit this page to reviewthe then current terms and
            conditions to which you are bound.
            <br></br>
            <h2 className="text-lg text-gray-500 pt-4 pb-2">DISCLAIMER</h2>
            The materials provided on this website are provided “as is” and
            without warranties of anykind either expressed or implied. SecureNow
            is not responsible for the availability of, or thecontent located on
            or through any External Site. It does not warrant that the
            functionscontained in the materials will be uninterrupted or
            error-free, that defects will be corrected, orthat this website and
            the server that makes it available are free of viruses or other
            harmfulcomponents. You (and not SecureNow) assume the entire cost of
            all necessary servicing, orcorrection.
            <br></br>
            SecureNow will not be responsible or liable for the accuracy,
            reliability, copyright,compliance, legality or decency of any
            content or any interruption in service. The informationand
            descriptions contained herein are not intended to be complete
            descriptions of all terms,exclusions and conditions applicable to
            the products and services, but are provided solely forgeneral
            informational purposes.
            <br></br>
            This website may be linked to other websites which are not
            maintained by SecureNow(“External Sites”). SecureNow is not
            responsible for the content of those websites.SecureNow encourages
            you to read the privacy policies of these linked sites, as their
            privacypolicy may differ from SecureNow’s.
          
          <h2 className="text-lg text-gray-500 pt-4 pb-2">NO WARRANTIES</h2>
          SecureNow makes no representation or warranty whatsoever and assumes
          no responsibility orliability whatsoever in connection with the
          accuracy, completeness, or currency of thematerials or the
          suitability, functionality, or operation of the materials on this or
          any other siteBy submitting your contact details, you mandate
          SecureNow to take quotations andplace policies with insurers on your
          behalf. which may be hyperlinked to this site. SecureNow is in no way
          responsible for the views,content or accuracy of any site, which is
          either hyperlinked to or, from this site, nor doesSecureNow endorse
          any content or products that may be advertised or noted on these
          sites.Information on this Web site is subject to change at any time
          without prior notice.
          <h2 className="text-lg text-gray-500 pt-4 pb-2">LIMITATION OF LIABILITY</h2>
          SecureNow provides these materials and Web site on an “as is” “when
          available” basiswithout warranty of any kind, express or implied,
          including but not limited to any impliedwarranty of merchantability or
          fitness for a particular purpose or non-infringement. In noevent will
          SecureNow be liable for any damages or for acts of negligence arising
          inconnection with any information, result, error, omission, defect,
          delay or system malfunctionrelating to SecureNow’s website regardless
          of whether SecureNow has been advised of thepossibility of such
          damages.
          <br></br>
          SecureNow also assumes no responsibility, and shall not be liable for,
          any damages to, orviruses that may infect, your computer equipment or
          other property as a result of your accessto, use of, or browsing in
          this website or your downloading of any materials, data, text orimages
          from this website. Access to this Web site may be monitored and use of
          this siteconstitutes consent to monitoring.
          <h2 className="text-lg text-gray-500 pt-4 pb-2">CANCELLATION/REFUND</h2>
          Cancellation and refund policy is determined by the insurer. These
          details are available ontheir websites and in their detailed policy
          contracts.
          <h2 className="text-lg text-gray-500 pt-4 pb-2">WARNING</h2>
          Unauthorized access to secured databases or circumvention of security
          measures on this Website may be a violation of state and federal laws.
          <h2 className="text-lg text-gray-500 pt-4 pb-2">JURISDICTION</h2>
          SecureNow makes no representation that materials on this website are
          appropriate oravailable for use in any location unless otherwise
          expressly set forth. Those who choose toaccess this website do so on
          their own initiative and are responsible for compliance with
          locallaws.
          <br></br>
          The information contained on this website is not an offer to sell or a
          solicitation to buy anyinsurance product. No insurance product is
          offered or will be sold in any jurisdiction in whichsuch offer or
          solicitation, purchase or sale would be unlawful under the insurance
          or otherlaws of such jurisdiction. Some products and services may not
          be available in all jurisdictions
          <h2 className="text-lg text-gray-500 pt-4 pb-2">TRADEMARKS AND COPYRIGHTS</h2>
          All trademarks appearing on this site are the property of their
          respective owners. Nothingcontained on the website should be construed
          as granting, by implication, estoppel, orotherwise, any license or
          right to use any trademark displayed on this website without
          thewritten permission of SecureNow or such third party that may own
          the trademarks displayedon this website. Your use of the trademarks
          displayed on this website, or any other content onthis website, except
          as provided herein, is strictly prohibited.
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
