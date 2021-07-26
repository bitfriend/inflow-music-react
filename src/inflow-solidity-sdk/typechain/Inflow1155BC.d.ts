/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface Inflow1155BCInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "baseUri()": FunctionFragment;
    "burn(uint256,uint256)": FunctionFragment;
    "collateral()": FunctionFragment;
    "create(tuple)": FunctionFragment;
    "createPrice()": FunctionFragment;
    "getBurnPrice(uint8,uint256)": FunctionFragment;
    "getCreatorFee(uint256)": FunctionFragment;
    "getMintPrice(uint8,uint256)": FunctionFragment;
    "getRoyalties(uint256)": FunctionFragment;
    "getToken(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reserve()": FunctionFragment;
    "royalties(uint256,uint256)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setBaseUri(string)": FunctionFragment;
    "setContractMintEnabled(bool)": FunctionFragment;
    "setCreatePrice(uint256)": FunctionFragment;
    "setWhitelistEnabled(bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unwhitelist(address)": FunctionFragment;
    "updateRoyaltyAccount(uint256,address,address)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
    "whitelist(address)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "baseUri", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      {
        curve: BigNumberish;
        social: string;
        price: BigNumberish;
        socialBalance: BigNumberish;
        maxSupply: BigNumberish;
        uri: string;
        royalties: { account: string; value: BigNumberish }[];
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBurnPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMintPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyalties",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "reserve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "royalties",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setBaseUri", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setContractMintEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreatePrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelistEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unwhitelist", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateRoyaltyAccount",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseUri", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBurnPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMintPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reserve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "royalties", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseUri", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractMintEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreatePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelistEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRoyaltyAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Burned(address,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "Created(address,uint256,uint8,address,uint256,uint256,uint256,string)": EventFragment;
    "Minted(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RoyaltiesSet(uint256,tuple[])": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
    "Unwhitelisted(address)": EventFragment;
    "Whitelisted(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Created"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltiesSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unwhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Whitelisted"): EventFragment;
}

