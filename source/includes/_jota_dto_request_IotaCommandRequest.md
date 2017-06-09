# jota.dto.request.IotaCommandRequest

## `public class IotaCommandRequest`

This class represents the core api request 'getNodeInfo', 'getNeighbors' and 'interruptAttachToTangle'

## `protected IotaCommandRequest(IotaAPICommands command)`

 * **Parameters:** `command` — 

## `public static IotaCommandRequest createNodeInfoRequest()`

Get information about the node.

 * **Returns:** The Node info.

## `public static IotaCommandRequest createGetTipsRequest()`

Gets the tips of the node.

 * **Returns:** The tips of the node.

## `public static IotaCommandRequest createGetNeighborsRequest()`

Gets the neighbours of the node.

 * **Returns:** The list of neighbors.

## `public static IotaCommandRequest createInterruptAttachToTangleRequest()`

Interrupt attaching to the tangle

 * **Returns:** 
