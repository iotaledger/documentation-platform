# IotaApi
## Constructor (String, Int32, ICurl)
 

Creates an api object that uses the specified connection settings to connect to a node



### Syntax


```cs
public IotaApi(
	string host,
	int port,
	ICurl curl
)
```


#### Parameters
&nbsp;<dl><dt>host</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />hostname or API address of a node to interact with</dd><dt>port</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />tcp/udp port</dd><dt>curl</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">Iota.Lib.CSharp.Api.Utils.ICurl</a><br />a custom curl implementation to be used to perform the pow. Use the other constructor in order to use the default curl implementation provided by the library</dd></dl>


## Constructor (String, Int32)
 

Creates an api object that uses the specified connection settings to connect to a node



### Syntax


```cs
public IotaApi(
	string host,
	int port
)
```


#### Parameters
&nbsp;<dl><dt>host</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />hostname or API address of a node to interact with</dd><dt>port</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />tcp/udp port</dd></dl>


## BroadcastAndStore Method 
 

Wrapper function that broadcasts and stores the specified trytes



### Syntax


```cs
public void BroadcastAndStore(
	List<string> trytes
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />trytes</dd></dl>


## FindTransactionObjectsByBundle Method 
 

Finds the transaction objects by bundle.



### Syntax


```cs
public List<Transaction> FindTransactionObjectsByBundle(
	string[] bundles
)
```


#### Parameters
&nbsp;<dl><dt>bundles</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The bundles.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">List</a>(<a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a>)<br />a list of Transaction objects


## FindTransactionObjects Method 
 

Finds the transaction objects.



### Syntax


```cs
public List<Transaction> FindTransactionObjects(
	string[] adresses
)
```


#### Parameters
&nbsp;<dl><dt>adresses</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The adresses.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">List</a>(<a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a>)<br />a list of transactions


## FindTransactionsByAddresses Method 
 

Finds the transactions by addresses.



### Syntax


```cs
public FindTransactionsResponse FindTransactionsByAddresses(
	params string[] addresses
)
```


#### Parameters
&nbsp;<dl><dt>addresses</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The addresses.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a><br />a FindTransactionsResponse containing the transactions, see <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a>


## FindTransactionsByApprovees Method 
 

Finds the transactions by approvees.



### Syntax


```cs
public FindTransactionsResponse FindTransactionsByApprovees(
	params string[] approvees
)
```


#### Parameters
&nbsp;<dl><dt>approvees</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The approvees.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a><br />a FindTransactionsResponse containing the transactions, see <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a>


## FindTransactionsByBundles Method 
 

Finds the transactions by bundles.



### Syntax


```cs
public FindTransactionsResponse FindTransactionsByBundles(
	params string[] bundles
)
```


#### Parameters
&nbsp;<dl><dt>bundles</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The bundles.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a><br />a FindTransactionsResponse containing the transactions, see <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a>


## FindTransactionsByDigests Method 
 

Finds the transactions by digests.



### Syntax


```cs
public FindTransactionsResponse FindTransactionsByDigests(
	params string[] bundles
)
```


#### Parameters
&nbsp;<dl><dt>bundles</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The bundles.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a><br />a FindTransactionsResponse containing the transactions, see <a href="T_Iota_Lib_CSharp_Api_Core_FindTransactionsResponse">FindTransactionsResponse</a>


## GetBundle Method 
 

This function returns the bundle which is associated with a transaction. Input can by any type of transaction (tail and non-tail). If there are conflicting bundles (because of a replay for example) it will return multiple bundles. It also does important validation checking (signatures, sum, order) to ensure that the correct bundle is returned.



### Syntax


```cs
public Bundle GetBundle(
	string transaction
)
```


#### Parameters
&nbsp;<dl><dt>transaction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />the transaction encoded in trytes</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Model_Bundle">Bundle</a><br />an array of bundle, if there are multiple arrays it means that there are conflicting bundles.


## GetInputs Method 
 

Gets all possible inputs of a seed and returns them with the total balance. This is either done deterministically (by genearating all addresses until findTransactions is empty and doing getBalances), or by providing a key range to use for searching through.



### Syntax


```cs
public Inputs GetInputs(
	string seed,
	int start,
	int end,
	long threshold = 100
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />tryte-encoded seed. It should be noted that this seed is not transferred</dd><dt>start</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />Starting key index</dd><dt>end</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />Ending key index</dd><dt>threshold (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">System.Int64</a><br />The minimum threshold of accumulated balances from the inputs that is required</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Model_Inputs">Inputs</a><br />The inputs (see <a href="T_Iota_Lib_CSharp_Api_Model_Input">Input</a>)


## GetLatestInclusion Method 
 

Gets the latest inclusion.



### Syntax


```cs
public GetInclusionStatesResponse GetLatestInclusion(
	string[] hashes
)
```


#### Parameters
&nbsp;<dl><dt>hashes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The hashes.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Core_GetInclusionStatesResponse">GetInclusionStatesResponse</a><br />a GetInclusionStatesResponse cotaining the inclusion state of the specified hashes


## GetNewAddress Method 
 

Generates a new address from a seed and returns the remainderAddress. This is either done deterministically, or by providing the index of the new remainderAddress



### Syntax


```cs
public string[] GetNewAddress(
	string seed,
	int index = 0,
	bool checksum = false,
	int total = 0,
	bool returnAll = false
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />Tryte-encoded seed. It should be noted that this seed is not transferred</dd><dt>index (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />Optional (default null). Key index to start search from. If the index is provided, the generation of the address is not deterministic.</dd><dt>checksum (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">System.Boolean</a><br />Optional (default false). Adds 9-tryte address checksum</dd><dt>total (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />Optional (default 1)Total number of addresses to generate.</dd><dt>returnAll (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">System.Boolean</a><br />If true, it returns all addresses which were deterministically generated (until findTransactions returns null)</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>[]<br />an array of strings with the specifed number of addresses


## GetTransactionsObjects Method 
 

Gets the transactions objects.



### Syntax


```cs
public List<Transaction> GetTransactionsObjects(
	string[] hashes
)
```


#### Parameters
&nbsp;<dl><dt>hashes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The hashes in trytes</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">List</a>(<a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a>)<br />a list of transactions


## GetTransfers Method 
 

Gets the transfers which are associated with a seed. The transfers are determined by either calculating deterministically which addresses were already used, or by providing a list of indexes to get the transfers from.



### Syntax


```cs
public Bundle[] GetTransfers(
	string seed,
	Nullable<int> start,
	Nullable<int> end,
	bool inclusionStates = false
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />tryte-encoded seed. It should be noted that this seed is not transferred</dd><dt>start</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/b3h38hb0" target="_blank">System.Nullable</a>(<a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>)<br />the address start index</dd><dt>end</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/b3h38hb0" target="_blank">System.Nullable</a>(<a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>)<br />the address end index</dd><dt>inclusionStates (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">System.Boolean</a><br />If True, it gets the inclusion states of the transfers.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Model_Bundle">Bundle</a>[]<br />An Array of Bundle object that represent the transfers


## PrepareTransfers Method 
 

Main purpose of this function is to get an array of transfer objects as input, and then prepare the transfer by generating the correct bundle, as well as choosing and signing the inputs if necessary (if it's a value transfer). The output of this function is an array of the raw transaction data (trytes)



### Syntax


```cs
public List<string> PrepareTransfers(
	string seed,
	Transfer[] transfers,
	List<Input> inputs = null,
	string remainderAddress = null
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />81-tryte encoded address of recipient</dd><dt>transfers</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Model_Transfer">Iota.Lib.CSharp.Api.Model.Transfer</a>[]<br />the transfers to prepare</dd><dt>inputs (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="T_Iota_Lib_CSharp_Api_Model_Input">Input</a>)<br />Optional (default null). The inputs</dd><dt>remainderAddress (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />Optional (default null). if defined, this address will be used for sending the remainder value (of the inputs) to.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />a list containing the trytes of the new bundle


## ReplayBundle Method 
 

Replays the bundle.



### Syntax


```cs
public bool[] ReplayBundle(
	string transaction,
	int depth,
	int minWeightMagnitude
)
```


#### Parameters
&nbsp;<dl><dt>transaction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The transaction.</dd><dt>depth</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The depth.</dd><dt>minWeightMagnitude</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The minimum weight magnitude.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a>[]<br />an array of boolean that indicate which transactions have been replayed successfully


## SendTransfer Method 
 

Wrapper function that basically does prepareTransfers, as well as attachToTangle and finally, it broadcasts and stores the transactions locally.



### Syntax


```cs
public bool[] SendTransfer(
	string seed,
	int depth,
	int minWeightMagnitude,
	Transfer[] transfers,
	Input[] inputs = null,
	string address = null
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />tryte-encoded seed</dd><dt>depth</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />depth</dd><dt>minWeightMagnitude</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The minimum weight magnitude</dd><dt>transfers</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Model_Transfer">Iota.Lib.CSharp.Api.Model.Transfer</a>[]<br />Array of transfer objects</dd><dt>inputs (Optional)</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Model_Input">Iota.Lib.CSharp.Api.Model.Input</a>[]<br />Optional (default null). List of inputs used for funding the transfer</dd><dt>address (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />Optional (default null). If defined, this address will be used for sending the remainder value (of the inputs) to</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a>[]<br />an array of the boolean that indicates which Transactions where sent successully


## SendTrytes Method 
 

Sends the trytes.



### Syntax


```cs
public Transaction[] SendTrytes(
	string[] trytes,
	int depth,
	int minWeightMagnitude = 18
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The trytes.</dd><dt>depth</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The depth.</dd><dt>minWeightMagnitude (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />Optional (default 18). The minimum weight magnitude.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a>[]<br />an Array of Transactions


