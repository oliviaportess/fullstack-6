import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import Modal, { setAppElement } from "react-modal";
// import TeamModal from "../components/TeamModal";
import { MemoryRouter } from "react-router-dom";
import AboutPage from "./AboutPage";

// using jest to mock

jest.mock("react-modal", () => {
  const Modal = ({ isOpen, children }) => (
    <div
      role="dialog"
      style={{ display: isOpen ? "block" : "none" }}
      data-testid="team-modal"
    >
      {children}
    </div>
  );

  return {
    setAppElement: jest.fn(),
    default: Modal,
  };
});

describe("About Page", () => {
  // checking onClick changes modalIsOpen to true
  it("opens modal on click", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );

    const firstMember = screen.getAllByRole("heading")[0];
    fireEvent.click(firstMember);
    const modal = screen.queryByRole("dialog");
    expect(modal).toBeInTheDocument();
  });
});
