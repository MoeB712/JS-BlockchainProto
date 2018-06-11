/*
** BLOCKCHAIN CORE
*/

class Blockchain {

/* Constructor Function */
    constructor(chain, pendingTransactions) {
        this.chain = [];
        this.pendingTransactions = [];
    }

/* Class Methods */
    /* Method: Create a new block with transactions and push it to the chain */
    createNewBlock(nonce, previousBlockHash, hash) {
        
        /* New block object */
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        };

        /* Create empty transaction list */
        this.pendingTransactions = [];
        /* Push the newly created block to the chain */
        this.chain.push(newBlock);

        return newBlock;
    }

    /* Method: Get last block in the chain  */
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    /* Method: Create a new transaction  */
    createNewTransaction(amount, senderAddr, recipientAddr) {
        
        /* New transaction object */
        const newTransaction = {
            amount: amount,
            senderAddr: senderAddr,
            recipientAddr: recipientAddr
        }

        /* Push the new transaction in the pendingTransactions array */
        this.pendingTransactions.push(newTransaction);

        /* Return the index of the new block */
        return this.getLastBlock()['index'] + 1;
    }

}

module.exports = Blockchain;