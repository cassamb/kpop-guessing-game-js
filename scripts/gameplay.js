// Global Variables
var qRefArray = [0, 1, 2, 3, 4];
var gNames = ["BTS", "TWICE", "Stray Kids", "ITZY", "TXT"];
var gPics = ["https:/ibighit.com/bts/images/profile/proof/member/bts-pc.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/4391d47ab60d4297a862640273e72fa9-10.%20%EB%8B%A8%EC%B2%B4%201.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/bbefbd20d8c94610a023642bb735e6a1-AS_3887-F3(crop)%20%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/c05f26421ffd4dffb8399b59b0f067ec-%EA%B3%B5%EC%8B%9D%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
            "https://ibighit.com/txt/images/txt/profile/sanctuary/profile-kv.jpg"];

// Progress Tracking
var qCount = 0;             // Loop counter; current question
var totalQs = qRefArray;    // Total number of questions

var score = 0;
var crrct = 0;
var incrrct = 0;

var mcRefArray = [0, 1, 2, 3];  // Reference array for the multiple choice options
var answers = [];               // Array to populate choices


function init()
{

    shuffle(qRefArray); // Shuffling the reference array to determine question order
    update()            // Starting the main game loop
    
}

function shuffle(refArr) // Shuffles the given array [GOOD]
{
    for (var i = refArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1 ));
        var temp = refArr[i];
        refArr[i] = refArr[j];
        refArr[j] = temp;
    }

    //document.writeln("<p> Shuffled Reference Array:" + qRefArray + " </p>");
}

function update()
{
    /*if (qCount = totalQs)
    {
        window.location.href = "/html/ending.html";
    }*/
    
    // Image Generation
    updateImage(qRefArray[qCount]); // Obtaining current index from the already shuffled array [GOOD]
    updateChoices();
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
    generateChoices();      // Assigning the values to each button
    setChoices();           // Sets appearance of answer choices based on shuffled order
}

function getCorrectAns() // Returns the group name that corresponds to the current image displayed
{
    return gNames[qRefArray[qCount]];
}

function generateChoices() // Generates 3 random and 1 correct choice [GOOD]
{
    answers[0] = getCorrectAns();  // The correct answer is always in index 0
    var rIndex;             // Generates random index based on length of gNames array
    
    for (var count = 1; count < 4; count++) // Using loop to assign values to rest of indexes (1, 2, and 3)
    {
        rIndex = Math.floor(Math.random() * gNames.length);	// Generate another random index
            
        if (isUnique(gNames[rIndex])) // If the given group is unique to the current list of choices ...
        {
            answers[count] = gNames[rIndex]; // Add it to the multiple choice list as an option
        }
        else
        {
            count--; // Increment value so comparison can be done again
        }
    }
}

function isUnique(ans) // Checks if the given choice is unique in the current lineup [GOOD]
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

function setChoices() // Sets the randomized order of appearance for the answer choices
{
    var optNum = 0;

    for (var n = 1; n <= 4; ++n) // Creating for loop to assign values to options (1, 2, 3, and 4)
    {	
        var nameIndex = mcRefArray[optNum]; // Selecting the group name from our shuffled (options) array

        // Creating the buttons for our multiple choice answers, assigning the values, and adding event listeners
        choice = document.getElementById("option" + n);
        choice.setAttribute("type", "button");
        choice.setAttribute("value", answers[nameIndex]);		// Assigning the option value (group name) based on "random" index
        choice.setAttribute("onclick", "check('" + choice.value + "')");	// If option is clicked, check the answer
        ++optNum;
    } 
}

function check(userAns)
{
    if (userAns == getCorrectAns())
    { 
        console.log("Good! " + userAns + " is the correct answer!");
        crrct++; 
    } 
    else
    {
        console.log("Sorry! " + getCorrectAns() + " is the correct answer!");
        incrrct++;
    }
}


window.addEventListener("load", init, false);