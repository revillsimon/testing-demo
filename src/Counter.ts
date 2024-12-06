export class Counter {
  countState: number = 0;

  count: HTMLParagraphElement;

  incrementButton: HTMLButtonElement;

  decrementButton: HTMLButtonElement;

  resetButton: HTMLButtonElement;

  incrementByTwo: boolean = false;

  incrementByTwoCheckbox: HTMLInputElement;

  constructor() {
    this.count = document.querySelector("#count")!;
    this.incrementButton = document.querySelector("#increment")!;
    this.decrementButton = document.querySelector("#decrement")!;
    this.resetButton = document.querySelector("#reset")!;
    this.incrementByTwoCheckbox = document.querySelector("#incrementByTwo")!;

    this.incrementButton.addEventListener("click", this.increment);
    this.decrementButton.addEventListener("click", this.decrement);
    this.resetButton.addEventListener("click", this.reset);
    this.incrementByTwoCheckbox.addEventListener("change", this.handleChange);
  }

  private increment = (): void => {
    this.countState += this.incrementByTwo ? 2 : 1;
    this.update();
  };

  private decrement = (): void => {
    if (this.countState === 0) return;

    this.countState -=
      !this.incrementByTwo || (this.incrementByTwo && this.countState === 1)
        ? 1
        : 2;
    this.update();
  };

  private reset = (): void => {
    this.countState = 0;
    this.update();
  };

  private update(): void {
    this.count.textContent = this.countState.toString();
  }

  private handleChange = (): void => {
    this.incrementByTwo = !this.incrementByTwo;
  };
}
