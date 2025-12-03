import {getAnswer} from "./cli.js";

export default {
        get Name()
        {
            return this.name
    },

        set Name(name)
        {
            this.name = name
    },

    init: function (question) {
        this.name = getAnswer(question);
        return this;
    }
}
