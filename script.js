let responseCount = 0;
let accessedSpecialSequence = false;

function handleInput() {
    const inputField = document.getElementById("userInput");
    let input = inputField.value.toLowerCase();
    const response = document.getElementById("dadResponse");
    const labImage = document.getElementById("labImage");
    const JHImage = document.getElementById("JHImage");

    input = input.replace(/[^a-z0-9\s]/g, ''); 
    inputField.value = input; // Update the text box with the sanitized input

    console.log("Sanitized Input:", input); // Log sanitized input

    response.innerHTML = "";
    labImage.style.display = "none"; 
    JHImage.style.display = "none"; // Hide the image initially

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
        response.innerHTML = "09-21-X2";
        response.classList.add("creepy");

    } else if (input.includes("is anyone else here")) {
        response.innerHTML = "They're all around you... waiting.";
        response.classList.add("creepy");

    } else if (input.includes("whats happening")) {
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

    // Specific words like "r34", "rule 34", or "judy hops"
    } else if (input.includes("r34") || input.includes("rule 34") || input.includes("judy hops")) {
        console.log("Displaying JHImage");
        response.innerHTML = "I'm disappointed in you, son.";
        JHImage.style.display = "block"; 
        response.classList.add("creepy");
        accessedSpecialSequence = true;

    // New condition for "Jessie Oklahoma"
    } else if (input.includes("jessie oklahoma")) {
        window.open("https://www.google.com/maps/place/Seminole,+OK", "_blank"); // Open new tab with Google Maps
        response.innerHTML = "Searching for Seminole, Oklahoma on Google Maps... See You Soon Jessie";
        response.classList.remove("creepy");
        response.innerHTML += `<br><img src="https://preview.redd.it/which-clickbaity-jonkler-face-would-be-better-for-my-v0-csgyiudvm76d1.jpg?width=640&crop=smart&auto=webp&s=26db1ee7471cda55bac3712c2955820facd8f01d" alt="Jonkler" style="width: 300px;">`; 

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
        // When the input is not recognized, generate a random dad joke
        response.innerHTML = generateDadJoke();
        response.classList.remove("creepy");
    }
}

// Function to generate a random dad joke
function generateDadJoke() {
    const whatJokes = [
        "What do you call a magic dog? A labracadabrador!",
        "What did the ocean say to the beach? Nothing, it just waved.",
        "What do you call cheese that isn't yours? Nacho cheese!",
        "What do you get when you cross a snowman and a vampire? Frostbite!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "What do you call a fake noodle? An impasta!",
        "What kind of shoes do ninjas wear? Sneakers!",
        "What do you call an alligator in a vest? An investigator!",
        "What do you call a bear with no teeth? A gummy bear!",
        "What did the janitor say when he jumped out of the closet? Supplies!"
    ];

    const whyJokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't you ever see elephants hiding in trees? Because they're so good at it!",
        "Why did the math book look sad? Because it had too many problems.",
        "Why was the broom late? It swept in!",
        "Why can't you give Elsa a balloon? Because she will let it go!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "Why did the computer go to the doctor? Because it had a virus!",
        "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans!",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
    ];

    const howJokes = [
        "How do you organize a space party? You planet!",
        "How does a penguin build its house? Igloos it together!",
        "How do you catch a squirrel? Climb a tree and act like a nut!",
        "How do you make a tissue dance? Put a little boogie in it!",
        "How does a scientist freshen her breath? With experi-mints!",
        "How do you stay warm in a cold room? Go to the corner; it's always 90 degrees!",
        "How does a train eat? It goes chew chew!",
        "How does Moses make his coffee? Hebrews it!",
        "How do you fix a broken pizza? With tomato paste!",
        "How does a caterpillar get from one side of the road to the other? It uses its butterfly skills!"
    ];

    const whereJokes = [
        "Where does the general keep his armies? In his sleevies!",
        "Where do cows go on vacation? Moo York!",
        "Where does a snowman keep his money? In a snow bank!",
        "Where do fish keep their money? In riverbanks!",
        "Where did the kid bring his ladder? To high school!",
        "Where do you find a cow with no legs? Right where you left it!",
        "Where do vampires get their news? From the blood bank!",
        "Where do you go to learn how to make ice cream? Sundae school!",
        "Where do you find a one-legged dog? Right where you left him!",
        "Where do ghosts go on vacation? To the boo-tique!"
    ];

    const whoJokes = [
        "Who am I? Well, I’m DAD, and I always know the answer!",
        "Who can hold up a ship? A-tug boat!",
        "Who is a musician's favorite superhero? The Flatwound!",
        "Who says I’m the king of the world? That’s just the Titanic!",
        "Who is the best basketball player? LeBron, because he can shoot from anywhere!",
        "Who would win in a fight between a badger and a bulldog? It depends on the venue!",
        "Who goes there? Just me, DAD, checking in on you!",
        "Who is the most musical fish? The bass!",
        "Who can shave 20 times a day and still have a beard? A barber!",
        "Who has a good sense of humor? Everyone who’s talking to me right now!"
    ];

    const jokeCategories = [whatJokes, whyJokes, howJokes, whereJokes, whoJokes];
    const selectedCategory = jokeCategories[Math.floor(Math.random() * jokeCategories.length)];
    return selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
}

window.onload = function () {
    const inputField = document.getElementById("userInput");
    inputField.value = ""; // Clear the input on load
    inputField.placeholder = "Type Here..."; // Set placeholder text
}
