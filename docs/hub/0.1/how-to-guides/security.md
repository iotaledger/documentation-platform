# Hub Security Considerations

### Deposit Addresses
For security purposes, deposit addresses may only be used once.  For transactions processed by IOTA Hub, this is controlled internally.   Hub conducts periodic “sweeps” to transfer funds from a user deposit address to a hot wallet to safeguard funds.      

### Using a Salt

In order to add an extra layer of security to the Hub you have the ability to Salt the encryption of the user secrets. This removes the ability for an attacker to check the Hub's UUIDs against a pre-computed dictionary attack. 

Hub requires a Salt that must be greater than 20 characters long.

### Hub & Signing Server
To help prevent theft, IOTA Hub offers two servers:  hub and signing server.  

Hub performs key functions for managing tasks associated with deposits and withdrawals of Iota while the signing server stores key security data, UUID and salt. 

These are used in the hashing algorithms that secure IOTA seeds and deposit addresses.  For maximum security, run the signing server in a remote location.  Therefore, if hub is compromised, malicious actors will lack sufficient data to easily decipher secrets they can use to steal funds.  

The signing server is optional, but it is recommended to run the secondary server in high-risk situations with large amounts of tokens at risk. 

### Logs
Hub generates an log of all actions performed on the Hub. This also contains transaction records, server restarts and other detailed information. 
