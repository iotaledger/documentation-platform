# jota.utils.TrytesConverter

## `public class TrytesConverter`

This class allows to convert between ASCII and tryte encoded strings.

 * **Author:** pinpong

## `public static String toTrytes(String inputString)`

Conversion of ascii encoded bytes to trytes. Input is a string (can be stringified JSON object), return value is Trytes

How the conversion works: 2 Trytes === 1 Byte There are a total of 27 different tryte values: 9ABCDEFGHIJKLMNOPQRSTUVWXYZ

1. We get the decimal value of an individual ASCII character 2. From the decimal value, we then derive the two tryte values by basically calculating the tryte equivalent (e.g. 100 === 19 + 3 * 27) a. The first tryte value is the decimal value modulo 27 (27 trytes) b. The second value is the remainder (decimal value - first value), divided by 27 3. The two values returned from Step 2. are then input as indices into the available values list ('9ABCDEFGHIJKLMNOPQRSTUVWXYZ') to get the correct tryte value



EXAMPLE

Lets say we want to convert the ASCII character "Z". 1. 'Z' has a decimal value of 90. 2. 90 can be represented as 9 + 3 * 27. To make it simpler: a. First value: 90 modulo 27 is 9. This is now our first value b. Second value: (90 - 9) / 27 is 3. This is our second value. 3. Our two values are now 9 and 3. To get the tryte value now we simply insert it as indices into '9ABCDEFGHIJKLMNOPQRSTUVWXYZ' a. The first tryte value is '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'[9] === "I" b. The second tryte value is '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'[3] === "C" Our tryte pair is "IC"

 * **Parameters:** `inputString` — The input String.
 * **Returns:** The ASCII char "Z" is represented as "IC" in trytes.

## `public static String toString(String inputTrytes)`

Trytes to bytes Reverse operation from the byteToTrytes function in send.js 2 Trytes == 1 Byte We assume that the trytes are a JSON encoded object thus for our encoding: First character = { Last character = } Everything after that is 9's padding
