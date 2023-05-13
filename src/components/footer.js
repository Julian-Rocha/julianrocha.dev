class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Footer -->
      <footer class="mx-auto w-10/12 border-t border-black/10 py-5 dark:border-white/10">

        <!-- Footer Content -->
        <div class="flex flex-col-reverse items-center justify-center gap-2 sm:flex-row sm:justify-between sm:gap-0">

          <!-- Footer Copyright -->
          <p class="text-center sm:text-left">
            &copy
            2023
            Julian Rocha | All Rights Reserved
          </p>

          <!-- Footer Social Buttons -->
          <div class="flex items-center gap-5 text-4xl">
            <a href="https://www.instagram.com/juliaann._/" target="_blank">
              <i class="fa-brands fa-instagram hover:text-black/80 dark:hover:text-white/80"></i>
            </a>
            <a href="https://github.com/Julian-Rocha" target="_blank">
              <i class="fa-brands fa-github hover:text-black/80 dark:hover:text-white/80"></i>
            </a>
            <a href="https://www.linkedin.com/in/julian-rocha-361591263/" target="_blank">
              <i class="fa-brands fa-linkedin hover:text-black/80 dark:hover:text-white/80"></i></a>
          </div>

        </div>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
