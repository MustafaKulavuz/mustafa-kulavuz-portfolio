document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Tarayıcının yerel depolamasından (localStorage) tema bilgisini yükle
  const savedTheme = localStorage.getItem("theme");

  // Varsayılan tema ayarı (Kaydedilmiş tema varsa onu kullan, yoksa sistem tercihini kontrol et)
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; // Koyu modda iken güneş simgesini göster
  } else if (savedTheme === "light" || !savedTheme) {
    // savedTheme 'light' ise veya hiç kaydedilmemişse, açık tema
    body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙"; // Açık modda iken ay simgesini göster
  }

  // Tema değiştirme butonuna tıklanma olayı
  themeToggle.addEventListener("click", () => {
    // Mevcut temayı değiştir
    body.classList.toggle("dark-mode");

    // Yeni temayı yerel depolamaya kaydet
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });
});
