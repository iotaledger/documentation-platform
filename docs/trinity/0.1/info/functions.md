## Trinity Functions

Trinity is a user friendly, desktop or mobile app for token owners to securely manage their token holdings.

Tokens have value.  Value is safeguarded with a private key called a "seed".  Value is stored and shared using public keys called "addresses".  One seed may have multiple addresses.  In order to make transactions, users share their **address** via text or QR code.  

Trinity periodically checks the IRI Nodes in the Tangle to sum the balance of all addresses associated with a seed.  It also provides security so users don’t loose their seeds or their value.
 
Currently, Trinity communicates with one IRI Node to sum up seed balances.  But this provides only one view of the Tangle and may not reflect the latest transactions.  To improve confidence that the balance is current, the next version of Trinity will check multiple nodes in order to reach a quorum consensus.  Quorum consensus means that 2/3 of the nodes polled agree.
