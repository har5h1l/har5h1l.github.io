import { cleanup, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Research from "./Research";

vi.mock("framer-motion", () => ({
  motion: new Proxy({}, { get: (_, key) => key }),
}));
afterEach(cleanup);

describe("Research", () => {
  it("renders the three retained research domains and their canonical anchors", () => {
    render(
      <MemoryRouter>
        <Research />
      </MemoryRouter>,
    );
    for (const [heading, id] of [
      ["Autonomous and Embodied Intelligence", "autonomous-intelligence"],
      ["Social Cognition and Multi-Agent Intelligence", "social-cognition"],
      ["Biomedical AI", "biomedical-ai"],
    ]) {
      expect(
        screen.getByRole("heading", { name: heading }).closest("section"),
      ).toHaveAttribute("id", id);
    }
    expect(screen.queryByRole("heading", { name: "Efficient Computation" })).not.toBeInTheDocument();
    expect(document.querySelector('meta[name="description"]')).not.toHaveAttribute(
      "content",
      expect.stringContaining("efficient computation"),
    );
    expect(document.title).toBe("Research | Harshil Shah");
  });

  it("uses domain-level publication links without role or recognition panels", () => {
    render(
      <MemoryRouter>
        <Research />
      </MemoryRouter>,
    );
    const autonomous = screen
      .getByRole("heading", { name: "Autonomous and Embodied Intelligence" })
      .closest("section");
    expect(
      within(autonomous).getByRole("link", { name: "View related outputs" }),
    ).toHaveAttribute("href", "/publications#autonomous-intelligence");
    expect(
      screen.queryByText("Publications and features"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("CO-AUTHOR")).not.toBeInTheDocument();
  });

  it("groups autonomous and social projects in shared divided containers", () => {
    render(
      <MemoryRouter>
        <Research />
      </MemoryRouter>,
    );
    const autonomous = screen
      .getByRole("heading", { name: "Autonomous and Embodied Intelligence" })
      .closest("section");
    expect(
      within(autonomous).getByText("CURRENT"),
    ).toBeInTheDocument();
    expect(within(autonomous).getByText("2025")).toBeInTheDocument();
    expect(within(autonomous).queryByText("Earlier work")).not.toBeInTheDocument();
    expect(
      within(autonomous).getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/JojiGitHub/Active-Inference-2025");
    expect(
      within(autonomous).getByRole("link", { name: "Poster" }),
    ).toHaveAttribute(
      "href",
      "https://github.com/har5h1l/Active-Inference-AutoNav-2025/blob/main/An%20Active%20Inference%20Approach%20to%20Autonomus%20Navigation%20Trifold%20copy.pdf",
    );
    expect(
      within(autonomous).getAllByTestId("research-entry-container"),
    ).toHaveLength(1);
    expect(
      within(autonomous).getByTestId("research-entry-container").querySelectorAll("article"),
    ).toHaveLength(2);
  });
});
