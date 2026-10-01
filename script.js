const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

searchButton.addEventListener("click", function () {

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const departure = document.getElementById("departure").value;
    const travelers = document.getElementById("travelers").value;
    const flightClass = document.getElementById("flightClass").value;

    if (departure === "") {
        alert("Please select a departure date.");
        return;
    }

    if (from === to) {
        alert("From and To locations cannot be the same.");
        return;
    }

    results.innerHTML = `
        <h2>✈️ Available Flights</h2>

        <div class="flight-card">
            <h3>IndiGo</h3>

            <p>
                <strong>${from}</strong>
                → 
                <strong>${to}</strong>
            </p>

            <p>Departure: 06:30 AM</p>
            <p>Arrival: 09:20 AM</p>

            <p>Travelers: ${travelers}</p>
            <p>Class: ${flightClass}</p>

            <h3>₹5,250</h3>

            <button class="book-button"
                    onclick="bookFlight('IndiGo', '₹5,250')">
                🎫 Book Now
            </button>
        </div>


        <div class="flight-card">
            <h3>Air India</h3>

            <p>
                <strong>${from}</strong>
                → 
                <strong>${to}</strong>
            </p>

            <p>Departure: 10:15 AM</p>
            <p>Arrival: 01:10 PM</p>

            <p>Travelers: ${travelers}</p>
            <p>Class: ${flightClass}</p>

            <h3>₹6,100</h3>

            <button class="book-button"
                    onclick="bookFlight('Air India', '₹6,100')">
                🎫 Book Now
            </button>
        </div>
    `;

});


function bookFlight(airline, price) {

    alert(
        "Booking Selected!\\n\\n" +
        "Airline: " + airline + "\\n" +
        "Price: " + price
    );

}