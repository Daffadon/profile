import ExperienceCard from "@/components/card/ExperienceCard";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Experience Card Component", () => {
  const experienceData = {
    title: "test title",
    image: "",
    place: "test place",
    date: "test date start",
    until: "test date end",
    role: "test role",
    description: ["description 1", "description 2"],
  };

  render(<ExperienceCard experience={experienceData} />);

  const title = screen.getByText(/test title/);
  const place = screen.getByText(/test place/);
  const date = screen.getByText(/test date start/);
  const until = screen.getByText(/test date end/);
  const role = screen.getByText(/test role/);
  const desc1 = screen.getByText(/description 1/);
  const desc2 = screen.getByText(/description 2/);

  expect(title).toBeDefined();
  expect(place).toBeDefined();
  expect(date).toBeDefined();
  expect(until).toBeDefined();
  expect(role).toBeDefined();
  expect(desc1).toBeDefined();
  expect(desc2).toBeDefined();
});
