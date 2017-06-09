# Model.Transaction
## Constructor (String)
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a> class.



### Syntax


```cs
public Transaction(
	string trytes
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trytes representing the transaction</dd></dl>


## Constructor (String, ICurl)
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a> class.



### Syntax


```cs
public Transaction(
	string trytes,
	ICurl curl
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trytes representing the transaction</dd><dt>curl</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">Iota.Lib.CSharp.Api.Utils.ICurl</a><br />The curl implementation.</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="http://msdn2.microsoft.com/en-us/library/3w1b3114" target="_blank">ArgumentException</a></td><td>trytes must non-null or position " + i + "must not be '9'</td></tr></table>


## Constructor (String, String, String, String)
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a> class.



### Syntax


```cs
public Transaction(
	string address,
	string value,
	string tag,
	string timestamp
)
```


#### Parameters
&nbsp;<dl><dt>address</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The address.</dd><dt>value</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The value.</dd><dt>tag</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The tag.</dd><dt>timestamp</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The timestamp.</dd></dl>


## Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a> class.



### Syntax


```cs
public Transaction()
```



## ToString Method 
 

Returns a <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.



### Syntax


```cs
public override string ToString()
```


#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />A <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.


## ToTransactionTrytes Method 
 

Converts the transaction to the corresponding trytes representation



### Syntax


```cs
public string ToTransactionTrytes()
```


#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />


## Address Property 
 

Gets or sets the address.



### Syntax


```cs
public string Address { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The address.


## BranchTransaction Property 
 

Gets or sets the branch transaction.



### Syntax


```cs
public string BranchTransaction { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The branch transaction.


## Bundle Property 
 

Gets or sets the bundle.



### Syntax


```cs
public string Bundle { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The bundle.


## CurrentIndex Property 
 

Gets or sets the index of the current.



### Syntax


```cs
public string CurrentIndex { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The index of the current.


## Digest Property 
 

Gets or sets the digest.



### Syntax


```cs
public string Digest { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The digest.


## Hash Property 
 

Gets or sets the hash.



### Syntax


```cs
public string Hash { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The hash.


## Index Property 
 

Gets or sets the index.



### Syntax


```cs
public int Index { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a><br />The index.


## LastIndex Property 
 

Gets or sets the last index.



### Syntax


```cs
public string LastIndex { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The last index.


## Nonce Property 
 

Gets or sets the nonce.



### Syntax


```cs
public string Nonce { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The nonce.


## Persistance Property 
 

Gets or sets a value indicating whether this <a href="T_Iota_Lib_CSharp_Api_Model_Transaction">Transaction</a> is persistance.



### Syntax


```cs
public bool Persistance { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if persistance; otherwise, `false`.


## SignatureFragment Property 
 

Gets or sets the signature fragment.



### Syntax


```cs
public string SignatureFragment { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The signature fragment.


## SignatureMessageChunk Property 
 

Gets or sets the signature message chunk.



### Syntax


```cs
public string SignatureMessageChunk { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The signature message chunk.


## Tag Property 
 

Gets or sets the tag.



### Syntax


```cs
public string Tag { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The tag.


## Timestamp Property 
 

Gets or sets the timestamp.



### Syntax


```cs
public string Timestamp { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The timestamp.


## TrunkTransaction Property 
 

Gets or sets the trunk transaction.



### Syntax


```cs
public string TrunkTransaction { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The trunk transaction.


## Type Property 
 

Gets or sets the type.



### Syntax


```cs
public string Type { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The type.


## Value Property 
 

Gets or sets the value.



### Syntax


```cs
public string Value { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The value.


