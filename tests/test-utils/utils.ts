import { screen } from "@testing-library/dom";

export function getCount() {
  return screen.getByTestId("count")!;
}

export function getDecrementButton() {
  return screen.getByRole("button", {
    name: /decrement/i,
  })!;
}

export function getIncrementButton() {
  return screen.getByRole("button", {
    name: /increment/i,
  })!;
}

export function getResetButton() {
  return screen.getByRole("button", {
    name: /reset/i,
  })!;
}

export function getFooterText() {
  return screen.getByText(/© 2024 Simon Revill/i)!;
}

export function getIncrementByTwoCheckbox() {
  return screen.getByRole("checkbox", { name: /increment by 2/i });
}
