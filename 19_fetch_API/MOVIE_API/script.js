document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const movieName = document.getElementById("movieName").value;

  const container = document.getElementById("container");

  const errorText = document.getElementById("error");

  container.innerHTML = "";

  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=891c4e4c&s=${movieName}`,
    );
    const data = await res.json();
    if (data.Response !== "True") {
      throw new Error("Failed To Fetch Movie Data!!");
    } else {
      data.Search.forEach((movie) => {
        const image = document.createElement("img");

        image.src = movie.Poster;
        image.alt = movie.Title;
        image.style.width = "200px";
        image.style.margin = "10px";
        container.appendChild(image);
      });
    }
  } catch (error) {
    errorText.textContent = error.message;
  }
});
