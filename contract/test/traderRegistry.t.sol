// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {console} from "forge-std/console.sol";
import { TraderRegistry } from "../src/traderRegistry.sol";

contract Registry is Test{
    TraderRegistry registry;
    address trader = address(0x1);

    function setUp() public{
        registry = new TraderRegistry();
    }

    function testDeployment() public view {
        address deployedRegistry = address(registry);
        console.log("this is registry::::::::::::::::::::::::", deployedRegistry);
    }

    function testDeployNotAddressNotZero() public view {
        assert(address(registry)!=(address(0)));
    }

    function testRegisterTrader() public{
        vm.prank(trader);
        registry.registerTrader();
    }

    function testActiveOnRegistration() public{
        vm.prank(trader);
        registry.registerTrader();

        (address traderAddr, bool active, ) = registry.traders(trader);

        assertTrue(active);
        console.log("this is active state::::::::::::::::::::::::::::",active);
        assertEq(traderAddr, trader);
    }

    function testDeactivateTrader() public{
        vm.prank(trader);
        registry.registerTrader();

        (address traderAddr, bool active, ) = registry.traders(trader);

        console.log("this is the trader:::::::::::::::::::::::", trader);
        console.log("this is trader address+++++++++++++",traderAddr);

        assertTrue(active);
        console.log("this is active state::::::::::::::::::::::::::::",active);
        assertEq(traderAddr, trader);

        vm.prank(traderAddr);
        registry.deactivateTrader();

        (, bool newActive, ) = registry.traders(trader);
        
        assertTrue(!newActive);
        console.log("this is active state after deactivation::::::::::::::::::::::::::::",newActive);
    }


}