

# IOTA Seeds

The Seed is starting point for creating an ‘account’ or ‘wallet’. This is the secret that controls the addresses that hold tokens. 

The seed is used derive the secret private keys and their corresponding public addresses. A seed has a practically limitless number of Addresses.

# Creating a seed

 Seeds can include only the number 9 and the uppercase letters A-Z in the [ISO basic Latin alphabet](https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet) and is 81 characters long.

**Creating a seed on a Linux operating system**

```
cat /dev/urandom |tr -dc A-Z9|head -c${1:-81}
```

**Creating a seed on a Mac operating system**

```
cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
```

> NOTE: Make sure to back up your seed. If you loose it you will loose access to the tokens and they can not be recovered.

## Ownership of Tokens

There is only one way to “prove” who owns a given IOTA address, and that is to spend from it. To spend from an address, one only needs to know the seed from which the address originated. The key takeaways of these facts are:

- **Spending IOTA tokens is proof of ownership**
- **If your seed is compromised in any way, the tokens in your wallet are as good as gone.**

To put in the simplest possible terms: **treat your seed as if it were the only key to your safe.** Whoever holds the key has direct access to the contents of the safe. There is a common English idiom that says “possession is 9/10ths of the law.” 

In IOTA (and indeed, most of the DLT space), **possession is the law.**