// Global Variables
var qRefArray = [0, 1, 2, 3, 4];
var gNames = ["BTS", "TWICE", "Stray Kids", "ITZY", "TXT"];
var gPics = ["https:/ibighit.com/bts/images/profile/proof/member/bts-pc.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/4391d47ab60d4297a862640273e72fa9-10.%20%EB%8B%A8%EC%B2%B4%201.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/bbefbd20d8c94610a023642bb735e6a1-AS_3887-F3(crop)%20%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/c05f26421ffd4dffb8399b59b0f067ec-%EA%B3%B5%EC%8B%9D%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
            "https://ibighit.com/txt/images/txt/profile/sanctuary/profile-kv.jpg"];

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