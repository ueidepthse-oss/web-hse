```javascript
/* =========================================================
   HSE HOME
   PT UNGGUL EJAWANTAH INDUSTRI
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("show");

        });


        /* Close menu after clicking navigation */

        const navLinks = navMenu.querySelectorAll(".nav-link");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("show");

            });

        });

    }


    /* =========================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================== */

    document.addEventListener("click", function (event) {

        if (!menuToggle || !navMenu) {
            return;
        }

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            navMenu.classList.remove("show");

        }

    });


    /* =========================================
       SIMPLE SCROLL ANIMATION
    ========================================== */

    const animatedElements = document.querySelectorAll(
        ".stat-card, .program-card, .news-card, .about-content, .about-visual"
    );

    const observerOptions = {
        threshold: 0.12
    };


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        observerOptions
    );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });


    /* =========================================
       UPDATE YEAR
    ========================================== */

    const currentYear = new Date().getFullYear();

    const footerText =
        document.querySelector(".footer-bottom-inner span");

    if (footerText) {

        footerText.innerHTML =
            "© " +
            currentYear +
            " PT Unggul Ejawantah Industri. All Rights Reserved.";

    }

});
```
