import {
  Approval as ApprovalEvent,
  ClaimApproved as ClaimApprovedEvent,
  NewAdminAdded as NewAdminAddedEvent,
  NewClaim as NewClaimEvent,
  NewFarmer as NewFarmerEvent,
  Rewarded as RewardedEvent,
  Transfer as TransferEvent
} from "../generated/ClimateToken/ClimateToken"
import {
  Approval,
  ClaimApproved,
  NewAdminAdded,
  NewClaim,
  NewFarmer,
  Rewarded,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimApproved(event: ClaimApprovedEvent): void {
  let entity = new ClaimApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.farmer = event.params.farmer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewAdminAdded(event: NewAdminAddedEvent): void {
  let entity = new NewAdminAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewClaim(event: NewClaimEvent): void {
  let entity = new NewClaim(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimant = event.params.claimant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewFarmer(event: NewFarmerEvent): void {
  let entity = new NewFarmer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFarmer = event.params.newFarmer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewarded(event: RewardedEvent): void {
  let entity = new Rewarded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rewardee = event.params.rewardee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
