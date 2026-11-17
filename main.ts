bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    dados = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (dados == "") {
    	
    } else {
    	
    }
})
let dados = ""
bluetooth.startUartService()
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
	
})
