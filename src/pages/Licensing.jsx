import React from "react";
import { Container } from "../components"; // Assuming you have a Container component to center content

export default function Licensing() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Licensing</h1>

          <p className="text-gray-700 mb-6">
            Last Updated: <strong>November 2024</strong>
          </p>

          <p className="text-gray-700 mb-6">
            Welcome to <strong>Your Website Name</strong>. By accessing or using the content and services provided on this website, you agree to comply with the licensing terms outlined below. If you do not agree with these terms, please refrain from using our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Ownership of Content</h2>
          <p className="text-gray-700 mb-4">
            All content, including but not limited to text, images, videos, designs, logos, software, and any other intellectual property provided through the website, is owned or licensed by <strong>Your Website Name</strong> unless otherwise specified. The content is protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. License to Use Website Content</h2>
          <p className="text-gray-700 mb-4">
            We grant you a limited, non-exclusive, non-transferable license to access and use the content available on the website for personal, non-commercial purposes only. This license does not grant you any rights to reproduce, modify, distribute, or create derivative works based on our content unless explicitly authorized by us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Prohibited Uses</h2>
          <p className="text-gray-700 mb-4">
            You are prohibited from using the content of the website in the following ways:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Reproducing, distributing, or displaying the content without permission.</li>
            <li>Using the content for any commercial or unlawful purpose.</li>
            <li>Modifying or creating derivative works based on the content.</li>
            <li>Using our content in a way that infringes on the rights of others.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. User-Generated Content</h2>
          <p className="text-gray-700 mb-4">
            Any content you upload, submit, or post to our website is considered user-generated content. By submitting content, you grant <strong>Your Website Name</strong> a worldwide, royalty-free, and non-exclusive license to use, modify, reproduce, distribute, and display the content in connection with our services.
          </p>
          <p className="text-gray-700 mb-4">
            You represent and warrant that you have the necessary rights to submit such content and that it does not violate any third-party rights or applicable laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Third-Party Content and Links</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites or content. We do not control these third-party sites and are not responsible for their content, availability, or terms of service. These links are provided for your convenience, and you access them at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. Termination of License</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to terminate or suspend your access to the website at any time, without notice, if you violate the terms of this license or engage in any prohibited activities. Upon termination, all rights granted to you will immediately cease, and you must stop using our content and services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. No Warranty</h2>
          <p className="text-gray-700 mb-4">
            The content and services provided on our website are provided "as is" and "as available," without any warranties, express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose. We do not warrant that our website will be free of errors or interruptions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            To the fullest extent permitted by law, <strong>Your Website Name</strong> shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the website, including but not limited to any loss of data, profits, or business opportunities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">9. Indemnification</h2>
          <p className="text-gray-700 mb-4">
            You agree to indemnify and hold harmless <strong>Your Website Name</strong> and its affiliates, officers, employees, and agents from any claims, damages, or liabilities arising out of your use of the website or violation of these licensing terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">10. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These licensing terms are governed by the laws of the jurisdiction in which <strong>Your Website Name</strong> is based. Any disputes related to these terms will be resolved in the courts of that jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">11. Changes to Licensing Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to update or modify these licensing terms at any time. When we make changes, we will post the updated version on this page with the new "Last Updated" date. Please review this page regularly to stay informed of any changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">12. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns regarding these licensing terms, please contact us at:
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
