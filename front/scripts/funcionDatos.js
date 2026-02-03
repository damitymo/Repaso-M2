const axios= require ("axios");



const funcionDatos=  async () => {
  try {
    const data= await axios.get("https://students-api.up.railway.app/movies");
  
    const tarjetasContainer = document.getElementById("tarjetasContainer");
    tarjetasContainer.innerHTML = "";

    data.data.forEach(({ title, year, director, genre, rate, poster }) => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

      col.innerHTML = `
        <div class="card h-100">
          <img src="${poster}" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
              Año: ${year}<br>
              Director: ${director}<br>
              Género: ${Array.isArray(genre) ? genre.join(", ") : genre}<br>
              ⭐ ${rate}
            </p>
          </div>
        </div>
      `;

      tarjetasContainer.appendChild(col);
    });
  } catch (error) {
    console.log(error);
    
  }
  
  
  
}
module.exports= funcionDatos;