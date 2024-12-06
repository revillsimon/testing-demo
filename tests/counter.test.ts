import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/dom";
import { UserEvent, userEvent } from "@testing-library/user-event";
import { CounterBuilder } from "./test-utils/CounterBuilder";
import {
  getCount,
  getDecrementButton,
  getFooterText,
  getIncrementButton,
  getIncrementByTwoCheckbox,
  getResetButton,
} from "./test-utils";

describe("counter tests", () => {
  describe("intial render", () => {
    it('should display a heading of "Counter App"', () => {
      // Arrange
      new CounterBuilder().build();
      const heading = screen.getByRole("heading", {
        level: 1,
        name: "Counter App",
      })!;

      // Assertion
      expect(heading).toHaveTextContent("Counter App");
    });

    it("should an initial count", () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();

      // Assertion
      expect(count).toBeVisible();
    });

    it("should an initial count of 0", () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();

      // Assertion
      expect(count).toHaveTextContent("0");
    });

    it("should display a decrement button", () => {
      // Arrange
      new CounterBuilder().build();
      const decrementButton = getDecrementButton();

      // Assertion
      expect(decrementButton).toBeVisible();
    });

    it("should display a increment button", () => {
      // Arrange
      new CounterBuilder().build();
      const incrementButton = getIncrementButton();

      // Assertion
      expect(incrementButton).toBeVisible();
    });

    it("should display a reset button", () => {
      // Arrange
      new CounterBuilder().build();
      const resetButton = getResetButton();

      // Assertion
      expect(resetButton).toBeVisible();
    });

    it('should display a footer containing text "2024 Simon Revill"', () => {
      // Arrange
      new CounterBuilder().build();
      const footerText = getFooterText();

      // Assertion
      expect(footerText).toBeVisible();
    });
  });

  describe("functionality", () => {
    let user: UserEvent;

    beforeEach(() => {
      user = userEvent.setup();
    });

    it("should increment the count from 0 to 1 when the user clicks on the increment button", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const incrementButton = getIncrementButton();

      // Act
      await user.click(incrementButton);

      // Assertion
      expect(count).toHaveTextContent("1");
    });

    it("should increment the count from 0 to 2 when the user clicks on the increment button twice", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const incrementButton = getIncrementButton();

      // Act
      await user.click(incrementButton);
      await user.click(incrementButton);

      // Assertion
      expect(count).toHaveTextContent("2");
    });

    it("should decrement the count from 1 to 0 when the user clicks on the decrement button", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const incrementButton = getIncrementButton();
      const decrementButton = getDecrementButton();

      // Act
      await user.click(incrementButton);
      await user.click(decrementButton);

      // Assertion
      expect(count).toHaveTextContent("0");
    });

    it("should reset the count to zero when clicking on the reset button", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const incrementButton = getIncrementButton();
      const resetButton = getResetButton();

      // Act
      await user.click(incrementButton);
      await user.click(resetButton);

      // Assertion
      expect(count).toHaveTextContent("0");
    });

    it("should not allow the counter to decrement below zero", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const decrementButton = getDecrementButton();

      // Act
      await user.click(decrementButton);

      // Assertion
      expect(count).toHaveTextContent("0");
    });

    it("should increment the count by two when the increment by two checkbox is checked", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const incrementButton = getIncrementButton();
      const checkbox = getIncrementByTwoCheckbox();

      // Act
      await user.click(checkbox);
      await user.click(incrementButton);

      // Assertion
      expect(count).toHaveTextContent("2");
    });

    it("should decrement the count by two when the increment by two checkbox is checked", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const incrementButton = getIncrementButton();
      const decrementButton = getDecrementButton();
      const checkbox = getIncrementByTwoCheckbox();

      // Act
      await user.click(incrementButton);
      await user.click(incrementButton);
      await user.click(checkbox);
      await user.click(decrementButton);

      // Assertion
      expect(count).toHaveTextContent("0");
    });

    it("should decrement the counter to 0 when the increment by two checkbox is checked and the current count is 1", async () => {
      // Arrange
      new CounterBuilder().build();
      const count = getCount();
      const incrementButton = getIncrementButton();
      const decrementButton = getDecrementButton();
      const checkbox = getIncrementByTwoCheckbox();

      // Act
      await user.click(incrementButton);
      await user.click(checkbox);
      await user.click(decrementButton);

      // Assertion
      expect(count).toHaveTextContent("0");
    });
  });
});
