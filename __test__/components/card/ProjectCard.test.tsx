import ProjectCard from "@/components/card/ProjectCard";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Project Card Component", () => {
  const project = {
    title: "test title",
    role: "test role",
    github: "/test-link",
    tech: "test tech",
    color: "blueReact",
    description: "test desc",
  };

  render(<ProjectCard project={project} />);

  const title = screen.getByText(/test title/);
  const role = screen.getByText(/test role/);
  const tech = screen.getByText(/test tech/);
  const desc = screen.getByText(/test desc/);

  expect(title).toBeDefined();
  expect(role).toBeDefined();
  expect(tech).toBeDefined();
  expect(desc).toBeDefined();

  const link = screen.getByRole("link");
  expect(link.getAttribute("href")).toBe("/test-link");
  expect(link.getAttribute("target")).toBe("_blank");
});
