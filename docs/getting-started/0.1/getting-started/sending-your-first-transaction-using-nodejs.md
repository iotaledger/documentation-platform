# Sending your first transaction using Node.js

In this tutorial, you'll learn how to set up your environment and send your first data transaction on the [IOTA DevNet network](references/iota-networks.md). Sending up a value transaction is essentially the same, but it requires a [seed](getting-started/creating-a-seed.md) that has addresses with IOTA tokens.

## Prerequisites

To complete this tutorial, you need the following:

* [Node.js 8+](https://nodejs.org/en/)
* [Node Package Manager](https://www.npmjs.com/) (NPM)
* Code editor
* Access to a terminal
* An Internet connection

<hr>

1. In the terminal, create a working directory:
    ```bash
    mkdir iota-example && cd iota-example
    ```

2. Change into the directory and use NPM to install the required Node.js libraries:
    ```bash
    cd iota-example
    npm install @iota/core @iota/converter --save
    ```

    You now have a package.json file and a node_modules folder in your working directory.

3. Create a new file called index.js in the current folder and add the following to it:

    ```js
    // Require the use of IOTA library
    const Iota = require('@iota/core');
    // Create a new instance of the IOTA class object.
    // Use 'provider' variable to specify which Full Node to talk to
    const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });
    // Call the 'getNodeInfo call to check that the node is working
    iota.getNodeInfo()
        .then(info => console.log(info))
        .catch(err => {});
    ```

4. Save the file and run this code by using this command in the terminal:

    ```bash
    node index.js
    ```

The following output will be displayed in the console:

<img src="first-response.png" alt="console output" width="600">

Now that the code is working and returning general
information about the IRI node, you can send a transaction to the network.

5. At the end of the index.js file, add the following code
    ```js
    const address =
    'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDD'
    const seed =
    'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'
    const message = iota.utils.toTrytes('Hello World!')

    const transfers = [
    {
        value: 0,
        address: address,
        message: message
    }
    ]

    iota
    .prepareTransfers(seed, transfers)
    .then(trytes => iota.sendTrytes(trytes, 3, 9))
    .then(bundle => {
        console.log(bundle)
    })
    .catch(err => {
        // catch any errors
    })
    ```

Lets break this code down:

**Create seed and address**

```javascript
const address =
'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDD'
const seed =
'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'
```

We define `address` and `seed` here to be used in the `prepareTransfer` function. The `seed` here is random.

**Note:** Seeds and address are both 81 tryte-encoded characters in length.

**Create message**

```javascript
const message = Converter.asciiToTrytes('Hello World!')
```

This line create a constant variable with the tryte-encoded message `Hello World`. The IOTA network accepts only tryte-encoded messages.

**Create transfer**

```javascript
const transfers = [
{
    value: 0,
    address: address, // HELLOWORLDHELLOWORLDHELLO....WORLDD
    message: message
}
]
```

This array lets you specify transfers you want to make from
your seed. In this case we want a transaction with **zero** value,
to our HELLOWORLD address with the tryte-encoded message `Hello World`.

**Prepare and send transfer**

```javascript
iota
.prepareTransfers(seed, transfers)
.then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
.then(bundle => {
console.log(bundle)
})
.catch(err => {
// catch any errors
})
```

The `prepareTransfers` function constructs a transaction on the client side. The `sendTrytes` function sends the transaction to the IRI node.

Lets take a second to figure out what the variables do:

|Field|Type|Description|
|:---:|:--:|:---------:|
|`seed` | string|This is the secret password that generates an address for you to send a transaction from. With **zero** value transactions we do not need to have
any tokens on an address, so this field can be 81 random trytes. |
|`mwm` |number | This field specifies the proof of work that is required for your transaction to be validated. On the DevNet, this field must have a value of at least 9|
|`depth` | number|The number of milestone transactions that the IRI node will walk back to start the tip selection process |
| `transfers`| array|This array contains the value, address and message of your desired transaction. You can specify multiple transactions to different addresses |
||||

## Final Code

The resulting code should look like this:

```js
const Iota = require('@iota/core')
const Converter = require('@iota/converter')
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    })
iota.getNodeInfo()
    .then(info => console.log(info))
    .catch(err => {})
const address =
    'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDD'
const seed =
    'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'
const message = Converter.asciiToTrytes('Hello World!')
const transfers = [
    {
    value: 0,
    address: address,
    message: message
    }
]
iota.prepareTransfers(seed, transfers)
    .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
    .then(bundle => {
        console.log(bundle)
    }).catch(err => {
        // catch any errors
    })
```

If you run this code, you'll see the IRI node's information and the transfer object you have just sent in the console:

<img src="success.png" alt="Console output" width="600">

Congratulations 🎊. You've just sent your first IOTA transaction.