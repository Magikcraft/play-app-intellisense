/**
 * TypeScript Definitons for ScriptCraft
 *
 * Written by Magikcraft.io
 *
 */
interface Player {
    addPotionEffect(effect: any): void;
    getFoodLevel(): number;
    setFoodLevel(level: number): void;
    getWorld(): World;
    getName(): string;
    getLocation(): Location;
    getEyeLocation(): Location;
    getLineOfSight(blocks: BukkitMaterial[], maxDistance: number): Block[];
    launchProjectile(projectileType: any): void;
    isSneaking(): boolean;
}

/*********************
## Events Helper Module (SpigotMC version)
The Events helper module provides a suite of functions - one for each possible event.
For example, the events.blockBreak() function is just a wrapper function which calls events.on(org.bukkit.event.block.BlockBreakEvent, callback, priority)
This module is a convenience wrapper for easily adding new event handling functions in Javascript.
At the in-game or server-console prompt, players/admins can type `events.` and use TAB completion
to choose from any of the approx. 160 different event types to listen to.

### Usage

		events.blockBreak( function( event ) {
			echo( event.player, 'You broke a block!');
		});

The crucial difference is that the events module now has functions for each of the built-in events. The functions are accessible via TAB-completion so will help beginning programmers to explore the events at the server console window.

***/

interface BukkitEvent {
	/**
	 * Convenience method for providing a user-friendly identifier.
	 * @returns {string}
	 * @memberof Event
	 */
	getEventName(): string
}

interface BlockEvent extends BukkitEvent {
	/**
	 * The block involved in this event.
	 * @type {Block}
	 * @memberof BlockEvent
	 */
	block: Block
	/**
	 * Gets the block involved in this event.
	 * @returns {Block}
	 * @memberof BlockEvent
	 */
	getBlock(): Block
}

interface BlockBreakEvent extends BlockEvent {
	/**
	* Sets whether or not the block will drop items as it normally would.
	*
	* @memberof blockBreakEvent
	*/
	setDropItems(dropItems: boolean): void
	/**
	* Gets whether or not the block will drop items.

	*
	* @memberof blockBreakEvent
	*/
	isDropItems(): boolean
	/**
	* Gets the Player that is breaking the block involved in this event.
	*
	* @memberof blockBreakEvent
	*/
	getPlayer(): Player
	/**
	* Gets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins
	*
	* @memberof blockBreakEvent
	*/
	isCancelled(): boolean
	/**
	* Sets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins.
	* @memberof blockBreakEvent
	*/
	setCancelled(cancel: boolean): void
}

interface BlockBurnEvent extends BlockEvent {
	/**
	* Gets the block which ignited this block.
	* @returns {Block}
	* @memberof BlockBurnEvent
	*/
	getIgnitingBlock(): Block
	/**
	* Gets the cancellation state of this event.
	* @returns {boolean}
	* @memberof BlockBurnEvent
	*/
	isCancelled(): boolean
	/**
	* Sets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins.
	* @param {boolean} cancel
	* @memberof BlockBurnEvent
	*/
	setCancelled​(cancel: boolean)
}

interface BlockCanBuildEvent {
	/**
	* Gets the BlockData that we are trying to place.
	* @returns {BlockData}
	* @memberof BlockCanBuildEvent
	*/
	getBlockData(): BlockData
	/**
	* Gets the Material that we are trying to place.
	* @returns {BukkitMaterial}
	* @memberof BlockCanBuildEvent
	*/
	getMaterial(): BukkitMaterial
	/**
	* Gets whether or not the block can be built here.
	* @returns {boolean}
	* @memberof BlockCanBuildEvent
	*/
	isBuildable(): boolean
	/**
	* Sets whether the block can be built here or not.
	* @param {boolean} cancel
	* @memberof BlockCanBuildEvent
	*/
	setBuildable​(cancel: boolean): void
}

interface BlockDamageEvent extends BlockEvent {
	/**
	 * Gets if the block is set to instantly break when damaged by the player.
	 *
	 * @returns {boolean}
	 * @memberof BlockDamageEvent
	 */
	getInstaBreak(): boolean
	/**
	 * Gets the ItemStack for the item currently in the player's hand.
	 * @returns {ItemStack}
	 * @memberof BlockDamageEvent
	 */
	getItemInHand(): ItemStack
	/**
	 * Gets the player damaging the block involved in this event.
	 * @returns {Player}
	 * @memberof BlockDamageEvent
	 */
	getPlayer(): Player
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockDamageEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockDamageEvent
	 */
	setCancelled​(cancel: boolean): void
	/**
	 * Sets if the block should instantly break when damaged by the player.
	 * @param {boolean} bool
	 * @memberof BlockDamageEvent
	 */
	setInstaBreak​(bool: boolean): void
}

