import React, { useState } from "react";
import TEAM from "../data/team";
import Modal from "react-modal";
import TeamModal from "./TeamModal";
import "./About.css";

Modal.setAppElement("#root");

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <h1 className="heading-gradient">About the Team</h1>
      <div className="team-container">
        {TEAM.map((member, index) => (
          <div
            key={index}
            className="team-member"
            onClick={() => openModal(member)}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="member-image"
            />
            <h2 className="yourName">{member.name}</h2>
          </div>
        ))}
      </div>

      <TeamModal
        isOpen={modalIsOpen}
        member={selectedMember}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default About;
