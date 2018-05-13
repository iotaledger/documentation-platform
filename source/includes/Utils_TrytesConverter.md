# Utils.TrytesConverter
## Constructor 
 
Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Utils_TrytesConverter">TrytesConverter</a> class

### Syntax

```cs
public TrytesConverter()
```

## ToString Method 
 
Converts the specified tryte encoded String to ASCII

### Syntax
```cs
public static string ToString(
	string inputTrytes
)
```
#### Parameters
&nbsp;<dl><dt>inputTrytes</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />tryte encoded string</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />an ASCII encoded string

## ToTrytes Method 

Converts the ASCII encoded string to trytes

### Syntax
```cs
public static string ToTrytes(
	string inputString
)
```

#### Parameters
&nbsp;<dl><dt>inputString</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />ASCII encoded string</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />tryte encoded string
