# jota.pow.ICurl

## `public interface ICurl`

This interface abstracts the curl hashing algorithm.

 * **Author:** Adrian

## `ICurl absorb(final int[] trits, int offset, int length)`

Absorbs the specified trits.

 * **Parameters:**
   * `trits` — The trits.
   * `offset` — The offset to start from.
   * `length` — The length.
 * **Returns:** The ICurl instance (used for method chaining).

## `ICurl absorb(final int[] trits)`

Absorbs the specified trits.

 * **Parameters:** `trits` — The trits.
 * **Returns:** The ICurl instance (used for method chaining).

## `int[] squeeze(final int[] trits, int offset, int length)`

Squeezes the specified trits.

 * **Parameters:**
   * `trits` — The trits.
   * `offset` — The offset to start from.
   * `length` — The length.
 * **Returns:** The squeezed trits.

## `int[] squeeze(final int[] trits)`

Squeezes the specified trits.

 * **Parameters:** `trits` — The trits.
 * **Returns:** The squeezed trits.

## `ICurl transform()`

Transforms this instance.

 * **Returns:** The ICurl instance (used for method chaining).

## `ICurl reset()`

Resets this state.

 * **Returns:** The ICurl instance (used for method chaining).

## `int[] getState()`

Gets or sets the state.

 * **Returns:** The stae.

## `void setState(int[] state)`

Sets or sets the state.

 * **Parameters:** `state` — The state.

## `ICurl clone()`

Clones this instance.

 * **Returns:** A new instance.
