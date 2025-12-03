export default {
    welcome: 'Welcome to the Brain Game!',
        meeting: 'May I have your name? ',
        greeting: name => `Hello ${name}!`,
        question: 'Question: ',
        answers: {
            user: 'Your answer: ',
            game: 'Correct!',
    },
    error: function (wrong, correct, name) {
        return `${wrong} is wrong answer. Correct answer was ${correct} Let's try again ${
            name}`
    },
    revisit: name => `Let's try again, ${name}!`,
    success: name => `Congratulations, ${name}!`,
    titles: {
        even: 'Answer \'yes\' if number even otherwise \'no\'.',
    }
}
