import readlineSync from 'readline-sync';

function getAnswer(question)
{
    return readlineSync.question(question);
}

function render(data)
{
    console.log(data);
}

export {getAnswer, render};