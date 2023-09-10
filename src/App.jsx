import { useState } from "react";
import { Button, Modal } from "antd";
import "./LandingPage.css"; // Import your CSS file for styling

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to MyRTO App</h1>
        <p>Your One-Stop Solution for Road Taxes and RTO Services</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Road Tax Payment</h2>
          <p>Pay your road taxes hassle-free using our mobile app.</p>
        </div>
        <div className="feature">
          <h2>RTO Services</h2>
          <p>
            Access a range of RTO services like vehicle registration, license
            renewal, and more.
          </p>
        </div>
      </section>
      <section className="download">
        <h2>Download Our App</h2>
        <p>Experience the convenience of managing RTO services on the go.</p>
        <div className="app-store-buttons">
          <a href="#" className="app-store-link">
            <img src="google-play-badge.png" alt="Download on Google Play" />
          </a>
          <a href="#" className="app-store-link">
            <img src="app-store-badge.png" alt="Download on the App Store" />
          </a>
        </div>
      </section>
      <footer>
        <Button
          style={{ marginBlock: "10px" }}
          type="primary"
          onClick={showModal}
        >
          Privacy & Policy
        </Button>
        <Modal
          title="Privacy Policy"
          visible={isModalOpen} // Use visible instead of open
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h3>Privacy Policy for Road Tax Seva Application</h3>
          <p>
            1. Introduction Welcome to the Road Tax Seva Application
            ("Application") provided by Krishna Motors. We are committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your personal data when you use our
            Application. By accessing or using our Application, you consent to
            the practices described in this Privacy Policy. If you do not agree
            with this Privacy Policy, please do not use our Application. 2.
            Information We Collect 2.1. Personal Information: We may collect
            personal information, such as your name, contact information,
            government-issued identification numbers, and vehicle details, when
            you use our Application. 2.2. Usage Information: We may collect
            information about how you use the Application, including your
            interactions with the features and functionalities. 2.3. Device
            Information: We may collect information about the device you use to
            access the Application, including the device's unique identifier,
            operating system, and browser type. 3. How We Use Your Information
            We use the collected information for the following purposes: 3.1.
            Providing Services: To provide the services offered through the
            Application, including processing road tax payments and related
            transactions. 3.2. Communication: To communicate with you, respond
            to your inquiries, and send important updates and notifications.
            3.3. Improvement: To analyze usage patterns, troubleshoot issues,
            and improve the functionality and performance of the Application. 4.
            Disclosure of Your Information We may disclose your personal
            information to the following entities: 4.1. Government Authorities:
            We may share your information with relevant government authorities
            for compliance with road tax regulations. 4.2. Service Providers: We
            may engage third-party service providers to assist us in delivering
            services, and we may share your information with them as necessary.
            4.3. Legal Compliance: We may disclose your information as required
            by law, regulation, or legal process. 5. Data Security We take
            reasonable measures to protect your personal information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission over the internet or storage system
            can be guaranteed as completely secure. Therefore, we cannot ensure
            or warrant the security of any information you transmit to us. 6.
            Your Choices You may have the following rights: 6.1. Access and
            Correction: You have the right to access and correct your personal
            information stored with us. 6.2. Withdraw Consent: You can withdraw
            your consent to our processing of your personal information at any
            time. 6.3. Deletion: You can request the deletion of your personal
            information from our records. To exercise these rights or for any
            inquiries regarding your personal information, please contact us
            using the information provided in Section 9. 7. Changes to this
            Privacy Policy We may update this Privacy Policy from time to time.
            The updated Privacy Policy will be effective upon posting on the
            Application. We encourage you to review this Privacy Policy
            periodically for any changes. 8. Contact Information If you have any
            questions, concerns, or requests regarding this Privacy Policy or
            the handling of your personal information, please contact us at:
            [Your Contact Information] 9. Governing Law and Jurisdiction This
            Privacy Policy is governed by and construed in accordance with the
            laws. Any disputes arising from or related to this Privacy Policy
            shall be subject to the exclusive jurisdiction of the courts.
          </p>
        </Modal>
        <p>&copy; 2023 MyRTO App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
