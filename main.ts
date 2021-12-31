bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    ketnoi = 1
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    ketnoi = 0
})
let ketnoi = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
ketnoi = 0
let datagui = ""
basic.forever(function () {
    if (ketnoi == 1) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            datagui = convertToText(input.compassHeading())
            bluetooth.uartWriteString(datagui)
            basic.showIcon(IconNames.Heart)
        }
    }
})
