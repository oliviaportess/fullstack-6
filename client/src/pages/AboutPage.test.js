// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Modal, { setAppElement } from "react-modal";
// import TeamModal from "../components/TeamModal";
// import { MemoryRouter } from "react-router-dom";
// import AboutPage from "./AboutPage";

// // using jest to mock

// jest.mock("react-modal", () => {
//   const Modal = ({ isOpen, children }) => (
//     <Modal
//       role="dialog"
//       style={{ display: isOpen ? "block" : "none" }}
//       data-testid="team-modal"
//     >
//       {children}
//     </Modal>
//   );

//   Modal.setAppElement = jest.fn();

//   return Modal;
// });

// describe("About Page", () => {
//   // checking onClick changes modalIsOpen to true
//   it("opens modal on click", () => {
//     render(
//       <MemoryRouter>
//         <AboutPage />
//       </MemoryRouter>,
//     );

//     const firstMember = screen.getAllByRole("heading")[0];
//     fireEvent.click(firstMember);
//     const modal = screen.queryByRole("dialog");
//     expect(modal).toBeInTheDocument();
//   });
// });

// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import AboutPage from "./AboutPage";

// describe("About Page", () => {
//   it("opens modal on click", () => {
//     render(
//       <MemoryRouter>
//         <AboutPage />
//       </MemoryRouter>,
//     );

//     const firstMember = screen.getAllByRole("heading")[0];
//     fireEvent.click(firstMember);
//     const modal = screen.queryByRole("dialog");
//     expect(modal).toBeInTheDocument();
//   });
// });

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AboutPage from "./AboutPage";
import TEAM from "../data/team";

describe("AboutPage Component", () => {
  test("should display modal when a team member is clicked", () => {
    // Render the AboutPage component
    render(<AboutPage />);

    // Find a team member by their name
    const memberElement = screen.getByText(TEAM[0].name); // Assuming TEAM[0] is the member you want to test

    // Simulate a click on the team member
    fireEvent.click(memberElement);

    // Assert that the modal is now open by checking if the modal content is displayed
    expect(screen.getByTestId("team-modal")).toBeInTheDocument();
    expect(screen.getByTestId("team-modal")).toHaveClass("modal");
    expect(screen.getByText(TEAM[0].name)).toBeInTheDocument();
  });
});
