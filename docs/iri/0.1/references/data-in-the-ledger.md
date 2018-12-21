# Data in the ledger

This table contains the data that is appended to the ledger for each valid transaction.

| **Column**|    **Data**                                            | **Description**           
| :-------------------: |  :---------------------------------------: | :----------------------------------------
| `transaction`     |Transaction hash     | The transaction bytes of this transaction|
| `transaction-metadata` | Transaction hash|This transaction's data and additional data that's added by the IRI: <ul><li>`validity`: This value is set by the bundle validator. The value can be -1 (not valid), 1 (valid), 0 (unknown)</li><li>`type`: This value can be either PREFILLED_SLOT (the transaction hash exists, but the IRI doesn't currently have it) or FILLED_SLOT (the IRI has the transaction hash)</li><li>`arrivalTime`: This value is the current time in milliseconds that the IRI received the transaction</li><li>`parsed`: This value (true or false) is used internally to check whether the metadata has been parsed</li><li>`solid`: This value (true or false) is set to true if this transaction and all the transaction it references are in the ledger</li><li>`sender`: This value is the URL or the IP address of the node that sent the transaction</li><li>`snapshot`: This value is the milestone index of the first milestone transaction that confirms this transaction</li></ul>
|`milestone`      |Milestone index      | Both the tail transaction hash and the index of the milestone transaction in the milestone bundle that directly or indirectly approves this transaction                |
| `stateDiffs`        |Milestone hash          |  The changes to the address's balance in this transaction that a milestone confirmed on the ledger   |
| `address`          | Address hash         | List of transaction hashes that changed the balance of this address in this transaction|
|`approvees`       |Transaction hash | The transaction hashes of the transactions that directly reference this transaction|
|`bundle`       |  Bundle hash| List of transaction hashes that belong to this transaction's bundle |
|`obsoleteTag`       | The obsolete tag |List of transaction hashes that have the same obsolete tag, which is part of the bundle essence (the part that is signed)|
|`tag`       | The tag |List of transaction hashes that have the same tag, which isn't part of the bundle essence (the part that isn't signed)|
|||
