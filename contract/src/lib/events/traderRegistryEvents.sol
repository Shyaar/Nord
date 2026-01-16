// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

library RegistryEvents {

    event TraderRegistered(address indexed trader);
    event TraderDeactivated(address indexed trader);
    event TraderFollowed(address indexed trader, address indexed follower);
    event TraderUnfollowed(address indexed trader, address indexed follower);
    // event CommissionUpdated(address indexed trader, uint16 oldCommission, uint16 newCommission);
    
}