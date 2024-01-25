import { EducationCardProps } from "@/data/dto/mainProps";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ub from "@/asset/ub_logo.png";
import EducationCard from "@/components/card/EducationCard";

test("Education Card Component", () => {
  const education = {
    name: "test name",
    logo: ub,
    title: "test title",
    gpa: "test gpa",
    graduatedYear: "test year",
    color: "blueDeep",
  };
  render(<EducationCard education={education} />);
  const name = screen.getByRole("heading", { level: 2, name: /test name/ });
  const title = screen.getByText(/test title/);
  const gpa = screen.getByText(/test gpa/);
  const graduateYear = screen.getByText(/test year/);

  //test rendering text
  expect(name).toBeDefined();
  expect(title).toBeDefined();
  expect(gpa).toBeDefined();
  expect(graduateYear).toBeDefined();

  //test rendering image
  const image = screen.getByRole("img", { name: /test name/ });
  expect(image).toBeDefined();
});
