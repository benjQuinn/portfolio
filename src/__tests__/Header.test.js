import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders text", () => {
    render(<Header />);

    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("E")).toBeInTheDocument();
    expect(screen.getByText("N")).toBeInTheDocument();
    expect(screen.getByText(/q/i)).toBeInTheDocument();
    expect(
      screen.getByText(/full-stack software developer/i)
    ).toBeInTheDocument();
  });
});
