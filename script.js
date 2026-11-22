//Funktion som väljer slumpmässig restaurang
function Slumparestaurang() {
    //Lista med restauranger
    const restauranger = ["Korfu", "Hägern", "Västertorps Hjärta", "Xian Köket", "Ny Gammalt", "Åsens Krog", "Krubb"];
    //Slumpar fram nummer mellan 0-1, muliplicerar med antalet restauranger
    const slump = Math.floor(Math.random() * restauranger.length);
    //Visar den slumpade restaurangen, hämtar info från html tips
    document.getElementById("tips").innerHTML = restauranger[slump];
}

function darkMode() {
    document.body.classList.toggle("dark");
}