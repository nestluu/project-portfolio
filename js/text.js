const phrases = [
	"со страстью к обучению и творчеству.",
	"с опытом в создании современных интерфейсов.",
	"готовый к новым вызовам и проектам.",
	"постоянно совершенствующий свои навыки.",
	"фокусирующийся на качестве и деталях.",
];

let currentPhrase = 0;
const typingElement = document.getElementById("typing-text");
const container = document.querySelector(".typing-container");

function typeNextPhrase() {
	// Сбрасываем анимацию
	typingElement.style.animation = "none";
	typingElement.offsetHeight;

	// Устанавливаем новую фразу
	typingElement.textContent = phrases[currentPhrase];

	// Рассчитываем время анимации на основе длины текста
	const textLength = phrases[currentPhrase].length;
	const typingDuration = Math.min(3.5, textLength * 0.08);

	// Применяем анимацию
	typingElement.style.animation = `
        typing ${typingDuration}s steps(${textLength}, end),
        blink-caret 0.75s step-end infinite
    `;

	// Переходим к следующей фразе
	currentPhrase = (currentPhrase + 1) % phrases.length;

	// Тайминги для смены фраз
	setTimeout(
		() => {
			typingElement.style.animation = "none";
			container.classList.add("finished-typing");
			setTimeout(() => {
				container.classList.remove("finished-typing");
				typeNextPhrase();
			}, 1000);
		},
		typingDuration * 1000 + 500,
	);
}

// Инициализация
typeNextPhrase();
