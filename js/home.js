```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("open");
        });


        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
            });

        });


        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                navMenu.classList.remove("open");
            }

        });

    }


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================================
       CARD ANIMATION
    ========================================= */

    const animatedElements =
        document.querySelectorAll(
            ".today-card, .info-card, .hero-card, .emergency-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(function (element) {
            observer.observe(element);
        });

    }

});
```
