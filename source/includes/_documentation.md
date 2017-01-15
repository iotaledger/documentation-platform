# Documentation


## API Introduction


The IOTA Java client makes it possible to interact with your local node and request certain information or actions to 
be taken. Once your node is successfully setup, you can interface with it through port `14265` by passing along a JSON 
object which contains a specified command; and upon successful execution of the command, returns your requested 
information.

The main priority of the API as well as IRI itself is security. As such, anything that has to do with private keys is 
done *client side*. For this we have provided several libraries that take care of this, but you can implement this 
functionality yourself as well.

For your convenience, we have added concrete examples on how to use the API in Curl, Python and NodeJS. If you are 
using Javascript, you can simply follow along by using either XMLHttpRequest or jQuery. For NodeJS, please install the wonderful request npm package, as all our examples require the request package.

For the rest of this documentation it is assumed that you have the IOTA client running at port `14265` (or a port of 
your choice, change your requests accordingly then).


## Making Requests

```json
{
    "command": "YOURCOMMANDHERE"
}
``` 

All API calls need to be sent to http://localhost:14265 (if you are using the standard port) via a POST HTTP request. 
The data which will be sent is a **JSON object** which follows the same standard schema of:

Additional parameters are simply added as additional key-value pairs. If the command is successfully executed, your 
requested information is returned as either an object or a stringified object (use `json.parse` or equivalent to turn it 
into an object).

When making a request, make sure that the HTTP library you're using defines the `Content-Length` of the data to be sent. 
If this is not done automatically, manually add it via a header field e.g. 
`'Content-Length': Buffer.byteLength(JSON.stringify(command))`.


## CORS

CORS is enabled.

<aside class="notice">
    <b>Work in progress</b><br>
</aside>


## Errors

<aside class="notice">
    <b>Work in progress</b><br>
</aside>


## Fields

Here we list and describe all additional parameters which are required to be passed along for certain commands.

Parameter | Type | Description
--------- | ------- | -----------
`seed` | `string` | Tryte encoded string which contains the accounts seed.<br> The seed must be correctly encoded trytes:  only uppercase latin letters and 9’s. No other characters are allowed.<br> The maximum security level is 81-trytes, but you can choose longer/shorter seeds.
`address` | `string` | 81-trytes long address of the recipient of a transaction.
`value` | `string` | The quantity of IOTA’s which should be transferred.
`message` | `string` | Tryte-encoded string which can contain arbitrary information and is sent alongside a transaction.<br> The message value is publicly visible. The max value is 2187 trytes, which is 6561 trits (or roughly 1312 bytes).
`transaction / hash` | `string` | Hash of a transaction. A single transaction hash is 81-chars long.
`trytes` | `string` | The raw data of a transaction.
`bundles` | `list` | Contains a list of transaction bundles.<br> Bundles are basically linked, individual transactions which were created with a single transfer.<br> They are uniquely identified by a 27-char hash.
`addresses` | `list` | A list of addresses. A single address is 81-chars long.
`tags` | `list` | The tag of a transaction.
`approvees` | `list` | A list of transaction which were referenced by this transaction
`securityLevel` | `int` | Specifies the security level of your transaction.<br> Can either by 0 (for 81-trit security), 1 (for 162-trit security) and 2 (for 243-trit security).<br> Lower security transactions are faster to generate.
`minWeightMagnitude` | `int` | Specifies the amount of Proof of Work that will be carried out. Currently can only take the value 18.
