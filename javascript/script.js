let headlines = [
    "Welcome to Our Cake Shop! Hunting for tasty and delicious cakes, we got you!!!",
    "Delicious Cakes for Every Occasion, Birthdays check, Anniversary check, Dates check!",
    "Order Now and Enjoy your creamy, fulfilling, delicious start of event!"
];
let currentHeadline = 0;

function updateHeadline() {
    currentHeadline = (currentHeadline + 1) % headlines.length;

    // Update all headline elements
    document.getElementById('headline1').textContent = headlines[currentHeadline];
    document.getElementById('headline2').textContent = headlines[currentHeadline];
    document.getElementById('headline3').textContent = headlines[currentHeadline];
}

// Change headline every 5 seconds
setInterval(updateHeadline, 5000);

// Logging onclick events
function logFeature(feature) {
    console.log(`${feature} clicked`);
}
function toggleInfo(card) {
    card.classList.toggle('active'); // Toggle the 'active' class on the card
}
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});