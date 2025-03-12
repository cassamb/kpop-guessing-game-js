// Global Variables
var qRefArray = [0, 1, 2, 3, 4];
var gNames = ["BTS", "TWICE", "Stray Kids", "ITZY", "TXT"];
var gPics = ["https:/ibighit.com/bts/images/profile/proof/member/bts-pc.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/4391d47ab60d4297a862640273e72fa9-10.%20%EB%8B%A8%EC%B2%B4%201.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/bbefbd20d8c94610a023642bb735e6a1-AS_3887-F3(crop)%20%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg",
            "https://jyplevel2storage01.blob.core.windows.net:443/main/c05f26421ffd4dffb8399b59b0f067ec-%EA%B3%B5%EC%8B%9D%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
            "https://ibighit.com/txt/images/txt/profile/sanctuary/profile-kv.jpg"];

// Question Tracking
var qCount = 0;             // Loop counter; current question
var totalQs = qRefArray;    // Total number of questions

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
    /*qCount++;

    if (qCount > totalQs)
    {
        window.location.href = "/html/ending.html";
    }*/
    
    // Image Generation
    
    updateImage(qRefArray[qCount]); // Obtaining current index from the already shuffled array [GOOD]

}

function updateImage(index)
{
    var randImg = document.getElementById("pic");
    randImg.setAttribute("src", gPics[index]);
    randImg.setAttribute("alt", "Image of " + gNames[index]);
}


window.addEventListener("load", init, false);