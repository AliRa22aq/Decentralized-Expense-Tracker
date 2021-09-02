// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Tracker {
    
    // Data type of a transaction
    struct Transaction {
        uint id;
        string description;
        int transactionAmount;
    }

    
    // An array of all transactions
    Transaction[] transactions;
    
    
    // Read/write transactions
    mapping(uint => Transaction) public particularTransactions;


    // Store transactions Count
    uint public transactionsCount = 0;


    function addTransection (string memory _description, int _transactionAmount) public {
        transactionsCount ++;
        Transaction memory _tra = Transaction(transactionsCount, _description, _transactionAmount);
        particularTransactions[transactionsCount] = _tra;
        transactions.push(_tra);
    }
    
    
    function getTransactions() public view returns(Transaction[] memory) {
        return transactions;
    }

}


