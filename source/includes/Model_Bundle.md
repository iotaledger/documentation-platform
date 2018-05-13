# Model.Bundle
## Constructor (List(Transaction), Int32)
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Model_Bundle">Bundle</a> class.



### Syntax


```cs
public Bundle(
	List<Transaction> transactions,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>transactions</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a>)<br />The transactions.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>


## Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Model_Bundle">Bundle</a> class without transactions.



### Syntax


```cs
public Bundle()
```


## AddEntry Method 
 

Adds a bundle entry



### Syntax


```cs
public void AddEntry(
	int signatureMessageLength,
	string address,
	long value,
	string tag,
	long timestamp
)
```


#### Parameters
&nbsp;<dl><dt>signatureMessageLength</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />Length of the signature message.</dd><dt>address</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The address.</dd><dt>value</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">System.Int64</a><br />The value.</dd><dt>tag</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The tag.</dd><dt>timestamp</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">System.Int64</a><br />The timestamp.</dd></dl>


## AddTrytes Method 
 

Adds the trytes.



### Syntax


```cs
public void AddTrytes(
	List<string> signatureFragments
)
```


#### Parameters
&nbsp;<dl><dt>signatureFragments</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">System.Collections.Generic.List</a>(<a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>)<br />The signature fragments.</dd></dl>


## CompareTo Method 
 

Compares the current object with another object of the same type.



### Syntax


```cs
public int CompareTo(
	Bundle other
)
```


#### Parameters
&nbsp;<dl><dt>other</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Model_Bundle">Iota.Lib.CSharp.Api.Model.Bundle</a><br />An object to compare with this object.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a><br />A value that indicates the relative order of the objects being compared. The return value has the following meanings: Value Meaning Less than zero This object is less than the *other* parameter.Zero This object is equal to *other*. Greater than zero This object is greater than *other*.

#### Implements
<a href="http://msdn2.microsoft.com/en-us/library/43hc6wht" target="_blank">IComparable(T).CompareTo(T)</a><br />



## FinalizeBundle Method (ICurl)
 

Finalizes the bundle using the specified curl implementation



### Syntax


```cs
public void FinalizeBundle(
	ICurl customCurl
)
```


#### Parameters
&nbsp;<dl><dt>customCurl</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">Iota.Lib.CSharp.Api.Utils.ICurl</a><br />The custom curl.</dd></dl>


## FinalizeBundle Method 
 

Finalizes the bundle.



### Syntax


```cs
public void FinalizeBundle()
```



## NormalizedBundle Method 
 

Normalizeds the bundle.



### Syntax


```cs
public int[] NormalizedBundle(
	string bundleHash
)
```


#### Parameters
&nbsp;<dl><dt>bundleHash</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The bundle hash.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />


## ToString Method 
 

Returns a <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.



### Syntax


```cs
public override string ToString()
```


#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />A <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.


## Item Property 
 

Gets the <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a> at the specified index.



### Syntax


```cs
public Transaction this[
	int index
] { get; }
```


#### Parameters
&nbsp;<dl><dt>index</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The index.</dd></dl>

#### Property Value
Type: <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a><br />The <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a>.

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a><br />


## Length Property 
 

Gets or sets the length of the bundle



### Syntax


```cs
public int Length { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a><br />The length.


## Transactions Property 
 

Gets or sets the transactions.



### Syntax


```cs
public List<Transaction> Transactions { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6sh2ey19" target="_blank">List</a>(<a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a>)<br />The transactions.


