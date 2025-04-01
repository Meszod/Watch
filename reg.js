document.querySelectorAll(".inputBx input[type='submit']").forEach(function(button) {
    if (button.value === "Sign in") { // Faqat "Sign in" tugmasi ishlashi uchun
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Form yuborilishini oldini olamiz
            localStorage.setItem("registered", "true");
            window.location.href = "index.html";
        });
    }
});
