export const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <p>Modal content</p>

        <button className="modal-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
