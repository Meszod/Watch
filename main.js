//Changing Color Product

const pic = document.querySelector("#main-watch");
const cyan = document.querySelector(".cyan");
const purple = document.querySelector(".purple");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const colors = document.querySelectorAll(".color");

const info = [
    {src: 'https://i.postimg.cc/pdrzbz2j/cyan.png'},
    {src: 'https://i.postimg.cc/tCt0D8wm/purple.png'},
    {src: 'https://i.postimg.cc/Wb7kdXzr/blue.png'},
    {src: 'https://i.postimg.cc/WbVZpQNT/pink.png'},
    {src: 'https://i.postimg.cc/5t0jYgz7/green.png'},
    {src: 'https://i.postimg.cc/VkLbnn0h/red.png'}
]

cyan.addEventListener("click", function() { pic.src = info[0].src; })
purple.addEventListener("click", function() { pic.src = info[1].src; })
blue.addEventListener("click", function() { pic.src = info[2].src; })
pink.addEventListener("click", function() { pic.src = info[3].src; })
green.addEventListener("click", function() { pic.src = info[4].src; })
red.addEventListener("click", function() { pic.src = info[5].src; })

function color(){
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));

//Sticky navbar

var navbar = document.querySelector(".navbar");
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

// Navbar Toggling

const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}

// Closing Menu when navlink is clicked

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", linkAction));


// registering


// document.addEventListener("DOMContentLoaded", function () {
//     // Foydalanuvchi ro‘yxatdan o‘tgandan so‘ng so‘ramaslik uchun localStorage ishlatamiz
//     let isRegistered = localStorage.getItem("registered");
    
//     // Har safar saytga kirganda, sessionStorage orqali so‘rashyapmiz
//     if (sessionStorage.getItem("asked") !== "true" && isRegistered !== "true") {
//         Swal.fire({
//             title: "Diqqat!",
//             text: "Siz ro‘yxatdan o‘tmagansiz! Iltimos, avval ro‘yxatdan o‘ting.",
//             icon: "warning",
//             confirmButtonText: "OK"
//         }).then(() => {
//             window.location.href = "register.html";
//         });
        
//         // So‘raganini belgilash uchun sessionStorage ni "true" qilib qo‘yamiz
//         sessionStorage.setItem("asked", "true");
//         return;
//     }

//     // Ro‘yxatdan o‘tish tugmasi faqat register.html sahifasida ishlaydi
//     if (window.location.pathname.includes("register.html")) {
//         const registerBtn = document.getElementById("register-btn");
        
//         if (registerBtn) {
//             registerBtn.addEventListener("click", function () {
//                 // Ro‘yxatdan o‘tganligini localStorage ga saqlash
//                 localStorage.setItem("registered", "true");
//                 console.log("Registratsiya muvaffaqiyatli saqlandi!");

//                 Swal.fire({
//                     title: "Muvaffaqiyatli!",
//                     text: "Siz ro‘yxatdan o‘tdingiz!",
//                     icon: "success",
//                     confirmButtonText: "OK"
//                 }).then(() => {
//                     window.location.href = "index.html"; // Asosiy sahifaga yo‘naltirish
//                 });
//             });
//         }
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    // Foydalanuvchi ro‘yxatdan o‘tgandan so‘ng so‘ramaslik uchun localStorage ishlatamiz
    let isRegistered = localStorage.getItem("registered");
    
    // Har safar saytga kirganda, sessionStorage orqali so‘rashyapmiz
    if (sessionStorage.getItem("asked") !== "true" && isRegistered !== "true") {
        Swal.fire({
            title: "Diqqat!",
            text: "Siz ro‘yxatdan o‘tmagansiz! Iltimos, avval ro‘yxatdan o‘ting.",
            icon: "warning",
            confirmButtonText: "OK"
        }).then(() => {
            window.location.href = "register.html";
        });

        // So‘raganini belgilash uchun sessionStorage ni "true" qilib qo‘yamiz
        sessionStorage.setItem("asked", "true");
        return;
    }

    // Ro‘yxatdan o‘tish tugmasi faqat register.html sahifasida ishlaydi
    if (window.location.pathname.includes("register.html")) {
        const registerBtn = document.getElementById("register-btn");

        if (registerBtn) {
            registerBtn.addEventListener("click", function () {
                // Ro‘yxatdan o‘tganligini localStorage ga saqlash
                localStorage.setItem("registered", "true");
                console.log("Registratsiya muvaffaqiyatli saqlandi!");

                Swal.fire({
                    title: "Muvaffaqiyatli!",
                    text: "Siz ro‘yxatdan o‘tdingiz!",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then(() => {
                    window.location.href = "index.html"; // Asosiy sahifaga yo‘naltirish
                });
            });
        }
    }
});
