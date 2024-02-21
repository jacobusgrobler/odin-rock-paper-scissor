# odin-rock-paper-scissor
Rock Paper Scissor Game

//What are we doing 
//Creating a game of rock paper scissor 
//who is playing
//person against computer

//How do we make the human play.
//As per instruction he has to input via the console
//we give him three choices 
//he knows them already
//where will we put its choices
//he will manually type it in as a parameter as per instructions


//how will we let the computer play
//How do we give it 3 options

//The computer must make a random selection between three options
//link the options to a number and let it randomly pick a number
//where will we put the computer's output
//place the computer selection in a variable

//how will we make the human and the computer play together
//we will have to compare their output 
//how will we compare there output
//we will have to compare the values of the variables that we created with the original functions 
//they each have three options how will we cater for a win a loss and a draw
//how many variable results do we have 
//rock vs scissor = rock
//rock vs paper = paper
//scissor vs paper = scissor
//samesies = draw
//lets use the human input as the first operand and work around that

//how do we create a counter for the game to get an ultimate winner
//we will have to put the count somewhere.
//then we will have to accumulate the counter
//we can only accumulate the counter with comparing the if operation results and attaching an action to that result

Below issues might not be relevant with required changes
SYNOPSYS 
CODE IS STILL BUGGY THE ISSUE IS THE LOOP THE INITIAL EXECUTION DOES NOT EXECUTE THE SCRIPT ENTIRELY.
THE COUNTERS AS WELL SEEMS TO MISS FIRE SOME TIMES NOT UPDATING THE SCORE WITH THE IMMEDIATE AFTER THE LOOP IS RUN
I'M SURE THIS IS FIXABLE BUT I'M TIRED NOW

Required changes
-Remove logic that plays 5 rounds
-Human player input now buttons
-Buttons must trigger round
-Display results in console, running score and final winner
-First one to 5 wins

--Removing the 5 round limit and changing the human player input goes hand in hand.
--We will have to remove the loop
--The button for human selection will trigger the round ie. the computer selection
-Will this button trigger the output as well 
--No this will be triggered by the result of the comparison as it will determine the output

--First add HTML element required for button input
--Style this so that it is flexible.
--Model it so that it can flex from desktop to mobile 

