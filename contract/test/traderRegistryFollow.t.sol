// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {console} from "forge-std/console.sol";
import { TraderRegistry } from "../src/traderRegistry.sol";
import {AlreadyRegistered} from "../src/lib/errors/traderRegistryErrors.sol";

contract RegistryFollow is Test{
    TraderRegistry registry;
    address trader1 = address(0x1);
    address trader2 = address(0x2);
    address follower = address(0x3);

    function setUp() public{
        registry = new TraderRegistry();
        vm.prank(trader1);
        registry.registerTrader();
        vm.prank(trader2);
        registry.registerTrader();
    }

    function test_RevertIf_RegisterTraderTwice() public {
        vm.prank(trader1);
        vm.expectRevert(AlreadyRegistered.selector);
        registry.registerTrader();
    }

    function testFollowTrader() public {
        vm.prank(follower);
        registry.followTrader(trader1);

        assertTrue(registry.isFollower(trader1, follower));
        address[] memory followers = registry.getFollowers(trader1);
        assertEq(followers.length, 1);
        assertEq(followers[0], follower);

        address[] memory following = registry.getFollowing(follower);
        assertEq(following.length, 1);
        assertEq(following[0], trader1);
    }

    function testUnfollowTrader() public {
        vm.prank(follower);
        registry.followTrader(trader1);
        
        vm.prank(follower);
        registry.unfollowTrader(trader1);

        assertFalse(registry.isFollower(trader1, follower));
        address[] memory followers = registry.getFollowers(trader1);
        assertEq(followers.length, 0);

        address[] memory following = registry.getFollowing(follower);
        assertEq(following.length, 0);
    }
}


