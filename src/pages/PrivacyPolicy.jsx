import React from "react";
import { Container } from "../components"; // Assuming you have a Container component to center content

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Privacy Policy</h1>
          
          <p className="text-gray-700 mb-6">
            Last Updated: <strong>November 2024</strong>
          </p>
          
          <p className="text-gray-700 mb-6">
            Welcome to <strong>Your Website Name</strong>. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website, located at{" "}
            <a href="https://www.yourwebsite.com" className="text-blue-500 hover:underline">
              www.yourwebsite.com
            </a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information in the following ways:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Personal Information:</strong> When you register or interact with our services, we collect personal details such as your name, email address, and other contact details.</li>
            <li><strong>Usage Data:</strong> We collect data on how you use our website, including your IP address, browser type, and the pages you visit.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and other tracking technologies to improve your experience on our site and to analyze website traffic.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>To Provide Services:</strong> To deliver the services you request, including creating and managing your account, processing transactions, and responding to your inquiries.</li>
            <li><strong>Improvement of Website:</strong> To analyze usage patterns and improve the design, content, and functionality of our website.</li>
            <li><strong>Personalization:</strong> To personalize your experience, such as displaying relevant content and advertisements based on your preferences.</li>
            <li><strong>Marketing:</strong> To send promotional emails or newsletters if you’ve opted in to receive them.</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable legal obligations and protect our legal rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. How We Share Your Information</h2>
          <p className="text-gray-700 mb-4">
            We may share your personal information with the following:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Service Providers:</strong> Third-party vendors who help us operate our website and services, such as payment processors and cloud hosting providers.</li>
            <li><strong>Legal Authorities:</strong> If required by law or in response to valid legal processes, we may disclose your information to authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction.</li>
            <li><strong>With Your Consent:</strong> We may share your data with third parties when we have your explicit consent to do so.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We take the security of your personal information seriously and implement reasonable measures to protect it from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You can request that we update or correct your information if it’s inaccurate.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal data, subject to certain exceptions.</li>
            <li><strong>Opt-out of Marketing:</strong> You can opt-out of receiving marketing communications from us at any time.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies to improve your browsing experience. Cookies are small text files that are stored on your device when you visit our website. You can control the use of cookies through your browser settings.
          </p>
          <p className="text-gray-700 mb-4">
            For more information on our use of cookies, please refer to our Cookie Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">8. Links to Third-Party Websites</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies before providing any personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">9. Children’s Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. When we make significant changes, we will post an updated version on this page with a new "Last Updated" date. Please review this page periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">11. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> support@yourwebsite.com
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
      </Container>
    </div>
  );
}
