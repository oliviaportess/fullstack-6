import React from "react";
import Modal from "react-modal";
import "./TeamModal.css";

const TeamModal = ({ isOpen, member, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="team member details"
      className="modal"
      overlayClassName="modal-overlay"
    >
      {member && (
        <>
          <h2>{member.name}</h2>
          <img src={member.photo} alt={member.name} className="member-image" />
          <ul>
            {member.hobbies.map((hobby, index) => (
              <li key={index}>
                <p>{hobby}</p>
              </li>
            ))}
          </ul>
          <button onClick={onRequestClose}>Close</button>
        </>
      )}
    </Modal>
  );
};

export default TeamModal;
