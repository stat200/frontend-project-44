import even from '../games/even.js';

const registry = new Map();

registry.set('even', {
    id: 'even',
    getDataQuestion: even.getDataQuestion,
    isAnswerCorrect: even.isAnswerCorrect,
    getCorrectAnswer: even.getCorrectAnswer
    });

export default registry;