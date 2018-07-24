# jota.dto.request.IotaStoreTransactionsRequest

## `public class IotaStoreTransactionsRequest extends IotaCommandRequest`

This class represents the core API request 'getTransactionsToApprove' It stores transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.

## `private IotaStoreTransactionsRequest(final String... trytes)`

Initializes a new instance of the IotaStoreTransactionsRequest class.

## `public static IotaStoreTransactionsRequest createStoreTransactionsRequest(final String... trytes)`

Create a new instance of the IotaStoreTransactionsRequest class.

## `public String[] getTrytes()`

Gets the trytes.

 * **Returns:** The trytes.

## `public void setTrytes(String[] trytes)`

Sets the trytes.

 * **Parameters:** `trytes` — The trytes.
