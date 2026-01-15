// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

contract UserRegistry {

  struct User {
    string id;
    address user_address;
    string user_name;
    bool isInfluencer;
    bool registered;
  }  


    mapping (address => address[]) public followers;
    mapping (address => address[]) public following;
}