# jota.dto.request.IotaBroadcastTransactionRequest

## `public class IotaBroadcastTransactionRequest extends IotaCommandRequest`

Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle

## `private IotaBroadcastTransactionRequest(final String... trytes)`

Initializes a new instance of the IotaBroadcastTransactionRequest class.

## `public static IotaBroadcastTransactionRequest createBroadcastTransactionsRequest(final String... trytes)`

Initializes a new instance of the IotaBroadcastTransactionRequest class.

## `public String[] getTrytes()`

Gets the trytes.

 * **Returns:** The trytes.

## `public void setTrytes(String[] trytes)`

Sets the trytes.

 * **Parameters:** `trytes` — The trytes.
