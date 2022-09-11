import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import moment from "moment";
import TopBanner from "../components/TopBanner";

describe("TopBanner", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<TopBanner />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the ceefax text", () => {
    render(<TopBanner />);

    expect(screen.getByText(/p100/i)).toBeInTheDocument();
    expect(screen.getByText(/ceefax/i)).toBeInTheDocument();
  });

  it("renders the date correctly", () => {
    const date = moment().format("ddd D MMM").toUpperCase();

    render(<TopBanner />);

    expect(screen.getByText(date)).toBeInTheDocument();
  });

  it("renders the time correctly", () => {
    const time = moment().format("kk:mm/ss");

    render(<TopBanner />);

    expect(screen.getByText(time)).toBeInTheDocument();
  });
});
