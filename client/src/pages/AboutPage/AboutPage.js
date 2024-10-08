import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import TEAM from "../../data/team";
import { quizFormActions } from "../../components/quiz/QuizForm/quizFormReducer";
import "./AboutPage.css";

import Modal from "react-modal";
import TeamModal from "../../components/TeamModal/TeamModal";
import MainHeading from "../../components/MainHeading/MainHeading";
import Button from "../../components/Button/Button";
import BrowserTab from "../../components/BrowserTab";

Modal.setAppElement("#root");

const AboutPage = () => {
  // Reset the background image
  const dispatch = useDispatch();
  dispatch(quizFormActions.reset());

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
      <BrowserTab title="About" />
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
      <div className="about-back-button">
        <Link to="/">
          <Button text="BACK TO HOME" />
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
