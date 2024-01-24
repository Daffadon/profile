import Experience from "@/features/main/Experience";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";

const renderUI = () => {
  render(<Experience />);
};

beforeEach(() => {
  renderUI();
});

test("Experience Section", () => {
  const header = screen.getByRole("heading", { level: 3, name: /Experience/ });
  expect(header).toBeDefined;
});

test('Change "See More" Button ', () => {
  const button = screen.getAllByText(/See More/i)[0];
  fireEvent.click(button);
  expect(screen.getByText(/See Less/)).toBeDefined();
});

test('Change "See Less" Button ', () => {
  const seeMoreButton = screen.getAllByText(/See More/i)[0];
  fireEvent.click(seeMoreButton);
  const seeLessButton = screen.getAllByText(/See Less/)[0];
  fireEvent.click(seeLessButton);
  expect(seeMoreButton).toBeDefined();
});
