function joinNow(){
  alert("Thank you for joining Gemini Fitness!");
}

function sendMessage(){
  alert("Message sent successfully!");
}

function scrollDown() {
  window.scrollBy({
    top: 1000,
    behavior: "smooth"
  });
}

document.querySelectorAll(".studio-slider").forEach(slider => {
  let images = slider.querySelectorAll("img");
  let prev = slider.querySelector(".prev");
  let next = slider.querySelector(".next");
  let index = 0;
  function showImage(i){
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }
  if(prev) {
    prev.onclick = ()=>{
      index--;
      if(index < 0) index = images.length - 1;
      showImage(index);
    };
  }
  if(next) {
    next.onclick = ()=>{
      index++;
      if(index >= images.length) index = 0;
      showImage(index);
    };
  }
});

let boxes = document.querySelectorAll(".exp-box");
let bg = document.getElementById("bg");
if(boxes.length && bg) {
  boxes.forEach(box => {
    box.addEventListener("mouseenter", ()=>{
      bg.style.backgroundImage = `url(${box.dataset.img})`;
      boxes.forEach(b => b.classList.remove("active"));
      box.classList.add("active");
    });
  });
}

// Mobile menu toggle
function toggleMobileMenu() {
  let menu = document.getElementById("navLinks");
  if(menu) menu.classList.toggle("active");
}

 const scriptURL = "https://script.google.com/macros/s/AKfycbwodwsANHz8kP6enYNCao6CYqJ4AcUnt9V-cw1T8CihmWNq_mzKiWvq-5lik6BtPDwRTg/exec";

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(() => {
    document.getElementById("responseMsg").innerText = "✔ Submitted Successfully!";
    document.getElementById("responseMsg").style.color = "lime";
    this.reset();
  })
  .catch(() => {
    document.getElementById("responseMsg").innerText = "❌ Error submitting!";
    document.getElementById("responseMsg").style.color = "red";
  });
});