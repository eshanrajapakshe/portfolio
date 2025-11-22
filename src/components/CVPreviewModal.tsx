import React, { useEffect } from "react";
import { HiDownload, HiX } from "react-icons/hi";

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

const CVPreviewModal: React.FC<CVPreviewModalProps> = ({
  isOpen,
  onClose,
  cvUrl,
}) => {
  const getEmbedUrl = (url: string): string => {
    const fileIdMatch = url.match(/\/d\/(.+?)\//);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return url;
  };

  const getDownloadUrl = (url: string): string => {
    const fileIdMatch = url.match(/\/d\/(.+?)\//);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(cvUrl);
  const downloadUrl = getDownloadUrl(cvUrl);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="cv-modal-overlay" onClick={handleBackdropClick}>
      <div className="cv-modal-container">
        <div className="cv-modal-header">
          <h2>Curriculum Vitae</h2>
          <div className="cv-modal-actions">
            <button
              onClick={handleDownload}
              className="cv-modal-btn cv-download-btn"
              title="Download CV"
            >
              <HiDownload size="1.2em" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="cv-modal-btn cv-close-btn"
              title="Close"
            >
              <HiX size="1.5em" />
            </button>
          </div>
        </div>

        <div className="cv-modal-content">
          <iframe
            src={embedUrl}
            title="CV Preview"
            className="cv-preview-iframe"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

export default CVPreviewModal;
