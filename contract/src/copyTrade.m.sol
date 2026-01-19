// // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;


contract Copy_Trade {
    
mapping(address => Trade[]) public influencerTrades;

    /// @notice Trade structure
    struct Trade {
        address tokenIn;
        address tokenOut;
        uint256 amountIn;
        uint256 minOut;
        uint256 timestamp;
    }

    ///@notice track followtrader last trade
    mapping(address => Trade) public lastTrade;
}
