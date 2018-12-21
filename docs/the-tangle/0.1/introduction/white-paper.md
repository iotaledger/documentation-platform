# The Tangle

The Tangle is the data structure at the heart of IOTA. It was formally introduced in `The Tangle` whitepaper by Professor Serguei Popov and published in 2015. 

IOTA uses a [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph) instead of a [blockchain](https://en.wikipedia.org/wiki/Blockchain) to store its ledger, with the main motivation being scalability. A blockchain has an inherent transaction rate limit, because all participants agree on the longest chain, and discard forks and side branches. The Tangle, on the other hand, allows different branches of the DAG to eventually merge, resulting in a much faster overall throughput.

The following sections will explain in depth the main components of The Tangle. Particularly, the consensus mechanism, proof of work and the 'tip selection algorithm'.

## Further Research

The IOTA Foundation has an active research departement focusing on undertsanding and developing the Tangle and related protocols. To see the research that has been already published, please view our [Academic Papers](https://www.iota.org/research/academic-papers) and for an idea of our research roadmap go to the [Roadmap](https://www.iota.org/research/roadmap) page.