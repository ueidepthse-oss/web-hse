document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       NAVIGATION
    ========================================= */

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =========================================
       SUMMARY NUMBER ANIMATION
    ========================================= */

    const numbers = document.querySelectorAll(
        ".summary-info strong"
    );


    numbers.forEach(function (number) {

        const target = parseInt(
            number.getAttribute("data-value"),
            10
        );


        if (isNaN(target)) {
            return;
        }


        let start = 0;

        const duration = 1000;

        const startTime = performance.now();


        function animate(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );


            start = Math.floor(
                target * progress
            );


            number.textContent =
                start.toLocaleString("en-US");


            if (progress < 1) {

                requestAnimationFrame(animate);

            } else {

                number.textContent =
                    target.toLocaleString("en-US");

            }

        }


        requestAnimationFrame(animate);

    });


    /* =========================================
       ACTIVITY IMAGE FALLBACK
    ========================================= */

    const images = document.querySelectorAll(
        ".activity-card img"
    );


    images.forEach(function (image) {

        image.addEventListener("error", function () {

            this.style.display = "none";

            this.parentElement.classList.add(
                "no-image"
            );

        });

    });

});
