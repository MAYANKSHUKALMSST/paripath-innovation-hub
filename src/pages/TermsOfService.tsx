
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Paripath Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-4 md:px-6 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-3">
                Welcome to Paripath Solutions. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p>
                Please read these Terms carefully before using our services. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Services"</strong> refers to the website, applications, software, products, and services provided by Paripath Solutions.</li>
                <li><strong>"User," "you," and "your"</strong> refer to the individual or entity accessing or using the Services.</li>
                <li><strong>"We," "us," and "our"</strong> refer to Paripath Solutions.</li>
                <li><strong>"Content"</strong> refers to text, graphics, images, music, audio, video, information, and other materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
              <h3 className="text-xl font-medium mb-2">3.1 Eligibility</h3>
              <p className="mb-3">
                To use our Services, you must be at least 16 years old and capable of forming a binding contract with us. By accessing or using our Services, you represent and warrant that you meet these requirements.
              </p>
              
              <h3 className="text-xl font-medium mb-2">3.2 Account Registration</h3>
              <p className="mb-3">
                Some of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account and to keep this information up to date.
              </p>
              
              <h3 className="text-xl font-medium mb-2">3.3 Acceptable Use</h3>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the Services in any manner that could disable, overburden, damage, or impair the Services</li>
                <li>Use any robot, spider, or other automated device, process, or means to access the Services for any purpose</li>
                <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other harmful material</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <h3 className="text-xl font-medium mb-2">4.1 Our Intellectual Property</h3>
              <p className="mb-3">
                The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Paripath Solutions, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              
              <h3 className="text-xl font-medium mb-2">4.2 User Content</h3>
              <p>
                You retain all rights to any Content you submit, post, or display on or through the Services. By submitting, posting, or displaying Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Content in any media.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
              <p>
                The Services may contain links to third-party websites or services that are not owned or controlled by Paripath Solutions. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
              <p>
                We may terminate or suspend your access to all or part of the Services, without notice, for any conduct that we, in our sole discretion, believe is in violation of these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
              <p className="mb-3">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p>
                PARIPATH SOLUTIONS DOES NOT WARRANT THAT: (A) THE SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ANY ERRORS OR DEFECTS WILL BE CORRECTED; (C) THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (D) THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL PARIPATH SOLUTIONS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (C) ANY CONTENT OBTAINED FROM THE SERVICES; AND (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Paripath Solutions, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-3">
                <p>Email: mayank@paripathsolutions.com</p>
                <p>Phone: +91 8177063899</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
