import About from "@/features/main/About";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("About Section", () => {
  render(<About />);
  expect(
    screen.getByRole("heading", { level: 3, name: /A Brief About Me/i })
  ).toBeDefined();
  expect(screen.getByText(/I am a third year student/)).toBeDefined();
});
