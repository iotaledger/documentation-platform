# API Reference',

## Table of Contents
- [API Reference',](#api-reference)
  - [Table of Contents](#table-of-contents)
  - [hub.proto](#hubproto)
    - [Hub](#hub)
  - [messages.proto](#messagesproto)
    - [BalanceEvent](#balanceevent)
    - [BalanceSubscriptionRequest](#balancesubscriptionrequest)
    - [CreateUserReply](#createuserreply)
    - [CreateUserRequest](#createuserrequest)
    - [Error](#error)
    - [GetAddressInfoReply](#getaddressinforeply)
    - [GetAddressInfoRequest](#getaddressinforequest)
    - [GetBalanceReply](#getbalancereply)
    - [GetBalanceRequest](#getbalancerequest)
    - [GetDepositAddressReply](#getdepositaddressreply)
    - [GetDepositAddressRequest](#getdepositaddressrequest)
    - [GetUserHistoryReply](#getuserhistoryreply)
    - [GetUserHistoryRequest](#getuserhistoryrequest)
    - [HubAddressBalanceEvent](#hubaddressbalanceevent)
    - [ProcessTransferBatchReply](#processtransferbatchreply)
    - [ProcessTransferBatchRequest](#processtransferbatchrequest)
    - [ProcessTransferBatchRequest.Transfer](#processtransferbatchrequesttransfer)
    - [SignBundleReply](#signbundlereply)
    - [SignBundleRequest](#signbundlerequest)
    - [StatsReply](#statsreply)
    - [StatsRequest](#statsrequest)
    - [SweepDetailReply](#sweepdetailreply)
    - [SweepDetailRequest](#sweepdetailrequest)
    - [SweepEvent](#sweepevent)
    - [SweepInfoRequest](#sweepinforequest)
    - [SweepSubscriptionRequest](#sweepsubscriptionrequest)
    - [UserAccountBalanceEvent](#useraccountbalanceevent)
    - [UserAddressBalanceEvent](#useraddressbalanceevent)
    - [UserWithdrawCancelReply](#userwithdrawcancelreply)
    - [UserWithdrawCancelRequest](#userwithdrawcancelrequest)
    - [UserWithdrawReply](#userwithdrawreply)
    - [UserWithdrawRequest](#userwithdrawrequest)
    - [ErrorCode](#errorcode)
    - [HubAddressBalanceReason](#hubaddressbalancereason)
    - [UserAccountBalanceEventType](#useraccountbalanceeventtype)
    - [UserAddressBalanceReason](#useraddressbalancereason)
  - [Scalar Value Types](#scalar-value-types)



<a name="hub.proto"/>

<p align="right"><a href="#top">Top</a></p>

## hub.proto

<a name="hub.rpc.Hub"/>

### Hub

| Method Name          | Request Type                                                 | Response Type                                                | Description                                                  |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CreateUser           | [CreateUserRequest](#hub.rpc.CreateUserRequest)              | [CreateUserReply](#hub.rpc.CreateUserRequest)                | Creates a new user on the Hub                                |
| GetBalance           | [GetBalanceRequest](#hub.rpc.GetBalanceRequest)              | [GetBalanceReply](#hub.rpc.GetBalanceRequest)                | Returns the available balance for a user                     |
| GetDepositAddress    | [GetDepositAddressRequest](#hub.rpc.GetDepositAddressRequest) | [GetDepositAddressReply](#hub.rpc.GetDepositAddressRequest)  | Creates a new deposit address for a user                     |
| UserWithdraw         | [UserWithdrawRequest](#hub.rpc.UserWithdrawRequest)          | [UserWithdrawReply](#hub.rpc.UserWithdrawRequest)            | Submits a withdrawal request for a user.                     |
| UserWithdrawCancel   | [UserWithdrawCancelRequest](#hub.rpc.UserWithdrawCancelRequest) | [UserWithdrawCancelReply](#hub.rpc.UserWithdrawCancelRequest) | Attempts to cancel a user&#39;s withdrawal request. Only possible as long as sweep hasn&#39;t started yet. |
| GetUserHistory       | [GetUserHistoryRequest](#hub.rpc.GetUserHistoryRequest)      | [GetUserHistoryReply](#hub.rpc.GetUserHistoryRequest)        | Returns a user&#39;s full balance change history as recorded by the Hub |
| ProcessTransferBatch | [ProcessTransferBatchRequest](#hub.rpc.ProcessTransferBatchRequest) | [ProcessTransferBatchReply](#hub.rpc.ProcessTransferBatchRequest) | Processes a batch of buys/sells from the exchange Note that the amounts of this batch must sum to 0! |
| BalanceSubscription  | [BalanceSubscriptionRequest](#hub.rpc.BalanceSubscriptionRequest) | [BalanceEvent](#hub.rpc.BalanceSubscriptionRequest)          | Produces a stream of all balance changes as they appear since the provided timestamp |
| GetStats             | [StatsRequest](#hub.rpc.StatsRequest)                        | [StatsReply](#hub.rpc.StatsRequest)                          | Provides statistics about the Hub                            |
| SweepSubscription    | [SweepSubscriptionRequest](#hub.rpc.SweepSubscriptionRequest) | [SweepEvent](#hub.rpc.SweepSubscriptionRequest)              | Produces a stream of all sweeps since the provided timestamp |
| GetAddressInfo       | [GetAddressInfoRequest](#hub.rpc.GetAddressInfoRequest)      | [GetAddressInfoReply](#hub.rpc.GetAddressInfoRequest)        | Provides information on an address if it&#39;s owned by the Hub |
| SweepInfo            | [SweepInfoRequest](#hub.rpc.SweepInfoRequest)                | [SweepEvent](#hub.rpc.SweepInfoRequest)                      | Provides information on the sweep for the given withdrawal or bundle hash |
| SignBundle           | [SignBundleRequest](#hub.rpc.SignBundleRequest)              | [SignBundleReply](#hub.rpc.SignBundleRequest)                | Provides a signature for a bundle hash                       |
| SweepDetail          | [SweepDetailRequest](#hub.rpc.SweepDetailRequest)            | [SweepDetailReply](#hub.rpc.SweepDetailRequest)              | Provides detailed information on the sweep for the bundle hash |

 



<a name="messages.proto"/>

<p align="right"><a href="#top">Top</a></p>

## messages.proto



<a name="hub.rpc.BalanceEvent"/>

### BalanceEvent



| Field            | Type                                                        | Label | Description |
| ---------------- | ----------------------------------------------------------- | ----- | ----------- |
| userAccountEvent | [UserAccountBalanceEvent](#hub.rpc.UserAccountBalanceEvent) |       |             |
| userAddressEvent | [UserAddressBalanceEvent](#hub.rpc.UserAddressBalanceEvent) |       |             |
| hubAddressEvent  | [HubAddressBalanceEvent](#hub.rpc.HubAddressBalanceEvent)   |       |             |





<a name="hub.rpc.BalanceSubscriptionRequest"/>

### BalanceSubscriptionRequest



| Field     | Type              | Label | Description                                                  |
| --------- | ----------------- | ----- | ------------------------------------------------------------ |
| newerThan | [uint64](#uint64) |       | Balances newer than this time (MS since epoch) will be retrievd |





<a name="hub.rpc.CreateUserReply"/>

### CreateUserReply

Reply for creating a new user.

Currently unused.





<a name="hub.rpc.CreateUserRequest"/>

### CreateUserRequest

Request for creating a new user.

| Field  | Type              | Label | Description |
| ------ | ----------------- | ----- | ----------- |
| userId | [string](#string) |       |             |





<a name="hub.rpc.Error"/>

### Error

The generic Error that will be used to return an error code on, e.g. Status::CANCELLED. 	

The error will be serialised and stored in the Status&#39; detail field.

| Field | Type                            | Label | Description |
| ----- | ------------------------------- | ----- | ----------- |
| code  | [ErrorCode](#hub.rpc.ErrorCode) |       |             |





<a name="hub.rpc.GetAddressInfoReply"/>

### GetAddressInfoReply



| Field  | Type              | Label | Description                             |
| ------ | ----------------- | ----- | --------------------------------------- |
| userId | [string](#string) |       | The user identifier who owns an address |





<a name="hub.rpc.GetAddressInfoRequest"/>

### GetAddressInfoRequest



| Field   | Type              | Label | Description            |
| ------- | ----------------- | ----- | ---------------------- |
| address | [string](#string) |       | The address to look up |





<a name="hub.rpc.GetBalanceReply"/>

### GetBalanceReply

Reply containing a user&#39;s currently available balanc.e

| Field     | Type            | Label | Description                                                  |
| --------- | --------------- | ----- | ------------------------------------------------------------ |
| available | [int64](#int64) |       | User balance that is currently available for withdrawal / trades |





<a name="hub.rpc.GetBalanceRequest"/>

### GetBalanceRequest

Request for requesting a user&#39;s currently available balance.

| Field  | Type              | Label | Description |
| ------ | ----------------- | ----- | ----------- |
| userId | [string](#string) |       |             |





<a name="hub.rpc.GetDepositAddressReply"/>

### GetDepositAddressReply

Reply containing the new deposit address.

| Field   | Type              | Label | Description                   |
| ------- | ----------------- | ----- | ----------------------------- |
| address | [string](#string) |       | Newly created deposit address |





<a name="hub.rpc.GetDepositAddressRequest"/>

### GetDepositAddressRequest

Request for creating a new deposit address for a user.

| Field           | Type              | Label | Description |
| --------------- | ----------------- | ----- | ----------- |
| userId          | [string](#string) |       |             |
| includeChecksum | [bool](#bool)     |       |             |





<a name="hub.rpc.GetUserHistoryReply"/>

### GetUserHistoryReply



| Field  | Type                                                        | Label    | Description                                    |
| ------ | ----------------------------------------------------------- | -------- | ---------------------------------------------- |
| events | [UserAccountBalanceEvent](#hub.rpc.UserAccountBalanceEvent) | repeated | List of all user balance events for given user |





<a name="hub.rpc.GetUserHistoryRequest"/>

### GetUserHistoryRequest



| Field     | Type              | Label | Description                                                  |
| --------- | ----------------- | ----- | ------------------------------------------------------------ |
| userId    | [string](#string) |       | UserId                                                       |
| newerThan | [uint64](#uint64) |       | Records newer than this time (MS since epoch) will be retrievd |





<a name="hub.rpc.HubAddressBalanceEvent"/>

### HubAddressBalanceEvent



| Field           | Type                                                        | Label | Description |
| --------------- | ----------------------------------------------------------- | ----- | ----------- |
| hubAddress      | [string](#string)                                           |       |             |
| amount          | [int64](#int64)                                             |       |             |
| reason          | [HubAddressBalanceReason](#hub.rpc.HubAddressBalanceReason) |       |             |
| sweepBundleHash | [string](#string)                                           |       |             |
| timestamp       | [uint64](#uint64)                                           |       |             |





<a name="hub.rpc.ProcessTransferBatchReply"/>

### ProcessTransferBatchReply







<a name="hub.rpc.ProcessTransferBatchRequest"/>

### ProcessTransferBatchRequest

This request contains a netted transfer batch. 
UserIds must be unique.

| Field     | Type                                                         | Label    | Description |
| --------- | ------------------------------------------------------------ | -------- | ----------- |
| transfers | [ProcessTransferBatchRequest.Transfer](#hub.rpc.ProcessTransferBatchRequest.Transfer) | repeated |             |





<a name="hub.rpc.ProcessTransferBatchRequest.Transfer"/>

### ProcessTransferBatchRequest.Transfer



| Field  | Type              | Label | Description |
| ------ | ----------------- | ----- | ----------- |
| userId | [string](#string) |       |             |
| amount | [int64](#int64)   |       |             |





<a name="hub.rpc.SignBundleReply"/>

### SignBundleReply



| Field     | Type              | Label | Description             |
| --------- | ----------------- | ----- | ----------------------- |
| signature | [string](#string) |       | The resulting signature |





<a name="hub.rpc.SignBundleRequest"/>

### SignBundleRequest



| Field            | Type              | Label | Description                                                  |
| ---------------- | ----------------- | ----- | ------------------------------------------------------------ |
| address          | [string](#string) |       | The Hub-owned IOTA address that should be signed. (without checksum) |
| bundleHash       | [string](#string) |       | The bundle hash that should be signed.                       |
| authentication   | [string](#string) |       | Authentication token                                         |
| validateChecksum | [bool](#bool)     |       | should command validate address                              |





<a name="hub.rpc.StatsReply"/>

### StatsReply



| Field        | Type              | Label | Description                                 |
| ------------ | ----------------- | ----- | ------------------------------------------- |
| totalBalance | [uint64](#uint64) |       | Total balance currently managed by the hub. |





<a name="hub.rpc.StatsRequest"/>

### StatsRequest







<a name="hub.rpc.SweepDetailReply"/>

### SweepDetailReply



| Field     | Type              | Label    | Description                                                  |
| --------- | ----------------- | -------- | ------------------------------------------------------------ |
| confirmed | [bool](#bool)     |          | Sweep&#39;s confirmation status                              |
| trytes    | [string](#string) | repeated | Sweep&#39;s transactions trytes                              |
| tailHash  | [string](#string) | repeated | Sweep&#39;s tails hashes (multiple reattachment for each bundle) |





<a name="hub.rpc.SweepDetailRequest"/>

### SweepDetailRequest



| Field      | Type              | Label | Description             |
| ---------- | ----------------- | ----- | ----------------------- |
| bundleHash | [string](#string) |       | Sweep&#39;s bundle hash |





<a name="hub.rpc.SweepEvent"/>

### SweepEvent



| Field          | Type              | Label    | Description |
| -------------- | ----------------- | -------- | ----------- |
| bundleHash     | [string](#string) |          |             |
| timestamp      | [uint64](#uint64) |          |             |
| withdrawalUUID | [string](#string) | repeated |             |





<a name="hub.rpc.SweepInfoRequest"/>

### SweepInfoRequest



| Field          | Type              | Label | Description                |
| -------------- | ----------------- | ----- | -------------------------- |
| withdrawalUUID | [string](#string) |       | WIthdrawal UUID to look up |
| bundleHash     | [string](#string) |       | Sweep&#39;s bundle hash    |





<a name="hub.rpc.SweepSubscriptionRequest"/>

### SweepSubscriptionRequest



| Field     | Type              | Label | Description                                                  |
| --------- | ----------------- | ----- | ------------------------------------------------------------ |
| newerThan | [uint64](#uint64) |       | Sweeps newer than this time (MS since epoch) will be retrievd |





<a name="hub.rpc.UserAccountBalanceEvent"/>

### UserAccountBalanceEvent



| Field           | Type                                                         | Label | Description                                                  |
| --------------- | ------------------------------------------------------------ | ----- | ------------------------------------------------------------ |
| userId          | [string](#string)                                            |       |                                                              |
| timestamp       | [uint64](#uint64)                                            |       | Time since epoch in MS when the balance change occured       |
| type            | [UserAccountBalanceEventType](#hub.rpc.UserAccountBalanceEventType) |       |                                                              |
| amount          | [int64](#int64)                                              |       |                                                              |
| sweepBundleHash | [string](#string)                                            |       | Will contain sweep bundle hash on deposit Will contain withdrawal uuid on withdrawal or withdrawal cancel |
| withdrawalUUID  | [string](#string)                                            |       |                                                              |





<a name="hub.rpc.UserAddressBalanceEvent"/>

### UserAddressBalanceEvent



| Field       | Type                                                         | Label | Description                                                  |
| ----------- | ------------------------------------------------------------ | ----- | ------------------------------------------------------------ |
| userId      | [string](#string)                                            |       |                                                              |
| userAddress | [string](#string)                                            |       |                                                              |
| amount      | [int64](#int64)                                              |       |                                                              |
| reason      | [UserAddressBalanceReason](#hub.rpc.UserAddressBalanceReason) |       |                                                              |
| hash        | [string](#string)                                            |       | Depositing bundle&#39;s tail (if reason == DEPOSIT) Bundle hash of sweep (if reason == SWEEP) |
| timestamp   | [uint64](#uint64)                                            |       |                                                              |





<a name="hub.rpc.UserWithdrawCancelReply"/>

### UserWithdrawCancelReply

Reply for withdrawal cancellation.

| Field   | Type          | Label | Description                          |
| ------- | ------------- | ----- | ------------------------------------ |
| success | [bool](#bool) |       | True if withdrawal could be canceled |





<a name="hub.rpc.UserWithdrawCancelRequest"/>

### UserWithdrawCancelRequest

Request to cancel an already submitted withdrawal.

| Field | Type              | Label | Description                            |
| ----- | ----------------- | ----- | -------------------------------------- |
| uuid  | [string](#string) |       | Withdrawal UUID that is to be canceled |





<a name="hub.rpc.UserWithdrawReply"/>

### UserWithdrawReply



| Field | Type              | Label | Description                |
| ----- | ----------------- | ----- | -------------------------- |
| uuid  | [string](#string) |       | This withdrawal&#39;s UUID |





<a name="hub.rpc.UserWithdrawRequest"/>

### UserWithdrawRequest

Requests a user-submitted withdrawal.

This will fail if the user does not have sufficient balance available.

| Field            | Type              | Label | Description                                                  |
| ---------------- | ----------------- | ----- | ------------------------------------------------------------ |
| userId           | [string](#string) |       |                                                              |
| payoutAddress    | [string](#string) |       | Address the user requests payout to. Should be without checksum. |
| amount           | [uint64](#uint64) |       | Requested withdrawal amount                                  |
| tag              | [string](#string) |       | Tag for withdrawal                                           |
| validateChecksum | [bool](#bool)     |       | should command validate address                              |





 

<a name="hub.rpc.ErrorCode"/>

### ErrorCode

Error codes that can be returned by the hub.

| Name                            | Number | Description                                                  |
| ------------------------------- | ------ | ------------------------------------------------------------ |
| EC_UNKNOWN                      | 0      | Unused.                                                      |
| USER_EXISTS                     | 1      | UserId already exists.                                       |
| USER_DOES_NOT_EXIST             | 2      | UserId does not exist.                                       |
| INSUFFICIENT_BALANCE            | 3      | The user has insufficient balance for this operation.        |
| BATCH_INVALID                   | 4      | The batch is invalid (does not sum to 0 or user ids not unique) |
| BATCH_INCONSISTENT              | 5      | The batch is inconsistent (attempt to remove funds from a user&#39;s account without sufficient balance) |
| BATCH_AMOUNT_ZERO               | 6      | The amount associated with the transfer is invalid (should be greater or less than 0) |
| UNKNOWN_ADDRESS                 | 7      | The address is not known to the hub                          |
| WITHDRAWAL_CAN_NOT_BE_CANCELLED | 8      | Either the withdrawal has been swept or cancelled already    |
| INELIGIBLE_ADDRESS              | 9      | Address was not eligible for the requested operation.        |
| INVALID_AUTHENTICATION          | 10     | Provided authentication token was invalid.                   |
| CHECKSUM_INVALID                | 11     | Provided address contained invalid checksum                  |
| SIGNING_FAILED                  | 12     | Call to rpc signing_server failed (GetSignatureForUUID)      |
| GET_ADDRESS_FAILED              | 13     | Call to rpc signing_server failed (GetAddressForUUID)        |
| GET_SECURITY_LEVEL_FAILED       | 14     | Call to rpc signing_server failed (GetSecurityLevel)         |



<a name="hub.rpc.HubAddressBalanceReason"/>

### HubAddressBalanceReason

| Name        | Number | Description                               |
| ----------- | ------ | ----------------------------------------- |
| HUB_UNKNOWN | 0      |                                           |
| INBOUND     | 1      | Sweep inbound (used as reminader address) |
| OUTBOUND    | 2      | Sweep outbound (used as input)            |



<a name="hub.rpc.UserAccountBalanceEventType"/>

### UserAccountBalanceEventType

| Name                | Number | Description                                                  |
| ------------------- | ------ | ------------------------------------------------------------ |
| UAB_UNKNOWN         | 0      | Unused                                                       |
| DEPOSIT             | 1      | Deposit into user account (positive amount)                  |
| BUY                 | 2      | User received tokens as part of a transfer batch (positive amount) |
| WITHDRAWAL          | 3      | User withdrawal request (negative amount)                    |
| WITHDRAWAL_CANCELED | 4      | Cancelled user withdrawal request (positive amount)          |
| SELL                | 5      | User lost tokens as part of a transfer batch (negative amount) |



<a name="hub.rpc.UserAddressBalanceReason"/>

### UserAddressBalanceReason

| Name         | Number | Description              |
| ------------ | ------ | ------------------------ |
| UADD_UNKNOWN | 0      |                          |
| UA_DEPOSIT   | 1      | New user deposit tracked |
| UA_SWEEP     | 2      | Hub-sweep.               |









## Scalar Value Types

| .proto Type                    | Notes                                                        | C++ Type | Java Type  | Python Type |
| ------------------------------ | ------------------------------------------------------------ | -------- | ---------- | ----------- |
| <a name="double" /> double     |                                                              | double   | double     | float       |
| <a name="float" /> float       |                                                              | float    | float      | float       |
| <a name="int32" /> int32       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32    | int        | int         |
| <a name="int64" /> int64       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64    | long       | int/long    |
| <a name="uint32" /> uint32     | Uses variable-length encoding.                               | uint32   | int        | int/long    |
| <a name="uint64" /> uint64     | Uses variable-length encoding.                               | uint64   | long       | int/long    |
| <a name="sint32" /> sint32     | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32    | int        | int         |
| <a name="sint64" /> sint64     | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64    | long       | int/long    |
| <a name="fixed32" /> fixed32   | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32   | int        | int         |
| <a name="fixed64" /> fixed64   | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64   | long       | int/long    |
| <a name="sfixed32" /> sfixed32 | Always four bytes.                                           | int32    | int        | int         |
| <a name="sfixed64" /> sfixed64 | Always eight bytes.                                          | int64    | long       | int/long    |
| <a name="bool" /> bool         |                                                              | bool     | boolean    | boolean     |
| <a name="string" /> string     | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string   | String     | str/unicode |
| <a name="bytes" /> bytes       | May contain any arbitrary sequence of bytes.                 | string   | ByteString | str         |

