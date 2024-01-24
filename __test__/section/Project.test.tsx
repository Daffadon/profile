import Project from "@/features/main/Project";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Project Section", () => {
  render(<Project />);
  const header = screen.getByRole("heading", { level: 3, name: /Project/ });
  expect(header).toBeDefined();
});
