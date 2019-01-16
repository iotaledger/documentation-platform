# Security considerations

**Given that the role of Hub is to manage IOTA tokens, security is crucial.**

## Deposit Addresses

For security purposes, deposit addresses may only be used once. Therefore, Hub conducts periodic “sweeps” to transfer funds from deposit addresses to a hot wallet.      

## Salt encryption

In order to add an extra layer of security, you can use a salt to improve the strength of your seed encryption algortithm by setting the [`salt`](references/hub-configuration-options.md) configuration option. A salt removes the ability for an attacker to check the Hub's UUIDs against a pre-computed dictionary attack. 

## Signing server

To help prevent theft, Hub offers two servers:

* **Hub:** Performs [key functions for managing deposits and withdrawals](concepts/about-hub.md)
* **Signing server:** Can store security data, such as UUIDs and the salt

For maximum security, run the signing server in a remote location. Therefore, if Hub is compromised, attackers can't steal IOTA tokens without access to the signing server. 

The signing server is optional, but it's recommended in high-risk environments with large amounts of IOTA tokens. 

## History logs

Hub generates a log of all actions that it performs. This log also contains transaction records, server restarts, and other detailed information. 
