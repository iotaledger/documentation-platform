# Core.GenericIotaCoreApi
## Constructor 
 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Core_GenericIotaCoreApi">GenericIotaCoreApi</a> class.



### Syntax


```cs
public GenericIotaCoreApi(
	string host,
	int port
)
```


#### Parameters
&nbsp;<dl><dt>host</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />The host.</dd><dt>port</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />The port.</dd></dl>


## Request(*TRequest*, *TResponse*) Method 
 

Requests the specified request.



### Syntax


```cs
public TResponse Request<TRequest, TResponse>(
	TRequest request
)
where TResponse : new()

```


#### Parameters
&nbsp;<dl><dt>request</dt><dd>Type: *TRequest*<br />The request.</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>TRequest</dt><dd>The type of the request.</dd><dt>TResponse</dt><dd>The type of the response.</dd></dl>

#### Return Value
Type: *TResponse*<br />

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Core_IGenericIotaCoreApi_Request__2">IGenericIotaCoreApi.Request(TRequest, TResponse)(TRequest)</a><br />


## RequestAsync(*TRequest*, *TResponse*) Method 
 

Requests the specified request asynchronously



### Syntax


```cs
public void RequestAsync<TRequest, TResponse>(
	TRequest request,
	Action<TResponse> responseAction
)
where TResponse : new()

```


#### Parameters
&nbsp;<dl><dt>request</dt><dd>Type: *TRequest*<br />The request.</dd><dt>responseAction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/018hxwa8" target="_blank">System.Action</a>(*TResponse*)<br />The response action.</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>TRequest</dt><dd>The type of the request.</dd><dt>TResponse</dt><dd>The type of the response.</dd></dl>

#### Implements
<a href="M_Iota_Lib_CSharp_Api_Core_IGenericIotaCoreApi_RequestAsync__2">IGenericIotaCoreApi.RequestAsync(TRequest, TResponse)(TRequest, Action(TResponse))</a><br />


## Hostname Property 
 

Gets the hostname.



### Syntax


```cs
public string Hostname { get; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The hostname.

#### Implements
<a href="P_Iota_Lib_CSharp_Api_Core_IGenericIotaCoreApi_Hostname">IGenericIotaCoreApi.Hostname</a><br />


## Port Property 
 

Gets the port.



### Syntax


```cs
public int Port { get; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a><br />The port.

#### Implements
<a href="P_Iota_Lib_CSharp_Api_Core_IGenericIotaCoreApi_Port">IGenericIotaCoreApi.Port</a><br />


