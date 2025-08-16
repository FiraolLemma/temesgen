document.addEventListener("DOMContentLoaded", () => {
    const switchers = document.querySelectorAll(".language-switcher button");

    function loadLanguage(lang) {
        fetch(`languages/${lang}.json`)
            .then(res => res.json())
            .then(data => {
                document.querySelectorAll("[data-i18n]").forEach(el => {
                    const key = el.getAttribute("data-i18n");
                    if (data[key]) {
                        el.textContent = data[key];
                    }
                });
                localStorage.setItem("selectedLang", lang);
            })
            .catch(err => console.error("Error loading language file:", err));
    }

    // Apply saved language
    const savedLang = localStorage.getItem("selectedLang") || "en";
    loadLanguage(savedLang);

    // Handle click events
    switchers.forEach(btn => {
        btn.addEventListener("click", () => {
            loadLanguage(btn.getAttribute("data-lang"));
        });
    });
});
