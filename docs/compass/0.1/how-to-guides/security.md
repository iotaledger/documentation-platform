# Compass Security Considerations

Compass is an open source Coordinator for an IOTA network. Given its role within the network the integrity of the Coordinator instance is crucial. 

When developing software there is always a balance between ease of use and security. Compass was developed as a simple tool to enable researchers, developers, and corporate to run their own Tangles. This caused development to focus on the ease of use, however there are advanced configurations that can improve the security of Compass. 

> Note: Compass is in continual development and is **only** to be used in a testing and analysis environment. 

In the following sections the security assumptions and possible attacks of Compass.

## Operating Assumptions
If the following assumptions are not true then the operation of Compass could be effected to the detriment of the Tangle it is operating within:
- Compass's operating environment is not compromised
- The Node interacting with Compass or the connection between them is it not compromised
- Compass's SEED has not been compromised
- The signing scheme used is not compromised


## Attack Scenarios
The following are a non-exhaustive list of attack scenarios related to Compass

**Compass's environment is compromised**
If the operating system that Compass is running within is compromised then it is possible to retrieve Compass's Seed. An attacker with the Seed could create fraudulent milestones and disrupt the operation of the network.

**Compass's Node or network connection to the Node is compromised**
If the Node that Compass is using is compromised then there are number of ways for an attacker to disrupt Compass or manipulate Compass to receive favorable treatment. Possible scenarios include:
- Returning tips chosen by the attacker which would prioritize their transactions over the regular tip selection algorithm.
- Returning tips that conflict with the ledger state (Double Spend) causing Compass to issue an inconsistent milestone. IRI will not accept this milestone and will printout errors. No more transactions will be confirmed.
- Node doesn't propagate Compass's milestone transactions to the rest of the network causing no more transactions to be confirmed.

**Compass's seed is compromised**
If the seed of Compass has been compromised then an adversary could issue **one** milestone before the Compass instance would error out. However, in this situation they would be able to continue as the network's adversary controlled Compass.


## Security Audit
Formal security audits have not been conducted on Compass to date. 

## Bounty Program
No public bounty program is available for Compass.