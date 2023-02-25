class GuessingGame {
    constructor() {

    }

    setRange(mi, ma) {
        this.min = mi;
        this.max = ma;
    }

    guess() {
        this.setRange( this.min,  this.max);
        return Math.round(( this.min +  this.max)/2);
    }

    lower() {
        this.max = Math.round(( this.min +  this.max)/2);
        this.setRange( this.min,  this.max);
    }

    greater() {
        this.min = Math.round(( this.min +  this.max)/2);
        this.setRange( this.min,  this.max);
    }
}

module.exports = GuessingGame;
