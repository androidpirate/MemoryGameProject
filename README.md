# Memory Game Project

**Memory Game** a complete browser-based card matching game, that randomly places eight matching pairs face down and tests player's ability to match all pairs in a timely fashion.

<p align="center">
  <img src="\img\game_screen_capture_1.png">
</p>

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions for App Design

#### Game Behavior

|  CRITERIA| MEETS SPECIFICATIONS   |
|---|---|
| Memory Game Logic  |  The game randomly shuffles the cards. A user wins once all cards have successfully been matched. |
| Congratulations Popup  |  When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was. |
| Restart Button  |  A restart button allows the player to reset the game board, the timer, and the star rating. |
| Star Rating  |  The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).<br><br> If the player could able to match all cards within 20 stars it is rated as 3 stars, any number of moves between 20 and 40 rated as 2 and anything over 40 moves rated as 1 star. |
| Timer  | When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.  |
| Move Counter  | 	Game displays the current number of moves a user has made. |

#### Interface Design

|  CRITERIA| MEETS SPECIFICATIONS   |
|---|---|
| Styling |  Application uses CSS to style components for the game. |
| Usability  |  All application components are usable across modern desktop, tablet, and phone browsers. |

#### Documentation

|  CRITERIA| MEETS SPECIFICATIONS   |
|---|---|
| README  |  A README file is included detailing the game and all dependencies. |
| Comments  |  Comments are present and effectively explain longer code procedure when necessary. |
| Code Quality  |  Code is formatted with consistent, logical, and easy-to-read formatting as described in the [**Udacity JavaScript Style Guide**](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html).  |
| Star Rating  |  The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).<br><br> If the player could able to match all cards within 20 stars it is rated as 3 stars, any number of moves between 20 and 40 rated as 2 and anything over 40 moves rated as 1 star. |
| Timer  | When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.  |
| Move Counter  | 	Game displays the current number of moves a user has made. |

## Contributing

This repository is a project for Udacity's Front End Nano Degree program. Therefore, any pull requests will be ignored.


## Dependencies

1. [**Google Fonts**](https://fonts.google.com)
2. [**Font Awesome**](https://fontawesome.com/)
