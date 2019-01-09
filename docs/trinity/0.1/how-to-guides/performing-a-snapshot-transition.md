# Performing a snapshot transition

Following a global snapshot, users must perform a snapshot transition.

<dl><dt>Global snapshot</dt><dd>Removal of old transactions from the distributed ledger to reduce the amount of memory needed to run an IRI node.</dd></dl>

Every so often, a global snapshot is performed to reduce the size of the distributed ledger. All transaction data is deleted and only addresses with a balance of at least 1i are kept. Because Trinity is stateful, it stores a copy of your transaction history after a snapshot. This means that after the global snapshot, you still see your transaction history.

If you don't see your correct balance, go to Account management > **Tools** > **Transition**.

To access Account management on a mobile device, go to **Settings** > **Account management**.

To access Account management on a desktop, go to the burger menu >  **Account** > **Account management**.

![photo of snapshot transition](../transition.jpg)
