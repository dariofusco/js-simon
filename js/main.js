// Imposto la data per il countdown
const countDownDate = new Date("Jul 14, 2023 09:30:00").getTime();
console.log(countDownDate)

// Aggiorno il countdown ogni secondo
setInterval(function () {
    
    // Recupero la data e ora di oggi
    const now = new Date().getTime();
    //console.log(now)
    
    // Calcolo la differenza tra la data di oggi e quella impostata
    const distance = countDownDate - now;
    //console.log(distance)
    
    // Imposto i calcoli per i giorni, ore, minuti e secondi
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(seconds)
    
    // Stampo in HTML il countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Imposto una condizione: quando fininsce il countdown stampo in HTML un messaggio
    if (distance < 0) {
        clearInterval();
        document.getElementById("countdown").innerHTML = "INIZIA LA LEZIONE!";
    }
}, 1000);  