---
title: Display current time on 16x2 LCD using Raspberry Pi 3 with Node.JS
date: "2018-10-18"
description: How to display current time on a 16x2 LCD using Raspberry Pi 3 with Node.JS
---

This post will cover how to use NodeJS to display the current time in the format of `h:mm:ss a` through an [16x2 LCD Display][2] with a [Raspberry Pi 3][3].

This was the result of what I made:

![LCD Display using JS](/lcd_time_extra.JPG)

## Software Dependencies

Make sure you're Raspberry Pi has [NodeJS][nodejs] installed in it.

If not then download and install it.

## The Materials

In order to follow along with this tutorial you will need the following:

**Required**:

* Raspberry Pi 
* Assorted Jumper Wires 
* 10k ohm potentiometer
* 220 ohm resistor 
* Any HD44780 Compatible LCD. Mine is [this][this]
* Breadboard

*Optional*:

* [Cobbler for Raspberry Pi][cobbler] 

> I listed the cobbler as optional because you can opt to use jumper wires instead. The cobbler just makes it easier to work with GPIO pins of the Raspberry Pi.

## The Schematic

> I'll only show the Schematic for now since I'm not really good at using [Fritzing][fritzing] to display the Graphical Connection.

![Schematic Diagram](/schematic-lcd.jpg)

This diagram only has a minor difference from the [Adafruit Schematic on the Subject][adafruit-tutorial]. It has a 220 ohm resistor through the anode since the lcd I've used doesn't have builtin resistors.

> Please refer to the [Adafruit Schematic][adafruit-tutorial] for the correct schematic incase I've got this one wrong.

## Code

Run the following commands using your terminal or command-line:

    mkdir lcd-clock
    cd lcd-clock
    npm init

Run through the npm prompts and then install the [lcd][lcd-package] and [moment][moment] package using npm:

    npm install lcd moment

The [lcd][lcd-package] allows you to have a high-level API in controlling the LCD in NodeJS through the Raspberry Pi while [moment][moment] is used for better date and time formatting.

Then create your `lcd.js` file with the following contents in it:


`gist:pofay/755a18f01121d568758f29d3eaffee1b#lcd.js`

If you want to edit what to display in the lcd just replace the first argument in the `lcd.print()` method

> For more information on the lcd module's methods visit its [github repo][lcd-package]

Then run `lcd.js` through node:

    node lcd.js

And you should see the time through the LCD:

![Initial Time Display](/initial-display.JPG)

An example of Displaying an extra line to the LCD:

`gist:pofay/e2fb9c21da4fbfee5fdddc983b1bc104#lcd-two-lines.js`

> The Api of the lcd package does not do an automatic newline unlike the [Adafruit Python Library][adafruit-python]. If you miss out on putting the next `setCursor` and `print` in the previous print callback it won't be displayed on the lcd since the internal implementation of the module does not write if the given value can be overwritten. See this [test][test] for more info.

And the Output:

![Double Line LCD](/two-lines-lcd.JPG)

There are still alot more things you can do with this. You can replace the displayed text or make it scroll along the lcd. You're imagination is the limit.

[1]: https://rxjs-dev.firebaseapp.com/
[2]: https://www.amazon.com/TC1602A-09T-Compatible-Backlight-Adafruit-Raspberry/dp/B07BV14Y4D?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-d-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B07BV14Y4D
[3]: https://www.raspberrypi.org/products/raspberry-pi-3-model-b/
[cobbler]: https://www.adafruit.com/product/2028
[adafruit-tutorial]: https://learn.adafruit.com/assets/1757
[fritzing]: http://fritzing.org/home/
[lcd-package]: https://github.com/fivdi/lcd
[moment]: https://momentjs.com/
[8x1-display]: https://www.amazon.com/8x1-Character-LCD-STN-Blue/dp/B01GK6YJOU
[nodejs]: https://nodejs.org/en/
[adafruit-python]: https://github.com/adafruit/Adafruit_Python_CharLCD
[this]: https://www.buydisplay.com/default/character-16x2-blue-lcd-display-module-hd44780-white-on-blue
[test]: https://github.com/fivdi/lcd/blob/master/test/print-large-strings.js
