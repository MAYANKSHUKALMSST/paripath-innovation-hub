
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Paripath Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-4 md:px-6 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-3">
                Paripath Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
              <p className="mb-3">
                We may collect personally identifiable information, such as:
              </p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business information</li>
                <li>IP address and browser information</li>
                <li>Device identifiers and hardware information</li>
                <li>Geographic location data</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-2">2.2 Non-Personal Information</h3>
              <p className="mb-3">
                We may also collect non-personal information about how you interact with our website, including:
              </p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring/exit pages</li>
                <li>Date/time stamp of visits</li>
                <li>Pages viewed</li>
                <li>Time spent on pages</li>
                <li>Clickstream data</li>
                <li>Aggregated usage statistics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing and completing transactions</li>
                <li>Sending administrative information, such as updates, security alerts, and support messages</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Sending promotional communications, such as new features, products, or services</li>
                <li>Monitoring and analyzing usage patterns and trends</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Protecting against, identifying, and preventing fraud and other illegal activity</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing Personal Information (GDPR Compliance)</h2>
              <p className="mb-3">
                If you are from the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the personal information concerned and the specific context in which we collect it. We will normally collect personal information from you only where:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>We need the personal information to perform a contract with you</li>
                <li>You have given us consent to do so for a specific purpose</li>
                <li>The processing is in our legitimate interests and not overridden by your rights</li>
                <li>We need to comply with a legal obligation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="mb-3">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Preference cookies:</strong> Enable the website to remember your preferences</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the website</li>
                <li><strong>Marketing cookies:</strong> Used to track visitors across websites for advertising purposes</li>
              </ul>
              <p className="mb-3">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Disclosure of Your Information</h2>
              <p className="mb-3">We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to perform work on our behalf.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
                <li><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
              <p className="mb-3">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
              </p>
              <p>
                If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Information, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
              <p className="mb-3">
                We implement appropriate technical and organizational measures to protect the security of your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encryption of transmitted data</li>
                <li>Secure storage of personal information</li>
                <li>Regular security assessments and testing</li>
                <li>Access controls and authentication procedures</li>
                <li>Staff training on data protection practices</li>
              </ul>
              <p>
                However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Your Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect or maintain personal information from children under 16 years of age. If we learn that we have collected personal information from a child under 16, we will promptly delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of any third-party website. You are subject to the policies of these third parties where applicable, and we encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3">
                <p>Email: mayank@paripathsolutions.com</p>
                <p>Phone: +91 8177063899</p>
                <p>Address: Lucknow, Uttar Pradesh, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
