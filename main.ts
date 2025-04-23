let opciones = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    opciones = randint(1, 3)
    if (opciones == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
    } else if (opciones == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.pause(500)
    }
})
