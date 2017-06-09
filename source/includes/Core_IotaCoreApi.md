# Core.IotaCoreApi 
## AddNeighbors Method 
 

Adds the neighbor(s) to the node. It should be noted that this is only temporary, and the added neighbors will be removed from your set of neighbors after you relaunch IRI.



### Syntax


```cs
public AddNeighborsResponse AddNeighbors(
	params string[] uris
)
```


#### Parameters
&nbsp;<dl><dt>uris</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The uris of the neighbors to add. The URI (Unique Resource Identification) format is "udp://IPADDRESS:PORT"</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_AddNeighborsResponse">AddNeighborsResponse</a><br /><a href="T_Iota_Lib_CSharp_Api_Core_AddNeighborsResponse">AddNeighborsResponse</a> containing the number of added Neighbors


## AttachToTangle Method 
 

Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.



### Syntax


```cs
public AttachToTangleResponse AttachToTangle(
	string trunkTransaction,
	string branchTransaction,
	string[] trytes,
	int minWeightMagnitude = 18
)
```


#### Parameters
&nbsp;<dl><dt>trunkTransaction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />Trunk transaction to approve.</dd><dt>branchTransaction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />Branch transaction to approve.</dd><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />List of trytes (raw transaction data) to attach to the tangle.</dd><dt>minWeightMagnitude (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />Proof of Work intensity. Minimum value is 18</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_AttachToTangleResponse">AttachToTangleResponse</a><br />The returned value contains a different set of tryte values which you can input into broadcastTransactions and storeTransactions. The returned tryte value, the last 243 trytes basically consist of the: trunkTransaction + branchTransaction + nonce. These are valid trytes which are then accepted by the network.


## BroadcastTransactions Method 
 

Broadcasts the transactions.



### Syntax


```cs
public BroadcastTransactionsResponse BroadcastTransactions(
	List<string> trytes
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The transactions in trytes representation</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_BroadcastTransactionsResponse">BroadcastTransactionsResponse</a><br />the BroadcastTransactionsResponse <a href="T_Iota_Lib_CSharp_Api_Core_BroadcastTransactionsResponse">BroadcastTransactionsResponse</a>


## IotaCoreApi Constructor 
 

Creates a core api object that uses the specified connection settings to connect to a node



### Syntax


```cs
public IotaCoreApi(
	string host,
	int port
)
```


#### Parameters
&nbsp;<dl><dt>host</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />hostname or API address of a node to interact with</dd><dt>port</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />tcp/udp port</dd></dl>


## FindTransactions Method 
 

Finds the transactions using the specified arguments as search criteria



### Syntax


```cs
public FindTransactionsResponse FindTransactions(
	List<string> addresses,
	List<string> tags,
	List<string> approves,
	List<string> bundles
)
```


#### Parameters
&nbsp;<dl><dt>addresses</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The addresses.</dd><dt>tags</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The tags.</dd><dt>approves</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The approves.</dd><dt>bundles</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The bundles.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a><br />a FindTransactionsResponse, see <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a>


## GetBalances Method 
 

Gets the balances.



### Syntax


```cs
public GetBalancesResponse GetBalances(
	List<string> addresses,
	long threshold = 100
)
```


#### Parameters
&nbsp;<dl><dt>addresses</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The addresses.</dd><dt>threshold (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">System.Int64</a><br />The threshold.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetBalancesResponse">GetBalancesResponse</a><br />It returns the confirmed balance which a list of addresses have at the latest confirmed milestone. In addition to the balances, it also returns the milestone as well as the index with which the confirmed balance was determined. The balances is returned as a list in the same order as the addresses were provided as input.


## GetInclusionStates Method 
 

Gets the inclusion states of the specified transactions



### Syntax


```cs
public GetInclusionStatesResponse GetInclusionStates(
	string[] transactions,
	string[] milestones
)
```


#### Parameters
&nbsp;<dl><dt>transactions</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The transactions.</dd><dt>milestones</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The milestones.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetInclusionStatesResponse">GetInclusionStatesResponse</a><br />a GetInclusionStatesResponse, see <a href="T_Iota_Lib_CSharp_Api_Core_GetInclusionStatesResponse">GetInclusionStatesResponse</a>


## GetNeighbors Method 
 

Gets the neighbors the node is connected to



### Syntax


```cs
public GetNeighborsResponse GetNeighbors()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetNeighborsResponse">GetNeighborsResponse</a><br />A <a href="T_Iota_Lib_CSharp_Api_Core_GetNeighborsResponse">GetNeighborsResponse</a> containing the set of neighbors the node is connected to as well as their activity count. The activity counter is reset after restarting IRI.


## GetNodeInfo Method 
 

Gets the node information.



### Syntax


```cs
public GetNodeInfoResponse GetNodeInfo()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetNodeInfoResponse">GetNodeInfoResponse</a><br />a <a href="T_Iota_Lib_CSharp_Api_Core_GetNodeInfoResponse">GetNodeInfoResponse</a> containing information about the node.


## GetTips Method 
 

Gets the tips.



### Syntax


```cs
public GetTipsResponse GetTips()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetTipsResponse">GetTipsResponse</a><br />a <a href="T_Iota_Lib_CSharp_Api_Core_GetTipsResponse">GetTipsResponse</a> containing a list of tips


## GetTransactionsToApprove Method 
 

Gets the transactions to approve.



### Syntax


```cs
public GetTransactionsToApproveResponse GetTransactionsToApprove(
	int depth
)
```


#### Parameters
&nbsp;<dl><dt>depth</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The depth is the number of bundles to go back to determine the transactions for approval. The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetTransactionsToApproveResponse">GetTransactionsToApproveResponse</a><br />trunkTransaction and branchTransaction (result of the Tip selection)


## GetTrytes Method 
 

Gets the raw transaction data (trytes) of a specific transaction. These trytes can then be easily converted into the actual transaction object using the constructor of Transaction



### Syntax


```cs
public GetTrytesResponse GetTrytes(
	params string[] hashes
)
```


#### Parameters
&nbsp;<dl><dt>hashes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The hashes of the transactions</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetTrytesResponse">GetTrytesResponse</a><br />a <a href="T_Iota_Lib_CSharp_Api_Core_GetTrytesResponse">GetTrytesResponse</a> containing a list of trytes


## InterruptAttachingToTangle Method 
 

Interrupts and completely aborts the attachToTangle process.



### Syntax


```cs
public InterruptAttachingToTangleResponse InterruptAttachingToTangle()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_InterruptAttachingToTangleResponse">InterruptAttachingToTangleResponse</a><br />an <a href="T_Iota_Lib_CSharp_Api_Core_InterruptAttachingToTangleResponse">InterruptAttachingToTangleResponse</a>


## RemoveNeighbors Method 
 

Removes the neighbor(s) from the node.



### Syntax


```cs
public RemoveNeighborsResponse RemoveNeighbors(
	params string[] uris
)
```


#### Parameters
&nbsp;<dl><dt>uris</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The uris of the neighbors to add. The URI (Unique Resource Identification) format is "udp://IPADDRESS:PORT"</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_RemoveNeighborsResponse">RemoveNeighborsResponse</a><br />A <a href="T_Iota_Lib_CSharp_Api_Core_RemoveNeighborsResponse">RemoveNeighborsResponse</a> containing the number of removed neighbors


## StoreTransactions Method 
 

Stores the specified transactions in trytes into the local storage. The trytes to be used for this call are returned by attachToTangle.



### Syntax


```cs
public StoreTransactionsResponse StoreTransactions(
	List<string> trytes
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The trytes representing the transactions</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_StoreTransactionsResponse">StoreTransactionsResponse</a><br />a <a href="T_Iota_Lib_CSharp_Api_Core_StoreTransactionsResponse">StoreTransactionsResponse</a>