interface BlockDispenseEvent {
	/**
	 * Gets the item that is being dispensed.
	 * @returns {ItemStack}
	 * @memberof BlockDispenseEvent
	 */
	getItem(): ItemStack
	/**
	 * Gets the velocity.
	 * @returns {Vector}
	 * @memberof BlockDispenseEvent
	 */
	getVelocity(): Vector
	/**
	 * Gets the cancellation state of this event.
	 * @memberof BlockDispenseEvent
	 */
	isCancelled()
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockDispenseEvent
	 */
	setCancelled​(cancel: boolean)
	/**
	 * Sets the item being dispensed.
	 * @param {ItemStack} item
	 * @memberof BlockDispenseEvent
	 */
	setItem​(item: ItemStack)
	/**
	 * Sets the velocity of the item being dispensed.
	 * @param {Vector} vel
	 * @memberof BlockDispenseEvent
	 */
	setVelocity​(vel: Vector)
}

interface BlockExplodeEvent {
	/**
	 * Returns the list of blocks that would have been removed or were removed from the explosion event.
	 *
	 * @returns {Block[]}
	 * @memberof BlockExplodeEvent
	 */
	blockList(): Block[]
	/**
	 * Returns the percentage of blocks to drop from this explosion
	 * @returns {number}
	 * @memberof BlockExplodeEvent
	 */
	getYield(): number
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockExplodeEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockExplodeEvent
	 */
	setCancelled​(cancel: boolean): void
	/**
	 * Sets the percentage of blocks to drop from this explosion
	 * @param {number} yieldBlocks
	 * @memberof BlockExplodeEvent
	 */
	setYield​(yieldBlocks: number): void
}

interface BlockExpEvent {
	/**
	 * Get the experience dropped by the block after the event has processed
	 * @returns {number}
	 * @memberof BlockExpEvent
	 */
	getExpToDrop(): number
	/**
	 * Set the amount of experience dropped by the block after the event has processed
	 * @param {number} exp
	 * @memberof BlockExpEvent
	 */
	setExpToDrop​(exp: number)
}

interface BlockFadeEvent {
	/**
	 * Gets the state of the block that will be fading, melting or disappearing.
	 * @returns {BlockState}
	 * @memberof BlockFadeEvent
	 */
	getNewState(): BlockState
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockFadeEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockFadeEvent
	 */
	setCancelled​(cancel: boolean)
}

/**
 * Called when a block grows naturally in the world.
	Examples:

	Wheat
	Sugar Cane
	Cactus
	Watermelon
	Pumpkin
	If a Block Grow event is cancelled, the block will not grow.
 *
 * @interface BlockGrowEvent
 * @extends {BlockEvent}
 */
interface BlockGrowEvent extends BlockEvent {
	/**
	 * Gets the state of the block where it will form or spread to.
	 * @returns {BlockState}
	 * @memberof BlockGrowEvent
	 */
	getNewState(): BlockState
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockGrowEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockGrowEvent
	 */
	setCancelled(cancel: boolean)
}
/**
 * Called when a block is formed or spreads based on world conditions.
	Use BlockSpreadEvent to catch blocks that actually spread and don't just "randomly" form.

	Examples:

	Snow forming due to a snow storm.
	Ice forming in a snowy Biome like Taiga or Tundra.
	Obsidian / Cobblestone forming due to contact with water.
	Concrete forming due to mixing of concrete powder and water.
	If a Block Form event is cancelled, the block will not be formed.
 *
 * @interface BlockFormEvent
 * @extends {BlockGrowEvent}
 */
interface BlockFormEvent extends BlockGrowEvent {
}

/**
 * Represents events with a source block and a destination block, currently only applies to liquid (lava and water) and teleporting dragon eggs.
	If a Block From To event is cancelled, the block will not move (the liquid will not flow).
 *
 * @interface BlockFromToEvent
 */
interface BlockFromToEvent extends BlockEvent {
	/**
	 * Gets the BlockFace that the block is moving to.
	 *
	 * @returns {BlockFace}
	 * @memberof BlockFromToEvent
	 */
	getFace(): BlockFace
	/**
	 * Convenience method for getting the faced Block.
	 *
	 * @returns {Block}
	 * @memberof BlockFromToEvent
	 */
	getToBlock(): Block
	/**
	 * Gets the cancellation state of this event.
	 *
	 * @returns {boolean}
	 * @memberof BlockFromToEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the cancellation state of this event.
	 *
	 * @param {boolean} cancel
	 * @memberof BlockFromToEvent
	 */
	setCancelled(cancel: boolean)
}

/**
 * Called when a block is ignited. If you want to catch when a Player places fire, you need to use BlockPlaceEvent.
	If a Block Ignite event is cancelled, the block will not be ignited.
 *
 * @interface BlockIgniteEvent
 */
