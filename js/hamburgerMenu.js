function myFunction() {
  const x = document.getElementById("hidden-div");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
