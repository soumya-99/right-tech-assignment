const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links li")
const searchBar = document.querySelector("#search-bar")
const searchBtn = document.querySelector("#search-btn")

burger.addEventListener("click", () => {
	nav.classList.toggle("nav-active")

	navLinks.forEach((link, index) => {
		link.style.animation = nav.classList.contains("nav-active")
			? `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
			: ""
	})

	burger.classList.toggle("toggle")
})

searchBtn.addEventListener("click", () => {
	const searchTerm = searchBar.value
	console.log(`Performing search for: ${searchTerm}`)
})

const carousel = document.querySelector(".carousel")
const carouselContainer = carousel.querySelector(".carousel-container")
const carouselItems = carousel.querySelectorAll(".carousel-item")
const carouselIndicators = carousel.querySelector(".carousel-indicators")

let currentIndex = 0

function showSlide(index) {
	carouselContainer.style.transform = `translateX(-${index * 100}%)`

	const indicators = carouselIndicators.querySelectorAll(".carousel-indicator")
	indicators.forEach((indicator, i) => {
		if (i === index) {
			indicator.classList.add("active")
		} else {
			indicator.classList.remove("active")
		}
	})
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % carouselItems.length
	showSlide(currentIndex)
}

function prevSlide() {
	currentIndex =
		(currentIndex - 1 + carouselItems.length) % carouselItems.length
	showSlide(currentIndex)
}

function createIndicators() {
	carouselItems.forEach((item, i) => {
		const indicator = document.createElement("div")
		indicator.classList.add("carousel-indicator")
		indicator.addEventListener("click", () => {
			showSlide(i)
			currentIndex = i
		})
		carouselIndicators.appendChild(indicator)
	})

	showSlide(currentIndex)
}

createIndicators()

setInterval(nextSlide, 2000)
