/* =========================
   SECRET INTRO
========================= */

const intro = document.getElementById("intro");

const website = document.getElementById("website");

const enterBtn = document.getElementById("enterBtn");


enterBtn.addEventListener("click", function () {

  intro.classList.add("hide");

  website.classList.add("show");

  createHeartBurst(25);

});


/* =========================
   TYPEWRITER
========================= */

const typing =
  document.getElementById("typing");

const message =
  "Some people become memories. Some people become home. ❤️";

let index = 0;


function typeText() {

  if (index < message.length) {

    typing.textContent +=
      message[index];

    index++;

    setTimeout(typeText, 55);

  }

}

typeText();


/* =========================
   OPEN HEART
========================= */

document
  .getElementById("openHeart")
  .addEventListener("click", function () {

    document
      .getElementById("proposal")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


/* =========================
   SURPRISE
========================= */

const surpriseBtn =
  document.getElementById("surpriseBtn");

const surpriseBox =
  document.getElementById("surpriseBox");


surpriseBtn.addEventListener("click", function () {

  surpriseBox.classList.toggle("show");

  if (
    surpriseBox.classList.contains("show")
  ) {

    surpriseBtn.textContent =
      "Hide My Surprise 💗";

    createHeartBurst(15);

  } else {

    surpriseBtn.textContent =
      "Tap for a Surprise 💌";

  }

});


/* =========================
   PROPOSAL
========================= */

const answer =
  document.getElementById("answer");


document
  .getElementById("yesBtn")
  .addEventListener("click", function () {

    answer.textContent =
      "You just made this little website very happy. ❤️";

    celebrate();

  });


document
  .getElementById("alwaysBtn")
  .addEventListener("click", function () {

    answer.textContent =
      "Then let's make beautiful memories together. 💖";

    celebrate();

  });


/* =========================
   FLOATING HEART
========================= */

function createHeart() {

  const heart =
    document.createElement("div");

  heart.textContent =
    ["❤️","💗","💕","💖","💘"][
      Math.floor(
        Math.random() * 5
      )
    ];

  heart.style.position = "fixed";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.bottom =
    "-30px";

  heart.style.fontSize =
    Math.floor(
      Math.random() * 16 + 14
    ) + "px";

  heart.style.zIndex = "300";

  heart.style.pointerEvents =
    "none";

  heart.style.opacity = ".85";

  const duration =
    Math.random() * 4 + 4;

  heart.style.transition =
    `transform ${duration}s linear,
     opacity ${duration}s linear`;

  document.body.appendChild(heart);


  requestAnimationFrame(function () {

    heart.style.transform =
      "translateY(-110vh) rotate(360deg)";

    heart.style.opacity = "0";

  });


  setTimeout(function () {

    heart.remove();

  }, duration * 1000);

}


setInterval(createHeart, 1100);


/* =========================
   HEART BURST
========================= */

function createHeartBurst(amount) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    setTimeout(
      createHeart,
      i * 70
    );

  }

}


/* =========================
   CELEBRATION
========================= */

function celebrate() {

  createHeartBurst(40);

}


/* =========================
   SCROLL REVEAL
========================= */

const sections =
  document.querySelectorAll(
    ".section, .proposal"
  );


sections.forEach(function(section) {

  section.style.opacity = "0";

  section.style.transform =
    "translateY(30px)";

  section.style.transition =
    "opacity .8s ease, transform .8s ease";

});


function revealSections() {

  const height =
    window.innerHeight;


  sections.forEach(function(section) {

    const top =
      section.getBoundingClientRect().top;


    if (top < height - 100) {

      section.style.opacity = "1";

      section.style.transform =
        "translateY(0)";

    }

  });

}


window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

/* =========================
   FULLSCREEN PHOTO GALLERY
========================= */

const galleryImages =
  Array.from(
    document.querySelectorAll(".gallery img")
  );

const photoViewer =
  document.getElementById("photoViewer");

const viewerImage =
  document.getElementById("viewerImage");

const closeViewer =
  document.getElementById("closeViewer");

const prevPhoto =
  document.getElementById("prevPhoto");

const nextPhoto =
  document.getElementById("nextPhoto");

const photoCounter =
  document.getElementById("photoCounter");

let currentPhoto = 0;


function showPhoto(index) {

  currentPhoto =
    (index + galleryImages.length) %
    galleryImages.length;

  viewerImage.src =
    galleryImages[currentPhoto].src;

  photoCounter.textContent =
    `${currentPhoto + 1} / ${galleryImages.length}`;

  photoViewer.classList.add("show");

}


galleryImages.forEach(
  function(image, index) {

    image.style.cursor = "pointer";

    image.addEventListener(
      "click",
      function() {

        showPhoto(index);

      }
    );

  }
);


closeViewer.addEventListener(
  "click",
  function() {

    photoViewer.classList.remove("show");

  }
);


prevPhoto.addEventListener(
  "click",
  function() {

    showPhoto(currentPhoto - 1);

  }
);


nextPhoto.addEventListener(
  "click",
  function() {

    showPhoto(currentPhoto + 1);

  }
);


photoViewer.addEventListener(
  "click",
  function(event) {

    if (event.target === photoViewer) {

      photoViewer.classList.remove("show");

    }

  }
);


document.addEventListener(
  "keydown",
  function(event) {

    if (
      !photoViewer.classList.contains("show")
    ) {
      return;
    }

    if (event.key === "Escape") {

      photoViewer.classList.remove("show");

    }

    if (event.key === "ArrowLeft") {

      showPhoto(currentPhoto - 1);

    }

    if (event.key === "ArrowRight") {

      showPhoto(currentPhoto + 1);

    }

  }
);

/* Rita demo password lock */
(function () {
  const form = document.getElementById("rita-unlock-form");
  const lock = document.getElementById("rita-lock");
  if (!form || !lock) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const entered =
      document.getElementById("rita-password").value;
    const error =
      document.getElementById("rita-lock-error");

    if (entered.trim() === "i love you 😘") {
      lock.style.display = "none";
    } else {
      error.textContent = "Not quite, my love. Try again 💗";
    }
  });
})();
