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

    expect(screen.getByText(/b/i)).toBeInTheDocument();
    expect(screen.getByText(/e/i)).toBeInTheDocument();
    expect(screen.getByText("N")).toBeInTheDocument();
    expect(screen.getByText(/quinn/i)).toBeInTheDocument();
  });
});
