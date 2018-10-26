# Method name
General description of the API, disclaimers should also be here:

> **Important note:** This API is currently in Beta and is subject to change. Use of these APIs in production applications is not supported.

- What does the API call do?
- Why should you use this API?
- When should you use this API?

## (Optional) Permissions and authentication
Up to the product to include or not include this. For example, IRI could state that this can be controlled on the called IRI node by the `--remote-auth` config.  

|Permission type      | Permissions (from least to most privileged)              |
|:--------------------|:---------------------------------------------------------|
| permission type | List of permissions    |
| permission type | List of permissions    |
| permission type | List of permissions    |


## Request
Example request - the simplest request that is done by the API. Or the [expected] most common one. 

## Supported query parameters
List out the supported query parameters. For example `$filter`.
http://docs.oasis-open.org/odata/odata/v4.01/cs01/part2-url-conventions/odata-v4.01-cs01-part2-url-conventions.html#_Toc505773216

If no parameters are supported, we should explicitly state:

*No query parameters are supported.*

## (Optional) Request headers
| Header       | Value |
|:---------------|:--------|
| Authorization  | Bearer {token}. Required.  |

## Request parameters
| Parameter       | Type | Required or Optional | Description |
|:---------------|:--------|:--------| :--------|
| Command  | Type | Required or Optional | Description of the parameter.  |
| Trytes  | Type | Required or Optional | Description of the parameter.  |


## (Optional) Request body - Do we have APIs where this makes sense given we supply parameters separately?
If no request body is required for the call, state it explicitly: 

*Do not supply a request body for this method.*

If request body is required: 1) link the object that needs to be supplied in the body or 2) provide an example:

```json
{
    "param 1": value,
    "param 2": value
}
```

## Response
If successful, this method returns a `200 OK` response code and `<object link>` in the body.

## Example  
### Request
The following is an example of the request.
```http
GET <url>/method{params}
```

### Response
The following is an example of the response. Note: The response object shown here may be truncated for brevity. All of the properties will be returned from an actual call.
```json
{
  "trunkTransaction": "TKGDZ9GEI9CPNQGHEATIISAKYPPPSXVCXBSR9EIWCTHHSSEQCD9YLDPEXYERCNJVASRGWMAVKFQTC9999", 
  "branchTransaction": "TKGDZ9GEI9CPNQGHEATIISAKYPPPSXVCXBSR9EIWCTHHSSEQCD9YLDPEXYERCNJVASRGWMAVKFQTC9999", 
  "duration": 936
}
```
