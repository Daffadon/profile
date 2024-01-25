import Footer from "@/components/appbar/Footer";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Footer Section", () => {
  render(<Footer />);
  const footer = screen.getByText(`Copyright ${new Date().getFullYear()}`);
  expect(footer).toBeDefined();
});
