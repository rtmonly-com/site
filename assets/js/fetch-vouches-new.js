/**
 * New Fetch and display vouches from the vouches.json file
 * This script is used by the vouches page to display the latest vouches
 */

document.addEventListener("DOMContentLoaded", function() {
  console.log("Vouches script loaded and running");
  
  const vouchesList = document.getElementById("vouches-list");
  const totalVouchesCount = document.getElementById("total-vouches-count");
  
  if (!vouchesList) {
    console.error("Vouches list element not found!");
    return;
  }
  
  if (!totalVouchesCount) {
    console.error("Total vouches count element not found!");
  }
  
  let allVouches = [];

  // Fetch vouches from JSON file
  function fetchVouches() {
    console.log("Fetching vouches...");
    
    // Add cache-busting parameter to prevent caching
    const cacheBuster = new Date().getTime();
    const jsonUrl = `../vouches.json?_=${cacheBuster}`;
    
    console.log("Fetching from URL:", jsonUrl);
    console.log("Current path:", window.location.pathname);

    // Show loading state
    vouchesList.innerHTML = `
      <div class="text-center py-5">
        <i class="fas fa-spinner fa-spin fa-3x mb-3" style="color: rgba(255,255,255,0.3);"></i>
        <h3>Loading Vouches...</h3>
        <p>Please wait while we fetch the latest customer reviews.</p>
      </div>
    `;

    fetch(jsonUrl)
      .then(response => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Data received:", data);
        
        if (!data.vouches || data.vouches.length === 0) {
          console.log("No vouches found in data");
          displayNoVouchesMessage();
          return;
        }

        // Store all vouches
        allVouches = data.vouches.slice().reverse(); // Most recent first
        console.log("Processed vouches:", allVouches.length);

        // Update total count
        if (totalVouchesCount) {
          totalVouchesCount.textContent = data.count || allVouches.length;
        }

        // Display vouches (initial 9)
        const initialVouches = allVouches.slice(0, 9);
        displayVouches(initialVouches);

        // Add load more button if there are more vouches
        if (allVouches.length > 9) {
          addLoadMoreButton();
        }
      })
      .catch(error => {
        console.error("Error fetching vouches:", error);
        displayErrorMessage();
      });
  }

  // Display vouches in the list
  function displayVouches(vouches) {
    console.log("Displaying vouches:", vouches.length);
    
    // Clear existing vouches if this is not a "load more" operation
    if (document.querySelector(".load-more-container")) {
      document.querySelector(".load-more-container").remove();
    }
    
    // Clear the loading message if this is the first load
    if (vouchesList.querySelector(".fa-spinner")) {
      vouchesList.innerHTML = "";
    }

    vouches.forEach((vouch, index) => {
      // Process @mentions in the comment
      const comment = vouch.Comment ? 
        vouch.Comment.replace(/@(\w+)/g, '<span class="highlighted">@$1</span>') : 
        "No comment provided";

      const vouchCard = document.createElement("div");
      vouchCard.className = "vouch-card";
      vouchCard.setAttribute("data-aos", "fade-up");
      vouchCard.setAttribute("data-aos-delay", `${100 + index * 50}`);

      vouchCard.innerHTML = `
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
        <div class="vouch-top">
          <img src="../assets/images/wumpus.png" alt="Client Avatar" class="vouch-avatar" />
          <div>
            <h3 class="vouch-name">${vouch.CustomerID || "Anonymous"}</h3>
            <p class="vouch-meta">${vouch.AccountID || "User"} • ${vouch.Date || "No date"}</p>
          </div>
        </div>
        <div class="vouch-body">
          <div class="vouch-rating">★★★★★</div>
          <p class="vouch-text">${comment}</p>
        </div>
      `;

      vouchesList.appendChild(vouchCard);
    });

    // Refresh AOS animations if available
    if (typeof AOS !== "undefined" && typeof AOS.refresh === "function") {
      console.log("Refreshing AOS animations");
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    } else {
      console.log("AOS not available for refresh");
    }
  }

  // Add a "Load More" button
  function addLoadMoreButton() {
    console.log("Adding load more button");
    
    const loadMoreContainer = document.createElement("div");
    loadMoreContainer.className = "load-more-container text-center mt-4 mb-5";

    const loadMoreButton = document.createElement("button");
    loadMoreButton.className = "btn btn-primary";
    loadMoreButton.innerHTML = "Load More Vouches";

    loadMoreButton.addEventListener("click", () => {
      // Get current number of displayed vouches
      const displayedVouches = document.querySelectorAll(".vouch-card").length;
      console.log("Currently displayed vouches:", displayedVouches);

      // Load 9 more vouches
      const nextVouches = allVouches.slice(displayedVouches, displayedVouches + 9);
      console.log("Loading next vouches:", nextVouches.length);

      if (nextVouches.length > 0) {
        displayVouches(nextVouches);

        // Add load more button again if there are still more vouches
        if (displayedVouches + nextVouches.length < allVouches.length) {
          addLoadMoreButton();
        }
      }
    });

    loadMoreContainer.appendChild(loadMoreButton);
    vouchesList.after(loadMoreContainer);
  }

  // Display message when no vouches are available
  function displayNoVouchesMessage() {
    console.log("Displaying no vouches message");
    
    vouchesList.innerHTML = `
      <div class="text-center py-5">
        <i class="fas fa-comment-slash fa-3x mb-3" style="color: rgba(255,255,255,0.3);"></i>
        <h3>No Vouches Yet</h3>
        <p>Be the first to leave a vouch in our Discord server!</p>
        <a href="https://discord.gg/adrian" target="_blank" class="btn btn-primary mt-3">
          <i class="fab fa-discord me-2"></i>Join Discord
        </a>
      </div>
    `;
  }

  // Display error message
  function displayErrorMessage() {
    console.log("Displaying error message");
    
    vouchesList.innerHTML = `
      <div class="text-center py-5">
        <i class="fas fa-exclamation-triangle fa-3x mb-3" style="color: rgba(255,255,255,0.3);"></i>
        <h3>Couldn't Load Vouches</h3>
        <p>There was a problem loading the vouches. Please try again later.</p>
        <button class="btn btn-primary mt-3" onclick="location.reload()">
          <i class="fas fa-sync-alt me-2"></i>Retry
        </button>
      </div>
    `;
  }

  // Auto-refresh vouches every 5 minutes
  function setupAutoRefresh() {
    console.log("Setting up auto-refresh");
    
    setInterval(() => {
      console.log("Auto-refreshing vouches...");
      fetchVouches();
    }, 5 * 60 * 1000); // 5 minutes
  }

  // Initial fetch
  console.log("Starting initial fetch");
  fetchVouches();

  // Setup auto-refresh
  setupAutoRefresh();
});
