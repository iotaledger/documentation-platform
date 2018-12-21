# Checking Proof of Work 

Validating the Proof of Work is done when the node software receives a new transaction. This is done along side a ledger consistency check. 

## Code Example

The following snippet is able to validate PoW in Javascript. 

```javascript
////////////// Find MWM of TX ////////////
// 1. Turns transaction (tx) to trytes
// 2. Converts the trytes to trits
// 3. Generates a CURL-p hash (length: 81) of those trits
// 4. Reverse the Array (Pow finds a hash with MWM of zeros at the end)
// 5. Map through the array to find the first index that is not 0
// 6. Saves this new array of indexes
// 7. Checks if the index if lower than MWM

const Crypto = require('iota.crypto.js')
const IOTA = require('iota.lib.js')

const validatePow = async (bundleHash, mwm) => {
    const bundles = await iota.findTransactionObjects({ bundles: [bundleHash]})

    // Uncomment the below line to make hash invalid
    // bundles[0].nonce = '999999999999999999999999999'

    const powSlice = bundles.map(tx =>
        hash(81, Crypto.converter.trits(iota.utils.transactionTrytes(tx))) // Hash of trits
            .reverse() // Reverse the Array
            .findIndex((trit, i) => trit !== 0) // Find index of the first non-zero trit
    )

    // Check MWM passed into the func matches the length of 0's in tx hash
    console.log('MWM of txs: ' + powSlice)
    let pow = powSlice.map(pow => pow >= mwm) 
    console.log(pow)
    // Return result
    if (pow.includes(false)) {
        console.log('PoW appears invalid')
        return false
    } else {
        console.log('PoW appears valid')
        return true
    }
}

validatePow(bundle, 14)
```

