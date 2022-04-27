const setup = () => {
    let student = {};
    student.voornaam = "Jan";
    student.familienaam = "Janssens";
    student.geboortedatum = new Date("1993-12-31");
    student.adres = {
        straat: "Kerkstraat 13",
        postcode: "8500",
        gemeente: "Kortrijk"
    }
    student.isIngeschreven = true;
    student.namenVanExen = ["Sofie", "Berta", "Philip", "Albertoooo"];
    student.aantalAutos = 2;

    let tekst = JSON.stringify(student);
    console.log(tekst);
}

window.addEventListener("load", setup);