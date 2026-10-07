```javascript
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // NAVIGATION ACTIVE
    // =========================

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    // =========================
    // SUMMARY NUMBER ANIMATION
    // =========================

    const numbers = document.querySelectorAll(".summary-card strong");

    numbers.forEach(function (number) {

        const targetText = number.textContent.trim();

        // Ambil angka saja
        const target = parseInt(
            targetText.replace(/,/g, ""),
            10
        );

        // Jika bukan angka, abaikan
        if (isNaN(target)) {
            return;
        }

        let current = 0;

        const duration = 1000;
        const startTime = performance.now();

        function animate(time) {

            const progress = Math.min(
                (time - startTime) / duration,
                1
            );

            current = Math.floor(target * progress);

            number.textContent = current.toLocaleString("en-US");

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                number.textContent = target.toLocaleString("en-US");
            }
        }

        requestAnimationFrame(animate);

    });

});
```
