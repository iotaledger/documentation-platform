# Generate an address

**Addresses must not be spent from more than once. If you spend from an address, you must generate a new one by either incrementing the index or using a different security level.**

Any code that uses a seed is executed on the client side. Your seed is never sent anywhere.

## Prerequisites

To complete this guide, your computer must have [Node JS (8+)](https://nodejs.org/en/).

<hr>

1. Create a new directory called iota-basics
2. In the command line, change into the iota-basics directory, and install the [core Javascript library](https://github.com/iotaledger/iota.js/tree/next/packages/core)

    ```bash
    $ cd iota-basics
    $ npm install --save @iota/core
    ```
3. In the iota-basics directory, create a new file called generate-address.js
4. Copy and paste the following code into the file:

    ```javascript
    // Require the IOTA library
    const Iota = require('@iota/core');

    // Create a new instance of the IOTA object
    // Use the `provider` field to specify which IRI node to connect to
    const iota = Iota.composeAPI({
    provider: 'https://nodes.thetangle.org:443'
    });

    const seed =
    'PUETTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

    // Generate an address
    iota.getNewAddress(seed, 0 /*index */, 2/*security level*/)
    .then(address => console.log(address));
    ```

5. Execute this script

An address (81 trytes) will be displayed in the console.

If you execute the script again, you'll see the same address in the console.

Try changing the index and security level arguments in the `getNewAddress` function to generate a different address for this seed. Or, put your seed in the seed variable to generate a new address for your seed.