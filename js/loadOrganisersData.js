const url = window.location.pathname;
const fileName = url.substring(url.lastIndexOf('/') + 1);
console.log(fileName)

cardTitles = document.querySelectorAll(".card-title");
cardSubtitles = document.querySelectorAll(".card-subtitle");
emailIcons = document.querySelectorAll(".organiserContact a:first-of-type");
linkedInIcons = document.querySelectorAll(".organiserContact a:last-of-type");

class Organiser {
    name;
    position;
    email;
    linkedIn;

    constructor(name, position, email, linkedIn) {
        this.name = name;
        this.position = position;
        this.email = email;
        this.linkedIn = linkedIn;
    }
}

const organisers = [];
if (fileName === "AmogUs.html") {
    organisers.push(new Organiser("Vojin Đorđević", "CEO",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Maja Stanimirović", "Product Manager",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));

    organisers.push(new Organiser("Nikola Stefanović", "CMO",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Aleksandar Jovanović", "Main Investor",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Petra Novaković", "CFO",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Jelena Stojanović", "CTO",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Đorđe Veličković", "Sales Representative",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Milica Đorđević", "Business Development Manager",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Luka Petrović", "Customer Service Representative",
        "mailto:vojin.djordjevic@pmf.edu.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
}

function populateCards() {
    for (let i = 0; i < 9; i++) {
        cardTitles[i].textContent = organisers[i].name;
        cardSubtitles[i].textContent = organisers[i].position;
        emailIcons[i].setAttribute("href", `${organisers[i].email}`);
        linkedInIcons[i].setAttribute("href", `${organisers[i].linkedIn}`);
        //console.table(organisers[i])
    }
}

populateCards();
