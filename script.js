// Typing effect
const text = "ESL Teacher | App Developer | Tech Specialist";
let i = 0;
function typing() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();

// Counter animation
document.querySelectorAll("[data-count]").forEach(counter => {
    let target = +counter.dataset.count;
    let count = 0;
    let interval = setInterval(() => {
        count++;
        counter.textContent = count;
        if (count === target) clearInterval(interval);
    }, 100);
});