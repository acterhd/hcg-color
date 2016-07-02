# HCG
> Color model "HCG" is an alternative to "HSV" and "HSL".

<img src="/images/figure1.png?raw=true" alt="HCG model" width="400">

## Description
Unlike the others, it adjusts the color hue and shade of gray. The HCG can change the whitish-yellow to grayish-yellow in just one shift slider. Changing channels "HCG" ( "G" channel) does not affect the brightness of a color shade "HSV" and "HSL", but only changes the brightness of the mixed color of gray. Channel "C" is the coefficient of color, chromatic color depends on it.

## Motivation
The color model describes how a color can be color. For example. Either he is pure red, or admixed with gray shades. Either he is completely gray. Other color models can be said as far as he is light as it is dark, and so on, while the HCG can be described as pure color. Because of this difference can be derived pure colors and mixed a shade of gray.

## Convertors

    - Original convertor in `convert/hcg.js`.
    - Converter by https://github.com/scijs/color-space
    - Converter by https://github.com/Qix-/color-convert