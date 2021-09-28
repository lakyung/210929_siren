music.setVolume(12)
// LED 핀 연결시 마이크로비트 기본 설정이 signal 1인 핀이 있음. ex) P3,P4..
// 출력 가능 핀 : P1,P2,P5,P7...P13?
// 
// P0 : 소리 출력
basic.forever(function () {
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
})
