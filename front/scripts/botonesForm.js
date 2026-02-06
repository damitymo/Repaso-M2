document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("movieForm");
  const clearBtn = document.getElementById("clearBtn");
  const result = document.getElementById("result");


  function limpiarForm() {

    const inputs = form.querySelectorAll("input");

    inputs.forEach(input => {
      input.value = "";
    });

    result.classList.add("d-none");
    result.textContent = "";
  }


  function enviarFormulario(e) {

    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const year = document.getElementById("year").value.trim();
    const director = document.getElementById("director").value.trim();
    const duration = document.getElementById("duration").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const rate = document.getElementById("rate").value.trim();
    const poster = document.getElementById("poster").value.trim();


    if (
      !title ||
      !year ||
      !director ||
      !duration ||
      !genre ||
      !rate ||
      !poster
    ) {
      alert("⚠️ Complete todos los campos");
      return;
    }


    const pelicula = {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster
    };


    result.classList.remove("d-none");
    result.textContent = JSON.stringify(pelicula, null, 2);

    alert("✅ Película guardada");
  }


  form.addEventListener("submit", enviarFormulario);
  clearBtn.addEventListener("click", limpiarForm);

});
