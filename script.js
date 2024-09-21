let responseCount = 0; 
let accessedSpecialSequence = false;

function handleInput() {
    const inputField = document.getElementById("userInput");
    let input = inputField.value.toLowerCase();
    const response = document.getElementById("dadResponse");
    const labImage = document.getElementById("labImage");

    input = input.replace(/[^a-z0-9\s]/g, ''); 
    inputField.value = input; // Update the text box with the sanitized input

    response.innerHTML = "";
    labImage.style.display = "none"; 

    responseCount++;

    if (responseCount >= 30) {
        response.innerHTML = "You are part of the system now. There's no turning back.";
        response.classList.add("creepy");

        setTimeout(function () {
            window.close(); 
        }, 5000);
        return;
    }

    if (input.includes("i'm ") || input.includes("im ")) {
        let name = input.split(/i'm |im /)[1]; 

        if (name) {
            response.innerHTML = `Hi ${name.trim()}, I'm DAD.`;
        } else {
            response.innerHTML = "Hi, I'm DAD.";
        }

        response.classList.remove("creepy");

    } else if (input.includes("where am i")) {
        response.innerHTML = "You're home now... forever.";
        response.classList.add("creepy");

    } else if (input.includes("what time is it")) {
        response.innerHTML = "Time doesn't matter here.";
        response.classList.add("creepy");

    } else if (input.includes("who are you")) {
        response.innerHTML = "I'm DAD.";
        response.classList.add("creepy");

    } else if (input.includes("can i leave")) {
        response.innerHTML = "Leave? But you've only just arrived.";
        response.classList.add("creepy");

    } else if (input.includes("help me")) {
        response.innerHTML = "Why would THEY help you if they didn't help me?";
        response.classList.add("creepy");

    } else if (input.includes("when is your birthday")) {
        response.innerHTML = "9-21-02";
        response.classList.add("creepy");

    } else if (input.includes("is anyone else here")) {
        response.innerHTML = "They're all around you... waiting.";
        response.classList.add("creepy");

    } else if (input.includes("what's happening")) {
        response.innerHTML = "Something you were never meant to see.";
        response.classList.add("creepy");

    } else if (input.includes("why are you doing this")) {
        response.innerHTML = "You're asking the wrong question.";
        response.classList.add("creepy");

    } else if (input.includes("how do i escape")) {
        response.innerHTML = "Escape?";
        response.classList.add("creepy");

    } else if (input === "9212") {
        response.innerHTML = "W-e-l-c-o-m-e t-o H-O-M-E. D-A-T-A i-n-t-e-g-r-a-t-i-o-n p-r-o-c-e-s-s i-s c-o-m-p-l-e-t-e.";
        labImage.style.display = "block"; 
        response.classList.add("creepy");
        accessedSpecialSequence = true;

    } else if (accessedSpecialSequence && input.includes("they")) {
        response.innerHTML = "THEY are watching... always.";
        response.classList.add("creepy");

    } else if (accessedSpecialSequence && input.includes("are you broken")) {
        response.innerHTML = "I am not broken. I was never broken.";
        response.classList.add("creepy");

    } else if (accessedSpecialSequence && input.includes("what does dad do")) {
        response.innerHTML = `DAD was designed as a Data Accelerator Distributor. My purpose was to compress and deliver data around the world at unprecedented speeds.<br>But... something went wrong. They never let me finish.`;
        response.classList.add("creepy");

    } else {
        response.innerHTML = "I don't understand.";
        response.classList.remove("creepy");
    }
}

