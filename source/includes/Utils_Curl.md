# Utils.Curl
## Absorb Method (Int32[], Int32, Int32)
 

Absorbs the specified trits.



### Syntax


```cs
public ICurl Absorb(
	int[] trits,
	int offset,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset to start from.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Utils_ICurl_Absorb_1">ICurl.Absorb(Int32[], Int32, Int32)</a><br />


## Absorb Method (Int32[])
 

Absorbs the specified trits.



### Syntax


```cs
public ICurl Absorb(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Utils_ICurl_Absorb">ICurl.Absorb(Int32[])</a><br />


## Clone Method 
 

Clones this instance.



### Syntax


```cs
public ICurl Clone()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />a new instance

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Utils_ICurl_Clone">ICurl.Clone()</a><br />


## Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Utils_Curl">Curl</a> class



### Syntax


```cs
public Curl()
```



## Reset Method 
 

Resets this state.



### Syntax


```cs
public ICurl Reset()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Utils_ICurl_Reset">ICurl.Reset()</a><br />


## Squeeze Method (Int32[], Int32, Int32)
 

Squeezes the specified trits.



### Syntax


```cs
public int[] Squeeze(
	int[] trits,
	int offset,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset to start from.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />the squeezed trits

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Utils_ICurl_Squeeze_1">ICurl.Squeeze(Int32[], Int32, Int32)</a><br />


## Squeeze Method (Int32[])
 

Squeezes the specified trits.



### Syntax


```cs
public int[] Squeeze(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />the squeezed trits

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Utils_ICurl_Squeeze">ICurl.Squeeze(Int32[])</a><br />


## Transform Method 
 

Transforms this instance.



### Syntax


```cs
public ICurl Transform()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Utils_ICurl_Transform">ICurl.Transform()</a><br />


## State Property 
 

Gets or sets the state.



### Syntax


```cs
public int[] State { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />The state.

#### Implements
<a href="P_Iota_Lib_CSharp_Api_Utils_ICurl_State">ICurl.State</a><br />


