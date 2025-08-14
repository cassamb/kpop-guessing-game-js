# Kpop Guessing Game: JavaScript Implementation (kpop-guessing-game-js)

This is the first of three iterations in the Kpop Guessing Game series which also includes the [kpop-guessing-game-php](https://github.com/cassamb/kpop-guessing-game-php) and [kpop-guessing-game-ajax](https://github.com/cassamb/kpop-guessing-game-ajax) projects.

![Static Badge](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=HTML5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-blue?style=for-the-badge&logo=CSS&logoColor=white)

<u>**Disclaimer:**</u> Due to the knowledge and experience gained since this project was originally commissioned in 2019, some specifications (i.e., certain technologies, requirements, and practices) have been modified and/or removed to improve the overall quality of the program while maintaining the original intent. **Although the specifications for this iteration remained relatively the same (due to it's simple nature), more notable modifications are made in future iterations as the program expands and will be addressed as necessary.**

## Introduction

### Background

This project was originally commissioned by Professor Kumar of Nova Southeastern University's College of Computing and Engineering for the 2019 Web Programming and Design course. Students were tasked with creating a flashcard quiz game on the topic of their choosing. The **K-pop genre** was selected as the subject matter for this implementation due to personal interest as well as the music genre's growing popularity at the time. This project was intended to demonstrate one’s understanding of web software design as it pertains to front-end and middle layer processes as well as the fundamentals game development. This project was tested in the Google Chrome web browser and developed using JavaScript, HTML, and CSS in the Visual Studio Code editor.

### Project Overview

As mentioned before, this project is a flashcard quiz game so the user is presented an image of a Kpop group along with four possible names for that group (3 wrong answers, one correct answer). If the user selects the correct answer, their score is incremented; otherwise, the score stays the same. This continues until the array of "flashcards" has been exhausted.

## Requirements

Given this project was assigned in a lower-level programming and design course, the requirements and capabilities of the program are reflective of my knowledge at the time. Therefore, this project should be treated as a low-fidelity prototype that focuses on the bare bone requirements of the overall Kpop Guessing Game program. Although it is functional, it may be lacking in regard to the visual and logical structure due to the limitations of the original specification.

### UI Requirements

The UI design was left to the student’s discretion, so there was a freedom to do however little or however much one desired in terms of aesthetics as long as the following "pages" and elements within them were included:
* <u>**Start Page**</u>: Page that welcomes the user and explains the rules of the quiz.
  * Game Title
  * Game Explanation
  * Start Button
* <u>**Game Page**</u>: Page in which the actual gameplay occurs.
  * Question Number
  * Score
  * Randomized Image
  * Prompt
  * Multiple Choice Buttons
* <u>**Ending Page**</u>: Page that is displayed once the user completes the game and displays the user's final score.
  * Final Score

### Logical Requirements

Given the purpose of this project was to build the foundation for future iterations, the functional requirements are as follows:
- [x] The order of questions must be shuffled upon every execution of the program.
- [x] The appearance of the multiple choice answer options must be random (the correct answer shouldn't always be first in the sequence).
- [x] The random image must correspond to exactly of the answer choices.
- [x] The user's progress (**i.e., current question number and score**) must be updated when an answer is selected.
- [x] All elements should reside within a single page but the game state determines which elements are shown or hidden.
  * <u>For example</u>, if the game hasn’t started, only the elements of the start “page” should be displayed and the game “page” and ending “page” elements should be hidden.
- [x] The user should only be allowed to select one answer per question in an effort to prevent score inflation.

## Design

### Front-End Design

“Boba runs” and cafe hangouts are popular activities amongst Kpop fans, so much so that bubble tea shops often host events catering to fans of Kpop. So, an in an effort to appeal to the demographic and pay homage to the aesthetic, the UI utilizes bright neutrals to evoke a feeling of familiarity and comfort for the users. In addition, the borders of the images are rounded to mimic that of photocards that fans receive in the albums they purchase and trade with each other at events hosted by various bubble tea shops. Overall, the UI is designed to evoke the feelings of attending a trading card event at a cozy bubble tea shop with friends. 

### Architectural Design

Given the specifications and the simple nature of the project, procedural programming was the best suited paradigm for development. The idea is the update() function serves as the “main” which controls the progression of the game by calling modular functions to carry out the various responsibilities of the program (i.e., updateProgress() which updates the UI to display the current question number and the user’s score). There are also helper functions which assist the subroutines during their execution throughout the program (i.e., the isUnique(ans) function which determines if the given argument is unique in the current lineup of multiple choice answers).

### Back-End Design

The use of a database was purposefully excluded from this implementation in an effort to have students focus on the bare bone requirements of the project. It is acknowledged that the current way of storing the flashcards data (using single dimensional arrays) is not the most optimal storage option; however, it is reasonable given the context of what is being demonstrated in this iteration.

## Afterword

The functionality expected in the next iteration of the program includes the following:
* Improved storage capability with relational database implementation (PHP & SQL).
* Improved UX with visual and text feedback for user input as well as the implementation of a skipping mechanism.
