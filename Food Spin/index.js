const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const orderBtn = document.getElementById("order-btn");

let themes = [
  {
    "price-text":"$32",
    "heading-text":"Green Goddess Chicken Salad",
    "description":"It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    "btn-color": "#ff922c",
    "bg-color": "#ffeede",
    "main-pic": "assets/chicken_salad_1.png",
    "bg-pic": "assets/Background_dishes_chicken_salad_1.png",
  },
  {"price-text":"$35",
    "heading-text":"Asian Cucumber Salad",
    "description":"Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
    "btn-color": "#54bf29",
    "bg-color": "#eaffe2",
    "main-pic": "assets/cucumber_salad.png",
    "bg-pic": "assets/background_dishes_cucumber_salad.png",
  },
  {"price-text":"$32",
    "heading-text":"Green Goddess Chicken Salad",
    "description":"It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    "btn-color": "#ff922c",
    "bg-color": "#ffeede",
    "main-pic": "assets/chicken_salad_2.png",
    "bg-pic": "assets/Background_dishes_chicken_salad_2.png",
  },
];

let currentThemeIndex = 0;

function applyTheme(theme, rotateAngle) {
  changeMainImage(theme["main-pic"], rotateAngle)
  document.getElementById("top-left-circle").style.backgroundColor = theme["bg-color"]
  changeBgImage(theme["bg-pic"])
  changeTextWithAnimation(document.getElementById("heading-text"), theme["heading-text"]);
  changeTextWithAnimation(document.getElementById("paragraph-text"), theme["description"]); 
  changeTextWithAnimation(document.getElementById("price-text"), theme["price-text"]);
  document.getElementById("price-text").style.color = theme["btn-color"]
}

function changeMainImage(newSrc, rotateAngle) {
  const img = document.getElementById("main-pic");

  // Shrink and fade out
  img.style.transform = `scale(0.5) rotate(${rotateAngle}deg)`;
  img.style.opacity = "0";

  // After the shrink animation, change src and grow back
  setTimeout(() => {
    img.src = newSrc;

    // Ensure browser has applied the src change before growing
    requestAnimationFrame(() => {
      img.style.transform = "scale(1) rotate(0deg)";
      img.style.opacity = "1";
    });
  }, 300); // match the CSS transition duration
}

function changeBgImage(newSrc) {
  const bgImg =   document.getElementById("bg-pic")
  // Shrink and fade out
  bgImg.style.opacity = "0";

  // After the shrink animation, change src and grow back
  setTimeout(() => {
    bgImg.src = newSrc;

    // Ensure browser has applied the src change before growing
    requestAnimationFrame(() => {
      bgImg.style.opacity = "1";
    });
  }, 500); // match the CSS transition duration
}

function changeTextWithAnimation(element, newText) {
  element.style.transform = "scaleX(0.5) translateX(-20%)";
  element.style.opacity = "0";

  setTimeout(() => {
    element.textContent = newText;

    requestAnimationFrame(() => {
      element.style.transform = "scaleX(1) translateX(0)";
      element.style.opacity = "1";
    });
  }, 300); // match the CSS transition time
}


function animateButton(direction, color) {
  // Reset animation by removing existing classes
  orderBtn.classList.remove("fade-effect", "fade-left", "fade-right");

  // Trigger reflow to restart animation
  void orderBtn.offsetWidth;

  // Set background color immediately
  orderBtn.style.backgroundColor = color;

  // Apply animation classes
  orderBtn.classList.add("fade-effect", direction);
}

forwardBtn.addEventListener("click", function () {
  if (currentThemeIndex < 2) {
    let theme = themes[currentThemeIndex + 1];
    currentThemeIndex += 1;
    animateButton("fade-right", theme["btn-color"]);
    applyTheme(theme,+45)
    forwardBtn.style.backgroundColor = theme['btn-color']
    backwardBtn.style.backgroundColor = theme['btn-color']

  }
});

backwardBtn.addEventListener("click", function () {
  if (currentThemeIndex > 0) {
    let theme = themes[currentThemeIndex - 1];
    currentThemeIndex -= 1;
    animateButton("fade-left", theme["btn-color"]);
    applyTheme(theme,-45)
    forwardBtn.style.backgroundColor = theme['btn-color']
    backwardBtn.style.backgroundColor = theme['btn-color']
  }
});
