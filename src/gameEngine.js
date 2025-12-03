import messages from "./messages.js";
import {getAnswer, render} from "./cli.js";
import user from "./user.js";

const playGame = (game) => {
    render(messages.welcome);
    user.init(messages.meeting);
    render(messages.greeting(user.name));
    render(messages.titles[game.id]);

    for (let i = 0; i < 3; i++) {
        let dataQuestion = game.getDataQuestion()
        render(messages.question + `${dataQuestion}`);
        const answer = getAnswer(messages.answers.user);
        if (!game.isAnswerCorrect(answer)) {
            render(messages.error(answer, game.getCorrectAnswer(dataQuestion), user.name));
            render(messages.revisit(user.name));
            return;
        }
        render(messages.answers.game)
    }
    render(messages.success(user.name));
}

export default playGame;