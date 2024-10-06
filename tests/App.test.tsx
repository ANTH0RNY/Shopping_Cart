import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App.tsx";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// describe()
describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });
});
