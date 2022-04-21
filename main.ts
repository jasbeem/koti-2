enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showString("Piedra")
    basic.showIcon(IconNames.Scissors)
    opcion = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Suerte")
    basic.showIcon(IconNames.Heart)
    opcion = 2
})
let juego = 0
let opcion = 0
basic.showString("!Hola Jose!")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && opcion == 1) {
        soundExpression.happy.play()
        juego = randint(0, 2)
        if (juego == 0) {
            basic.showIcon(IconNames.Diamond)
        } else if (juego == 1) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && opcion == 2) {
        soundExpression.happy.play()
        juego = randint(0, 2)
        if (juego == 0) {
            basic.showIcon(IconNames.Yes)
        } else if (juego == 1) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.EigthNote)
        }
    }
})
