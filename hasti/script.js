const textElement = document.getElementById("text");
const text = "🎈✨هستی تولدت مبارک🎂✨🎈";
let index = 0;

function type() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 120);
  }
}

setTimeout(type, 1200);

function playAudio() {
  const audio = document.getElementById("myAudio");
  audio.play();
}

function pauseAudio() {
  const audio = document.getElementById("myAudio");
  audio.pause();
}
setTimeout(playAudio, 1400);
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight * 0.5;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas-container");
  angleMode(RADIANS);
  noLoop();
  clear();
}

function draw() {
  strokeWeight(4);
  noFill();

  stroke("#1f77b4");
  push();
  translate(width * 0.2, height * 0.5);
  beginShape();
  for (let t = PI / 3; t <= (2 * PI) / 3; t += 0.02) {
    let x = 50 * cos(t);
    let y = 50 * sin(t);
    vertex(x, y);
  }
  endShape();
  line(-55, 0, -55, 50);
  line(55, 0, 55, 50);
  pop();

  stroke("#d62728");
  push();
  translate(width * 0.4, height * 0.5);
  beginShape();
  for (let t = 0; t <= TWO_PI; t += 0.02) {
    let x = map(t, 0, TWO_PI, -50, 50);
    let y = 20 * sin(3 * t);
    vertex(x, y);
  }
  endShape();
  pop();

  stroke("#2ca02c");
  push();
  translate(width * 0.6, height * 0.5);
  line(-50, -30, 50, -30);
  beginShape();
  for (let t = 0; t <= 1; t += 0.02) {
    let x = map(t, 0, 1, -50, 50);
    let y = -30 + 20 * cos(PI * t);
    vertex(x, y);
  }
  endShape();
  pop();

  stroke("#9467bd");
  push();
  translate(width * 0.8, height * 0.5);
  line(0, 0, 40, -40);
  line(0, 0, 40, 40);
  pop();
}

function windowResized() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight * 0.5;
  resizeCanvas(canvasWidth, canvasHeight);
}
function createBalloon() {
  // ساختن یه div برای بادکنک
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  // موقعیت افقی تصادفی (0 تا 100 درصد عرض صفحه)
  balloon.style.left = Math.random() * 100 + "vw";
  // مدت انیمیشن تصادفی بین 5 تا 10 ثانیه
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";

  // اضافه کردن نماد بادکنک (ایموجی)
  const symbol = document.createElement("span");
  symbol.textContent = "🎈";
  balloon.appendChild(symbol);

  // اضافه کردن 3 تا اکلیل به هر بادکنک
  for (let i = 0; i < 3; i++) {
    const sparkle = document.createElement("div");
    // استفاده از کلاس‌های Tailwind برای استایل و انیمیشن اکلیل
    sparkle.className =
      "absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping";
    // موقعیت تصادفی اکلیل‌ها نسبت به بادکنک
    sparkle.style.top = Math.random() * 20 - 10 + "px";
    sparkle.style.left = Math.random() * 20 - 10 + "px";
    balloon.appendChild(sparkle);
  }

  // اضافه کردن بادکنک به صفحه
  document.body.appendChild(balloon);

  // حذف بادکنک بعد از تموم شدن انیمیشن
  balloon.addEventListener("animationend", () => {
    balloon.remove();
  });
}

// هر 2 ثانیه یه بادکنک جدید بساز
setInterval(createBalloon, 400);
