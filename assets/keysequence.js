// Key sequence detection for "whoami"
const secretCode = "whoami"
let keySequence = ""
let whoamiOverlayActive = false
let originalVideos = []

// Function to check if the overlay is already in the DOM
function isOverlayInDOM() {
  return document.getElementById("whoami-overlay") !== null
}

// Function to create and inject the overlay
function createWhoamiOverlay() {
  if (isOverlayInDOM()) return

  // Store original video states and pause them
  pauseBackgroundVideos()

  // Create overlay container
  const overlay = document.createElement("div")
  overlay.id = "whoami-overlay"
  overlay.style.position = "fixed"
  overlay.style.top = "0"
  overlay.style.left = "0"
  overlay.style.width = "100%"
  overlay.style.height = "100%"
  overlay.style.zIndex = "999999"
  overlay.style.backgroundColor = "#000000"
  overlay.style.overflow = "hidden"
  // Hide cursor entirely during matrix effect
  overlay.style.cursor = "none"

  // Load CSS
  const linkElement = document.createElement("link")
  linkElement.rel = "stylesheet"
  linkElement.href = "whoami.css"
  document.head.appendChild(linkElement)

  // Add font
  const fontLink = document.createElement("link")
  fontLink.rel = "preconnect"
  fontLink.href = "https://fonts.googleapis.com"
  document.head.appendChild(fontLink)

  const fontLink2 = document.createElement("link")
  fontLink2.rel = "preconnect"
  fontLink2.href = "https://fonts.gstatic.com"
  fontLink2.crossOrigin = ""
  document.head.appendChild(fontLink2)

  const fontLink3 = document.createElement("link")
  fontLink3.rel = "stylesheet"
  fontLink3.href = "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
  document.head.appendChild(fontLink3)

  // Add HTML content - initially only show the matrix container
  overlay.innerHTML = `
    <div id="matrix-container">
      <canvas id="matrix-canvas"></canvas>
    </div>
    
    <img id="center-eyes-gif" src="images/eyes.gif" alt="Eyes" width="387" height="527" draggable="false" style="display: none;">

    <div id="hidden-content" class="hidden-content fade-in" align="center" style="display: none;">
        <br>
        <p id="dynamic-text"><font size="5" color="#FFFFFF">　ｉａｍ<br>　ｙｏｕｒ ｇｏｄ </font></p>
        <br><br><br><br>

        <img id="iamgod-gif" border="0" src="images/IAMGOD.gif" alt="Lain" width="290" height="352" draggable="false">

        <br><br><br><br><br>

        <div class="image-row">
            <a href="https://steamcommunity.com/id/rtmonly/", target="_blank" rel="noopener noreferrer">
                <img src="images/image1.png" alt="Image 1" class="small-image">
            </a>
            <a href="#">
                <img src="images/image2.png" alt="Image 2" class="small-image">
                <span class="hover-text">@rtmonly</span>
            </a>
            <a href="https://www.soundcloud.com/adrian", target="_blank" rel="noopener noreferrer">
                <img src="images/image4.png" alt="soundcloud logo" class="small-image">
            </a>
        </div>

        <br><br>
        <font size="3" color="#FFFFFF">forever gone<br>not to return</font>
    </div>

    <audio id="background-audio" autoplay loop muted>
        <source src="media/audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    <div id="whisper-container"></div>
  `

  document.body.appendChild(overlay)

  // Initialize all the scripts
  initWhoamiScripts()

  // Add escape key to close overlay
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && whoamiOverlayActive) {
      removeWhoamiOverlay()
    }
  })
}

// Function to pause all videos on the page
function pauseBackgroundVideos() {
  originalVideos = []
  const videos = document.querySelectorAll("video")
  videos.forEach((video) => {
    // Store the original state
    originalVideos.push({
      element: video,
      wasPlaying: !video.paused,
      currentTime: video.currentTime,
      src: video.src,
    })

    // Pause the video
    if (!video.paused) {
      video.pause()
    }

    // Specifically target vid.mp4
    if (video.src && video.src.includes("vid.mp4")) {
      console.log("Found and paused the main video")
    }
  })
}

// Function to restore videos to their original state
function restoreBackgroundVideos() {
  originalVideos.forEach((videoData) => {
    if (videoData.wasPlaying) {
      videoData.element.play().catch((e) => console.log("Error resuming video:", e))
    }
  })
  originalVideos = []
}

// Function to remove the overlay
function removeWhoamiOverlay() {
  const overlay = document.getElementById("whoami-overlay")
  if (overlay) {
    document.body.removeChild(overlay)
    whoamiOverlayActive = false

    // Restore videos to their original state
    restoreBackgroundVideos()
  }
}

