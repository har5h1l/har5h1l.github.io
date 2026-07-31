import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/components/theme-provider", () => ({
  ThemeProvider: ({ children }) => children,
}));

vi.mock("@/components/navigation", () => ({
  Navigation: () => <div>Navigation</div>,
}));

vi.mock("@/components/footer", () => ({
  Footer: () => <div>Footer</div>,
}));

vi.mock("@/components/ScrollToTop", () => ({
  default: () => null,
}));

vi.mock("@/pages/Home", () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock("@/pages/Research", () => ({
  default: () => <div>Research Page</div>,
}));

vi.mock("@/pages/Updates", () => ({
  default: () => <div>Updates Page</div>,
}));

vi.mock("@/pages/Publications", () => ({
  default: () => <div>Publications Page</div>,
}));

import App from "./App";

describe("App routing", () => {
  afterEach(cleanup);

  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("redirects the archived projects route to the consolidated research page", () => {
    window.history.pushState({}, "", "/projects");

    render(<App />);

    expect(screen.getByText("Research Page")).toBeInTheDocument();
  });

  it("redirects the legacy blog route to the homepage writing anchor", () => {
    window.history.pushState({}, "", "/blog");

    render(<App />);

    expect(screen.getByText("Home Page")).toBeInTheDocument();
    expect(window.location.hash).toBe("#writing");
  });

  it("redirects removed internal project detail routes to their prescribed destinations", () => {
    window.history.pushState({}, "", "/projects/focusgrid");
    const { unmount } = render(<App />);
    expect(screen.getByText("Research Page")).toBeInTheDocument();
    unmount();

    window.history.pushState({}, "", "/projects/wellnessgrid");
    render(<App />);
    expect(screen.getByText("Updates Page")).toBeInTheDocument();
  });
});
