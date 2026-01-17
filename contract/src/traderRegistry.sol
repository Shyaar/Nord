// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;
import {RegistryEvents} from "./lib/events/traderRegistryEvents.sol";

contract TraderRegistry {
    uint16 private constant COPY_COMMISSION_BPS = 500;

    struct Trader {
        address trader_Address;
        bool active;
        uint256 joined_At;
    }

    mapping(address => Trader) public traders;
    mapping(address => mapping(address => bool)) public is_Follower;
    mapping(address => address[]) public followers;
    mapping(address => address[]) public following;

    function registerTrader() public {
        require(!traders[msg.sender].active, "Already registered");
        traders[msg.sender] = Trader({
            trader_Address: msg.sender,
            active: true,
            joined_At: block.timestamp
        });
        emit RegistryEvents.TraderRegistered(msg.sender);
    }

    function deactivateTrader() public {
        require(traders[msg.sender].active, "user not active");

        traders[msg.sender].active = false;

        emit RegistryEvents.TraderDeactivated(msg.sender);
    }

    function followTrader(address _trader) external {
        require(traders[_trader].active, "Trader not active");
        require(!isFollower[_trader][msg.sender], "Already following");

        isFollower[_trader][msg.sender] = true;
        traderFollowers[_trader].push(msg.sender);
        followerTraders[msg.sender].push(_trader);

        emit RegistryEvents.TraderFollowed(_trader, msg.sender);
    }

    function unfollowTrader(address _trader) external {
        require(isFollower[_trader][msg.sender], "Not following trader");

        isFollower[_trader][msg.sender] = false;

        emit RegistryEvents.TraderUnfollowed(_trader, msg.sender);
    }
}
