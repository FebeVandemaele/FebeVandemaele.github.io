const setup = () => {
    let object = JSON.parse("{\"voornaam\":\"Jan\",\"familienaam\":\"Janssens\",\"geboortedatum\":\"1993-12-31T00:00:00.000Z\",\"adres\":{\"straat\":\"Kerkstraat 13\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"},\"isIngeschreven\":true,\"namenVanExen\":[\"Sofie\",\"Berta\",\"Philip\",\"Albertoooo\"],\"aantalAutos\":2}");
    console.log(object.voornaam);
    console.log(object.familienaam);
    console.log(object.geboortedatum);
    console.log(object.adres);
    console.log(object.namenVanExen);
}

window.addEventListener("load", setup);