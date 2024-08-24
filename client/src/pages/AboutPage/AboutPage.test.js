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
