const StateModal = ({ stateInfo, onClose }) => {
  if (!stateInfo) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{stateInfo.title}</h2>
        <p>{stateInfo.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
