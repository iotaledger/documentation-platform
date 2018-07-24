# jota.dto.request.IotaAttachToTangleRequest

## `public class IotaAttachToTangleRequest extends IotaCommandRequest`

This class represents the core API request 'attachToTangle'. It is used to attach trytes to the tangle.

## `private IotaAttachToTangleRequest(final String trunkTransaction, final String branchTransaction, final Integer minWeightMagnitude, final String... trytes)`

Initializes a new instance of the IotaAttachedToTangleRequest class.

## `public static IotaAttachToTangleRequest createAttachToTangleRequest(final String trunkTransaction, final String branchTransaction, final Integer minWeightMagnitude, final String... trytes)`

Create a new instance of the IotaAttachedToTangleRequest class.

## `public String getTrunkTransaction()`

Gets the trunk transaction.

 * **Returns:** The trunk transaction.

## `public void setTrunkTransaction(String trunkTransaction)`

Sets the trunk transaction.

 * **Parameters:** `trunkTransaction` — The trunk transaction.

## `public String getBranchTransaction()`

Gets the branch transaction.

 * **Returns:** The branch transaction.

## `public void setBranchTransaction(String branchTransaction)`

Sets the branch transaction.

 * **Parameters:** `branchTransaction` — the branch transaction.

## `public Integer getMinWeightMagnitude()`

Gets the min weight magnitude.

 * **Returns:** The min weight magnitude.

## `public void setMinWeightMagnitude(Integer minWeightMagnitude)`

Sets the min weight magnitude.

 * **Parameters:** `minWeightMagnitude` — The min weight magnitude.

## `public String[] getTrytes()`

Gets the trytes.

 * **Returns:** The trytes.

## `public void setTrytes(String[] trytes)`

Sets the trytes.

 * **Parameters:** `trytes` — The trytes.
