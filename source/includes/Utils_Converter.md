# Utils.Converter
## CopyTrits Method (String, Int32[])
 

Copies the trits from the input string into the destination array



### Syntax


```cs
public static int[] CopyTrits(
	string input,
	int[] destination
)
```


#### Parameters
&nbsp;<dl><dt>input</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The input string</dd><dt>destination</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The destination array.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />


## CopyTrits Method (Int64, Int32[], Int32, Int32)
 

Copies the trits in long representation into the destination array



### Syntax


```cs
public static void CopyTrits(
	long value,
	int[] destination,
	int offset,
	int size
)
```


#### Parameters
&nbsp;<dl><dt>value</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">System.Int64</a><br />The value.</dd><dt>destination</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The destination array.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset from which copying is started.</dd><dt>size</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The size.</dd></dl>


## Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Utils_Converter">Converter</a> class



### Syntax


```cs
public Converter()
```



## GetTrits Method 
 

Gets the trits from the specified bytes and stores it into the provided trits array



### Syntax


```cs
public static void GetTrits(
	sbyte[] bytes,
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>bytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/f71b253d" target="_blank">System.SByte</a>[]<br />The bytes.</dd><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>


## Increment Method 
 

Increments the specified trits.



### Syntax


```cs
public static void Increment(
	int[] trits,
	int size
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>size</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The size.</dd></dl>


## ToBytes Method (Int32[], Int32, Int32)
 

Converts the specified trits array to bytes



### Syntax


```cs
public static byte[] ToBytes(
	int[] trits,
	int offset,
	int size
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset to start from.</dd><dt>size</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The size.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/yyb1w04y" target="_blank">Byte</a>[]<br />


## ToBytes Method (Int32[])
 

Converts the specified trits to trytes



### Syntax


```cs
public static byte[] ToBytes(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/yyb1w04y" target="_blank">Byte</a>[]<br />


## ToLongValue Method 
 

Converts the specified trits to its corresponding integer value



### Syntax


```cs
public static long ToLongValue(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a><br />


## ToTrits Method (String, Int32)
 

Converts the specified trinary encoded string into a trits array of the specified length. If the trytes string results in a shorter then specified trits array, then the remainder is padded we zeroes



### Syntax


```cs
public static int[] ToTrits(
	string trytes,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trytes.</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The length.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />a trits array


## ToTrits Method (String)
 

Converts the specified trinary encoded trytes string to trits



### Syntax


```cs
public static int[] ToTrits(
	string trytes
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trytes.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />


## ToTritsString Method 
 

Converts the specified trinary encoded string into trits



### Syntax


```cs
public static int[] ToTritsString(
	string trytes
)
```


#### Parameters
&nbsp;<dl><dt>trytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The trytes.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]<br />


## ToTrytes Method (Int32[], Int32, Int32)
 

Converts the trits array to a trytes string



### Syntax


```cs
public static string ToTrytes(
	int[] trits,
	int offset,
	int size
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset from which copying is started.</dd><dt>size</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The size.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />a trytes string


## ToTrytes Method (Int32[])
 

Converts the trits array to a trytes string



### Syntax


```cs
public static string ToTrytes(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />a trytes string


## ToTryteValue Method 
 

Converts the specified trits array to trytes in integer representation



### Syntax


```cs
public static int ToTryteValue(
	int[] trits,
	int offset
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd><dt>offset</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The offset.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a><br />trytes in integer representation


## ToValue Method 
 

Converts the specified trits to its corresponding integer value



### Syntax


```cs
public static int ToValue(
	int[] trits
)
```


#### Parameters
&nbsp;<dl><dt>trits</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />The trits.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a><br />an integer value representing the corresponding trits


