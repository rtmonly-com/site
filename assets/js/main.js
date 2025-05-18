// Main JavaScript file for Adrian.gg

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS with custom settings
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 50,
      delay: 100,
      anchorPlacement: "top-bottom",
    })
  }

  // Preloader
  const preloader = document.getElementById("preloader")
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.classList.add("fade-out")
      setTimeout(() => {
        preloader.style.display = "none"
      }, 1000)
    })
  }

  // Navbar scroll behavior
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled")
      } else {
        navbar.classList.remove("navbar-scrolled")
      }
    })
  }

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top")
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Initialize Swiper for testimonials
  const swiperContainer = document.querySelector(".swiper-container")
  if (swiperContainer) {
    if (typeof Swiper !== "undefined") {
      new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      })
    }
  }

  // Product filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        // Get filter value
        const filterValue = this.getAttribute("data-filter")

        // Get all product items
        const productItems = document.querySelectorAll(".product-item")

        // Filter products
        productItems.forEach((item) => {
          if (filterValue === "all") {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            }, 100)
          } else if (item.classList.contains(filterValue)) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            }, 100)
          } else {
            item.style.opacity = "0"
            item.style.transform = "translateY(20px)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })

        // Refresh AOS
        setTimeout(() => {
          if (typeof AOS !== "undefined") {
            AOS.refresh()
          }
        }, 500)
      })
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only process links that start with #
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault()

        // Get the target section
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)

        if (targetSection) {
          // Close mobile menu if open
          const navbarCollapse = document.querySelector(".navbar-collapse")
          if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            const navbarToggler = document.querySelector(".navbar-toggler")
            navbarToggler.click()
          }

          // Scroll to section
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth",
          })

          // Update active nav link
          navLinks.forEach((navLink) => navLink.classList.remove("active"))
          this.classList.add("active")
        }
      }
    })
  })

  // Active menu item on scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 100

    // Get all sections
    const sections = document.querySelectorAll("section[id]")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active")
          }
        })
      }
    })
  })

  // Animate counter numbers
  const counterElements = document.querySelectorAll(".counter")

  function animateCounter() {
    counterElements.forEach((counter) => {
      const target = Number.parseInt(counter.textContent.replace(/[^\d]/g, ""), 10)
      const suffix = counter.textContent.replace(/[\d]/g, "")
      const duration = 2000 // Animation duration in milliseconds
      const start = 0
      const increment = Math.ceil(target / (duration / 16)) // Update every 16ms (60fps)

      let current = start
      const counterAnimation = setInterval(() => {
        current += increment
        if (current >= target) {
          counter.textContent = target + suffix
          clearInterval(counterAnimation)
        } else {
          counter.textContent = current + suffix
        }
      }, 16)
    })
  }

  // Use Intersection Observer to trigger counter animation when in view
  if (counterElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    // Observe the first counter element
    observer.observe(counterElements[0].parentElement.parentElement.parentElement)
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get email input
      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value.trim()

      // Simple validation
      if (email === "") {
        showToast("Please enter your email address", "error")
        return
      }

      // Simulate form submission
      emailInput.value = ""
      showToast("Thank you for subscribing to our newsletter!", "success")
    })
  }

  // Simple toast notification function
  function showToast(message, type = "info") {
    // Check if toast container exists, if not create it
    let toastContainer = document.querySelector(".toast-container")
    if (!toastContainer) {
      toastContainer = document.createElement("div")
      toastContainer.className = "toast-container"
      document.body.appendChild(toastContainer)

      // Add styles
      const style = document.createElement("style")
      style.textContent = `
                .toast-container {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                }
                .toast {
                    padding: 12px 20px;
                    margin-bottom: 10px;
                    border-radius: 4px;
                    color: white;
                    font-weight: 500;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: toast-in 0.3s ease forwards;
                    max-width: 300px;
                }
                .toast.info {
                    background-color: #3498db;
                }
                .toast.success {
                    background-color: #2ecc71;
                }
                .toast.error {
                    background-color: #e74c3c;
                }
                @keyframes toast-in {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `
      document.head.appendChild(style)
    }

    // Create toast element
    const toast = document.createElement("div")
    toast.className = `toast ${type}`
    toast.textContent = message
    toastContainer.appendChild(toast)

    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.style.opacity = "0"
      toast.style.transform = "translateY(20px)"
      setTimeout(() => {
        toastContainer.removeChild(toast)
      }, 300)
    }, 3000)
  }

  // Add parallax effect to hero section
  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      const heroImage = document.querySelector(".hero-image")

      if (heroImage) {
        // Create a subtle parallax effect
        heroImage.style.transform = `translateY(${scrollPosition * 0.05}px)`
      }
    })
  }

  // Add hover effects to product cards
  const productCards = document.querySelectorAll(".product-card")
  if (productCards.length > 0) {
    productCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.querySelector(".product-image img").style.transform = "scale(1.05)"
      })

      card.addEventListener("mouseleave", function () {
        this.querySelector(".product-image img").style.transform = "scale(1)"
      })
    })
  }
})
