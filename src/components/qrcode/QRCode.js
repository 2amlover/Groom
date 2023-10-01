import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCodeReact from "qrcode.react"; // Import the QRCode component
import { Link } from 'react-router-dom';


const QRCode = () => {
  // The content you want to encode in the QR code
  const qrCodeContent = "Your QR Code Content Here";

  return (
    <div className="container mt-5">
      <div className="qr-code">
        <QRCodeReact value={qrCodeContent} />
      </div>
      <div className="open-button mt-4">
        <Link to="/content" className="btn btn-primary px-5">
          Open
        </Link>
      </div>
    </div>
  );
};

export default QRCode;
