import React from "react";
import Modal from "react-modal";
import "./TeamModal.css";
import Button from "./Button";

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
          <h2 className={`main-heading heading-small`}>{member.name}</h2>
          <img src={member.photo} alt={member.name} className="modal-image" />
          <ul className="hobbies-list">
            {member.hobbies.map((hobby, index) => (
              <li key={index} className="hobby-item">
                <p>{hobby}</p>
              </li>
            ))}
          </ul>
          <Button
            text="Close"
            className="button-position-modal"
            onClick={onRequestClose}
          />
        </>
      )}
    </Modal>
  );
};

export default TeamModal;
