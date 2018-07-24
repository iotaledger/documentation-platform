# jota.model.Bundle

## `public class Bundle implements Comparable<Bundle>`

This class represents a Bundle, a set of transactions.

 * **Author:** pinpong

     <p>

## `public Bundle()`

Initializes a new instance of the Bundle class without transactions.

## `public Bundle(List<Transaction> transactions, int length)`

Initializes a new instance of the Bundle class.

## `public List<Transaction> getTransactions()`

Gets the transactions

 * **Returns:** transactions The transactions.

## `public int getLength()`

Gets the length of the bundle

 * **Returns:** length The length.

## `public void setLength(int length)`

Sets the length of the bundle

 * **Parameters:** `length` — The length.

## `public void addEntry(int signatureMessageLength, String address, long value, String tag, long timestamp)`

Adds a bundle entry.

 * **Parameters:**
   * `signatureMessageLength` — Length of the signature message.
   * `address` — The address.
   * `value` — The value.
   * `tag` — The tag.
   * `timestamp` — The timestamp.

## `public void finalize(ICurl customCurl)`

Finalizes the bundle using the specified curl implementation,

 * **Parameters:** `customCurl` — The custom curl.

## `public void addTrytes(List<String> signatureFragments)`

Adds the trytes.

 * **Parameters:** `signatureFragments` — The signature fragments.

## `public int[] normalizedBundle(String bundleHash)`

Normalized the bundle.

 * **Parameters:** `bundleHash` — The bundle hash.
 * **Returns:** normalizedBundle A normalized bundle hash.

## `@Override public int compareTo(Bundle o)`

Compares the current object with another object of the same type.

 * **Parameters:** `o` — An object to compare with this object.
 * **Returns:** A value that indicates the relative order of the objects being compared. The return value has the following meanings: Value Meaning Less than zero This object is less than the <paramref name="other" /> parameter.Zero This object is equal to <paramref name="other" />. Greater than zero This object is greater than <paramref name="other" />.
