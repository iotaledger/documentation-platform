# jota.IotaAPI

## `public class IotaAPI extends IotaAPICore`

IotaAPI Builder. Usage:

IotaApiProxy api = IotaApiProxy.Builder .protocol("http") .nodeAddress("localhost") .port(12345) .build();

GetNodeInfoResponse response = api.getNodeInfo();

 * **Author:** davassi

## `public GetNewAddressResponse getNewAddress(final String seed, int security, final int index, final boolean checksum, final int total, final boolean returnAll) throws InvalidSecurityLevelException, InvalidAddressException`

Generates a new address from a seed and returns the remainderAddress. This is either done deterministically, or by providing the index of the new remainderAddress.

 * **Parameters:**
   * `seed` — Tryte-encoded seed. It should be noted that this seed is not transferred.
   * `security` — Security level to be used for the private key / address. Can be 1, 2 or 3.
   * `index` — Key index to start search from. If the index is provided, the generation of the address is not deterministic.
   * `checksum` — Adds 9-tryte address checksum.
   * `total` — Total number of addresses to generate.
   * `returnAll` — If <code>true</code>, it returns all addresses which were deterministically generated (until findTransactions returns null).
 * **Returns:** An array of strings with the specifed number of addresses.
 * **Exceptions:**
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.
   * `InvalidSecurityLevelException` — is thrown when the specified security level is not valid.

## `public GetTransferResponse getTransfers(String seed, int security, Integer start, Integer end, Boolean inclusionStates) throws ArgumentException, InvalidBundleException, InvalidSignatureException, NoNodeInfoException, NoInclusionStatesException, InvalidSecurityLevelException, InvalidAddressException`

 * **Parameters:**
   * `seed` — Tryte-encoded seed. It should be noted that this seed is not transferred.
   * `security` — The security level of private key / seed.
   * `start` — Starting key index.
   * `end` — Ending key index.
   * `inclusionStates` — If <code>true</code>, it gets the inclusion states of the transfers.
 * **Returns:** Bundle of transfers.
 * **Exceptions:**
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.
   * `ArgumentException` — is thrown when an invalid argument is provided.
   * `InvalidBundleException` — is thrown if an invalid bundle was found or provided.
   * `InvalidSignatureException` — is thrown when an invalid signature is encountered.
   * `NoNodeInfoException` — is thrown when its not possible to get node info.
   * `NoInclusionStatesException` — when it not possible to get a inclusion state.
   * `InvalidSecurityLevelException` — is thrown when the specified security level is not valid.

## `public Bundle[] bundlesFromAddresses(String[] addresses, final Boolean inclusionStates) throws ArgumentException, InvalidBundleException, InvalidSignatureException, NoNodeInfoException, NoInclusionStatesException`

Internal function to get the formatted bundles of a list of addresses.

 * **Parameters:**
   * `addresses` — List of addresses.
   * `inclusionStates` — If <code>true</code>, it gets the inclusion states of the transfers.
 * **Returns:** A Transaction objects.
 * **Exceptions:**
   * `ArgumentException` — is thrown when an invalid argument is provided.
   * `InvalidBundleException` — is thrown if an invalid bundle was found or provided.
   * `InvalidSignatureException` — is thrown when an invalid signature is encountered.
   * `NoNodeInfoException` — is thrown when its not possible to get node info.
   * `NoInclusionStatesException` — when it not possible to get a inclusion state.

## `public StoreTransactionsResponse broadcastAndStore(final String... trytes) throws BroadcastAndStoreException`

Wrapper function that broadcasts and stores the specified trytes.

 * **Parameters:** `trytes` — The trytes.
 * **Returns:** A StoreTransactionsResponse.
 * **Exceptions:** `BroadcastAndStoreException` — is thrown if its not possible to broadcast and store.

## `public List<Transaction> sendTrytes(final String[] trytes, final int depth, final int minWeightMagnitude) throws InvalidTrytesException`

Facade method: Gets transactions to approve, attaches to Tangle, broadcasts and stores.

 * **Parameters:**
   * `trytes` — The trytes.
   * `depth` — The depth.
   * `minWeightMagnitude` — The minimum weight magnitude.
 * **Returns:** Transactions objects.
 * **Exceptions:** `InvalidTrytesException` — is thrown when invalid trytes is provided.

## `public List<Transaction> getTransactionsObjects(String[] hashes)`

