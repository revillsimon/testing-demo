import { Counter } from "../../src/Counter";

export class CounterBuilder {
  build() {
    document.body.innerHTML = `
              <header>
                  <h1>Counter App</h1>
              </header>
              <main>
                  <section class="counter">
                      <button type="button" class="counter__btn counter__btn--decrement" id="decrement">Decrement</button>
                      <p data-testid="count" class="counter__count" id="count">0</p>
                      <button type="button" class="counter__btn counter__btn--increment" id="increment">Increment</button>
                      <button type="button" class="counter__btn counter__btn--reset" id="reset">Reset</button>
                      <div class="counter__increment-by-two">
                        <input type="checkbox" id="incrementByTwo" />
                        <label for="incrementByTwo">Increment by 2</label>
                    </div>
                  </section>
              </main>
              <footer>
                  <p>© 2024 Simon Revill</p>
              </footer>
          `;

    new Counter();
  }
}