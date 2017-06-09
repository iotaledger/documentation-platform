# jota.dto.request.IotaNeighborsRequest

## `public class IotaNeighborsRequest extends IotaCommandRequest`

This class represents the core API request 'addNeighbors' and 'removeNeighbors'

## `private IotaNeighborsRequest(IotaAPICommands type, final String... uris)`

Initializes a new instance of the IotaNeighborsRequest class.

## `public static IotaNeighborsRequest createAddNeighborsRequest(String... uris)`

Create a new instance of the IotaNeighborsRequest class.

## `public static IotaNeighborsRequest createRemoveNeighborsRequest(String... uris)`

Create a new instance of the IotaNeighborsRequest class.

## `public String[] getUris()`

Gets the uris.

 * **Returns:** The uris.

## `public void setUris(String[] uris)`

Sets the uris.

 * **Parameters:** `uris` — The uris.
