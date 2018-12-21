# Compass Functions

Compass was developed as 'simple' coordinator. Due to this the code and operation of the software is simple and relatively easy to read. Due to this Compass has three main phases during operation: Setup and Running. 

### Tree Generation
Before Compass can start we need to generate a Merkle tree. This tree will make sure every milestone created by Compass references back to the fixed address of the Coordinator known by every IRI instance in your tangle (in this example just a single node). 

This way only the Compass coordinator with the right seed can issue valid milestones for this tangle. This is due to the ability for nodes to easily verify the Merkle root of any given leaf. 

### Compass - Setup()
During the setup phase Compass takes a number of steps to initialize.

**Steps**
1. Compass asks the Node for the latest Milestone. 
    -  If the flag `-bootstrap` is passed it checks if there is no milestone on the IRI Node.
2. Retrieves the latest Node milestone index and stores it.
    - If there is no latest milestone it retrieves the index from the configuration file
3. Retrieves the Tick & Depth of the milestones from the config file

### Compass - Start()
In this phase Compass enters an indefinite `while` loop and begins to issue milestones.

**Steps**
1. Check is the `-bootstrap` flag has been called
   - If true then create a chain of milestones, referencing the previous milestones, to bootstrap the beginning of the network.
   - Exit Bootstrap mode after 4 milestones. 
2. Issue milestones
    - Ask the Node for transactions to approve
    - Generate the milestone
    - Ask the Node to broadcast the milestone
3. Sleep until next tick