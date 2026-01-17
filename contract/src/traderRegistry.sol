// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RegistryEvents} from "./lib/events/traderRegistryEvents.sol";
import {AlreadyRegistered, NotActive, AlreadyFollowing, NotFollowing} from "./lib/errors/traderRegistryErrors.sol";

/**
 * @title TraderRegistry
 * @author Your Name
 * @notice A contract for registering traders and allowing users to follow/unfollow them.
 */
contract TraderRegistry {
    struct Trader {
        address traderAddress;
        bool active;
        uint256 joinedAt;
    }

    mapping(address => Trader) public traders;
    mapping(address => mapping(address => bool)) public isFollower;
    mapping(address => address[]) public traderFollowers;
    mapping(address => address[]) public traderfollowing;

    /**
     * @notice Registers the caller as a trader.
     * @dev Emits a {TraderRegistered} event.
     * Requirements:
     * - The caller must not already be an active trader.
     */
    function registerTrader() public {
        if (traders[msg.sender].active) revert AlreadyRegistered();
        traders[msg.sender] = Trader({
            traderAddress: msg.sender,
            active: true,
            joinedAt: block.timestamp
        });
        emit RegistryEvents.TraderRegistered(msg.sender);
    }

    /**
     * @notice Deactivates the caller's trader status.
     * @dev Emits a {TraderDeactivated} event.
     * Requirements:
     * - The caller must be an active trader.
     */
    function deactivateTrader() public {
        if (!traders[msg.sender].active) revert NotActive();

        traders[msg.sender].active = false;

        emit RegistryEvents.TraderDeactivated(msg.sender);
    }

    /**
     * @notice Follows a trader.
     * @param _trader The address of the trader to follow.
     * @dev Emits a {TraderFollowed} event.
     * Requirements:
     * - The trader must be active.
     * - The caller must not already be following the trader.
     */
    function followTrader(address _trader) external {
        if (!traders[_trader].active) revert NotActive();
        if (isFollower[_trader][msg.sender]) revert AlreadyFollowing();

        isFollower[_trader][msg.sender] = true;
        traderFollowers[_trader].push(msg.sender);
        traderfollowing[msg.sender].push(_trader);

        emit RegistryEvents.TraderFollowed(_trader, msg.sender);
    }

    /**
     * @notice Unfollows a trader.
     * @param _trader The address of the trader to unfollow.
     * @dev Emits a {TraderUnfollowed} event.
     * Requirements:
     * - The caller must be following the trader.
     */
    function unfollowTrader(address _trader) external {
        if (!isFollower[_trader][msg.sender]) revert NotFollowing();

        isFollower[_trader][msg.sender] = false;
        _removeTraderFollower(_trader, msg.sender);
        _removeTraderFollowing(msg.sender, _trader);

        emit RegistryEvents.TraderUnfollowed(_trader, msg.sender);
    }

    /**
     * @notice Gets the list of followers for a trader.
     * @param _trader The address of the trader.
     * @return A list of addresses following the trader.
     */
    function getFollowers(address _trader) external view returns (address[] memory) {
        return traderFollowers[_trader];
    }

    /**
     * @notice Gets the list of traders a user is following.
     * @param _user The address of the user.
     * @return A list of addresses the user is following.
     */
    function getFollowing(address _user) external view returns (address[] memory) {
        return traderfollowing[_user];
    }

    /**
     * @dev Removes a follower from a trader's follower list.
     * @param _trader The trader's address.
     * @param _follower The follower's address to remove.
     */
    function _removeTraderFollower(address _trader, address _follower) private {
        address[] storage followers = traderFollowers[_trader];
        for (uint i = 0; i < followers.length; i++) {
            if (followers[i] == _follower) {
                followers[i] = followers[followers.length - 1];
                followers.pop();
                break;
            }
        }
    }

    /**
     * @dev Removes a trader from a user's following list.
     * @param _user The user's address.
     * @param _trader The trader's address to remove.
     */
    function _removeTraderFollowing(address _user, address _trader) private {
        address[] storage following = traderfollowing[_user];
        for (uint i = 0; i < following.length; i++) {
            if (following[i] == _trader) {
                following[i] = following[following.length - 1];
                following.pop();
                break;
            }
        }
    }
}
