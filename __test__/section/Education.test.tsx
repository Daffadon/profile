import Education from "@/features/main/Education";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Education Section", () => {
  render(<Education />);
  const header = screen.getByRole("heading", { level: 3, name: /Education/ });
  expect(header).toBeDefined();
});
