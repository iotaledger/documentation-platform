# Utils.InputValidator
## CheckAddress Method 
 

Checks whether the specified address is an address and throws and exception if the address is invalid



### Syntax


```cs
public static void CheckAddress(
	string address
)
```


#### Parameters
&nbsp;<dl><dt>address</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />address to check</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="T_Iota_Lib_CSharp_Api_Exception_InvalidAddressException">InvalidAddressException</a></td><td>exception which is thrown when the address is invalid</td></tr></table>


## CheckIfArrayOfTrytes Method 
 

Checks if the specified array is an array of trytes. If not an exception is thrown.



### Syntax


```cs
public static void CheckIfArrayOfTrytes(
	string[] trytes
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The trytes.</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="T_Iota_Lib_CSharp_Api_Exception_InvalidTryteException">InvalidTryteException</a></td><td /></tr></table>


## CheckIfValidSeed Method 
 

Checks if the seed is valid. If not, an exception is thrown.



### Syntax


```cs
public static void CheckIfValidSeed(
	string seed
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The seed.</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="T_Iota_Lib_CSharp_Api_Exception_IllegalStateException">IllegalStateException</a></td><td>Invalid Seed: Format not in trytes or Invalid Seed: Seed too long</td></tr></table>


## CheckTransferArray Method 
 

Checks the specified specified transfers are valid. If not, an exception is thrown.



### Syntax


```cs
public static void CheckTransferArray(
	Transfer[] transactionsArray
)
```


#### Parameters
&nbsp;<dl><dt>transactionsArray</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Model_Transfer">Iota.Lib.CSharp.Api.Model.Transfer</a>[]<br />The transactions array.</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="http://msdn2.microsoft.com/en-us/library/c18k6c59" target="_blank">Exception</a></td><td>Not a transfer array</td></tr></table>


## IsAddress Method 
 

Determines whether the specified string is an adrdress.



### Syntax


```cs
public static bool IsAddress(
	string address
)
```


#### Parameters
&nbsp;<dl><dt>address</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The address.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if the specified string is an address; otherwise, `false`.


## IsArrayOfHashes Method 
 

Determines whether the specified array contains only valid hashes



### Syntax


```cs
public static bool IsArrayOfHashes(
	string[] hashes
)
```


#### Parameters
&nbsp;<dl><dt>hashes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The hashes.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` the specified array contains only valid hashes; otherwise, `false`.


## IsArrayOfTrytes Method 
 

Determines whether the specified string array contains only trytes



### Syntax


```cs
public static bool IsArrayOfTrytes(
	string[] trytes,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The trytes.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if the specified array contains only valid trytes otherwise, `false`.


## IsNinesTrytes Method 
 

Determines whether the specified string consist only of '9'.



### Syntax


```cs
public static bool IsNinesTrytes(
	string trytes,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trytes.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if the specified string consist only of '9'; otherwise, `false`.


## IsTransfersCollectionValid Method 
 

Determines whether the specified transfers are valid



### Syntax


```cs
public static bool IsTransfersCollectionValid(
	ICollection<Transfer> transfers
)
```


#### Parameters
&nbsp;<dl><dt>transfers</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/92t2ye13" target="_blank">System.Collections.Generic.ICollection</a>(<a href="T_Iota_Lib_CSharp_Api_Model_Transfer">Transfer</a>)<br />The transfers.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if the specified transfers are valid; otherwise, `false`.


## IsTrytes Method 
 

Determines whether the specified string contains only characters from the trytes alphabet (see <a href="F_Iota_Lib_CSharp_Api_Utils_Constants_TryteAlphabet">TryteAlphabet</a>)



### Syntax


```cs
public static bool IsTrytes(
	string trytes,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trytes.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if the specified trytes are trytes otherwise, `false`.


## IsValidTransfer Method 
 

Determines whether the specified transfer is valid.



### Syntax


```cs
public static bool IsValidTransfer(
	Transfer transfer
)
```


#### Parameters
&nbsp;<dl><dt>transfer</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Model_Transfer">Iota.Lib.CSharp.Api.Model.Transfer</a><br />The transfer.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if the specified transfer is valid; otherwise, `false`.


## IsValue Method 
 

Determines whether the specified string represents an integer value.



### Syntax


```cs
public static bool IsValue(
	string value
)
```


#### Parameters
&nbsp;<dl><dt>value</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The value.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` the specified string represents an integer value; otherwise, `false`.


## PadSeedIfNecessary Method 
 

Pads the seed if necessary.



### Syntax


```cs
public static string PadSeedIfNecessary(
	string seed
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The seed.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />


