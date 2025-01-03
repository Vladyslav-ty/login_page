// document.addEventListener("DOMContentLoaded", () => {
//     const snowContainer = document.getElementById("snow-container");
    
//     function createSnowflake() {
//         const snowflake = document.createElement("div");
//         snowflake.classList.add("snowflake");
//         snowflake.textContent = ["❄", "✦"][Math.floor(Math.random() * 2)];

//         // Случайное положение и размер
//         const size = Math.random() * 10 + 10; // Размер от 10px до 20px
//         let grayShade = Math.floor(Math.random() * 56) + 200; // От 200 до 255 (светлые оттенки)
//         let color = `rgb(${grayShade}, ${grayShade}, ${grayShade})`;
//         snowflake.style.color = `rgb(${grayShade}, ${grayShade}, ${grayShade})`;        snowflake.style.fontSize = `${size}px`;
//         snowflake.style.left = `${Math.random() * 100}vw`; // Случайная позиция по ширине
//         snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // Скорость падения

//         snowContainer.appendChild(snowflake);

//         // Удаляем снежинку после завершения анимации
//         setTimeout(() => {
//             snowflake.remove();
//         }, 11000);
//         wind.addEventListener("animationend", () => wind.remove()); // Удаление вихря после завершения анимации
//     }
//     // Функция создания "вихрей"
//     function createWind() {
//         const windContainer = document.getElementById('wind');
//         windContainer.appendChild(wind)

//         // Случайная позиция и размер вихря
//         const size = Math.random() * 100 + 50; // От 50 до 150px
//         const leftPosition = Math.random() * window.innerWidth;
//         const topPosition = Math.random() * window.innerHeight;

//         wind.style.left = `${leftPosition}px`;
//         wind.style.top = `${topPosition}px`;
//         wind.style.width = `${size}px`;
//         wind.style.height = `${size}px`;

//         container.appendChild(wind);

//         // Удаление вихря после завершения анимации
//         wind.addEventListener("animationend", () => wind.remove());
// }

//     // Создаем снежинки каждые 200 миллисекунд
//     setInterval(createSnowflake, 100);
//     setInterval(createWind, 3000); // Каждые 3 секунды вихрь
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const snowContainer = document.getElementById("snow-container");
//     const windContainer = document.getElementById("wind-container");

//     // Функция для включения/выключения снега
//     toggleSwitch.addEventListener("change", () => {
//         if (toggleSwitch.checked) {
//             startSnow();
//             snowContainer.style.display = "none"; // Показать снег
//         } else {
//             stopSnow();
//             snowContainer.style.display = "block"; // Скрыть снег
//         }
//     });

//     function createSnowflake() {
//         const snowflake = document.createElement("div");
//         snowflake.classList.add("snowflake");
//         snowflake.textContent = ["❄", "✦"][Math.floor(Math.random() * 2)];

//         const size = Math.random() * 10 + 10;
//         let grayShade = Math.floor(Math.random() * 56) + 200;
//         snowflake.style.color = `rgb(${grayShade}, ${grayShade}, ${grayShade})`;
//         snowflake.style.fontSize = `${size}px`;
//         snowflake.style.left = `${Math.random() * 100}vw`;
//         snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;

//         snowContainer.appendChild(snowflake);

//         setTimeout(() => {
//             snowflake.remove();
//         }, 11111);
//     }

//     setInterval(createSnowflake, 50);
// });


// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });

document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.getElementById("snow-container");
    const toggleSwitch = document.getElementById("switch"); // Correct ID reference for the switch
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = ["❄", "✦"][Math.floor(Math.random() * 2)];

        const size = Math.random() * 10 + 10;
        let grayShade = Math.floor(Math.random() * 56) + 150;
        snowflake.style.color = `rgb(${grayShade}, ${grayShade}, ${grayShade})`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 4}s`;

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 11111);
    }

    // Function to toggle snow
    function toggleSnow() {
        if (toggleSwitch.checked) {
            snowContainer.style.display = "block"; // Show snow
            startSnow();
        } else {
            snowContainer.style.display = "none"; // Hide snow
            stopSnow();
        }
    }

    // Function to start snow animation
    function startSnow() {
        snowflakeInterval = setInterval(createSnowflake, 50);
    }

    // Function to stop snow animation
    function stopSnow() {
        clearInterval(snowflakeInterval);
        snowContainer.innerHTML = ''; // Clear existing snowflakes
    }

    let snowflakeInterval; // Global variable to hold the interval ID

    // Event listener for toggling snow
    toggleSwitch.addEventListener("change", toggleSnow);

    // Event listeners for form toggle
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});