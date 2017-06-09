# Utils.ICurl
## Absorb Method (Int32[], Int32, Int32)
 

Absorbs the specified trits.



### Syntax


```cs
ICurl Absorb(
	int[] trits,
	int offset,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset to start from.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)


## Absorb Method (Int32[])
 

Absorbs the specified trits.



### Syntax


```cs
ICurl Absorb(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)


## Clone Method 
 

Clones this instance.



### Syntax


```cs
ICurl Clone()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />


## Reset Method 
 

Resets this state.



### Syntax


```cs
ICurl Reset()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)


## Squeeze Method (Int32[], Int32, Int32)
 

Squeezes the specified trits.



### Syntax


```cs
int[] Squeeze(
	int[] trits,
	int offset,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset to start from.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />the squeezed trits


## Squeeze Method (Int32[])
 

Squeezes the specified trits.



### Syntax


```cs
int[] Squeeze(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />the squeezed trits


## Transform Method 
 

Transforms this instance.



### Syntax


```cs
ICurl Transform()
```


#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">ICurl</a><br />the ICurl instance (used for method chaining)


## State Property 
 

Gets or sets the state.



### Syntax


```cs
int[] State { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />The state.


