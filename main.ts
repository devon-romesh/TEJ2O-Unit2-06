/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon
 * Created on: Feb 2026
 * This program will turn a light on and off with buttons. 
*/


// clears screen then shows a happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// turns on LED with B button
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// turns off LED with A button
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0) 
})
