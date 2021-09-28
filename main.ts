input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
})
music.setVolume(169)
for (let index = 0; index < 10; index++) {
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    music.playTone(523, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
