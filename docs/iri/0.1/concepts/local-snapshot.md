# Local snapshot

Short intro to local snapshots, why they're necessary, and how to use them.


//================TODO=============================================
TO ADD:
It will not weaken the security of the tangle, since its consensus is fundamentally different from other DLT’s. Concepts like “longest chain wins” (which is the basic idea behind most blockchain based consensus models) doesn’t exist in IOTA and in fact it even strengthens the security because one of the potential attack vectors (“mining” a parasitic sidetangle for a long time in secret and then publish it to the network) will be less effective if a large number of nodes have already pruned the very old transactions that this side tangle would have to attach to.

QUESTIONS:

Can you become a local snapshot node at any time by stopping an IRI node and changing the confiration options to `LOCAL_SNAPSHOT_ENABLED`=`TRUE`?

Is it possible to perform local snapshops with the exception of a set of arbitraly choosen transactions — lets call them MyPermaTransactions?

Are snapshot files used by the IRI only when it runs for the first time in order to create the ledger (RockDB database)?

What is the data in the snapshot metadata file?
ZGOFRIQUBGUIGZRGNUEYVDZUVXBS9WFTNVMCZIWJII9GDEPCEERSGRNIJYCFTACCMQLKPLXUNGLKZ9999
917780
1544531791
211
101
MBVHSITOOMNWUWNMQKTXNZQZM9CDLUUOGMQQKLLGQJMDBNSOTGAIHTUFCNJZICIBQEJGTF9KNMBI99999;917740