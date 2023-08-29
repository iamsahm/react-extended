// file: src/Counter.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../src/components/Counter";

test("renders with initial value of 0 ", () => {
  // Setup
  render(<Counter />);

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("renders with a new value of 2 ", async () => {
  // Setup
  render(<Counter />);

  // Act - click the button twice
  await userEvent.click(screen.getByText("Increment"));
  await userEvent.click(screen.getByText("Increment"));

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("2");
});

test("renders with a new value of 1 after incrementing and decrementing", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Decrement"));
    expect(screen.getByRole("heading")).toHaveTextContent("1");
    });
