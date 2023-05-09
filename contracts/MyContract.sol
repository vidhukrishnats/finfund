pragma solidity ^0.8.0;

contract FundTransfer {
    
    mapping(address => uint256) balances;
    
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
    
    function transfer(address payable recipient, uint256 amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        
        balances[msg.sender] -= amount;
        recipient.transfer(amount);
    }
    
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}

