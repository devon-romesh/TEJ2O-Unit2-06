"""
Created by: Devon
Created on: Feb 2026
This module is a Micro:bit MicroPython program, it turns a light on and off. 
"""

from microbit import *


# startup for the smily face
display.show(Image.HAPPY)
pin16.write_digital(0)


while True:
    # turns light on
    if button_a.is_pressed():
        pin16.write_digital(1)
        display.show(Image.YES)
    # turns light off
    if button_b.is_pressed():
        pin16.write_digital(0)
        display.show(Image.NO)
