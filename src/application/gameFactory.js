import registry from "../infrastructure/registry.js";

export const createGame = (key) => registry.get(key);