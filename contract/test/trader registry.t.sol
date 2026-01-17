// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import { TraderRegistry } from "../src/traderRegistry.sol";

contract Registry is Test{
    TraderRegistry registry;
    address trader = address(0x1);

    function setUp() public{
        registry = new TraderRegistry();

    }

    function testDeployment() public{
        address deployed_registy = address(registry);
        console.log("this is registry::::::::::::::::::::::::", deployed_registy);

    }

    function testDeployNotAddressNotZero() public{
        assert(address(registry)!=(address(0)));
    }


    function testRegisgetTrader() public{
        vm.prank(trader);

        registry.registerTrader();
    }
}