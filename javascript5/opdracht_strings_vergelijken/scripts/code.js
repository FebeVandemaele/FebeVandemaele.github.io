const setup = () => {
    let s1 = "Test";
    let s2 = "test";
    let s3 = "Hallo";
    let s4 = "test";

    if(s1.localeCompare(s2) === 0){
        console.log("s1 = s2 met localeCompare");
    }
    if(s4.localeCompare(s2) === 0){
        console.log("s4 = s2 met localeCompare");
    }
    if(s1.localeCompare(s3) === 0){
        console.log("s1 = s3 met localeCompare");
    }
    if(s1 === s2){
        console.log("s1 = s2 met ===");
    }
    if(s4 === s2){
        console.log("s4 = s2 met ===");
    }
    if(s1 === s3){
        console.log("s1 = s3 met ===");
    }
    if(s1 == s2){
        console.log("s1 = s2 met ==");
    }
    if(s4 == s2){
        console.log("s4 = s2 met ==");
    }
    if(s1 == s3){
        console.log("s1 = s3 met ==");
    }
    if(s2 == s2){
        console.log("s2 = s2 met ==");
    }
}

window.addEventListener("load", setup);