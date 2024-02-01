import React from 'react';
import './BookingModal.css'; 

export default function BookingModal({ isOpen, close, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={close}>Close</button>
        {children}
      </div>
    </div>
  );
}
