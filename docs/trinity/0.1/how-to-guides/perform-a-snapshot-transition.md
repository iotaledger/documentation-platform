# Perform a snapshot transition

**During a global snapshot, old transactions are removed from the ledgers of IRI nodes to reduce the amount of memory that it uses. Therefore, after a global snapshot you must perform a snapshot transition so that the balance of your addresses can be updated.**

After a global snapshot, all transaction data is deleted and only addresses with a balance of at least 1i are kept. Because Trinity is stateful, it stores a copy of your transaction history after a snapshot. This means that after the global snapshot, you still see your transaction history.

If you don't see your correct balance, go to Account management > **Tools** > **Transition**.

**Note:** To access Account management on a mobile device, go to **Settings** > **Account management**. To access Account management on a desktop, go to the burger menu >  **Account** > **Account management**.

![photo of snapshot transition](../transition.jpg)
