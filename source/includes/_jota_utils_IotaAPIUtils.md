# jota.utils.IotaAPIUtils

## `public class IotaAPIUtils`

Client Side computation service.

 * **Author:** davassi

## `public static String newAddress(String seed, int security, int index, boolean checksum, ICurl curl) throws InvalidAddressException`

Generates a new address

 * **Parameters:**
   * `seed` — The tryte-encoded seed. It should be noted that this seed is not transferred.
   * `security` — The secuirty level of private key / seed.
   * `index` — The index to start search from. If the index is provided, the generation of the address is not deterministic.
   * `checksum` — The adds 9-tryte address checksum
   * `curl` — The curl instance.
 * **Returns:** An String with address.
 * **Exceptions:** `InvalidAddressException` — is thrown when the specified address is not an valid address.