// Initialize all scripts for the whoami overlay
function initWhoamiScripts() {
  const overlay = document.getElementById("whoami-overlay")
  if (!overlay) return

  whoamiOverlayActive = true

  // Initialize Matrix effect
  initMatrixEffect()

  // Prevent right-click
  overlay.addEventListener("contextmenu", (event) => event.preventDefault())

  // Automatic transition sequence after matrix effect
  setTimeout(() => {
    // Matrix effect ends after 6 seconds (added 1 second delay)
    const matrixContainer = document.getElementById("matrix-container")
    if (matrixContainer) {
      matrixContainer.style.opacity = "0"

      // Change cursor to custom cursor after matrix effect
      overlay.style.cursor = "url('images/cursor.gif'), auto"

      setTimeout(() => {
        matrixContainer.style.display = "none"

        // Show eyes
        const eyesGif = document.getElementById("center-eyes-gif")
        if (eyesGif) eyesGif.style.display = "block"

        // Unmute and play audio
        const audio = document.getElementById("background-audio")
        if (audio) {
          audio.muted = false
          audio.volume = 0.2
          audio.play().catch((e) => console.log("Audio play error:", e))
        }

        // Then after 3 seconds, hide eyes and show content
        setTimeout(() => {
          if (eyesGif) eyesGif.style.display = "none"
          const hiddenContent = document.getElementById("hidden-content")
          if (hiddenContent) {
            hiddenContent.style.display = "block"
            hiddenContent.classList.add("fade-in")

            setTimeout(() => {
              hiddenContent.classList.add("show")
            }, 10)
          }

          const iamgodGif = document.getElementById("iamgod-gif")
          if (iamgodGif) iamgodGif.style.display = "block"
        }, 3000)
      }, 1000)
    }
  }, 6000) // Matrix effect shows for exactly 6 seconds (increased from 5000 to 6000)

  // Mouse trail effect - only add after matrix effect
  setTimeout(() => {
    overlay.addEventListener("mousemove", (e) => {
      const trail = document.createElement("div")
      trail.classList.add("trail")

      trail.style.left = e.pageX + "px"
      trail.style.top = e.pageY + "px"

      overlay.appendChild(trail)

      setTimeout(() => {
        trail.remove()
      }, 150)
    })
  }, 6000) // Add mouse trail after matrix + transition

  // Dynamic text changing
  const texts = [
    '<font size="5" color="#FFFFFF">　ｓｅｅｋ<br>　ｔｈｅ ｔｒｕｔｈ </font>',
    '<font size="5" color="#FFFFFF">　ｉｔ ｉｓ<br>　ｗｉｔｈｉｎ ｙｏｕ </font>',
    '<font size="5" color="#FFFFFF">　ｉｎｆｉｎｉｔｅ<br>　ｄａｒｋｎｅｓｓ </font>',
    '<font size="5" color="#FFFFFF">　ｄｏ ｙｏｕ<br>　ｒｅｍｅｍｂｅｒ？ </font>',
    '<font size="5" color="#FFFFFF">  ｔｈｅ ｅｎｄ<br>  ｉｓ ｃｏｍｉｎｇ </font>',
    '<font size="5" color="#FFFFFF">  ｔｉｍｅ ｉｓ<br>  ａｎ ｉｌｌｕｓｉｏｎ </font>',
    '<font size="5" color="#FFFFFF">  ｙｏｕ ａｒｅ<br>  ｎｏｔ ａｌｏｎｅ </font>',
    '<font size="5" color="#FFFFFF">　ｗｈｏ<br>　ａｍ ｉ？ </font>',
  ]

  function getRandomDelay() {
    return Math.random() < 0.5 ? 1300 : 90
  }

  function changeText() {
    const dynamicText = document.getElementById("dynamic-text")
    if (dynamicText) {
      const randomIndex = Math.floor(Math.random() * texts.length)
      dynamicText.innerHTML = texts[randomIndex]

      const delay = getRandomDelay()
      setTimeout(changeText, delay)
    }
  }

  function startTextChange() {
    setTimeout(changeText, 9000) // Start text changes after matrix + eyes transition
  }

  startTextChange()

  // Whispering text - start after matrix effect
  const whisperTexts = [
    "ｙｏｕ　ａｒｅ　ｂｅｉｎｇ　ｗａｔｃｈｅｄ",
    "ｄｏｎ'ｔ　ｌｏｏｋ　ｂａｃｋ",
    "ｉｔ　ｗｏｎ'ｔ　ｌａｓｔ　ｌｏｎｇ",
    "ｗｈａｔ　ｈａｖｅ　ｙｏｕ　ｄｏｎｅ？",
    "ｉｔ'ｓ　ａｌｍｏｓｔ　ｏｖｅｒ",
    "ｔｈｅ　ｅｎｄ　ｉｓ　ｎｅａｒ",
    "ｙｏｕ　ｗｏｎ'ｔ　ｂｅｌｉｅｖｅ　ｍｅ",
    "ｓｏｍｅｔｈｉｎｇ　ｗａｉｔｓ　ｉｎ　ｔｈｅ　ｓｈａｄｏｗｓ",
    "ｉｔ'ｓ　ｔｏｏ　ｑｕｉｅｔ",
    "ｔｈｅｙ　ｋｎｏｗ",
    "ａｌｌ　ｗｉｌｌ　ｂｅ　ｒｅｖｅａｌｅｄ",
    "ｙｏｕ　ａｒｅ　ｏｎ　ｂｏｒｒｏｗｅｄ　ｔｉｍｅ",
  ]

  function showWhisper() {
    if (!whoamiOverlayActive) return

    const whisperContainer = document.getElementById("whisper-container")
    if (!whisperContainer) return

    const whisper = document.createElement("div")
    whisper.classList.add("whisper")

    const randomText = whisperTexts[Math.floor(Math.random() * whisperTexts.length)]
    whisper.innerHTML = randomText
    whisperContainer.appendChild(whisper)

    document.addEventListener("mousemove", (e) => {
      if (!whoamiOverlayActive) return

      const mouseX = e.pageX
      const mouseY = e.pageY

      let randX = Math.floor(Math.random() * window.innerWidth)
      let randY = Math.floor(Math.random() * window.innerHeight)

      while (Math.abs(randX - mouseX) < 150 && Math.abs(randY - mouseY) < 150) {
        randX = Math.floor(Math.random() * window.innerWidth)
        randY = Math.floor(Math.random() * window.innerHeight)
      }

      whisper.style.left = randX + "px"
      whisper.style.top = randY + "px"
    })

    setTimeout(() => {
      whisper.style.opacity = 1
    }, 100)

    setTimeout(() => {
      whisper.style.opacity = 0
      setTimeout(() => whisper.remove(), 1000)
    }, 4000)
  }

  // Start whisper effects after matrix transition
  setTimeout(() => {
    const whisperInterval = setInterval(
      () => {
        if (whoamiOverlayActive) {
          showWhisper()
        } else {
          clearInterval(whisperInterval)
        }
      },
      Math.random() * 10000 + 5000,
    )
  }, 9000) // Start after matrix + eyes transition
}

