import React, { useState } from "react";
import TEAM from "../data/team";
import Modal from "react-modal";
import TeamModal from "../components/TeamModal";
import MainHeading from "../components/MainHeading";
import BackgroundScreen from "../components/BackgroundScreen";
import Navbar from "../components/Navbar";
import "./AboutPage.css";
import gridImage from "../images/grid.png";
import Button from "../components/Button";

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
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
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
        </div>

        <TeamModal
          isOpen={modalIsOpen}
          member={selectedMember}
          onRequestClose={closeModal}
        />
        <Button text="BACK TO HOME" className="button-position" />
      </div>
    </div>
  );
};

export default AboutPage;
