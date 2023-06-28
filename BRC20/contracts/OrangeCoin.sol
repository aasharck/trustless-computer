// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OrangeCoin is ERC20 {
    address public owner = 0x0B0bebABf5f9ce87EeE5c3b6046bB026D34da448;
    constructor() ERC20("Orange Coin", "ORNG") {
        _mint(owner, 1_000_000e18);
    }
}