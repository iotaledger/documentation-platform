# jota.utils.InputValidator

## `public class InputValidator`

This class provides methods to validate the parameters of different iota API methods.

 * **Author:** pinpong

## `public static boolean isAddress(String address)`

Determines whether the specified string is an address.

 * **Parameters:** `address` — The address to validate.
 * **Returns:** <code>true</code> if the specified string is an address; otherwise, <code>false</code>.

     <p>

## `public static boolean checkAddress(String address) throws InvalidAddressException`

Checks whether the specified address is an address and throws and exception if the address is invalid.

 * **Parameters:** `address` — The address to validate.
 * **Returns:** <code>true</code> if the specified string is an address; otherwise, <code>false</code>.
 * **Exceptions:** `InvalidAddressException` — is thrown when the specified address is not an valid address.

     <p>

## `public static boolean isTrytes(final String trytes, final int length)`

Determines whether the specified string contains only characters from the trytes alphabet (see <see cref="Constants.TryteAlphabet"/>).

 * **Parameters:**
   * `trytes` — The trytes to validate.
   * `length` — The length.
 * **Returns:** <code>true</code> if the specified trytes are trytes otherwise, <code>false</code>.

     <p>

## `public static boolean isNinesTrytes(final String trytes, final int length)`

Determines whether the specified string consist only of '9'.

 * **Parameters:**
   * `trytes` — The trytes to validate.
   * `length` — The length.
 * **Returns:** <code>true</code> if the specified string consist only of '9'; otherwise, <code>false</code>.

     <p>

## `public static boolean isValue(final String value)`

Determines whether the specified string represents a signed integer.

 * **Parameters:** `value` — The value to validate.
 * **Returns:** <code>true</code> the specified string represents an integer value; otherwise, <code>false</code>.

     <p>

## `public static boolean isArrayOfTrytes(String[] trytes)`

Determines whether the specified string array contains only trytes.

 * **Parameters:** `trytes` — The trytes array to validate.
 * **Returns:** <code>true</code> if the specified array contains only valid trytes otherwise, <code>false</code>.

     <p>

## `public static boolean isArrayOfHashes(String[] hashes)`

Determines whether the specified array contains only valid hashes.

 * **Parameters:** `hashes` — The hashes array to validate.
 * **Returns:** <code>true</code> the specified array contains only valid hashes; otherwise, <code>false</code>.

     <p>

## `public static boolean isTransfersCollectionValid(final List<Transfer> transfers)`

Determines whether the specified transfers are valid.

 * **Parameters:** `transfers` — The transfers list to validate.
 * **Returns:** <code>true</code> if the specified transfers are valid; otherwise, <code>false</code>.

     <p>

## `public static boolean isValidTransfer(final Transfer transfer)`

Determines whether the specified transfer is valid.

 * **Parameters:** `transfer` — The transfer to validate.
 * **Returns:** <code>true</code> if the specified transfer is valid; otherwise, <code>false</code>>.

     <p>

## `public static String validateSeed(String seed)`

Checks if the seed is valid. If not, an exception is thrown.

 * **Parameters:** `seed` — The seed to validate.
 * **Returns:** The validated seed.
 * **Exceptions:** `IllegalStateException` — Format not in trytes or Invalid Seed: Seed too long.

     <p>
