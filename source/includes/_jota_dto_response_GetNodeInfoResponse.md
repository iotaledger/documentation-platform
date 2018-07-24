# jota.dto.response.GetNodeInfoResponse

## `public class GetNodeInfoResponse extends AbstractResponse`

Response of {@link jota.dto.request.IotaNeighborsRequest}

## `public String getAppName()`

Name of the IOTA software you're currently using (IRI stands for Initial Reference Implementation).

 * **Returns:** appName

## `public String getAppVersion()`

The version of the IOTA software you're currently running.

 * **Returns:** The version of the IOTA software you're currently running.

## `public String getJreVersion()`

The version of running java version.

 * **Returns:** The version of running java version.

## `public Integer getJreAvailableProcessors()`

Available cores on your machine for JRE.

 * **Returns:** Available cores on your machine for JRE.

## `public long getJreFreeMemory()`

The amount of free memory in the Java Virtual Machine.

 * **Returns:** The amount of free memory in the Java Virtual Machine.

## `public long getJreMaxMemory()`

The maximum amount of memory that the Java virtual machine will attempt to use.

 * **Returns:** The maximum amount of memory that the Java virtual machine will attempt to use.

## `public long getJreTotalMemory()`

The total amount of memory in the Java virtual machine.

 * **Returns:** The total amount of memory in the Java virtual machine.

## `public String getLatestMilestone()`

Latest milestone that was signed off by the coordinator.

 * **Returns:** Latest milestone that was signed off by the coordinator.

## `public int getLatestMilestoneIndex()`

Index of the latest milestone.

 * **Returns:** Index of the latest milestone.

## `public String getLatestSolidSubtangleMilestone()`

The latest milestone which is solid and is used for sending transactions. For a milestone to become solid your local node must basically approve the subtangle of coordinator-approved transactions, and have a consistent view of all referenced transactions.

 * **Returns:** The latest milestone which is solid and is used for sending transactions.

## `public int getLatestSolidSubtangleMilestoneIndex()`

Index of the latest solid subtangle.

 * **Returns:** Index of the latest solid subtangle.

## `public int getNeighbors()`

Number of neighbors you are directly connected with.

 * **Returns:** Number of neighbors you are directly connected with.

## `public int getPacketsQueueSize()`

Packets which are currently queued up.

 * **Returns:** Packets which are currently queued up.

## `public Long getTime()`

Current UNIX timestamp.

 * **Returns:** Current UNIX timestamp.

## `public int getTips()`

Number of tips in the network.

 * **Returns:** Number of tips in the network.

## `public int getTransactionsToRequest()`

Transactions to request during syncing process.

 * **Returns:** Transactions to request during syncing process.
