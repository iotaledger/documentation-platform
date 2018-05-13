# Utils.Checksum
## AddChecksum Method 
 

Adds the checksum to the specified address



### Syntax


```cs
public static string AddChecksum(
	string address
)
```


#### Parameters
&nbsp;<dl><dt>address</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />An address without checksum</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The address with the appended checksum

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="T_Iota_Lib_CSharp_Api_Exception_InvalidAddressException">InvalidAddressException</a></td><td>is thrown when an invalid address is provided</td></tr></table>


## IsValidChecksum Method 
 

Determines whether the specified address with checksum has a valid checksum.



### Syntax


```cs
public static bool IsValidChecksum(
	this string addressWithChecksum
)
```


#### Parameters
&nbsp;<dl><dt>addressWithChecksum</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The address with checksum.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a><br />`true` if the specified address with checksum has a valid checksum [the specified address with checksum]; otherwise, `false`.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="http://msdn.microsoft.com/en-us/library/bb384936.aspx">Extension Methods (Visual Basic)</a> or <a href="http://msdn.microsoft.com/en-us/library/bb383977.aspx">Extension Methods (C# Programming Guide)</a>.


## RemoveChecksum Method 
 

Removes the checksum from the specified address with checksum



### Syntax


```cs
public static string RemoveChecksum(
	this string addressWithChecksum
)
```


#### Parameters
&nbsp;<dl><dt>addressWithChecksum</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The address with checksum.</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />the specified address without checksum

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="http://msdn.microsoft.com/en-us/library/bb384936.aspx">Extension Methods (Visual Basic)</a> or <a href="http://msdn.microsoft.com/en-us/library/bb383977.aspx">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="T_Iota_Lib_CSharp_Api_Exception_InvalidAddressException">InvalidAddressException</a></td><td>is thrown when the specified address is not an address with checksum</td></tr></table>


