## Trinity Architecture

### Operating Environment

Trinity can be run as a desktop or mobile app.  The following dependencies are required:

- Node.js (8+)
- Yarn
- [Trinity Wallet](https://github.com/iotaledger/trinity-wallet.git)

### Trinity Components

Trinity has private keys called "seeds".  Seeds are used to generate public keys called "addresses".  Seeds are 81-trytes.  Addresses are 81-trytes plus a 9-digit checksum making them 90 characters.  This difference in length is an important reminder.  Remember to safeguard your seed.  Only share your addresses.


#### Interacting with Trinity

Users, IRI Nodes, and IOTA APIs interact with Trinity


#### Trinity Features

Security features are a top priority for Trinity.  Seed generation relies upon random number generators provided by the operating system to compute a unique seed.  Seed storage ensures the seed is encrypted and safe from an attacker.  Users cannot decrypt a seed without authenticating either by biometric checks or entering the proper username and password.  Transaction logic sends and receives tokens in a safe manner.

Trinity is user-friendly.  Information boxes guide users and themes are available for customizing the look and feel.  Transaction history is shown along with recent price history for popular cryptocurrencies.  Cuurency can be set to USD, EUR, or others.

> Balances aggregate the value from transactions so users can quickly see their total funds


#### Trinity Tools

If Trinity becomes out of sync, it may have an outdated view of the Tangle.  Trinity retains a list of locally-signed addresses so it can be manually re-synchronized.

If Trinity wallet is lost, then the user will have no list of locally-signed addresses.  Similarly, when a Snapshot takes place, the transaction history is deleted but a list of addresses are kept along with their state: spent or unspent.  In the past, when wallets were reconnected there was a chance they would return a balance of zero.  This occurred because the Tangle misinterpreted a double-spend attempt.  Trinity has reduced this chance and improved the Snapshot and lost wallet reattachment process.


#### Trinity Limitations

You cannot use Trinity to buy iota tokens from an external source because this would require the IOTA Foundation to run a currency exchange.  Running an exchange would be a conflict of interest with IOTA Foundation non-profit status.
 
Third-party products may be developed so Trinity can be used for buying tokens.
