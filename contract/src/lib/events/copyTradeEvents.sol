// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.30;

library CopyTradeEvents {

    event TradeAnnounced(address influencer, address tokenIn, address tokenOut, uint256 amountIn, uint256 minOut);
    event TradeCopied(address influencer, address follower, uint256 amountOut);
}