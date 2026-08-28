function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  document.getElementById("screen-" + id).classList.add("active");
  window.scrollTo(0, 0);
}

function showTab(tab) {
  document.querySelectorAll(".seg-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  document.getElementById("panel-continuing").classList.toggle("active", tab === "continuing");
  document.getElementById("panel-new").classList.toggle("active", tab === "new");
}

document.addEventListener("DOMContentLoaded", () => {
  showScreen("auth");
  showTab("continuing");

  document.querySelectorAll(".seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => showTab(btn.dataset.tab));
  });

  document.getElementById("login-btn").addEventListener("click", () => showScreen("clearance"));
  document.getElementById("enroll-btn").addEventListener("click", () => showScreen("enrollment"));
  document.getElementById("view-schedule-btn").addEventListener("click", () => showScreen("schedule"));

  document.querySelectorAll("[data-back]").forEach((btn) => {
    btn.addEventListener("click", () => showScreen(btn.dataset.back));
  });
});