interface BlockIgniteEvent extends BlockEvent {
	/**
	 * Gets the cause of block ignite.
	 * @returns {number}
	 * @memberof BlockIgniteEvent
	 */
	getCause(): number
	/**
	 * Gets the block which ignited this block
	 * @returns {Block}
	 * @memberof BlockIgniteEvent
	 */
	getIgnitingBlock(): Block
	/**
	 * Gets the entity who ignited this block
	 * @returns {Entity}
	 * @memberof BlockIgniteEvent
	 */
	getIgnitingEntity(): Entity
	/**
	 * Gets the player who ignited this block
	 * @returns {Player}
	 * @memberof BlockIgniteEvent
	 */
	getPlayer(): Player
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockIgniteEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockIgniteEvent
	 */
	setCancelled​(cancel: boolean)
}

interface BlockPhysicsEvent extends BlockEvent {
	/**
	 * Gets the type of block that changed, causing this event
	 * @returns {BukkitMaterial}
	 * @memberof BlockPhysicsEvent
	 */
	getChangedType(): BukkitMaterial
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockPhysicsEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockPhysicsEvent
	 */
	setCancelled(cancel: boolean)
}

interface BlockPistonEvent extends BlockEvent {
	/**
	 * Return the direction in which the piston will operate.
	 * @returns {BlockFace}
	 * @memberof BlockPistonEvent
	 */
	getDirection(): BlockFace
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockPistonEvent
	 */
	isCancelled(): boolean
	/**
	 * Returns true if the Piston in the event is sticky.
	 * @returns {boolean}
	 * @memberof BlockPistonEvent
	 */
	isSticky(): boolean
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancelled
	 * @memberof BlockPistonEvent
	 */
	setCancelled(cancelled: boolean)
}

interface BlockPistonExtendEvent extends BlockPistonEvent {
	/**
	 * Get an immutable list of the blocks which will be moved by the extending.
	 * @returns {Block[]}
	 * @memberof BlockPistonExtendEvent
	 */
	getBlocks(): Block[]
}

interface BlockPistonRetractEvent extends BlockPistonEvent {
	/**
	* Get an immutable list of the blocks which will be moved by the extending.
	* @returns {Block[]}
	* @memberof BlockPistonExtendEvent
	*/
	getBlocks(): Block[]
	/**
	 * Gets the location where the possible moving block might be if the retracting piston is sticky.
	 * @returns {Location}
	 * @memberof BlockPistonRetractEvent
	 */
	getRetractLocation(): Location
}

/**
 * Called when a block is placed by a player.
	If a Block Place event is cancelled, the block will not be placed.
 * @interface BlockPlaceEvent
 */
interface BlockPlaceEvent extends BlockEvent {
	/**
	 * Gets the value whether the player would be allowed to build here.
	 * @returns {boolean}
	 * @memberof BlockPlaceEvent
	 */
	canBuild(): boolean
	/**
	 * Gets the block that this block was placed against
	 * @returns {Block}
	 * @memberof BlockPlaceEvent
	 */
	getBlockAgainst(): Block
	/**
	 * Clarity method for getting the placed block.
	 * @returns {Block}
	 * @memberof BlockPlaceEvent
	 */
	getBlockPlaced(): Block
	/**
	 * Gets the BlockState for the block which was replaced.
	 *
	 * @returns {BlockState}
	 * @memberof BlockPlaceEvent
	 */
	getBlockReplacedState(): BlockState
	/**
	 * Gets the hand which placed the block
	 * @returns {EquipmentSlot}
	 * @memberof BlockPlaceEvent
	 */
	getHand(): EquipmentSlot
	/**
	 * Gets the item in the player's hand when they placed the block.
	 * @returns {ItemStack}
	 * @memberof BlockPlaceEvent
	 */
	getItemInHand(): ItemStack
	/**
	 * Gets the player who placed the block involved in this event.
	 * @returns {Player}
	 * @memberof BlockPlaceEvent
	 */
	getPlayer(): Player
	/**
	 * Gets the cancellation state of this event.
	 * @returns {boolean}
	 * @memberof BlockPlaceEvent
	 */
	isCancelled(): boolean
	/**
	 * Sets the canBuild state of this event.
	 * @param {boolean} canBuild
	 * @memberof BlockPlaceEvent
	 */
	setBuild​(canBuild: boolean): void
	/**
	 * Sets the cancellation state of this event.
	 * @param {boolean} cancel
	 * @memberof BlockPlaceEvent
	 */
	setCancelled(cancel: boolean): void
}

/**
 * Called when a redstone current changes
 * @interface BlockRedstoneEvent
 * @extends {BlockEvent}
 */
