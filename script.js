const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   let isDragging = false;
//   let initialX;
//   let initialY;
//   let xOffset = 0;
//   let yOffset = 0;

//   card.addEventListener("mousedown", startDrag);

//   function startDrag(e) {
//     isDragging = true;
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;
//     card.style.zIndex = 9999;

//     document.addEventListener("mousemove", drag);
//     document.addEventListener("mouseup", stopDrag);
//   }

//   function drag(e) {
//     if (isDragging) {
//       e.preventDefault();

//       xOffset = e.clientX - initialX;
//       yOffset = e.clientY - initialY;

//       card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
//     }
//   }

//   function stopDrag() {
//     isDragging = false;
//     card.style.zIndex = "";
//     document.removeEventListener("mousemove", drag);
//     document.removeEventListener("mouseup", stopDrag);
//   }
// });

//WORKING CODE
// cards.forEach((card) => {
//   let isDragging = false;
//   let initialX;
//   let initialY;
//   let xOffset = 0;
//   let yOffset = 0;

//   card.addEventListener("mousedown", startDrag);
//   document.addEventListener("mousemove", drag);
//   document.addEventListener("mouseup", stopDrag);

//   card.addEventListener("touchstart", startDrag);
//   document.addEventListener("touchmove", drag);
//   document.addEventListener("touchend", stopDrag);

//   function startDrag(e) {
//     isDragging = true;
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;
//     if (e.type === "touchstart") {
//       initialX = e.touches[0].clientX - xOffset;
//       initialY = e.touches[0].clientY - yOffset;
//     }
//     card.style.zIndex = 9999;
//   }

//   function drag(e) {
//     if (isDragging) {
//       e.preventDefault();
//       if (e.type === "touchmove") {
//         xOffset = e.touches[0].clientX - initialX;
//         yOffset = e.touches[0].clientY - initialY;
//       } else {
//         xOffset = e.clientX - initialX;
//         yOffset = e.clientY - initialY;
//       }
//       card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
//     }
//   }

//   function stopDrag() {
//     isDragging = false;
//     card.style.zIndex = "";
//   }
// });

//NEW WORKING CODE
cards.forEach((card, index) => {
  let isDragging = false;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  card.style.zIndex = cards.length - index;

  card.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDrag);

  card.addEventListener("touchstart", startDrag);
  document.addEventListener("touchmove", drag);
  document.addEventListener("touchend", stopDrag);

  function startDrag(e) {
    isDragging = true;
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    }
    card.style.zIndex = cards.length;
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      if (e.type === "touchmove") {
        xOffset = e.touches[0].clientX - initialX;
        yOffset = e.touches[0].clientY - initialY;
      } else {
        xOffset = e.clientX - initialX;
        yOffset = e.clientY - initialY;
      }
      card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }
  }

  function stopDrag() {
    isDragging = false;
    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
    });
  }
});

cards.forEach((card) => {
  const rotate = Math.random() * 10 - 5;
  const translateX = Math.random() * 10 - 5;
  const translateY = Math.random() * 10 - 5;

  card.style.transform = `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
});

// BUTTON CLICK EVENT
document.getElementById("yesButton").addEventListener("click", function () {
  alert("I LOVEE YOUU SO MUCHHH!!! <3 <3 <3");
});

document.getElementById("noButton").addEventListener("click", function () {
  let yesButton = document.getElementById("yesButton");
  let noButton = document.getElementById("noButton");

  let yesButtonWidth = parseInt(window.getComputedStyle(yesButton).width);
  let yesButtonHeight = parseInt(window.getComputedStyle(yesButton).height);
  let noButtonWidth = parseInt(window.getComputedStyle(noButton).width);
  let noButtonHeight = parseInt(window.getComputedStyle(noButton).height);

  if (noButtonWidth > 1 && noButtonHeight > 1) {
    yesButton.style.width = yesButtonWidth + 2 + "px";
    yesButton.style.height = yesButtonHeight + 2 + "px";
    yesButton.style.fontSize = yesButtonWidth / 10 + "px";
    noButton.style.width = noButtonWidth - 1 + "px";
    noButton.style.height = noButtonHeight - 1 + "px";
    noButton.style.fontSize = noButtonWidth / 10 + "px";
  }

  if (noButtonWidth <= 50 && noButtonHeight <= 31) {
    let buttonContainer = document.querySelector(".button-container");
    let containerWidth = parseInt(
      window.getComputedStyle(buttonContainer).width
    );
    let containerHeight = parseInt(
      window.getComputedStyle(buttonContainer).height
    );
    let randomX = Math.floor(Math.random() * (containerWidth - noButtonWidth));
    let randomY = Math.floor(
      Math.random() * (containerHeight - noButtonHeight)
    );
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  }
});
