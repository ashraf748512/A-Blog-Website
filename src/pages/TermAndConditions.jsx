import React from "react";
import { Container } from "../components"; // Assuming you have a Container component to center content

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Terms and Conditions</h1>
          
          <p className="text-gray-700 mb-6">
            Last Updated: <strong>November 2024</strong>
          </p>
          
          <p className="text-gray-700 mb-6">
            Welcome to <strong>Your Website Name</strong>. These Terms and Conditions outline the rules and regulations for the use of our website, located at{" "}
            <a href="https://www.yourwebsite.com" className="text-blue-500 hover:underline">
              www.yourwebsite.com
            </a>. By accessing this website, we assume you accept these terms and conditions. If you do not agree with them, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using this website, you agree to comply with these Terms and Conditions. We reserve the right to modify or replace these terms at any time, and your continued use of the website after any such changes constitutes your acceptance of those new terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Use of Website</h2>
          <p className="text-gray-700 mb-4">
            You may only use the website for lawful purposes. You agree not to engage in any activities that could disrupt, damage, or impair the functioning of the website or interfere with the experience of other users. You are solely responsible for any content that you submit or upload to the website.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Registration and Account Security</h2>
          <p className="text-gray-700 mb-4">
            To access certain features of the website, you may need to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. User-Generated Content</h2>
          <p className="text-gray-700 mb-4">
            You are responsible for any content you post, upload, or submit to the website. By submitting content, you grant us a worldwide, royalty-free, and non-exclusive license to use, modify, and distribute such content for the purposes of operating and improving our services.
          </p>
          <p className="text-gray-700 mb-4">
            You must ensure that your content complies with all applicable laws and does not infringe upon the rights of others, including intellectual property rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. Please read our Privacy Policy to understand how we collect, use, and protect your personal information when using our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. Payment and Subscription</h2>
          <p className="text-gray-700 mb-4">
            Certain features or services on the website may require payment. If you subscribe to any paid services, you agree to provide accurate and up-to-date payment information. All payments are processed securely through trusted payment providers.
          </p>
          <p className="text-gray-700 mb-4">
            Subscription fees may be subject to change, and you will be notified of any such changes before they take effect. You may cancel your subscription at any time in accordance with the terms of your subscription.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content, features, and functionality on the website, including but not limited to text, graphics, logos, images, and software, are the property of <strong>Your Website Name</strong> or its licensors and are protected by intellectual property laws.
          </p>
          <p className="text-gray-700 mb-4">
            You may not copy, reproduce, distribute, or otherwise use any part of the website’s content without our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">8. Prohibited Conduct</h2>
          <p className="text-gray-700 mb-4">
            You are prohibited from using the website to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Engage in illegal activities or violate laws.</li>
            <li>Upload or distribute harmful or malicious software.</li>
            <li>Harass, defame, or threaten other users.</li>
            <li>Impersonate others or misrepresent your identity.</li>
            <li>Engage in spamming or phishing activities.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall <strong>Your Website Name</strong> be liable for any damages arising from the use or inability to use the website, including direct, indirect, incidental, or consequential damages.
          </p>
          <p className="text-gray-700 mb-4">
            We make no representations or warranties regarding the availability, accuracy, or reliability of the website and its content.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">10. Termination</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to suspend or terminate your access to the website at any time, without notice, for any reason, including but not limited to violations of these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">11. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company is based. Any legal action arising from the use of this website will be handled in the appropriate courts within that jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">12. Changes to Terms and Conditions</h2>
          <p className="text-gray-700 mb-4">
            We may update these Terms and Conditions at any time. The most current version will be posted on this page, and we will indicate the date it was last updated. You are advised to review these terms regularly to stay informed of any changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">13. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about these Terms and Conditions, please contact us at:
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
