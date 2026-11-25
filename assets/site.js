"use strict";

for (const media of document.querySelectorAll("[data-sources]")) {
  const image = media.querySelector("img");
  const status = media.querySelector(".media-status");
  const sources = media.dataset.sources.split("|");
  let sourceIndex = 0;

  function loadNextSource() {
    const source = sources[sourceIndex++];
    if (source) {
      image.src = source;
      return;
    }

    media.dataset.unavailable = "";
    status.hidden = false;
  }

  image.addEventListener("error", loadNextSource);
  image.addEventListener("load", () => {
    media.dataset.loaded = "";
    image.hidden = false;

    const opener = media.closest("[data-gallery-item]");
    if (opener) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "media";
      button.setAttribute("aria-label", `Enlarge ${image.alt}`);
      button.dataset.loaded = "";
      button.append(image);
      opener.replaceChildren(button);
      button.addEventListener("click", () => {
        const dialog = document.querySelector("#photo-viewer");
        const enlarged = dialog.querySelector("img");
        enlarged.alt = image.alt;
        enlarged.src = image.currentSrc;
        dialog.showModal();
      });
    }
  });

  loadNextSource();
}

const carousel = document.querySelector("[data-carousel]");
if (carousel) {
  const slides = [...carousel.querySelectorAll("[data-slide]")];
  const count = carousel.querySelector(".slide-count");
  const toggle = carousel.querySelector("[data-play]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let playing = !reducedMotion.matches;
  let timer;

  function showSlide(index) {
    slides[current].hidden = true;
    current = (index + slides.length) % slides.length;
    slides[current].hidden = false;
    count.textContent = `${current + 1} / ${slides.length}`;
  }

  function schedule() {
    window.clearInterval(timer);
    if (playing && !document.hidden && !carousel.matches(":hover, :focus-within")) {
      timer = window.setInterval(() => showSlide(current + 1), 5000);
    }
  }

  function updatePlayback() {
    toggle.dataset.playing = String(playing);
    toggle.setAttribute("aria-label", playing ? "Pause slideshow" : "Play slideshow");
    schedule();
  }

  carousel.querySelector("[data-previous]").addEventListener("click", () => {
    showSlide(current - 1);
    schedule();
  });
  carousel.querySelector("[data-next]").addEventListener("click", () => {
    showSlide(current + 1);
    schedule();
  });
  toggle.addEventListener("click", () => {
    playing = !playing;
    updatePlayback();
  });
  for (const event of ["mouseenter", "mouseleave", "focusin", "focusout"]) {
    carousel.addEventListener(event, () => window.setTimeout(schedule, 0));
  }
  document.addEventListener("visibilitychange", schedule);
  reducedMotion.addEventListener("change", (event) => {
    playing = !event.matches;
    updatePlayback();
  });
  updatePlayback();
}

const viewer = document.querySelector("#photo-viewer");
if (viewer) {
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
}
