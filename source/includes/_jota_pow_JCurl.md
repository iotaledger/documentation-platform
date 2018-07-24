# jota.pow.JCurl

## `public class JCurl implements ICurl`

(c) 2016 Come-from-Beyond

JCurl belongs to the sponge function family.

## `public static final int HASH_LENGTH = 243`

The hash length.

## `public JCurl absorb(final int[] trits, int offset, int length)`

Absorbs the specified trits.

 * **Parameters:**
   * `trits` — The trits.
   * `offset` — The offset to start from.
   * `length` — The length.
 * **Returns:** The ICurl instance (used for method chaining).

## `public JCurl absorb(final int[] trits)`

Absorbs the specified trits.

 * **Parameters:** `trits` — The trits.
 * **Returns:** The ICurl instance (used for method chaining).

## `public JCurl transform()`

Transforms this instance.

 * **Returns:** The ICurl instance (used for method chaining).

## `public JCurl reset()`

Resets this state.

 * **Returns:** The ICurl instance (used for method chaining).

## `public int[] squeeze(final int[] trits, int offset, int length)`

Squeezes the specified trits.

 * **Parameters:**
   * `trits` — The trits.
   * `offset` — The offset to start from.
   * `length` — The length.
 * **Returns:** The squeezes trits.

## `public int[] squeeze(final int[] trits)`

Squeezes the specified trits.

 * **Parameters:** `trits` — The trits.
 * **Returns:** The squeezes trits.

## `public int[] getState()`

Gets the states.

 * **Returns:** The state.

## `public void setState(int[] state)`

Sets the state.

 * **Parameters:** `state` — The states.

## `@Override public ICurl clone()`

Clones this instance.

 * **Returns:** A new instance.
