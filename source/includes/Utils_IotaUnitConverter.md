# Utils.IotaUnitConverter 
## ConvertUnits Method 
 

Convert the iota amount



### Syntax


```cs
public static double ConvertUnits(
	long amount,
	IotaUnits fromUnit,
	IotaUnits toUnit
)
```


#### Parameters
&nbsp;<dl><dt>amount</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">System.Int64</a><br />amount</dd><dt>fromUnit</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Utils_IotaUnits">Iota.Lib.CSharp.Api.Utils.IotaUnits</a><br />the source unit e.g. the unit of amount</dd><dt>toUnit</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Utils_IotaUnits">Iota.Lib.CSharp.Api.Utils.IotaUnits</a><br />the target unit</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/643eft0t" target="_blank">Double</a><br />the specified amount in the target unit


## Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Utils_IotaUnitConverter">IotaUnitConverter</a> class



### Syntax


```cs
public IotaUnitConverter()
```



## FindOptimalIotaUnitToDisplay Method 
 

Finds the optimal unit to display the specified amount in



### Syntax


```cs
public static IotaUnits FindOptimalIotaUnitToDisplay(
	long amount
)
```


#### Parameters
&nbsp;<dl><dt>amount</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">System.Int64</a><br />amount</dd></dl>

#### Return Value
Type: <a href="T_Iota_Lib_CSharp_Api_Utils_IotaUnits">IotaUnits</a><br />the optimal IotaUnit


