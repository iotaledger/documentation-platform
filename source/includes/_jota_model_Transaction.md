# jota.model.Transaction

## `public class Transaction`

This class represents an iota transaction.

 * **Author:** pinpong

## `public Transaction(ICurl curl)`

Initializes a new instance of the Signature class.

## `public Transaction()`

Initializes a new instance of the Signature class.

## `public Transaction(String trytes)`

Initializes a new instance of the Signature class.

## `public Transaction(String trytes, ICurl customCurl)`

Initializes a new instance of the Signature class.

## `public Transaction(String signatureFragments, long currentIndex, long lastIndex, String nonce, String hash, String tag, long timestamp, String trunkTransaction, String branchTransaction, String address, long value, String bundle)`

Initializes a new instance of the Signature class.

## `public Transaction(String address, long value, String tag, long timestamp)`

Initializes a new instance of the Signature class.

## `@Override public String toString()`

Returns a String that represents this object.

 * **Returns:** Returns a string representation of this object.

## `public String getHash()`

Get the hash.

 * **Returns:** The hash.

## `public void setHash(String hash)`

Set the hash.

 * **Parameters:** `hash` — The hash.

## `public String getSignatureFragments()`

Get the signature fragments.

 * **Returns:** The signature fragments.

## `public void setSignatureFragments(String signatureFragments)`

Set the signature fragments.

 * **Parameters:** `signatureFragments` — The signature fragments.

## `public String getAddress()`

Get the address.

 * **Returns:** The address.

## `public void setAddress(String address)`

Set the address.

 * **Parameters:** `address` — The address.

## `public long getValue()`

Get the value.

 * **Returns:** The value.

## `public void setValue(long value)`

Set the value.

 * **Parameters:** `value` — The value.

## `public String getTag()`

Get the tag.

 * **Returns:** The tag.

## `public void setTag(String tag)`

Set the tag.

 * **Parameters:** `tag` — The tag.

## `public long getTimestamp()`

Get the timestamp.

 * **Returns:** The timestamp.

## `public void setTimestamp(long timestamp)`

Set the timestamp.

 * **Parameters:** `timestamp` — The timestamp.

## `public long getCurrentIndex()`

Get the current index.

 * **Returns:** The current index.

## `public void setCurrentIndex(long currentIndex)`

Set the current index.

 * **Parameters:** `currentIndex` — The current index.

## `public long getLastIndex()`

Get the last index.

 * **Returns:** The last index.

## `public void setLastIndex(long lastIndex)`

Set the last index.

 * **Parameters:** `lastIndex` — The last index.

## `public String getBundle()`

Get the bundle.

 * **Returns:** The bundle.

## `public void setBundle(String bundle)`

Set the bundle.

 * **Parameters:** `bundle` — The bundle.

## `public String getTrunkTransaction()`

Get the trunk transaction.

 * **Returns:** The trunk transaction.

## `public void setTrunkTransaction(String trunkTransaction)`

Set the trunk transaction.

 * **Parameters:** `trunkTransaction` — The trunk transaction.

## `public String getBranchTransaction()`

Get the branch transaction.

 * **Returns:** The branch transaction.

## `public void setBranchTransaction(String branchTransaction)`

Set the branch transaction.

 * **Parameters:** `branchTransaction` — The branch transaction.

## `public String getNonce()`

Get the nonce.

 * **Returns:** The nonce.

## `public void setNonce(String nonce)`

Set the nonce.

 * **Parameters:** `nonce` — The trunk nonce.

## `public Boolean getPersistence()`

Get the persistence.

 * **Returns:** The persistence.

## `public void setPersistence(Boolean persistence)`

Set the persistence.

 * **Parameters:** `persistence` — The persistence.

## `public String toTrytes()`

Converts the transaction to the corresponding trytes representation

## `public void transactionObject(final String trytes)`

Initializes a new instance of the Signature class.
