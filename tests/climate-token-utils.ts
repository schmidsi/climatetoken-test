import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ClaimApproved,
  NewAdminAdded,
  NewClaim,
  NewFarmer,
  Rewarded,
  Transfer
} from "../generated/ClimateToken/ClimateToken"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createClaimApprovedEvent(farmer: Address): ClaimApproved {
  let claimApprovedEvent = changetype<ClaimApproved>(newMockEvent())

  claimApprovedEvent.parameters = new Array()

  claimApprovedEvent.parameters.push(
    new ethereum.EventParam("farmer", ethereum.Value.fromAddress(farmer))
  )

  return claimApprovedEvent
}

export function createNewAdminAddedEvent(sender: Address): NewAdminAdded {
  let newAdminAddedEvent = changetype<NewAdminAdded>(newMockEvent())

  newAdminAddedEvent.parameters = new Array()

  newAdminAddedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return newAdminAddedEvent
}

export function createNewClaimEvent(claimant: Address): NewClaim {
  let newClaimEvent = changetype<NewClaim>(newMockEvent())

  newClaimEvent.parameters = new Array()

  newClaimEvent.parameters.push(
    new ethereum.EventParam("claimant", ethereum.Value.fromAddress(claimant))
  )

  return newClaimEvent
}

export function createNewFarmerEvent(newFarmer: Address): NewFarmer {
  let newFarmerEvent = changetype<NewFarmer>(newMockEvent())

  newFarmerEvent.parameters = new Array()

  newFarmerEvent.parameters.push(
    new ethereum.EventParam("newFarmer", ethereum.Value.fromAddress(newFarmer))
  )

  return newFarmerEvent
}

export function createRewardedEvent(rewardee: Address): Rewarded {
  let rewardedEvent = changetype<Rewarded>(newMockEvent())

  rewardedEvent.parameters = new Array()

  rewardedEvent.parameters.push(
    new ethereum.EventParam("rewardee", ethereum.Value.fromAddress(rewardee))
  )

  return rewardedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