Wrapper function for getTrytes and transactionObjects. Gets the trytes and transaction object from a list of transaction hashes.

 * **Parameters:** `hashes` — The hashes
 * **Returns:** Transaction objects.

     <p>

## `public List<Transaction> findTransactionObjects(String[] input)`

Wrapper function for findTransactions, getTrytes and transactionObjects. Returns the transactionObject of a transaction hash. The input can be a valid findTransactions input.

 * **Parameters:** `input` — The inputs.
 * **Returns:** Transactions.

     <p>

## `public List<Transaction> findTransactionObjectsByBundle(String[] input)`

Wrapper function for findTransactions, getTrytes and transactionObjects. Returns the transactionObject of a transaction hash. The input can be a valid. findTransactions input

 * **Parameters:** `input` — The inputs.
 * **Returns:** Transactions.

     <p>

## `public List<String> prepareTransfers(String seed, int security, final List<Transfer> transfers, String remainder, List<Input> inputs) throws NotEnoughBalanceException, InvalidSecurityLevelException, InvalidAddressException, InvalidTransferException`

Prepares transfer by generating bundle, finding and signing inputs.

 * **Parameters:**
   * `seed` — 81-tryte encoded address of recipient.
   * `security` — The security level of private key / seed.
   * `transfers` — Array of transfer objects.
   * `remainder` — If defined, this address will be used for sending the remainder value (of the inputs) to.
   * `inputs` — The inputs.
 * **Returns:** Returns bundle trytes.
 * **Exceptions:**
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.
   * `NotEnoughBalanceException` — is thrown when a transfer fails because their is not enough balance to perform the transfer.
   * `InvalidSecurityLevelException` — is thrown when the specified security level is not valid.
   * `InvalidTransferException` — is thrown when an invalid transfer is provided.

## `public GetBalancesAndFormatResponse getInputs(String seed, int security, int start, int end, long threshold) throws InvalidSecurityLevelException, InvalidAddressException`

Gets the inputs of a seed

 * **Parameters:**
   * `seed` — Tryte-encoded seed. It should be noted that this seed is not transferred.
   * `security` — The Security level of private key / seed.
   * `start` — Starting key index.
   * `end` — Ending key index.
   * `threshold` — Min balance required.
 * **Exceptions:**
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.
   * `InvalidSecurityLevelException` — is thrown when the specified security level is not valid.

     <p>

## `public GetBalancesAndFormatResponse getBalanceAndFormat(final List<String> addresses, long threshold, int start, int end, StopWatch stopWatch, int security) throws InvalidSecurityLevelException`

Gets the balances and formats the output.

 * **Parameters:**
   * `addresses` — The addresses.
   * `threshold` — Min balance required.
   * `start` — Starting key index.
   * `end` — Ending key index.
   * `stopWatch` — the stopwatch.
   * `security` — The security level of private key / seed.
 * **Returns:** Inputs object.
 * **Exceptions:** `InvalidSecurityLevelException` — is thrown when the specified security level is not valid.

     <p>

## `public GetBundleResponse getBundle(String transaction) throws ArgumentException, InvalidBundleException, InvalidSignatureException`

Gets the associated bundle transactions of a single transaction. Does validation of signatures, total sum as well as bundle order.

 * **Parameters:** `transaction` — The transaction encoded in trytes.
 * **Returns:** an array of bundle, if there are multiple arrays it means that there are conflicting bundles.
 * **Exceptions:**
   * `ArgumentException` — is thrown when an invalid argument is provided.
   * `InvalidBundleException` — is thrown if an invalid bundle was found or provided.
   * `InvalidSignatureException` — is thrown when an invalid signature is encountered.

## `public ReplayBundleResponse replayBundle(String transaction, int depth, int minWeightMagnitude) throws InvalidBundleException, ArgumentException, InvalidSignatureException, InvalidTrytesException`

Replays a transfer by doing Proof of Work again.

 * **Parameters:**
   * `transaction` — The transaction.
   * `depth` — The depth.
   * `minWeightMagnitude` — The minimum weight magnitude.
 * **Returns:** Analyzed Transaction objects.
 * **Exceptions:**
   * `InvalidBundleException` — is thrown if an invalid bundle was found or provided.
   * `ArgumentException` — is thrown when an invalid argument is provided.
   * `InvalidSignatureException` — is thrown when an invalid signature is encountered.
   * `InvalidTransferException` — is thrown when an invalid transfer is provided.

