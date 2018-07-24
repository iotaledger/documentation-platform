# jota.utils.Checksum

## `public class Checksum`

This class defines utility methods to add/remove the checksum to/from an address.

 * **Author:** pinpong

## `public static String addChecksum(String address) throws InvalidAddressException`

Adds the checksum to the specified address.

 * **Parameters:** `address` — The address without checksum.
 * **Returns:** The address with the appended checksum.
 * **Exceptions:** `InvalidAddressException` — is thrown when the specified address is not an valid address.

     <p>

## `public static String removeChecksum(String address) throws InvalidAddressException`

Remove the checksum to the specified address.

 * **Parameters:** `address` — The address with checksum.
 * **Returns:** The address without checksum.
 * **Exceptions:** `InvalidAddressException` — is thrown when the specified address is not an address with checksum.

     <p>

## `public static boolean isValidChecksum(String addressWithChecksum) throws InvalidAddressException`

Determines whether the specified address with checksum has a valid checksum.

 * **Parameters:** `addressWithChecksum` — The address with checksum.
 * **Returns:** <code>true</code> if the specified address with checksum has a valid checksum [the specified address with checksum]; otherwise, <code>false</code>.
 * **Exceptions:** `InvalidAddressException` — is thrown when the specified address is not an valid address.

     <p>

## `public static boolean isAddressWithChecksum(String address) throws InvalidAddressException`

Check if specified address is a address with checksum.

 * **Parameters:** `address` — The address to check.
 * **Returns:** <code>true</code> if the specified address is with checksum ; otherwise, <code>false</code>.
 * **Exceptions:** `InvalidAddressException` — is thrown when the specified address is not an valid address

     <p>

## `public static boolean isAddressWithoutChecksum(String address) throws InvalidAddressException`

check if specified address is a address

 * **Parameters:** `address` — address
 * **Returns:** boolean
 * **Exceptions:** `InvalidAddressException` — is thrown when the specified address is not an valid address

     <p>
