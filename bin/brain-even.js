#!/usr/bin/env node
import {createGame} from "../src/application/gameFactory.js";
import playGame from "../src/gameEngine.js";

const game = createGame('even');
playGame(game);