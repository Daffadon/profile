import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Biography from "@/features/main/Biography";
test("Biography Section", () => {
  render(<Biography />);
  //render test h1
  expect(
    screen.getByRole("heading", { level: 1, name: /Daffa Putra Narendra/i })
  ).toBeDefined();

  // Render Test Image
  expect(screen.getByRole("img", { name: /Profile Picture/i }));
});
