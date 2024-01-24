import TechStack from "@/features/main/TechStack";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("TechStack Section", () => {
  render(<TechStack />);
  const header = screen.getByRole("heading", { level: 3, name: /Tech Stack/ });
  expect(header).toBeDefined();
});
