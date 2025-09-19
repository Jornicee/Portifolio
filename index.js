const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
    document.body.classList.add(temaSalvo);
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("tema", "light-mode");
    } else {
    localStorage.setItem("tema", "");
    }
}
  