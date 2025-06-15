document.addEventListener("DOMContentLoaded", () => {
	const openBtn = document.getElementById("openModal");
	const modal = document.getElementById("modal");
	const closeBtn = document.getElementById("closeModal");
	const cancelBtn = document.getElementById("cancelBtn");
	const form = document.getElementById("contactForm");

	function toggleModal(show) {
		if (show) {
			modal.classList.remove("hidden");
			document.body.style.overflow = "hidden";
		} else {
			modal.classList.add("hidden");
			document.body.style.overflow = "";
		}
	}

	openBtn.addEventListener("click", () => toggleModal(true));
	closeBtn.addEventListener("click", () => toggleModal(false));
	cancelBtn.addEventListener("click", () => toggleModal(false));

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = form.elements["email"].value;
		const message = form.elements["message"].value;
		const subject = encodeURIComponent("Contact from website");
		const body = encodeURIComponent(`Email: ${email}\n\nMessage: ${message}`);
		window.location.href = `mailto:webdev@protonmail.com?subject=${subject}&body=${body}`;
		toggleModal(false);
	});
});
