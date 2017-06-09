# jota.utils.Multisig

## `public class Multisig`

 * **Author:** pinpong

## `public String getDigest(String seed, int security, int index)`

 * **Parameters:**
   * `seed` — tryte-encoded seed. It should be noted that this seed is not transferred
   * `security` — security secuirty level of private key / seed
   * `index` — 
 * **Returns:** digest trytes

     <p>

## `public String addAddressDigest(String digestTrytes, String curlStateTrytes)`

Initiates the generation of a new multisig address or adds the key digest to an existing one

 * **Parameters:**
   * `digestTrytes` — 
   * `curlStateTrytes` — 
 * **Returns:** digest trytes

## `public String getKey(String seed, int index, int security)`

Gets the key value of a seed

 * **Parameters:**
   * `seed` — tryte-encoded seed. It should be noted that this seed is not transferred
   * `index` — 
 * **Returns:** digest trytes

     <p>

## `public String finalizeAddress(String curlStateTrytes)`

Generates a new address

 * **Parameters:** `curlStateTrytes` — 
 * **Returns:** address

     <p>

## `public boolean validateAddress(String multisigAddress, int[][] digests)`

Validates a generated multisig address

 * **Parameters:**
   * `multisigAddress` — 
   * `digests` — 
 * **Returns:** boolean

     <p>

## `public Bundle addSignature(Bundle bundleToSign, String inputAddress, String keyTrytes)`

Adds the cosigner signatures to the corresponding bundle transaction

 * **Parameters:**
   * `bundleToSign` — 
   * `inputAddress` — 
   * `keyTrytes` — 
 * **Returns:** Returns bundle trytes.

     <p>
