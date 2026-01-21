let homeScore = 0
let guestScore = 0

let homeScoreText = document.getElementById("home-score")
let guestScoreText = document.getElementById("guest-score")

function add1home() {
    homeScore += 1
    homeScoreText.textContent = homeScore
}

function add2home() {
    homeScore += 2
    homeScoreText.textContent = homeScore
}

function add3home() {
    homeScore += 3
    homeScoreText.textContent = homeScore
}

function add1guest() {
    guestScore += 1
    guestScoreText.textContent = guestScore
}

function add2guest() {
    guestScore += 2
    guestScoreText.textContent = guestScore
}

function add3guest() {
    guestScore += 3
    guestScoreText.textContent = guestScore
}