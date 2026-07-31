import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Footer } from "./footer";

describe("Footer", () => {
  it("uses Research as the consolidated research navigation entry", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /^research$/i })).toHaveAttribute(
      "href",
      "/research",
    );
    expect(
      screen.queryByRole("link", { name: /^projects$/i }),
    ).not.toBeInTheDocument();
  });
});
