# Hub Functions

## Functions

### Generating Seeds
When receiving a user deposit, the exchange can generate a secure seed for the user. Seeds must be securely generated and stored because a seed is used to derive a private key. Private keys are used to sign transactions.  Hub keeps track of seeds.
 
### Generating Deposit Addresses
Once a secure seed has been generated, deposit addresses can be created.  It is critical to keep track of the address index.  Hub does this automatically
 
### User Deposit Address Management
IOTA Hub has built-in deposit address management and security.  It ensures that exchanges assign each user a unique address for every deposit. This helps prevent address reuse thus better safeguarding funds. Hub can track whether key indices were already used as input for a previous transaction (i.e. swept from) and should no longer be available.
 
IOTA Hub monitors that transactions are confirmed.
 
### Why Confirm Transactions?
IOTA works differently than a traditional ledger. Traditional ledgers are generally managed by a trustworthy third-party, such as a bank or credit card company. With IOTA, there is no third-party, peers reach consensus regarding the trustworthiness of a transaction. When consensus is reached, the transaction is “confirmed”.
 
### Sweeps
Behind the scenes, IOTA Hub is performing sweeps because the exchange only secures funds in unspent addresses. Otherwise, it is the user’s responsibility to secure their funds.
 
Sweeps are crucial to securely crediting users after moving funds from their deposit addresses. Suppose, a user deposits to an already swept address, an adversary might try to forge a signature and move the funds out of this address; therefore, funds should be swept to your hot wallet periodically.
 
Crediting should only be performed after confirming sweep transactions to make sure funds are in your possession.  You should absolutely inform the user of the risk of total loss should he send to a deposit address provided by the exchange more than once.

### How Sweeps Work
To perform a sweep, first, Hub scans deposit addresses for balances filtering out any addresses with zero value. Next, Hub checks whether deposit addresses are in any unresolved sweeps. To speed up the process, Hub keeps track of the indexes of deposit addresses.
 
One seed many contain many deposit addresses that have already been processed. A sweep transfer will move balances from selected deposit addresses to unspent exchange-owned addresses.
 
Hub checks the inclusion states of the sweep transactions to determine which transactions have been confirmed and accepted by the Tangle network. Finally, Hub credits the user.
 
Hub checks whether deposit addresses were used in unresolved sweeps.  If any addresses have been previously swept, Hub does not sweep them again, unless the previous sweep transfers have been confirmed.
 
After each successful deposit, Hub sends the tokens to hot wallets.  After storing the tokens, Hub generates a new address available for the user to make a new deposit.  
 
Hub confirms sweep transactions were accepted by Tangle. To ensure secure deposit of funds to exchange addresses, check the inclusion states of the sweep transactions. Finally, Hub credits the user.
 
### Withdrawals
The Hub manages withdrawals. Customers withdraw funds from exchanges for various reasons. The exchange must make sure that deposit addresses used to transfer tokens do not have pending incoming transactions as a strict measure to prevent private key reuse.  Hub ensures that no value is being transferred to a deposit address.  Hub also makes sure that all previous incoming transactions are confirmed before sending a transfer.  Hub monitors withdrawal transactions and notifies users once withdrawal transaction has been confirmed.