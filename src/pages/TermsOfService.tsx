import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { FileText } from "lucide-react";

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
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-foreground">
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
                <li><strong>"User Content"</strong> refers to any Content that users submit, post, or display on or through the Services.</li>
                <li><strong>"Intellectual Property Rights"</strong> refers to all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights.</li>
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
                Some of our Services may require you to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Providing accurate and complete information when creating an account</li>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring your account information is up to date</li>
              </ul>
              <p className="mb-3">
                We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or incomplete.
              </p>
              
              <h3 className="text-xl font-medium mb-2">3.3 Acceptable Use</h3>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the Services in any manner that could disable, overburden, damage, or impair the Services</li>
                <li>Use any robot, spider, or other automated device, process, or means to access the Services for any purpose</li>
                <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other harmful material</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <h3 className="text-xl font-medium mb-2">4.1 Our Intellectual Property</h3>
              <p className="mb-3">
                The Services and their entire contents, features, and functionality are owned by Paripath Solutions, its licensors, or other providers and are protected by intellectual property laws. These Terms do not grant you any right, title, or interest in the Services, trademarks, logos or other brand features.
              </p>
              
              <h3 className="text-xl font-medium mb-2">4.2 User Content</h3>
              <p className="mb-3">
                You retain all rights to any Content you submit through the Services. By submitting Content, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Content in any media or distribution methods.
              </p>
              <p className="mb-3">
                You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You own or control all rights in and to the User Content</li>
                <li>All of your User Content complies with these Terms</li>
                <li>User Content is not false, inaccurate, or misleading</li>
                <li>User Content does not violate any law or regulation</li>
                <li>User Content does not infringe any Intellectual Property Rights of any third party</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p className="mb-3">
                Some of our Services may require payment of fees. You shall pay all applicable fees as described on the website in connection with such Services.
              </p>
              <p className="mb-3">
                By providing a credit card or other payment method accepted by us, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You are authorized to use the designated payment method</li>
                <li>The payment information you provide is true and accurate</li>
                <li>You authorize us to charge your payment method for the total amount of your purchase</li>
                <li>You are responsible for any charges and related fees that may be incurred as a result of your purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
              <p>
                The Services may contain links to third-party websites or services that are not owned or controlled by Paripath Solutions. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="mb-3">
                We may terminate or suspend your access to all or part of the Services, without notice, for any conduct that we, in our sole discretion, believe is in violation of these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
              <p>
                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
              <p className="mb-3">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p>
                PARIPATH SOLUTIONS DOES NOT WARRANT THAT: (A) THE SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ANY ERRORS OR DEFECTS WILL BE CORRECTED; (C) THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (D) THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL PARIPATH SOLUTIONS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (C) ANY CONTENT OBTAINED FROM THE SERVICES; AND (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Paripath Solutions, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution</h2>
              <p className="mb-3">
                Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration under the rules of the Indian Arbitration Association, which rules are deemed to be incorporated by reference into this clause.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The number of arbitrators shall be one.</li>
                <li>The seat, or legal place, of arbitration shall be Lucknow, India.</li>
                <li>The language to be used in the arbitral proceedings shall be English.</li>
                <li>The governing law of the contract shall be the substantive law of India.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Your use of the Services may also be subject to other local, state, national, or international laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. General Terms</h2>
              <h3 className="text-xl font-medium mb-2">14.1 Entire Agreement</h3>
              <p className="mb-3">
                These Terms constitute the entire agreement between you and Paripath Solutions regarding our Services, and supersede and replace any prior agreements we might have had between us regarding the Services.
              </p>
              
              <h3 className="text-xl font-medium mb-2">14.2 Waiver</h3>
              <p className="mb-3">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h3 className="text-xl font-medium mb-2">14.3 Assignment</h3>
              <p className="mb-3">
                You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms without such consent will be null and of no effect. We may assign or transfer these Terms, at our sole discretion, without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
