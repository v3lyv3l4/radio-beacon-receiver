radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(1)
