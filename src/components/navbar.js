class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Navbar -->
      <nav class="absolute z-10 w-full bg-transparent px-8 py-4 sm:px-20 md:py-2 text-white">
        
        <!-- Navbar Container -->
        <div class="flex flex-wrap items-center justify-between py-1 md:py-4">
          
          <!-- Navbar Logo -->
          <a href="/index.html" class="p-2 text-2xl font-extrabold hover:text-white/80">
            Julian<span class="text-[#EEABEE] dark:text-[#F39258]">.</span>
          </a>

          <!-- Navbar Hamburger -->
          <button id="nav-toggle"
            class="touch-manipulation p-2 md:hidden"
            type="button"
            aria-expanded="false"
            aria-controls="nav-content"
          >
            <i id="bars" class="fa-solid fa-bars fa-xl" aria-hidden="true"></i>
            <i id="x" class="fa-solid fa-x fa-xl hidden" aria-hidden="false"></i>
          </button>
          
          <!-- Navbar Menu -->
          <div
            class="hidden w-full md:block md:w-auto"
            id="nav-content"
            aria-expanded="true"
            aria-labelledby="nav-toggle"
          >

          <!-- Navbar Links -->
          <ul
            class="font-medium flex min-h-[calc(100dvh-88px)] flex-col items-center justify-center gap-5 text-base md:min-h-0 md:flex-row md:justify-start"
          >
            <li>
              <a
                href="/index.html"
                class="block py-2 px-4 hover:text-white/80"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a href="/index.html#about" class="block py-2 px-4 hover:text-white/80"
                >About</a
              >
            </li>
            <li>
              <a
                href="/src/pages/projects.html"
                class="block py-2 px-4 hover:text-white/80"
                >Projects</a
              >
            </li>
            <li>
              <button
                class="rounded-full border border-white px-3 py-2 transition-all duration-150 ease-linear hover:bg-white hover:text-black md:px-5 md:py-2"
                type="button"
              >
                <a href="mailto:juliannrochaa@gmail.com" class="font-medium"
                  >Contact Me</a
                >
              </button>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);

// mobile navigation menu toggle
const bodyElement = document.body;
const htmlElement = document.documentElement;
const toggle = document.getElementById("nav-toggle");
const nav = document.querySelector("nav");
const content = document.getElementById("nav-content");
const links = document.querySelectorAll("#nav-content li");
const bars = document.getElementById("bars");
const x = document.getElementById("x");

const show = () => {
  bodyElement.classList.add("overflow-hidden");
  htmlElement.classList.add("overflow-hidden");
  nav.classList.add("dark-bg-blur");
  content.classList.remove("hidden");
  toggle.setAttribute("aria-expanded", true);
  content.setAttribute("aria-hidden", false);
  bars.classList.add("hidden");
  x.classList.remove("hidden");
};

const hide = () => {
  bodyElement.classList.remove("overflow-hidden");
  htmlElement.classList.remove("overflow-hidden");
  nav.classList.remove("dark-bg-blur");
  content.classList.add("hidden");
  toggle.setAttribute("aria-expanded", false);
  content.setAttribute("aria-hidden", true);
  bars.classList.remove("hidden");
  x.classList.add("hidden");
};

toggle.addEventListener("click", (event) => {
  event.stopPropagation();
  JSON.parse(toggle.getAttribute("aria-expanded")) ? hide() : show();
});

// close nav if user clicks a link
links.forEach((l) => {
  l.addEventListener("click", hide);
});

// close nav if user clicks outside of it (us if off canvas)
// const handleClosure = event => !content.contains(event.target) && hide()

// window.addEventListener('click', handleClosure)
// window.addEventListener('focusin', handleClosure)
