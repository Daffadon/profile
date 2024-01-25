import TechCard from "@/components/card/TechCard";
import { FaJava } from "react-icons/fa";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Tech Card Component", () => {
  const tech = {
    name: "test name",
    logo: FaJava,
    color: "blueDeep",
    link: "/test-link",
  };
  render(<TechCard tech={tech} />);

  const link = screen.getByRole("link");
  expect(link.getAttribute("href")).toBe("/test-link");
  expect(link.getAttribute("target")).toBe("_blank");

  const name = screen.getByText(/test name/);
  expect(name).toBeDefined();
});
