// =====================================
// MENÚ
// =====================================

const menuButton =
  document.getElementById("menuButton");

const navMenu =
  document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});


document
  .querySelectorAll(".nav-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

    });

  });


// =====================================
// MODAL
// =====================================

const modal =
  document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalText =
  document.getElementById("modalText");

const closeModal =
  document.getElementById("closeModal");

const modalButton =
  document.getElementById("modalButton");


document
  .querySelectorAll(".info-button")
  .forEach(button => {

    button.addEventListener("click", () => {

      modalTitle.textContent =
        button.dataset.title;

      modalText.textContent =
        button.dataset.text;

      modal.classList.add("active");

    });

  });


document
  .querySelectorAll(".more-button")
  .forEach(button => {

    button.addEventListener("click", () => {

      modalTitle.textContent =
        button.dataset.title;

      modalText.textContent =
        button.dataset.text;

      modal.classList.add("active");

    });

  });


// =====================================
// SAN JUAN Y SAN PEDRO
// =====================================

const festivalButton =
  document.getElementById("festivalButton");


festivalButton.addEventListener("click", () => {

  modalTitle.textContent =
    "San Juan y San Pedro";

  modalText.textContent =
    "Las fiestas de San Juan y San Pedro reúnen música, danza, concursos, desfiles, gastronomía y diferentes expresiones del folclor huilense.";

  modal.classList.add("active");

});


// =====================================
// CERRAR MODAL
// =====================================

function cerrarModal() {

  modal.classList.remove("active");

}


closeModal.addEventListener(
  "click",
  cerrarModal
);


modalButton.addEventListener(
  "click",
  cerrarModal
);


modal.addEventListener("click", event => {

  if (event.target === modal) {

    cerrarModal();

  }

});


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      cerrarModal();

    }

  }
);


// =====================================
// ANIMACIONES AL HACER SCROLL
// =====================================

const elementos =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target
            .classList
            .add("visible");

          observer
            .unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.15
    }

  );


elementos.forEach(elemento => {

  observer.observe(elemento);

});


// =====================================
// EFECTO DEL HEADER
// =====================================

const header =
  document.getElementById("header");


window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.boxShadow =
      "0 5px 25px rgba(0,0,0,0.12)";

  } else {

    header.style.boxShadow =
      "none";

  }

});