## `public GetInclusionStateResponse getLatestInclusion(String[] hashes) throws NoNodeInfoException`

Wrapper function for getNodeInfo and getInclusionStates

 * **Parameters:** `hashes` — The hashes.
 * **Returns:** Inclusion state.
 * **Exceptions:** `NoNodeInfoException` — is thrown when its not possible to get node info.

## `public SendTransferResponse sendTransfer(String seed, int security, int depth, int minWeightMagnitude, final List<Transfer> transfers, Input[] inputs, String address) throws NotEnoughBalanceException, InvalidSecurityLevelException, InvalidTrytesException, InvalidAddressException, InvalidTransferException`

Wrapper function that basically does prepareTransfers, as well as attachToTangle and finally, it broadcasts and stores the transactions locally.

 * **Parameters:**
   * `seed` — Tryte-encoded seed
   * `security` — The security level of private key / seed.
   * `depth` — The depth.
   * `minWeightMagnitude` — The minimum weight magnitude.
   * `transfers` — Array of transfer objects.
   * `inputs` — List of inputs used for funding the transfer.
   * `address` — If defined, this address will be used for sending the remainder value (of the inputs) to.
 * **Returns:** Array of Transaction objects.
 * **Exceptions:**
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.
   * `NotEnoughBalanceException` — is thrown when a transfer fails because their is not enough balance to perform the transfer.
   * `InvalidSecurityLevelException` — is thrown when the specified security level is not valid.
   * `InvalidTrytesException` — is thrown when invalid trytes is provided.
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.
   * `InvalidTransferException` — is thrown when an invalid transfer is provided.

## `public Bundle traverseBundle(String trunkTx, String bundleHash, Bundle bundle) throws ArgumentException`

Basically traverse the Bundle by going down the trunkTransactions until the bundle hash of the transaction is no longer the same. In case the input transaction hash is not a tail, we return an error.

 * **Parameters:**
   * `trunkTx` — Hash of a trunk or a tail transaction of a bundle.
   * `bundleHash` — The bundle hashes.
   * `bundle` — List of bundles to be populated.
 * **Returns:** Transaction objects.
 * **Exceptions:** `ArgumentException` — is thrown when an invalid argument is provided.

## `public List<Transaction> initiateTransfer(int securitySum, final String inputAddress, String remainderAddress, final List<Transfer> transfers, boolean testMode) throws InvalidAddressException, InvalidBundleException, InvalidTransferException`

Prepares transfer by generating the bundle with the corresponding cosigner transactions. Does not contain signatures.

 * **Parameters:**
   * `securitySum` — The sum of security levels used by all co-signers.
   * `inputAddress` — Array of input addresses as well as the securitySum.
   * `remainderAddress` — Has to be generated by the cosigners before initiating the transfer, can be null if fully spent.
 * **Returns:** Bundle of transaction objects.
 * **Exceptions:**
   * `InvalidBundleException` — is thrown if an invalid bundle was found or provided.
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.

## `public String findTailTransactionHash(String hash) throws ArgumentException`

 * **Parameters:** `hash` — The hash.
 * **Returns:** A bundle.
 * **Exceptions:** `ArgumentException` — is thrown when an invalid argument is provided.

## `public List<String> addRemainder(final String seed, final int security, final List<Input> inputs, final Bundle bundle, final String tag, final long totalValue, final String remainderAddress, final List<String> signatureFragments) throws NotEnoughBalanceException, InvalidSecurityLevelException, InvalidAddressException`

 * **Parameters:**
   * `seed` — Tryte-encoded seed.
   * `security` — The security level of private key / seed.
   * `inputs` — List of inputs used for funding the transfer.
   * `bundle` — To be populated.
   * `tag` — The tag.
   * `totalValue` — The total value.
   * `remainderAddress` — If defined, this address will be used for sending the remainder value (of the inputs) to.
   * `signatureFragments` — The signature fragments.
 * **Exceptions:**
   * `NotEnoughBalanceException` — is thrown when a transfer fails because their is not enough balance to perform the transfer.
   * `InvalidSecurityLevelException` — is thrown when the specified security level is not valid.
   * `InvalidAddressException` — is thrown when the specified address is not an valid address.
