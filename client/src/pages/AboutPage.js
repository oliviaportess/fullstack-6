import React, { useState } from "react";
import TEAM from "../data/team";
import Modal from "react-modal";
import TeamModal from "../components/TeamModal";
import MainHeading from "../components/MainHeading";
import "./AboutPage.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const AboutPage = () => {
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
      <MainHeading title="About The Team" />
      <div className="team-container">
        {TEAM.map((member, index) => (
          <div
            key={index}
            className="team-member"
            onClick={() => openModal(member)}
          >
            <div className="image-container">
              <img
                src={member.photo}
                alt={member.name}
                className="member-image"
              />
            </div>
            <h2 className="yourName">{member.name}</h2>
          </div>
        ))}
        <Link to="/">
          <Button text="BACK TO HOME" className="button-position" />
        </Link>
      </div>

      <TeamModal
        isOpen={modalIsOpen}
        member={selectedMember}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default AboutPage;
