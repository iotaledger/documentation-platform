# Creating a seed

In IOTA, a seed is your unique password that gives you access to all your addresses. Seeds can include only the number 9 and the uppercase letters A-Z in the [ISO basic Latin alphabet](https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet).

Your seed proves that you own an address and allows IRI nodes to validate your transactions and append them to the distributed ledger.

You must keep your seed safe and back it up. If you lose your seed, you can't recover it.

### Creating a seed on a Linux operating system
1. Do the following in a terminal:
    ```bash
    cat /dev/urandom |tr -dc A-Z9|head -c${1:-81}
    ```
2. Copy and paste the 81 character output somewhere. We'll need the seed later. It's a good idea to back up your seed now.

### Creating a seed on a Mac operating system
1. Do the following in a terminal:
    ```bash
    cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
    ```
2. Copy and paste the 81 character output somewhere. We'll need the seed later. It's a good idea to back up your seed now.

### Creating a seed on a Windows operating system
1. [Download the KeePass installer](https://keepass.info/)

    **Note:** If you want to check the integrity of the file, you can [follow the instructions for hashing it on the KeePass website](https://keepass.info/integrity.html).
2. Open the installer and follow the on-screen instructions
3. Open KeePass and click **New**

    <img src="keepass-new.png" alt="Click New" width="600">

4. After you've followed the instructions and saved the KeePass file on your computer, right click the empty space and click **Add entry**

    <img src="keepass-add-entry.png" alt="Click Add Entry" width="600">

5. Click **Generate a password**

    <img src="keepass-password-generator.png" alt="Click New" width="600">

6. Select only the following options and click **OK**:
    * Length of generated password: 81
    * Upper-case (A, B, C, ...)
    * Also include the following characters: 9
7. Click **OK** to save your seed

## Next steps

Now that you've got a seed, you can download the [Trinity wallet](https://trinity.iota.org/), enter your seed, and start sending transactions :tada:
