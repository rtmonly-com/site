/**
 * Fetch and display vouches from the vouches.json file
 * This script is used by the vouches page to display the latest vouches
 */

document.addEventListener("DOMContentLoaded", () => {
  const vouchesList = document.getElementById("vouches-list")
  const totalVouchesCount = document.getElementById("total-vouches-count")
  let allVouches = []

  // Fetch vouches from JSON file
  function fetchVouches() {
    console.log("Attempting to fetch vouches from:", `../vouches.json?_=${new Date().getTime()}`)
    // Add cache-busting parameter to prevent caching
    const cacheBuster = new Date().getTime()

    fetch(`../vouches.json?_=${cacheBuster}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        if (!data.vouches || data.vouches.length === 0) {
          displayNoVouchesMessage()
          return
        }

        // Store all vouches
        allVouches = data.vouches.slice().reverse() // Most recent first

        // Update total count
        totalVouchesCount.textContent = data.count

        // Display vouches (initial 9)
        displayVouches(allVouches.slice(0, 9))

        // Add load more button if there are more vouches
        if (allVouches.length > 9) {
          addLoadMoreButton()
        }
      })
      .catch((error) => {
        console.error("Error fetching vouches:", error)
        console.log("Current path:", window.location.pathname)
        console.log("Attempted to fetch from:", `../vouches.json?_=${new Date().getTime()}`)
        displayErrorMessage()
      })
  }

  // Display vouches in the list
  function displayVouches(vouches) {
    // Clear existing vouches if this is not a "load more" operation
    if (document.querySelector(".load-more-container")) {
      document.querySelector(".load-more-container").remove()
    }

    vouches.forEach((vouch, index) => {
      // Process @mentions in the comment
      const comment = vouch.Comment.replace(/@(\w+)/g, '<span class="highlighted">@$1</span>')

      const vouchCard = document.createElement("div")
      vouchCard.className = "vouch-card"
      vouchCard.setAttribute("data-aos", "fade-up")
      vouchCard.setAttribute("data-aos-delay", `${100 + index * 50}`)

      vouchCard.innerHTML = `
                <div class="quote-icon">
                    <i class="fas fa-quote-right"></i>
                </div>
                <div class="vouch-top">
                    <img src="../assets/images/wumpus.png" alt="Client Avatar" class="vouch-avatar" />
                    <div>
                        <h3 class="vouch-name">${vouch.CustomerID}</h3>
                        <p class="vouch-meta">${vouch.AccountID} • ${vouch.Date}</p>
                    </div>
                </div>
                <div class="vouch-body">
                    <div class="vouch-rating">★★★★★</div>
                    <p class="vouch-text">${comment}</p>
                </div>
            `

      vouchesList.appendChild(vouchCard)
    })

    // Refresh AOS animations
    if (typeof AOS !== "undefined" && AOS && typeof AOS.refresh === "function") {
      setTimeout(() => {
        AOS.refresh()
      }, 100)
    }
  }

  // Add a "Load More" button
  function addLoadMoreButton() {
    const loadMoreContainer = document.createElement("div")
    loadMoreContainer.className = "load-more-container text-center mt-4 mb-5"

    const loadMoreButton = document.createElement("button")
    loadMoreButton.className = "btn btn-primary"
    loadMoreButton.innerHTML = "Load More Vouches"

    loadMoreButton.addEventListener("click", () => {
      // Get current number of displayed vouches
      const displayedVouches = document.querySelectorAll(".vouch-card").length

      // Load 9 more vouches
      const nextVouches = allVouches.slice(displayedVouches, displayedVouches + 9)

      if (nextVouches.length > 0) {
        displayVouches(nextVouches)

        // Add load more button again if there are still more vouches
        if (displayedVouches + nextVouches.length < allVouches.length) {
          addLoadMoreButton()
        }
      }
    })

    loadMoreContainer.appendChild(loadMoreButton)
    vouchesList.after(loadMoreContainer)
  }

  // Display message when no vouches are available
  function displayNoVouchesMessage() {
    vouchesList.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-comment-slash fa-3x mb-3" style="color: rgba(255,255,255,0.3);"></i>
                <h3>No Vouches Yet</h3>
                <p>Be the first to leave a vouch in our Discord server!</p>
                <a href="https://discord.gg/adrian" target="_blank" class="btn btn-primary mt-3">
                    <i class="fab fa-discord me-2"></i>Join Discord
                </a>
            </div>
        `
  }

  // Display error message
  function displayErrorMessage() {
    vouchesList.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-exclamation-triangle fa-3x mb-3" style="color: rgba(255,255,255,0.3);"></i>
                <h3>Couldn't Load Vouches</h3>
                <p>There was a problem loading the vouches. Please try again later.</p>
                <button class="btn btn-primary mt-3" onclick="location.reload()">
                    <i class="fas fa-sync-alt me-2"></i>Retry
                </button>
            </div>
        `
  }

  // Auto-refresh vouches every 5 minutes
  function setupAutoRefresh() {
    setInterval(
      () => {
        console.log("Auto-refreshing vouches...")
        fetchVouches()
      },
      5 * 60 * 1000,
    ) // 5 minutes
  }

  // Initial fetch
  fetchVouches()

  // Setup auto-refresh
  setupAutoRefresh()
})