export class Inflow1155BC extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: Inflow1155BCInterface;

  functions: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    baseUri(overrides?: CallOverrides): Promise<[string]>;

    burn(
      tokenId: BigNumberish,
      minimumSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateral(overrides?: CallOverrides): Promise<[string]>;

    create(
      data: {
        curve: BigNumberish;
        social: string;
        price: BigNumberish;
        socialBalance: BigNumberish;
        maxSupply: BigNumberish;
        uri: string;
        royalties: { account: string; value: BigNumberish }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBurnPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCreatorFee(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMintPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;

    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [([string, BigNumber] & { account: string; value: BigNumber })[]]
    >;

    getToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          number,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          [BigNumber] & { _value: BigNumber },
          string
        ] & {
          curve: number;
          creator: string;
          social: string;
          price: BigNumber;
          socialBalance: BigNumber;
          maxSupply: BigNumber;
          supply: [BigNumber] & { _value: BigNumber };
          uri: string;
        }
      ]
    >;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWhitelisted(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mint(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reserve(overrides?: CallOverrides): Promise<[BigNumber]>;

    royalties(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { account: string; value: BigNumber }>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBaseUri(
      _baseUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContractMintEnabled(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCreatePrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWhitelistEnabled(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unwhitelist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRoyaltyAccount(
      tokenId: BigNumberish,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uri(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _uri: string }>;

    whitelist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  baseUri(overrides?: CallOverrides): Promise<string>;

  burn(
    tokenId: BigNumberish,
    minimumSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateral(overrides?: CallOverrides): Promise<string>;

  create(
    data: {
      curve: BigNumberish;
      social: string;
      price: BigNumberish;
      socialBalance: BigNumberish;
      maxSupply: BigNumberish;
      uri: string;
      royalties: { account: string; value: BigNumberish }[];
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getBurnPrice(
    curve: BigNumberish,
    supply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCreatorFee(
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMintPrice(
    curve: BigNumberish,
    supply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoyalties(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<([string, BigNumber] & { account: string; value: BigNumber })[]>;

  getToken(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      [BigNumber] & { _value: BigNumber },
      string
    ] & {
      curve: number;
      creator: string;
      social: string;
      price: BigNumber;
      socialBalance: BigNumber;
      maxSupply: BigNumber;
      supply: [BigNumber] & { _value: BigNumber };
      uri: string;
    }
  >;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWhitelisted(account: string, overrides?: CallOverrides): Promise<boolean>;

  mint(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reserve(overrides?: CallOverrides): Promise<BigNumber>;

  royalties(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { account: string; value: BigNumber }>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBaseUri(
    _baseUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContractMintEnabled(
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCreatePrice(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWhitelistEnabled(
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unwhitelist(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRoyaltyAccount(
    tokenId: BigNumberish,
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  whitelist(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    baseUri(overrides?: CallOverrides): Promise<string>;

    burn(
      tokenId: BigNumberish,
      minimumSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    collateral(overrides?: CallOverrides): Promise<string>;

    create(
      data: {
        curve: BigNumberish;
        social: string;
        price: BigNumberish;
        socialBalance: BigNumberish;
        maxSupply: BigNumberish;
        uri: string;
        royalties: { account: string; value: BigNumberish }[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getBurnPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreatorFee(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<([string, BigNumber] & { account: string; value: BigNumber })[]>;

    getToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        [BigNumber] & { _value: BigNumber },
        string
      ] & {
        curve: number;
        creator: string;
        social: string;
        price: BigNumber;
        socialBalance: BigNumber;
        maxSupply: BigNumber;
        supply: [BigNumber] & { _value: BigNumber };
        uri: string;
      }
    >;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWhitelisted(account: string, overrides?: CallOverrides): Promise<boolean>;

    mint(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reserve(overrides?: CallOverrides): Promise<BigNumber>;

    royalties(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { account: string; value: BigNumber }>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBaseUri(_baseUri: string, overrides?: CallOverrides): Promise<void>;

    setContractMintEnabled(
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setCreatePrice(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelistEnabled(
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unwhitelist(account: string, overrides?: CallOverrides): Promise<boolean>;

    updateRoyaltyAccount(
      tokenId: BigNumberish,
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    whitelist(account: string, overrides?: CallOverrides): Promise<boolean>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { account: string; operator: string; approved: boolean }
    >;

    Burned(
      burner?: string | null,
      tokenId?: BigNumberish | null,
      priceReceived?: null,
      nextMintPrice?: null,
      nextBurnPrice?: null,
      tokenSupply?: null,
      reserve?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        burner: string;
        tokenId: BigNumber;
        priceReceived: BigNumber;
        nextMintPrice: BigNumber;
        nextBurnPrice: BigNumber;
        tokenSupply: BigNumber;
        reserve: BigNumber;
      }
    >;

    Created(
      creator?: string | null,
      tokenId?: BigNumberish | null,
      curve?: null,
      social?: null,
      price?: null,
      socialBalance?: null,
      maxSupply?: null,
      uri?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        creator: string;
        tokenId: BigNumber;
        curve: number;
        social: string;
        price: BigNumber;
        socialBalance: BigNumber;
        maxSupply: BigNumber;
        uri: string;
      }
    >;

    Minted(
      minter?: string | null,
      tokenId?: BigNumberish | null,
      pricePaid?: null,
      nextMintPrice?: null,
      nextBurnPrice?: null,
      tokenSupply?: null,
      royaltyPaid?: null,
      reserve?: null,
      royaltyRecipient?: string | null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        minter: string;
        tokenId: BigNumber;
        pricePaid: BigNumber;
        nextMintPrice: BigNumber;
        nextBurnPrice: BigNumber;
        tokenSupply: BigNumber;
        royaltyPaid: BigNumber;
        reserve: BigNumber;
        royaltyRecipient: string;
      }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    RoyaltiesSet(
      tokenId?: null,
      royalties?: null
    ): TypedEventFilter<
      [
        BigNumber,
        ([string, BigNumber] & { account: string; value: BigNumber })[]
      ],
      {
        tokenId: BigNumber;
        royalties: ([string, BigNumber] & {
          account: string;
          value: BigNumber;
        })[];
      }
    >;

    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber[], BigNumber[]],
      {
        operator: string;
        from: string;
        to: string;
        ids: BigNumber[];
        values: BigNumber[];
      }
    >;

    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        operator: string;
        from: string;
        to: string;
        id: BigNumber;
        value: BigNumber;
      }
    >;

    URI(
      value?: null,
      id?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { value: string; id: BigNumber }>;

    Unwhitelisted(
      account?: string | null
    ): TypedEventFilter<[string], { account: string }>;

    Whitelisted(
      account?: string | null
    ): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseUri(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      minimumSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateral(overrides?: CallOverrides): Promise<BigNumber>;

    create(
      data: {
        curve: BigNumberish;
        social: string;
        price: BigNumberish;
        socialBalance: BigNumberish;
        maxSupply: BigNumberish;
        uri: string;
        royalties: { account: string; value: BigNumberish }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getBurnPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreatorFee(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWhitelisted(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reserve(overrides?: CallOverrides): Promise<BigNumber>;

    royalties(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBaseUri(
      _baseUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContractMintEnabled(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCreatePrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWhitelistEnabled(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unwhitelist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRoyaltyAccount(
      tokenId: BigNumberish,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseUri(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      minimumSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    create(
      data: {
        curve: BigNumberish;
        social: string;
        price: BigNumberish;
        socialBalance: BigNumberish;
        maxSupply: BigNumberish;
        uri: string;
        royalties: { account: string; value: BigNumberish }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBurnPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreatorFee(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMintPrice(
      curve: BigNumberish,
      supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    royalties(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBaseUri(
      _baseUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContractMintEnabled(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCreatePrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelistEnabled(
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unwhitelist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRoyaltyAccount(
      tokenId: BigNumberish,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uri(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
