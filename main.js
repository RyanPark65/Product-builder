
const generatorBtn = document.getElementById("generator-btn");
const numberElements = document.querySelectorAll(".number");
const themeSwitcher = document.getElementById("theme-switcher");
const body = document.body;

generatorBtn.addEventListener("click", () => {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    numbers.sort((a, b) => a - b);

    numberElements.forEach((element, index) => {
        element.textContent = numbers[index];
        element.style.transform = "translateY(-10px)";
        element.style.opacity = "0";
        setTimeout(() => {
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
        }, 100 * (index + 1));
    });
});

themeSwitcher.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeSwitcher.textContent = "Light Mode";
    } else {
        themeSwitcher.textContent = "Dark Mode";
    }
});
