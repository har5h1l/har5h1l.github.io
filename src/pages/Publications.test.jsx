import { cleanup, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Publications from "./Publications";

vi.mock("framer-motion", () => ({
  motion: new Proxy({}, { get: (_, key) => key }),
}));
afterEach(cleanup);

describe("Publications", () => {
  it("groups concrete outputs by research domain with return links", () => {
    render(
      <MemoryRouter>
        <Publications />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Publications" }),
    ).toBeInTheDocument();
    const autonomous = screen
      .getByRole("heading", { name: "Autonomous and Embodied Intelligence" })
      .closest("section");
    expect(autonomous).toHaveAttribute("id", "autonomous-intelligence");
    expect(
      within(autonomous).getByRole("link", { name: "Back to research area" }),
    ).toHaveAttribute("href", "/research#autonomous-intelligence");
    expect(
      within(autonomous).getByRole("link", { name: "Recording" }),
    ).toHaveAttribute(
      "href",
      "https://www.youtube.com/watch?v=1q40Jqk1HYs&t=36000s",
    );
    expect(document.title).toBe("Publications | Harshil Shah");
  });
});
