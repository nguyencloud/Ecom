import React, { useState } from "react";
import "../css/policy.css";
import Accordion from "react-bootstrap/Accordion";

export default function PolicyContent() {
  const [Policy, setPolicy] = useState("BH");

  const Insurance = () => (
    <div className="ThePolicy">
      <div className="policy-header">Warranty Policy</div>
      <div className="policy-content">
        <div className="heading1">Warranty Conditions</div>
        <p>
          Products from THE FIFTH LABEL are covered for stitching, buttons, and zippers within 30 days from the date of purchase, for defects caused by manufacturing errors.
        </p>
        <ul>
          <li>Items must remain intact, unwashed, and unaltered.</li>
          <li>Original purchase invoice must be provided.</li>
        </ul>

        <div className="heading1">Non-Warranty Cases</div>
        <ul>
          <li>Damage caused by external factors (cuts, burns, tears, etc.).</li>
          <li>Material damage from incorrect washing (shrinkage, fading, etc.).</li>
          <li>Warranty period expired.</li>
        </ul>
      </div>
    </div>
  );

  const Shipping = () => (
    <div className="ThePolicy">
      <div className="policy-header">Shipping Policy</div>
      <div className="policy-content">
        <p>
          THE FIFTH LABEL offers nationwide delivery with safety and promptness guaranteed.
        </p>

        <div className="heading1">Ho Chi Minh City Area</div>
        <ul>
          <li>Free shipping on orders from 500,000₫ and above.</li>
          <li>Delivery time: 1–2 working days.</li>
        </ul>

        <div className="heading1">Other Provinces</div>
        <ul>
          <li>Shipped via courier services (GHN, GHTK, J&T, etc.).</li>
          <li>Shipping fees based on provider’s pricing.</li>
        </ul>

        <div className="heading1">Note</div>
        <p>Please check the goods carefully upon receipt to protect your rights.</p>
      </div>
    </div>
  );

  const Payment = () => (
    <div className="ThePolicy">
      <div className="policy-header">Payment Policy</div>
      <div className="policy-content">
        <p>We support safe and convenient payment methods:</p>

        <ul>
          <li><strong>Cash on Delivery (COD):</strong> Check the product before payment.</li>
          <li><strong>Bank Transfer:</strong> Transfer details provided at checkout.</li>
          <li><strong>E-Wallets:</strong> Supported: Momo, ZaloPay, VNPAY (if available).</li>
        </ul>

        <div className="heading1">Note</div>
        <p>
          For customized orders (e.g. with names or alterations), full payment is required in advance.
        </p>
      </div>
    </div>
  );

  const Complain = () => (
    <div className="ThePolicy">
      <div className="policy-header">Return & Complaint Policy</div>
      <div className="policy-content">
        <div className="heading1">Return Conditions</div>
        <ul>
          <li>Return within 7 days from the date of receipt.</li>
          <li>Items must retain tags, labels, and be unused and unwashed.</li>
          <li>Purchase invoice must be included.</li>
        </ul>

        <div className="heading1">Non-Returnable Cases</div>
        <ul>
          <li>Used, dirty, smelly, or damaged items.</li>
          <li>Discounted products over 30% off (unless manufacturer error).</li>
        </ul>

        <div className="heading1">Complaints</div>
        <p>
          You may file a complaint via our hotline, email, or in-store.
          We will respond within 48 business hours.
        </p>
      </div>
    </div>
  );

  const Security = () => (
    <div className="ThePolicy">
      <div className="policy-header">Privacy Policy</div>
      <div className="policy-content">
        <p>
          THE FIFTH LABEL is committed to protecting your personal information. Data is used solely for order processing, customer service, and enhancing your shopping experience.
        </p>

        <ul>
          <li>No sharing of data with third parties without consent.</li>
          <li>All information is securely stored and protected.</li>
        </ul>

        <div className="heading1">Policy Changes</div>
        <p>
          This policy may be updated without prior notice. Any changes will be posted on this page.
        </p>
      </div>
    </div>
  );

  return (
    <div className="Policy-background">
      <div className="Policy-container">
        <div className="flex-row">
          <div className="flex-col-1-4">
            <div className="policy-sidebar">
              <Accordion defaultActiveKey={["1"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>About Us</Accordion.Header>
                  <Accordion.Body>
                    THE FIFTH LABEL – a modern, stylish, and elegant fashion brand.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Policies</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className={Policy === "BH" ? "policy-read-item" : ""} onClick={() => setPolicy("BH")}>
                        Warranty Policy
                      </li>
                      <li className={Policy === "VC" ? "policy-read-item" : ""} onClick={() => setPolicy("VC")}>
                        Shipping Policy
                      </li>
                      <li className={Policy === "TT" ? "policy-read-item" : ""} onClick={() => setPolicy("TT")}>
                        Payment Policy
                      </li>
                      <li className={Policy === "DT" ? "policy-read-item" : ""} onClick={() => setPolicy("DT")}>
                        Return & Complaint Policy
                      </li>
                      <li className={Policy === "BM" ? "policy-read-item" : ""} onClick={() => setPolicy("BM")}>
                        Privacy Policy
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="flex-col-3-4">
            {Policy === "BH" && <Insurance />}
            {Policy === "VC" && <Shipping />}
            {Policy === "TT" && <Payment />}
            {Policy === "DT" && <Complain />}
            {Policy === "BM" && <Security />}
          </div>
        </div>
      </div>
    </div>
  );
}
