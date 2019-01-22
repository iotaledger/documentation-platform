# Convert data to trytes

**In transactions, the values of the fields must be represented in trytes. The IOTA client libraries have built-in converters.**

## Prerequisites

To complete this guide, your computer must have [Node JS (8+)](https://nodejs.org/en/).

<hr>

1. Create a new directory called iota-basics
2. In the command line, change into the iota-basics directory, and install the [converter Javascript library](https://github.com/iotaledger/iota.js/tree/next/packages/converter)

    ```bash
    $ cd iota-basics
    $ npm install --save @iota/converter
    ```
3. In the iota-basics directory, create a new file called convert-to-trytes.js
4. Copy and paste the following code into the file:

```javascript
 // Require the IOTA library
var Converter = require('@iota/converter');

var data = "Hello World!";

// Convert the data to trytes
var trytes = Converter.asciiToTrytes(data);

console.log("Data converted to trytes: " + trytes);

// Convert the trytes back to the original
var message = Converter.trytesToAscii(trytes);

console.log("Trytes converted back to data: " + message);
```

5. Execute this script

The converted strings will be displayed in the console.
