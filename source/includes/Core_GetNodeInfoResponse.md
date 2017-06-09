# Core.GetNodeInfoResponse
## Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Core_GetNodeInfoResponse">GetNodeInfoResponse</a> class



### Syntax


```cs
public GetNodeInfoResponse()
```



## ToString Method 
 

Returns a <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.



### Syntax


```cs
public override string ToString()
```


#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />A <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a> that represents this instance.


## AppName Property 
 

Name of the IOTA software you're currently using (IRI stands for Initial Reference Implementation).



### Syntax


```cs
public string AppName { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>


## AppVersion Property 
 

The version of the IOTA software you're currently running.



### Syntax


```cs
public string AppVersion { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>


## JreAvailableProcessors Property 
 

Available cores on your machine for JRE.



### Syntax


```cs
public int JreAvailableProcessors { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>


## JreFreeMemory Property 
 

The amount of free memory in the Java Virtual Machine.



### Syntax


```cs
public long JreFreeMemory { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## JreMaxMemory Property 
 

The maximum amount of memory that the Java virtual machine will attempt to use.



### Syntax


```cs
public long JreMaxMemory { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## JreTotalMemory Property 
 

The total amount of memory in the Java virtual machine.



### Syntax


```cs
public long JreTotalMemory { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## JreVersion Property 
 

java runtime environment version.



### Syntax


```cs
public string JreVersion { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The jre version.


## LatestMilestoneIndex Property 
 

Index of the latest milestone.



### Syntax


```cs
public long LatestMilestoneIndex { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## LatestMilestone Property 
 

Latest milestone that was signed off by the coordinator.



### Syntax


```cs
public string LatestMilestone { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>


## LatestSolidSubtangleMilestoneIndex Property 
 

Index of the latest solid subtangle.



### Syntax


```cs
public long LatestSolidSubtangleMilestoneIndex { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## LatestSolidSubtangleMilestone Property 
 

The latest milestone which is solid and is used for sending transactions. For a milestone to become solid your local node must basically approve the subtangle of coordinator-approved transactions, and have a consistent view of all referenced transactions.



### Syntax


```cs
public string LatestSolidSubtangleMilestone { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a>


## Neighbors Property 
 

Number of neighbors you are directly connected with.



### Syntax


```cs
public long Neighbors { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## PacketsQueueSize Property 
 

Packets which are currently queued up



### Syntax


```cs
public long PacketsQueueSize { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## Time Property 
 

Current UNIX timestamp.



### Syntax


```cs
public long Time { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## Tips Property 
 

Number of tips in the network.



### Syntax


```cs
public long Tips { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


## TransactionsToRequest Property 
 

Transactions to request during syncing process.



### Syntax


```cs
public long TransactionsToRequest { get; set; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/6yy583ek" target="_blank">Int64</a>