// Matrix effect initialization
function initMatrixEffect() {
  const canvas = document.getElementById("matrix-canvas")
  const ctx = canvas.getContext("2d")

  // Set canvas dimensions to match window
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // Japanese characters (katakana and some kanji)
  const japaneseChars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ日本語ｦｧｨｩｪｫｬｭｮｯ"

  // Create drops
  const fontSize = 16
  const columns = Math.floor(canvas.width / fontSize)
  const drops = []

  // Initialize drops
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor((Math.random() * canvas.height) / fontSize) * -1
  }

  // Drawing function
  function draw() {
    if (!whoamiOverlayActive) return

    // Semi-transparent black to create fade effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Set text color and font - WHITE instead of green
    ctx.fillStyle = "#FFFFFF" // Changed from #0F0 to white
    ctx.font = fontSize + "px monospace"

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      // Get random Japanese character
      const text = japaneseChars[Math.floor(Math.random() * japaneseChars.length)]

      // Draw the character
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)

      // Move drop down
      drops[i]++

      // Reset drop to top with random delay
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
    }
  }

  // Animation loop
  const matrixInterval = setInterval(() => {
    if (whoamiOverlayActive) {
      draw()
    } else {
      clearInterval(matrixInterval)
    }
  }, 50)
}

// Listen for keystrokes
document.addEventListener("keydown", (e) => {
  // Add the key to the sequence
  keySequence += e.key.toLowerCase()

  // Keep only the last 6 characters (length of "whoami")
  if (keySequence.length > secretCode.length) {
    keySequence = keySequence.substring(keySequence.length - secretCode.length)
  }

  // Check if the sequence matches our secret code
  if (keySequence === secretCode) {
    if (!whoamiOverlayActive) {
      createWhoamiOverlay()
    }
    keySequence = "" // Reset the sequence
  }
})

// Initialize the key sequence detection
document.addEventListener("DOMContentLoaded", () => {
  console.log('Key sequence detector initialized. Try typing "whoami"')
})

// Handle window resize for matrix effect
window.addEventListener("resize", () => {
  const canvas = document.getElementById("matrix-canvas")
  if (canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
})
