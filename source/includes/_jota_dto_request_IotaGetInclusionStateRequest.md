# jota.dto.request.IotaGetInclusionStateRequest

## `public class IotaGetInclusionStateRequest extends IotaCommandRequest`

This class represents the core API request 'getInclusionStates'

## `private IotaGetInclusionStateRequest(final String[] transactions, final String[] tips)`

Initializes a new instance of the IotaGetInclusionStateRequest class.

## `public static IotaGetInclusionStateRequest createGetInclusionStateRequest(String[] transactions, String[] tips)`

Create a new instance of the IotaGetInclusionStateRequest class.

## `public static IotaGetInclusionStateRequest createGetInclusionStateRequest(Collection<String> transactions, Collection<String> tips)`

Create a new instance of the IotaGetInclusionStateRequest class.

## `public String[] getTransactions()`

Gets the transactions.

 * **Returns:** The transactions.

## `public void setTransactions(String[] transactions)`

Sets the transactions.

 * **Parameters:** `transactions` — The transactions.

## `public String[] getTips()`

Gets the tips.

 * **Returns:** The tips.

## `public void setTips(String[] tips)`

Sets the tips.

 * **Parameters:** `tips` — The tips.
