
## Private Keys & Addresses

Private keys are derived from the hash of a Seed and an index. This is used to derive a Subseed that is then hashed to generate a private key that corresponds with a Subseed. Key fragments are generated to derive the address that corresponds with the public address of the particular private key.

This diagram shows the relationship between the seed, subseed, private keys & addresses:

![IOTA Seed security levels](https://i.imgur.com/Gir2Q2k.jpg)

## Security Levels

In IOTA, we provide you with 3 security levels to choose from.

| Security Level | Security                   |
| -------------- | -------------------------- |
| 1              | 81-trits (not recommended) |
| 2              | 162-trits (medium)         |
| 3              | 243-trits (high)           |

These security levels correspond to the number of rounds for hashing, which means that a single seed can have 3 different accounts. These accounts are illustrated below:

![IOTA Seed security levels](https://i.imgur.com/3nvESpi.jpg)

Level 3 (243-trits security) is advised to be used by all exchanges. The client libraries make it possible to easily switch and choose from a security level.



## Private Key Security

IOTA uses winternitz one-time signatures, as such you should ensure that you know which private key (and which address) has already been used in order to not reuse it. 

Subsequently, **reusing private keys can lead to the loss of funds**.  An attacker will be able to forge the signature after continuous key reuse. As such, never reuse private keys and addresses! If you are waiting for a transaction/bundle to confirm, always reattach it and never respend!

> <span style="color: red;">NEVER REUSE ADDRESSES </span>
> Because IOTA uses Winternitz one-time signatures, you should **never** reuse an address after you have spent from it. Continuously reusing private keys gives a sophisticated attacker the ability to forge the signatures, thus being able to steal funds from the respective address.