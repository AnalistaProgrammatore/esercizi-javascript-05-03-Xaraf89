let ladder = {
    step: 0,
    up() {
        this.step++
    },
    down() {
        this.step--
    },
    showStep: function () { // shows the current step
        console.log(this.step)
    }
}
ladder.up()
ladder.up()
ladder.down()
ladder.showStep() // 1

//riscriverlo nel file chaining.js in modo che possa funzionare nel seguente modo cioè usando il method chaining:

let ladder2 = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep() {
        console.log(this.step)
    },
}

ladder2.up().up().down().showStep() // 1
