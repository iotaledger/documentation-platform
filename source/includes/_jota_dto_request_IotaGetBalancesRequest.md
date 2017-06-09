# jota.dto.request.IotaGetBalancesRequest

## `public class IotaGetBalancesRequest extends IotaCommandRequest`

This class represents the core api request 'getBalances'

## `private IotaGetBalancesRequest(final Integer threshold, final String... addresses)`

Initializes a new instance of the IotaGetBalancesRequest class.

## `public static IotaGetBalancesRequest createIotaGetBalancesRequest(final Integer threshold, final String... addresses)`

Create a new instance of the IotaGetBalancesRequest class.

## `public String[] getAddresses()`

Gets the addresses.

 * **Returns:** The addresses.

## `public void setAddresses(String[] addresses)`

Sets the addresses.

 * **Parameters:** `addresses` — The addresses.

## `public Integer getThreshold()`

Gets the threshold.

 * **Returns:** The threshold.

## `public void setThreshold(Integer threshold)`

Sets the threshold.

 * **Parameters:** `threshold` — The threshold.