interface BlockRedstoneEvent extends BlockEvent {
	/**
	 * Gets the new current of this block
	 * @returns {number}
	 * @memberof BlockRedstoneEvent
	 */
	getNewCurrent(): number
	/**
	 * Gets the old current of this block
	 * @returns {number}
	 * @memberof BlockRedstoneEvent
	 */
	getOldCurrrent(): number
	/**
	 * Sets the new current of this block
	 * @param {number} newCurrent
	 * @memberof BlockRedstoneEvent
	 */
	setNewCurrent(newCurrent: number)
}

declare module 'events' {
	/*********************
	### events.blockBreak()

	Called when a block is broken by a player.
	If you wish to have the block drop experience, you must set the experience value above 0. By default, experience will be set in the event if:

	The player is not in creative or adventure mode
	The player can loot the block (ie: does not destroy it completely, by using the correct tool)
	The player does not have silk touch
	The block drops experience in vanilla Minecraft
	Note: Plugins wanting to simulate a traditional block drop should set the block to air and utilize their own methods for determining what the default drop for the block being broken is and what to do about it, if anything.

	If a Block Break event is cancelled, the block will not break and experience will not drop.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBreakEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/

	export const blockBreak: (callback: (event: BlockBreakEvent) => boolean | void, priority?: any) => any

	/*********************
	### events.blockBurn()

	Called when a block is destroyed as a result of being burnt by fire.
	If a Block Burn event is cancelled, the block will not be destroyed as a result of being burnt by fire.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBurnEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockBurn: (callback: (event: BlockBurnEvent) => boolean | void, priority?: any) => any



	/*********************
	### events.blockCanBuild()

	Called when we try to place a block, to see if we can build it here or not.
	Note:

	The Block returned by getBlock() is the block we are trying to place on, not the block we are trying to place.
	If you want to figure out what is being placed, use getMaterial() instead.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockCanBuildEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockCanBuildEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockCanBuild: (callback: (event: BlockCanBuildEvent) => boolean | void, priority?: any) => any



	/*********************
	### events.blockDamage()

	Called when a block is damaged by a player.
	If a Block Damage event is cancelled, the block will not be damaged.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDamageEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockDamage: (callback: (event: BlockDamageEvent) => boolean | void, priority?: any) => any


	/*********************
	### events.blockDispense()

	Called when an item is dispensed from a block.
	If a Block Dispense event is cancelled, the block will not dispense the item.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockDispenseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDispenseEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockDispense: (callback: (event: BlockDispenseEvent) => boolean | void, priority?: any) => any


	/*********************
	### events.blockExp()

	An event that's called when a block yields experience.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockExpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExpEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockExp: (callback: (event: BlockExpEvent) => boolean | void, priority?: any) => any


	/*********************
	### events.blockExplode()

	Called when a block explodes

	#### Parameters

	* callback - A function which is called whenever the [block.BlockExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExplodeEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockExplode: (callback: (event: BlockExplodeEvent) => boolean | void, priority?: any) => any


	/*********************
	### events.blockFade()

	Called when a block fades, melts or disappears based on world conditions
	Examples:

	Snow melting due to being near a light source.
	Ice melting due to being near a light source.
	Fire burning out after time, without destroying fuel block.
	Coral fading to dead coral due to lack of water
	If a Block Fade event is cancelled, the block will not fade, melt or disappear.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockFadeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFadeEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockFade: (callback: (event: BlockFadeEvent) => boolean | void, priority?: any) => any
	/*********************
	### events.blockForm()

	Called when a block is formed or spreads based on world conditions.
	Use BlockSpreadEvent to catch blocks that actually spread and don't just "randomly" form.

	Examples:

	Snow forming due to a snow storm.
	Ice forming in a snowy Biome like Taiga or Tundra.
	Obsidian / Cobblestone forming due to contact with water.
	Concrete forming due to mixing of concrete powder and water.
	If a Block Form event is cancelled, the block will not be formed.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFormEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockForm: (callback: (event: BlockFormEvent) => boolean | void, priority?: any) => any
	/*********************
	### events.blockFromTo()

	Represents events with a source block and a destination block, currently only applies to liquid (lava and water) and teleporting dragon eggs.
	If a Block From To event is cancelled, the block will not move (the liquid will not flow)

	#### Parameters

	* callback - A function which is called whenever the [block.BlockFromToEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFromToEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockFromTo: (callback: (event: BlockFromToEvent) => boolean | void, priority?: any) => any
	/*********************
	### events.blockGrow()
	Called when a block grows naturally in the world.
	Examples:

	Wheat
	Sugar Cane
	Cactus
	Watermelon
	Pumpkin
	If a Block Grow event is cancelled, the block will no

	#### Parameters

	* callback - A function which is called whenever the [block.BlockGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockGrowEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockGrow: (callback: (event: BlockGrowEvent) => boolean | void, priority?: any) => any
	/*********************
	### events.blockIgnite()

	Called when a block is ignited. If you want to catch when a Player places fire, you need to use BlockPlaceEvent.
	If a Block Ignite event is cancelled, the block will not be ignited

	#### Parameters

	* callback - A function which is called whenever the [block.BlockIgniteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockIgniteEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockIgnite: (callback: (event: BlockIgniteEvent) => boolean | void, priority?: any) => any
	/*********************
	### events.blockMultiPlace()

	#### Parameters

	* callback - A function which is called whenever the [block.BlockMultiPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockMultiPlaceEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockMultiPlace: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
	### events.blockPhysics()

	Thrown when a block physics check is called.
	This event is a high frequency event, it may be called thousands of times per a second on a busy server. Plugins are advised to listen to the event with caution and only perform lightweight checks when using it.
	In addition to this, cancelling the event is liable to leave the world in an inconsistent state. For example if you use the event to leave a block floating in mid air when that block has a requirement to be attached to something, there is no guarantee that the floating block will persist across server restarts or map upgrades.

	Plugins should also note that where possible this event may only called for the "root" block of physics updates in order to limit event spam. Physics updates that cause other blocks to change their state may not result in an event for each of those blocks (usually adjacent). If you are concerned about monitoring these changes then you should check adjacent blocks yourself.

	#### Parameters

	* callback - A function which is called whenever the [block.BlockPhysicsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPhysicsEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockPhysics: (callback: (event: BlockPhysicsEvent) => boolean | void, priority?: any) => any
	/*********************
	### events.blockPistonExtend()

	#### Parameters

	Called when a piston extends
	* callback - A function which is called whenever the [block.BlockPistonExtendEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonExtendEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockPistonExtend: (
		callback: (event: BlockPistonExtendEvent) => boolean | void,
		priority?: any
	) => any
	/*********************
	### events.blockPistonRetract()

	Called when a piston retracts

	#### Parameters

	* callback - A function which is called whenever the [block.BlockPistonRetractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonRetractEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockPistonRetract: (
		callback: (event: BlockPistonRetractEvent) => boolean | void,
		priority?: any
	) => any
	/*********************
	### events.blockPlace()

	Called when a block is placed by a player.
	If a Block Place event is cancelled, the block will not be placed

	#### Parameters

	* callback - A function which is called whenever the [block.BlockPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPlaceEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockPlace: (callback: (event: BlockPlaceEvent) => boolean | void, priority?: any) => any
	/*********************
	### events.blockRedstone()

	Called when a redstone current changes

	#### Parameters

	* callback - A function which is called whenever the [block.BlockRedstoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockRedstoneEvent.html) is fired

	* priority - optional - see events.on() for more information.

	***/
	export const blockRedstone: (callback: (event: BlockRedstoneEvent) => boolean | void, priority?: any) => any
	/*********************
### events.blockSpread()

#### Parameters

 * callback - A function which is called whenever the [block.BlockSpreadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockSpreadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const blockSpread: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.cauldronLevelChange()

#### Parameters

 * callback - A function which is called whenever the [block.CauldronLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/CauldronLevelChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const cauldronLevelChange: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityBlockForm()

#### Parameters

 * callback - A function which is called whenever the [block.EntityBlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/EntityBlockFormEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityBlockForm: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.leavesDecay()

#### Parameters

 * callback - A function which is called whenever the [block.LeavesDecayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/LeavesDecayEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const leavesDecay: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.notePlay()

#### Parameters

 * callback - A function which is called whenever the [block.NotePlayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/NotePlayEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const notePlay: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.signChange()

#### Parameters

 * callback - A function which is called whenever the [block.SignChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/SignChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const signChange: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.enchantItem()

#### Parameters

 * callback - A function which is called whenever the [enchantment.EnchantItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/EnchantItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const enchantItem: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.prepareItemEnchant()

#### Parameters

 * callback - A function which is called whenever the [enchantment.PrepareItemEnchantEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/PrepareItemEnchantEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const prepareItemEnchant: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.areaEffectCloudApply()

#### Parameters

 * callback - A function which is called whenever the [entity.AreaEffectCloudApplyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/AreaEffectCloudApplyEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const areaEffectCloudApply: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.creatureSpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.CreatureSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreatureSpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const creatureSpawn: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.creeperPower()

#### Parameters

 * callback - A function which is called whenever the [entity.CreeperPowerEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreeperPowerEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const creeperPower: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.enderDragonChangePhase()

#### Parameters

 * callback - A function which is called whenever the [entity.EnderDragonChangePhaseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EnderDragonChangePhaseEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const enderDragonChangePhase: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityAirChange()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityAirChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityAirChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityAirChange: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityBreakDoor()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityBreakDoorEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreakDoorEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityBreakDoor: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityBreed()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityBreedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreedEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityBreed: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityChangeBlock()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityChangeBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityChangeBlockEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityChangeBlock: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityCombustByBlock()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCombustByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByBlockEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityCombustByBlock: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityCombustByEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCombustByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityCombustByEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityCombust()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCombustEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityCombust: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityCreatePortal()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCreatePortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCreatePortalEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityCreatePortal: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityDamageByBlock()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDamageByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByBlockEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityDamageByBlock: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityDamageByEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDamageByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityDamageByEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityDamage()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityDamage: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityDeath()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDeathEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityDeath: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityExplode()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityExplodeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityExplode: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityInteract()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityInteractEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityInteract: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityPickupItem()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPickupItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityPickupItem: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityPortalEnter()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityPortalEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEnterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityPortalEnter: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityPortal()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityPortal: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityPortalExit()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityPortalExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalExitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityPortalExit: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityRegainHealth()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityRegainHealthEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityRegainHealthEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityRegainHealth: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityResurrect()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityResurrectEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityResurrectEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityResurrect: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityShootBow()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityShootBowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityShootBowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityShootBow: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entitySpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.EntitySpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntitySpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entitySpawn: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityTame()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTameEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTameEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityTame: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityTarget()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTargetEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityTarget: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityTargetLivingEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTargetLivingEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetLivingEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityTargetLivingEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityTeleport()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTeleportEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityTeleport: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.entityToggleGlide()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityToggleGlideEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityToggleGlideEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityToggleGlide: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.entityUnleash()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityUnleashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityUnleashEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const entityUnleash: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.expBottle()

#### Parameters

 * callback - A function which is called whenever the [entity.ExpBottleEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExpBottleEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const expBottle: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.explosionPrime()

#### Parameters

 * callback - A function which is called whenever the [entity.ExplosionPrimeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExplosionPrimeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const explosionPrime: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.fireworkExplode()

#### Parameters

 * callback - A function which is called whenever the [entity.FireworkExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FireworkExplodeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const fireworkExplode: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.foodLevelChange()

#### Parameters

 * callback - A function which is called whenever the [entity.FoodLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FoodLevelChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const foodLevelChange: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.horseJump()

#### Parameters

 * callback - A function which is called whenever the [entity.HorseJumpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/HorseJumpEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const horseJump: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.itemDespawn()

#### Parameters

 * callback - A function which is called whenever the [entity.ItemDespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemDespawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const itemDespawn: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.itemMerge()

#### Parameters

 * callback - A function which is called whenever the [entity.ItemMergeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemMergeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const itemMerge: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.itemSpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.ItemSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemSpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const itemSpawn: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.lingeringPotionSplash()

#### Parameters

 * callback - A function which is called whenever the [entity.LingeringPotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/LingeringPotionSplashEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const lingeringPotionSplash: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.pigZap()

#### Parameters

 * callback - A function which is called whenever the [entity.PigZapEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PigZapEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const pigZap: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerDeath()

#### Parameters

 * callback - A function which is called whenever the [entity.PlayerDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerDeathEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerDeath: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerLeashEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.PlayerLeashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerLeashEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerLeashEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.potionSplash()

#### Parameters

 * callback - A function which is called whenever the [entity.PotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PotionSplashEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const potionSplash: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.projectileHit()

#### Parameters

 * callback - A function which is called whenever the [entity.ProjectileHitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileHitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const projectileHit: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.projectileLaunch()

#### Parameters

 * callback - A function which is called whenever the [entity.ProjectileLaunchEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileLaunchEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const projectileLaunch: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.sheepDyeWool()

#### Parameters

 * callback - A function which is called whenever the [entity.SheepDyeWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepDyeWoolEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const sheepDyeWool: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.sheepRegrowWool()

#### Parameters

 * callback - A function which is called whenever the [entity.SheepRegrowWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepRegrowWoolEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const sheepRegrowWool: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.slimeSplit()

#### Parameters

 * callback - A function which is called whenever the [entity.SlimeSplitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SlimeSplitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const slimeSplit: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.spawnerSpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.SpawnerSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SpawnerSpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const spawnerSpawn: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.villagerAcquireTrade()

#### Parameters

 * callback - A function which is called whenever the [entity.VillagerAcquireTradeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/VillagerAcquireTradeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const villagerAcquireTrade: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.villagerReplenishTrade()

#### Parameters

 * callback - A function which is called whenever the [entity.VillagerReplenishTradeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/VillagerReplenishTradeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const villagerReplenishTrade: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.hangingBreakByEntity()

#### Parameters

 * callback - A function which is called whenever the [hanging.HangingBreakByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakByEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const hangingBreakByEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.hangingBreak()

#### Parameters

 * callback - A function which is called whenever the [hanging.HangingBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const hangingBreak: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.hangingPlace()

#### Parameters

 * callback - A function which is called whenever the [hanging.HangingPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingPlaceEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const hangingPlace: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.brew()

#### Parameters

 * callback - A function which is called whenever the [inventory.BrewEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const brew: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.brewingStandFuel()

#### Parameters

 * callback - A function which is called whenever the [inventory.BrewingStandFuelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewingStandFuelEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const brewingStandFuel: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.craftItem()

#### Parameters

 * callback - A function which is called whenever the [inventory.CraftItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/CraftItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const craftItem: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.furnaceBurn()

#### Parameters

 * callback - A function which is called whenever the [inventory.FurnaceBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceBurnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const furnaceBurn: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.furnaceExtract()

#### Parameters

 * callback - A function which is called whenever the [inventory.FurnaceExtractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceExtractEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const furnaceExtract: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.furnaceSmelt()

#### Parameters

 * callback - A function which is called whenever the [inventory.FurnaceSmeltEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceSmeltEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const furnaceSmelt: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.inventoryClick()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryClickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryClickEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventoryClick: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.inventoryClose()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryCloseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCloseEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventoryClose: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.inventoryCreative()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryCreativeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCreativeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventoryCreative: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.inventoryDrag()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryDragEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryDragEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventoryDrag: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.inventory()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventory: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.inventoryMoveItem()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryMoveItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryMoveItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventoryMoveItem: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.inventoryOpen()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryOpenEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryOpenEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventoryOpen: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.inventoryPickupItem()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryPickupItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const inventoryPickupItem: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.prepareAnvil()

#### Parameters

 * callback - A function which is called whenever the [inventory.PrepareAnvilEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareAnvilEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const prepareAnvil: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.prepareItemCraft()

#### Parameters

 * callback - A function which is called whenever the [inventory.PrepareItemCraftEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareItemCraftEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const prepareItemCraft: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.asyncPlayerChat()

#### Parameters

 * callback - A function which is called whenever the [player.AsyncPlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerChatEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const asyncPlayerChat: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.asyncPlayerPreLogin()

#### Parameters

 * callback - A function which is called whenever the [player.AsyncPlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerPreLoginEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const asyncPlayerPreLogin: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerAchievementAwarded()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerAchievementAwardedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAchievementAwardedEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerAchievementAwarded: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerAdvancementDone()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerAdvancementDoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAdvancementDoneEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerAdvancementDone: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerAnimation()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerAnimationEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAnimationEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerAnimation: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerArmorStandManipulate()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerArmorStandManipulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerArmorStandManipulateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerArmorStandManipulate: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerBedEnter()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBedEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedEnterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerBedEnter: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerBedLeave()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBedLeaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedLeaveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerBedLeave: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerBucketEmpty()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBucketEmptyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketEmptyEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerBucketEmpty: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerBucketFill()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBucketFillEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketFillEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerBucketFill: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerChangedMainHand()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerChangedMainHandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedMainHandEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerChangedMainHand: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerChangedWorld()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerChangedWorldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedWorldEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerChangedWorld: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerChat()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerChat: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerChatTabComplete()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerChatTabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatTabCompleteEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerChatTabComplete: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerCommandPreprocess()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerCommandPreprocessEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerCommandPreprocessEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerCommandPreprocess: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerDropItem()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerDropItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerDropItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerDropItem: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerEditBook()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerEditBookEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEditBookEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerEditBook: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerEggThrow()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerEggThrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEggThrowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerEggThrow: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerExpChange()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerExpChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerExpChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerExpChange: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerFish()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerFishEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerFishEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerFish: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerGameModeChange()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerGameModeChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerGameModeChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerGameModeChange: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerInteractAtEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerInteractAtEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractAtEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerInteractAtEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerInteractEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerInteractEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerInteractEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerInteract()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerInteract: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerItemBreak()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemBreakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerItemBreak: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerItemConsume()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemConsumeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemConsumeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerItemConsume: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerItemDamage()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemDamageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerItemDamage: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerItemHeld()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemHeldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemHeldEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerItemHeld: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerJoin()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerJoinEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerJoinEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerJoin: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerKick()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerKickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerKickEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerKick: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerLevelChange()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLevelChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerLevelChange: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerLocaleChange()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerLocaleChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLocaleChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerLocaleChange: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerLogin()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLoginEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerLogin: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerMove()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerMoveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerMove: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerPickupArrow()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerPickupArrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupArrowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerPickupArrow: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerPickupItem()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerPickupItem: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerPortal()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPortalEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerPortal: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerPreLogin()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPreLoginEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerPreLogin: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerQuit()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerQuitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerQuitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerQuit: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerRegisterChannel()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerRegisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRegisterChannelEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerRegisterChannel: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerResourcePackStatus()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerResourcePackStatusEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerResourcePackStatusEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerResourcePackStatus: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerRespawn()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerRespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRespawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerRespawn: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerShearEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerShearEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerShearEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerShearEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerStatisticIncrement()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerStatisticIncrementEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerStatisticIncrementEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerStatisticIncrement: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerSwapHandItems()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerSwapHandItemsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerSwapHandItemsEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerSwapHandItems: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerTeleport()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerTeleportEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerTeleport: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.playerToggleFlight()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerToggleFlightEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleFlightEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerToggleFlight: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerToggleSneak()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerToggleSneakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSneakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerToggleSneak: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerToggleSprint()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerToggleSprintEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSprintEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerToggleSprint: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerUnleashEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerUnleashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnleashEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerUnleashEntity: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerUnregisterChannel()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerUnregisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnregisterChannelEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerUnregisterChannel: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.playerVelocity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerVelocityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerVelocityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const playerVelocity: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.broadcastMessage()

#### Parameters

 * callback - A function which is called whenever the [server.BroadcastMessageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/BroadcastMessageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const broadcastMessage: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.mapInitialize()

#### Parameters

 * callback - A function which is called whenever the [server.MapInitializeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/MapInitializeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const mapInitialize: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.pluginDisable()

#### Parameters

 * callback - A function which is called whenever the [server.PluginDisableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginDisableEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const pluginDisable: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.pluginEnable()

#### Parameters

 * callback - A function which is called whenever the [server.PluginEnableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginEnableEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const pluginEnable: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.remoteServerCommand()

#### Parameters

 * callback - A function which is called whenever the [server.RemoteServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/RemoteServerCommandEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const remoteServerCommand: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.serverCommand()

#### Parameters

 * callback - A function which is called whenever the [server.ServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerCommandEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const serverCommand: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.serverListPing()

#### Parameters

 * callback - A function which is called whenever the [server.ServerListPingEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerListPingEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const serverListPing: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.serviceRegister()

#### Parameters

 * callback - A function which is called whenever the [server.ServiceRegisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const serviceRegister: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.serviceUnregister()

#### Parameters

 * callback - A function which is called whenever the [server.ServiceUnregisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const serviceUnregister: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.tabComplete()

#### Parameters

 * callback - A function which is called whenever the [server.TabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/TabCompleteEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const tabComplete: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.vehicleBlockCollision()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleBlockCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleBlockCollisionEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleBlockCollision: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.vehicleCreate()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleCreateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleCreate: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.vehicleDamage()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDamageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleDamage: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.vehicleDestroy()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleDestroyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDestroyEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleDestroy: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.vehicleEnter()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEnterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleEnter: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.vehicleEntityCollision()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleEntityCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEntityCollisionEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleEntityCollision: (
		callback: (event: any) => boolean | void,
		priority?: any
	) => any
	/*********************
### events.vehicleExit()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleExitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleExit: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.vehicleMove()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleMoveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleMove: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.vehicleUpdate()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleUpdateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleUpdateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const vehicleUpdate: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.lightningStrike()

#### Parameters

 * callback - A function which is called whenever the [weather.LightningStrikeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/LightningStrikeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const lightningStrike: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.thunderChange()

#### Parameters

 * callback - A function which is called whenever the [weather.ThunderChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/ThunderChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const thunderChange: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.weatherChange()

#### Parameters

 * callback - A function which is called whenever the [weather.WeatherChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/WeatherChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const weatherChange: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.chunkLoad()

#### Parameters

 * callback - A function which is called whenever the [world.ChunkLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkLoadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const chunkLoad: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.chunkPopulate()

#### Parameters

 * callback - A function which is called whenever the [world.ChunkPopulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkPopulateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const chunkPopulate: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.chunkUnload()

#### Parameters

 * callback - A function which is called whenever the [world.ChunkUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkUnloadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const chunkUnload: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.portalCreate()

#### Parameters

 * callback - A function which is called whenever the [world.PortalCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/PortalCreateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const portalCreate: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.spawnChange()

#### Parameters

 * callback - A function which is called whenever the [world.SpawnChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/SpawnChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const spawnChange: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.structureGrow()

#### Parameters

 * callback - A function which is called whenever the [world.StructureGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/StructureGrowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const structureGrow: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.worldInit()

#### Parameters

 * callback - A function which is called whenever the [world.WorldInitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldInitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const worldInit: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.worldLoad()

#### Parameters

 * callback - A function which is called whenever the [world.WorldLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldLoadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const worldLoad: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.worldSave()

#### Parameters

 * callback - A function which is called whenever the [world.WorldSaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldSaveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
	export const worldSave: (callback: (event: any) => boolean | void, priority?: any) => any
	/*********************
### events.worldUnload()

#### Parameters

 * callback - A function which is called whenever the [world.WorldUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldUnloadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
}
