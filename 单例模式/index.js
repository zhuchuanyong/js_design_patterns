class ManageGame {
    static _schedule = null;
    static getInstance() {
        if (ManageGame._schedule) {
            return ManageGame._schedule;
        }
        return (ManageGame._schedule = new ManageGame());
    }
    constructor() {
        debugger;
        if (ManageGame._schedule) {
            return ManageGame._schedule;
        }
        console.log(this);
        ManageGame._schedule = this;
    }
}

const schedule1 = new ManageGame();
const schedule2 = ManageGame.getInstance();
