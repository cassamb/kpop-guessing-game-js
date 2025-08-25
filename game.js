// Global Variables
var qRefArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var gNames = ["BTS", "TWICE", "Stray Kids", "ITZY", "TXT", "BLACKPINK", "ATEEZ", "ENHYPEN", "LE SSERAFIM", "SEVENTEEN", "aespa", "NCT", "NMIXX", "P1Harmony", "IVE", "TREASURE", "ILLIT", "THE BOYZ", "NewJeans", "MONSTA X"];
var gPics = ["https:/ibighit.com/bts/images/profile/proof/member/bts-pc.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/4391d47ab60d4297a862640273e72fa9-10.%20%EB%8B%A8%EC%B2%B4%201.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/bbefbd20d8c94610a023642bb735e6a1-AS_3887-F3(crop)%20%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg",
            "https://jyplevel2storage01.blob.core.windows.net/main/185c7cb777304d9187fff677fd3eee55-NAVER.jpg",
            "https://hybecorp.com/archive/vDx3oMUWg4aKtVsl7uiImLJgJOuEZBMRUdWXsreBjFQhc4QnUpCdZca1EWBgIO14s50CfCAawKY7g0rSu0psy79WuWUNeRYnEZR1C8nXYFqDxyQcNI94f5Ij512EsC1l.jpg",
            "https://ygfamily.com/contents/images/2025/07/profile%282560%29_1.jpg",
            "https://kpopping.com/documents/73/1/1200/ATEEZ-fullPicture(21).webp",
            "https://d1pod9gflbwpzj.cloudfront.net/main/b8af3a90-fa70-447f-95ec-21e84228e6dc.jpg",
            "https://kpopping.com/documents/94/3/1200/LE-SSERAFIM-fullPicture(36).webp",
            "https://hybecorp.com/archive/C2tcsfmIDDEpknA5Wk1wDKmymZvGi8QwAkamxF7njjdqxmohdgka1N423Nb2EYjofBv3ug9s4BQ2lLzsbOgNG4MQqGBUmv1Kn7DGb8qY8yQ1VoDu3TZ7r1R4PG94U5Jq.jpg",
            "https://kpopping.com/documents/3f/2/1200/aespa-fullPicture(39).webp",
            "https://kpopping.com/documents/c4/3/1200/NCT-fullPicture(2).webp",
            "https://kpopping.com/documents/b3/5/1200/NMIXX-fullPicture(35).webp",
            "https://fncent.com/files/2025/04/25/992a2c58b253fa1c290bf095dedb6a8e121851.jpg",
            "https://kpopping.com/documents/69/1/1200/IVE-fullPicture(36).webp",
            "https://img.imageimg.net/artist/treasure/img/profile_group_1000302.jpg",
            "https://d1pod9gflbwpzj.cloudfront.net/main/17e305c8-831f-4db6-aae8-e6d7f89706d9.jpg",
            "https://kpopping.com/documents/32/1/1200/THE-BOYZ-fullPicture(13).webp",
            "https://hybecorp.com/archive/N2tJEAwYKDre9qDEDkDeLNEsNyjZpoLYLHTmbyUGyv3eZlNjskv5CaqcVSt6ZEFpg2RzSmZpiruHkMwejtjW4zxD4I9HBfuLJG6XziXtiFBvjr3gawUZVRsfnXEhgUNI.png",
            "https://kpopping.com/documents/74/1/1200/MONSTA-X-fullPicture(8).webp",];

// Progress Tracking
var qCount = 0;                     // Loop counter; current question offset by 1
var totalQs = qRefArray.length;     // Total number of questions

var score = 0;
var crrct = 0;

var mcRefArray = [0, 1, 2, 3];  // Reference array for the multiple choice options
var answers = [];               // Array to populate choices

/* HELPER FUNCTIONS */

function shuffle(refArr) // Shuffles the given array
{
    for (var i = refArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1 ));
        var temp = refArr[i];
        refArr[i] = refArr[j];
        refArr[j] = temp;
    }
}

function isUnique(ans) // Determines if the given choice is unique in the current lineup
{
    for (var c = 0; c < answers.length; c++)
    {
        if (answers[c] == ans)
        {
            return false;
        }
    }
    return true;
}

/* MAIN GAME FUNCTIONS */

function init()
{
    shuffle(qRefArray); // Shuffling the reference array to determine question order
}

function start() // onclick function
{
    // Hiding welcome page elements and showing gameplay page elements
    document.getElementsByClassName("welcome-page")[0].style.display = "none";
    document.getElementsByClassName("game-page")[0].style.display = "block";
    
    update() // Starting the main game loop
}

function update() // Main game loop
{
    updateProgress();  // Update user progress (question number and score)
    
    // Image Generation
    updateImage(qRefArray[qCount]); // Update image for current question
    updateChoices();                // Update and shuffle answer choices

    if (qCount == totalQs) // Ending condition; no more questions to answer
    {
        end();
    }
}

function updateProgress()
{
    document.getElementById("qstn-num").innerHTML = "<h2> Question # " + (qCount + 1) + "</h2>";
    
    score = ( crrct / totalQs ) * 100;
    document.getElementById("score").innerHTML = "<h3>Score: " + score + "%</h3>";
}

function updateImage(index)
{
    var randImg = document.getElementById("pic");
    randImg.setAttribute("src", gPics[index]);
    randImg.setAttribute("alt", "Image of " + gNames[index]);
}

function updateChoices()
{
    shuffle(mcRefArray);    // Shuffling the choice order
    generateChoices();      // Generates the multiple choice answers for current question
    setChoices();           // Assigns each choice to a button
}

function getCorrectAns() // Returns the group name that corresponds to the current image displayed
{
    return gNames[qRefArray[qCount]];
}

function generateChoices() 
{
    answers[0] = getCorrectAns(); // Correct answer is always in index 0
    var rIndex;
    
    for (var count = 1; count < 4; count++) // Looping to assign values to rest of indexes (1, 2, and 3)
    {
        rIndex = Math.floor(Math.random() * gNames.length);	// Generate random index
            
        if (isUnique(gNames[rIndex])) // If the given group is unique to the current list of choices ...
        {
            answers[count] = gNames[rIndex]; // Add it to the multiple choice list as an option
        }
        else
        {
            count--; // Decrement counter so a different group can be generated
        }
    }
}

function setChoices()
{
    var optNum = 0;

    for (var n = 1; n <= 4; ++n) // Looping to assign values to multiple choice buttons (1, 2, 3, and 4)
    {	
        var nameIndex = mcRefArray[optNum]; // Selecting the group name from our shuffled (options) array

        // Creating the buttons for our multiple choice answers, assigning the values, and adding event listeners
        choice = document.getElementById("opt-" + n);
        choice.setAttribute("type", "button");
        choice.setAttribute("value", answers[nameIndex]);		           
        choice.setAttribute("onclick", "check('" + choice.value + "')");	
        ++optNum;
    } 
}

function check(userAns) // Validates the user's selection; onclick event
{
    if (userAns == getCorrectAns())
    { 
        crrct++; 
    } 

    // Progress the game
    ++qCount;
    update();
}

function end() // Displays ending page elements
{
    document.getElementsByClassName("game-page")[0].style.display = "none";
    document.getElementsByClassName("ending-page")[0].style.display = "block";
            
    document.getElementById("final-score").textContent = "Your final score is " +  score + "%";
}

window.addEventListener("load", init, false);