function fillInBlanks(){
    
    const adj1Input = document.getElementById("adj-1");
    const adj1Output = adj1Input.value;
    adj1.textContent = adj1Output;

    const noun1Input = document.getElementById("noun-1");
    const noun1Output = noun1Input.value;
    noun1.textContent = noun1Output;

    const adj2Input = document.getElementById("adj-2");
    const adj2Output = adj2Input.value;
    adj2.textContent = adj2Output;

    const noun2Input = document.getElementById("noun-2");
    const noun2Output = noun2Input.value;
    noun2.textContent = noun2Output;

    const noun3Input = document.getElementById("noun-3");
    const noun3Output = noun3Input.value;
    noun3.textContent = noun3Output;

    const verb1Input = document.getElementById("verb-1");
    const verb1Output = verb1Input.value;
    verb1.textContent = verb1Output;

    const noun4Input = document.getElementById("noun-4");
    const noun4Output = noun4Input.value;
    noun4.textContent = noun4Output;

    const adj3Input = document.getElementById("adj-3");
    const adj3Output = adj3Input.value;
    adj3.textContent = adj3Output;

    const verb2Input = document.getElementById("verb-2");
    const verb2Output = verb2Input.value;
    verb2.textContent = verb2Output;

    document.getElementById("hidden-story").style.visibility = "visible";
};


const madButton = document.getElementById("mad-button");
madButton.addEventListener("click", fillInBlanks);


/*function randomColorBg() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + " , " + z + ")";

    document.getElementById("box-1").style.backgroundColor = bgColor;
};*/


//const madButton = document.getElementById("mad-button");
//madButton.addEventListener("click", fillInBlanks());


//document.getElementById("box-1").addEventListener('click', randomColorBg);
 



