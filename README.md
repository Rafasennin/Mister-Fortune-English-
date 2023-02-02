# Mister-Fortune-English
Game that guesses the number that the player is thinking.

This game was based on Alura's JavaScript course, using the speech recognition through the "Web speech API". The aim of the game is to make calculations from a number chosen by the player without any input of information in the application, and at the end, the final result will be guessed by the game.

Technologies involved:

*HTML 5
* CSS 3
*JavaScript
* Web Speech API

Structure:

1. Capture the voice command in the form of a string and store it in a variable.
2. Status message using the "string" command itself as a complement through the "template strings".
3. I created an array with the messages to be changed at each new step of the game, by incrementing the array index and its extension.
4. I created conditionals for if the command is different from "next", so the game does not advance and you will be asked to repeat the command.
5. I created a command to restart the game reaching the end (play again) or for some bug.
6. I created the result command that directs to a different screen.


I had great difficulties to find a solution in the change of command until I reached the final part, but after breaking my head a little, I managed to reach the objective.
There are probably more optimized ways to achieve the same result or improvements that can be made. Feel free to comment, give opinions and suggestions.
