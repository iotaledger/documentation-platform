# Core.IGenericIotaCoreApi
## Request(*TRequest*, *TResponse*) Method 
 

Requests the specified request.



### Syntax


```cs
TResponse Request<TRequest, TResponse>(
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


## RequestAsync(*TRequest*, *TResponse*) Method 
 

Requests the specified request asynchronously



### Syntax


```cs
void RequestAsync<TRequest, TResponse>(
	TRequest request,
	Action<TResponse> responseAction
)
where TResponse : new()

```


#### Parameters
&nbsp;<dl><dt>request</dt><dd>Type: *TRequest*<br />The request.</dd><dt>responseAction</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/018hxwa8" target="_blank">System.Action</a>(*TResponse*)<br />The response action.</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>TRequest</dt><dd>The type of the request.</dd><dt>TResponse</dt><dd>The type of the response.</dd></dl>


## Hostname Property 
 

Gets the hostname.



### Syntax


```cs
string Hostname { get; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">String</a><br />The hostname.


## Port Property 
 

Gets the port.



### Syntax


```cs
int Port { get; }
```


#### Property Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a><br />The port.


