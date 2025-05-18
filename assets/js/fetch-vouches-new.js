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
    console.log("Fetching vouches...")

    // Add cache-busting parameter to prevent caching
    const cacheBuster = new Date().getTime()

    fetch(`/vouches.json?_=${cacheBuster}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log("Vouches data received:", data)

        // Handle different possible formats of the JSON data
        let vouchesArray = []

        if (Array.isArray(data)) {
          // If data is already an array
          vouchesArray = data
        } else if (data && Array.isArray(data.vouches)) {
          // If data has a vouches property that is an array
          vouchesArray = data.vouches
        } else if (data && typeof data === "object") {
          // If data is an object but not in expected format, try to extract vouches
          console.log("Unexpected data format, attempting to extract vouches")
          vouchesArray = Object.values(data).filter(
            (item) => item && typeof item === "object" && (item.content || item.message || item.Comment),
          )
        }

        if (vouchesArray.length === 0) {
          console.log("No vouches found in data")
          displayNoVouchesMessage()
          return
        }

        console.log(`Found ${vouchesArray.length} vouches`)

        // Store all vouches
        allVouches = vouchesArray.slice().reverse() // Most recent first

        // Update total count
        if (totalVouchesCount) {
          totalVouchesCount.textContent = vouchesArray.length
        }

        // Display vouches (initial 9)
        displayVouches(allVouches.slice(0, 9))

        // Add load more button if there are more vouches
        if (allVouches.length > 9) {
          addLoadMoreButton()
        }
      })
      .catch((error) => {
        console.error("Error fetching vouches:", error)
        displayErrorMessage()
      })
  }

  // Display vouches in the list
  function displayVouches(vouches) {
    // Clear existing vouches if this is not a "load more" operation
    if (document.querySelector(".load-more-container")) {
      document.querySelector(".load-more-container").remove()
    }

    // Clear any existing content if this is the first load
    if (!document.querySelector(".vouch-card")) {
      vouchesList.innerHTML = ""
    }

    vouches.forEach((vouch, index) => {
      // Handle different possible formats of vouch data
      const author = vouch.author || vouch.CustomerID || vouch.username || "Anonymous"
      const date = vouch.date || vouch.Date || vouch.timestamp || new Date().toLocaleDateString()
      const content = vouch.content || vouch.Comment || vouch.message || "No content provided"

      // Get avatar URL - use the exact format provided by Discord
      let avatarUrl = "../assets/images/wumpus.png"

      // Check for Discord avatar URL in various possible formats
      if (vouch.avatarURL) {
        avatarUrl = vouch.avatarURL
      } else if (vouch.avatar_url) {
        avatarUrl = vouch.avatar_url
      } else if (vouch.AvatarURL) {
        avatarUrl = vouch.AvatarURL
      }

      // Process @mentions in the comment
      const processedContent = content.replace(/@(\w+)/g, '<span class="highlighted">@$1</span>')

      const vouchCard = document.createElement("div")
      vouchCard.className = "vouch-card"
      vouchCard.setAttribute("data-aos", "fade-up")
      vouchCard.setAttribute("data-aos-delay", `${100 + index * 50}`)

      vouchCard.innerHTML = `
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
        <div class="vouch-top">
          <img src="${avatarUrl}" alt="Client Avatar" class="vouch-avatar" onerror="this.src='../assets/images/wumpus.png'" />
          <div class="vouch-info">
            <h3 class="vouch-name">${author}</h3>
            <p class="vouch-meta">${date}</p>
          </div>
        </div>
        <div class="vouch-body">
          <div class="vouch-rating">★★★★★</div>
          <p class="vouch-text">${processedContent}</p>
        </div>
      `

      vouchesList.appendChild(vouchCard)
    })

    // Refresh AOS animations
    if (typeof AOS !== "undefined") {
      if (typeof AOS.refresh === "function") {
        setTimeout(() => {
          if (typeof window.AOS !== "undefined") {
            window.AOS.refresh()
          }
        }, 100)
      }
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

  // Initial fetch
  fetchVouches()

  // Auto-refresh vouches every 5 minutes
  setInterval(fetchVouches, 5 * 60 * 1000)
})
