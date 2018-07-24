# jota.utils.Converter

## `public class Converter`

This class provides a set of utility methods to are used to convert between different formats.

## `private static final int RADIX = 3`

The radix

## `private static final int MAX_TRIT_VALUE = (RADIX - 1)`

The maximum trit value

## `private static final int NUMBER_OF_TRITS_IN_A_BYTE = 5`

The number of trits in a byte

## `private static final int NUMBER_OF_TRITS_IN_A_TRYTE = 3`

The number of trits in a tryte

## `public static byte[] bytes(final int[] trits, final int offset, final int size)`

Converts the specified trits array to bytes.

 * **Parameters:**
   * `trits` — The trits.
   * `offset` — The offset to start from.
   * `size` — The size.
 * **Returns:** The bytes.

## `public static void getTrits(final byte[] bytes, final int[] trits)`

Gets the trits from the specified bytes and stores it into the provided trits array.

 * **Parameters:**
   * `bytes` — The bytes.
   * `trits` — The trits.

## `public static int[] trits(final String trytes, int length)`

Converts the specified trinary encoded string into a trits array of the specified length.

 * **Parameters:**
   * `trytes` — The trytes.
   * `length` — The length
 * **Returns:** A trits array.

## `public static int[] trits(final long trytes, int length)`

Converts the specified trinary encoded string into a trits array of the specified length.

 * **Parameters:**
   * `trytes` — The trytes.
   * `length` — The length.
 * **Returns:** A trits array.

## `public static int[] tritsString(final String trytes)`

Converts the specified trinary encoded trytes string to trits.

 * **Parameters:** `trytes` — The trytes.
 * **Returns:** A trits array.

## `public static int[] trits(final String trytes)`

Converts trytes into trits.

 * **Parameters:** `trytes` — The trytes to be converted.
 * **Returns:** Array of trits.

     <p>

## `public static int[] copyTrits(final String input, final int[] destination)`

Copies the trits from the input string into the destination array

 * **Parameters:**
   * `input` — The input String.
   * `destination` — The destination array.
 * **Returns:** The destination.

## `public static String trytes(final int[] trits, final int offset, final int size)`

Converts trites to trytes.

 * **Parameters:**
   * `trits` — Teh trits to be converted.
   * `offset` — The offset to start from.
   * `size` — The size.
 * **Returns:** The trytes.

     <p>

## `public static int tryteValue(final int[] trits, final int offset)`

Converts the specified trits array to trytes in integer representation.

 * **Parameters:**
   * `trits` — The trits.
   * `offset` — The offset to start from.
 * **Returns:** The value.

## `public static int value(final int[] trits)`

Converts the specified trits to its corresponding integer value.

 * **Parameters:** `trits` — The trits.
 * **Returns:** The value.

## `public static long longValue(final int[] trits)`

Converts the specified trits to its corresponding integer value.

 * **Parameters:** `trits` — The trits.
 * **Returns:** The value.

## `public static void increment(final int[] trits, final int size)`

Increments the specified trits.

 * **Parameters:**
   * `trits` — The trits.
   * `size` — The size.
