# Core.AttachToTangleRequest
## AttachToTangleRequest Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Core_AttachToTangleRequest">AttachToTangleRequest</a> class.



### Syntax


```cs
public AttachToTangleRequest(
	string trunkTransaction,
	string branchTransaction,
	string[] trytes,
	int minWeightMagnitude = 18
)
```


#### Parameters
&nbsp;<dl><dt>trunkTransaction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trunk transaction.</dd><dt>branchTransaction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The branch transaction.</dd><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />The trytes.</dd><dt>minWeightMagnitude (Optional)</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The minimum weight magnitude.</dd></dl>


## AttachToTangleRequest.ToString Method 
 

Returns a <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.



### Syntax


```cs
public override string ToString()
```


#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />A <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.


## AttachToTangleRequest.BranchTransaction Property 
 

Branch transaction to approve.



### Syntax


```cs
public string BranchTransaction { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>


## AttachToTangleRequest.MinWeightMagnitude Property 
 

Proof of Work intensity. Minimum value is 18



### Syntax


```cs
public int MinWeightMagnitude { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>


## AttachToTangleRequest.TrunkTransaction Property 
 

Trunk transaction to approve.



### Syntax


```cs
public string TrunkTransaction { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>


## AttachToTangleRequest.Trytes Property 
 

List of trytes (raw transaction data) to attach to the tangle.



### Syntax


```cs
public string[] Trytes { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>[]


