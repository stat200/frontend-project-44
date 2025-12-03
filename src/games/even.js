export default {
    _question: null,
    getDataQuestion: function () {
        const min = 1;
        const max = 10;
        this._question = Math.floor(Math.random() * (max - min + 1)) + min;
        return this._question;
    },
    isAnswerCorrect: function (answer) {
            return answer === this.getCorrectAnswer();
    },
    getCorrectAnswer: function () {
        return this._question % 2 === 0 ? 'yes' : 'no';
    }
}
