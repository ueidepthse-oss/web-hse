/* =========================================
   HSE DEPARTMENT UEI
   HOME PAGE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.getElementById("menuToggle");


const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                navMenu.classList.toggle("show");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen.toString()
            );

        }
    );


    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove("show");


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideMenu =
                navMenu.contains(event.target);


            const clickedToggle =
                menuToggle.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                navMenu.classList.remove("show");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

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
   ACTIVE NAVIGATION
========================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


const pageLinks =
    document.querySelectorAll(".nav-link");


pageLinks.forEach(
    function (link) {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            pageLinks.forEach(
                function (item) {

                    item.classList.remove("active");

                }
            );


            link.classList.add("active");

        }

    }
);
