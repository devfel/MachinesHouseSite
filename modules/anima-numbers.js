// Function to create an animation on the numbers - loading-like style.

// --- Parameters ---
// numbers: Selector on what numbers will be animated. ie: `[data-number]`,
// default: none, can't be empty
// observerTarget: target to observe. ie: `.numbers`,
// default: none, can't be empty
// observerClass: observer to check if the annimation is active. ie: `active`
// default: none, can't be empty

export default class AnimaNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  // calculate how much a number should be increment by time,
  // can be used directly to animate a number on the website.
  static incrementNumber(num) {
    const total = +num.innerText;
    const inscremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += inscremento;
      num.innerText = start;
      if (start > total) {
        num.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumbers() {
    this.numbers.forEach((num) => {
      this.constructor.incrementNumber(num);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
