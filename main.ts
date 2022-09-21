let Temperatura = 0
basic.forever(function () {
    Temperatura = input.temperature()
    if (Temperatura == 10) {
        basic.showNumber(Temperatura)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (Temperatura == 20) {
        basic.showNumber(Temperatura)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (Temperatura == 30) {
        basic.showNumber(Temperatura)
        basic.showIcon(IconNames.Umbrella)
    } else if (Temperatura == 40) {
        basic.showNumber(Temperatura)
        basic.showLeds(`
            . . . . .
            . . . . #
            # . # . #
            # # # . #
            # # # # #
            `)
    } else {
        basic.showNumber(Temperatura)
    }
})
