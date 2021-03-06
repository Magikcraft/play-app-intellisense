declare const require: (moduleName: string) => any;

type logMethod = (message: string, ...args: any) => void
declare const console: {
    log: logMethod,
    error: logMethod,
    warn: logMethod,
    info: logMethod
}
// Array.from polyfill
interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;
    from<T>(arrayLike: ArrayLike<T>): Array<T>;
}

// String.padStart and String.padEnd polyfills
interface String {
    /**
      * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
      * The padding is applied from the start (left) of the current string.
      *
      * @param maxLength The length of the resulting string once the current string has been padded.
      *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
      *
      * @param fillString The string to pad the current string with.
      *        If this string is too long, it will be truncated and the left-most part will be applied.
      *        The default value for this parameter is " " (U+0020).
      */
    padStart(maxLength: number, fillString?: string): string;

    /**
    * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
    * The padding is applied from the end (right) of the current string.
    *
    * @param maxLength The length of the resulting string once the current string has been padded.
    *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
    *
    * @param fillString The string to pad the current string with.
    *        If this string is too long, it will be truncated and the left-most part will be applied.
    *        The default value for this parameter is " " (U+0020).
    */
    padEnd(maxLength: number, fillString?: string): string;
}

type TextComponent = any;

interface Location {
    setX(x: number): void;
    setY(y: number): void;
    setZ(z: number): void;
    setPitch(pitch: number): void;
    setYaw(yaw: number): void;
    setWorld(world: any): void;

    getX(): number;
    getY(): number;
    getZ(): number;
    getYaw(): number;
    getPitch(): number;
    getWorld(): World;
    getBlock(): Block;
    getDirection(): Vector;

    clone(): Location;
}

interface Vector {
    multiply(num: number): Vector;
}

interface World {
    getBlockAt(location: Location): Block;
    getBlockAt(x: number, y: number, z: number): Block;
    strikeLightning(location: Location): void;
    spawnEntity(location: Location, entityType: any): void;
    createExplosion(location: Location, times: number): void;
}

interface Block {
    location: Location;
    getType(): BlockType;
    getRelative(x: number, y: number, z: number): Block;
    setType(newType: BlockType): void;
    /**
     * Breaks the block and spawns items as if a player had digged it
     * @memberof BukkitBlock
     */
    breakNaturally():boolean
    /**
     * Breaks the block and spawns items as if a player had digged it with a specific tool
     * @param {ItemStack} tool
     * @returns {boolean}
     * @memberof BukkitBlock
     */
    breakNaturally​(tool: ItemStack): boolean
    /**
     * Returns the biome that this block resides in
     * @returns {Biome}
     * @memberof BukkitBlock
     */
    getBiome(): Biome
    /**
     * Gets the complete block data for this block
     * @returns {BlockData}
     * @memberof BukkitBlock
     */
    getBlockData(): BlockData
    /**
     * Returns the redstone power being provided to this block
     * @returns {number}
     * @memberof BukkitBlock
     */
    getBlockPower(): number
    /**
     * Returns the redstone power being provided to this block face
     * @param {BlockFace} face
     * @returns {number}
     * @memberof BukkitBlock
     */
    getBlockPower​(face: BlockFace): number
    /**
     * Gets the chunk which contains this block
     * @returns {Chunk}
     * @memberof BukkitBlock
     */
    getChunk(): Chunk
    /**
     * Returns a list of items which would drop by destroying this block
     * @returns {ItemStack[]}
     * @memberof BukkitBlock
     */
    getDrops(): ItemStack[]
    /**
     * Returns a list of items which would drop by destroying this block with a specific tool
     * @param {ItemStack} tool
     * @returns {ItemStack[]}
     * @memberof BukkitBlock
     */
    getDrops(tool: ItemStack): ItemStack[]
    /**
     * Gets the Location of the block
     * @returns {Location}
     * @memberof BukkitBlock
     */
    getLocation(): Location
    /**
     * Gets the type of this block
     * @returns {BukkitMaterial}
     * @memberof BukkitBlock
     */
    getType(): BukkitMaterial
    /**
     * Gets the world which contains this Block
     * @returns {World}
     * @memberof BukkitBlock
     */
    getWorld(): World
    /**
     * Sets the complete data for this block
     * @param {BlockData} data
     * @param {boolean} applyPhysics
     * @memberof BukkitBlock
     */
    setBlockData​(data: BlockData, applyPhysics: boolean): void
}

type ItemStack = any
type Biome = any
type BlockData = any
type BlockFace = any
type Chunk = any
type BlockState = any
type Entity = any
type EquipmentSlot = any

interface BlockType {
    equals(comparison: any): boolean;
}

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

type BukkitPlugin = any;

type BukkitMaterial = any;

type JavaType = any;

interface BossBarAPI {
    addBar(
        player: Player,
        text: TextComponent,
        color: BarsColor,
        stinterfaceyle: BarsStyle,
        progress: number
    ): BossBar;
    getBossBars(): BossBar[];
    addBarForPlayer(player: Player, bossBar: BossBar): void;
    removeBarForPlayer(player: Player, bossBar: BossBar): void;

    Color: BarsColor;
    Style: BarsStyle;
}

interface BossBar {
    addPlayer(player: Player): void;
    removePlayer(player: Player): void;
    getColor(): BarsColor;
    setColor(color: BarsColor): void;
    getStyle(): BarsStyle;
    setStyle(style: BarsStyle): void;
    setProperty(property: any, flag: boolean): void;
    getMessage(): string;
    setMessage(msg: string): void;
    setVisible(flag: boolean): void;
    isVisible(): boolean;
    getProgress(): number;
    setProgress(progress: number): void;
}
interface BarsColor {
    readonly PINK: any;
    readonly RED: any;
    readonly GREEN: any;
    readonly BLUE: any;
    readonly YELLOW: any;
    readonly PURPLE: any;
    readonly WHITE: any;
}

interface BarsStyle {
    readonly PROGRESS: any;
    readonly NOTCHED_6: any;
    readonly NOTCHED_10: any;
    readonly NOTCHED_12: any;
    readonly NOTCHED_20: any;
}

declare namespace Java {
    /**
     *
     * Return a reference to a Java class. In the Nashorn JavaScript engine you can instantiate Java class instances and get a JavaScript reference to them.
     *
     * Example:
     * ```
     *
     * ```
     */
    export function type(classname: string): any;
}

type EventKey = 'PlayerItemConsumeEvent' | 'PlayerJoinEvent' | 'PlayerQuitEvent' | 'BlockBreakEvent' | 'BlockPlaceEvent';

interface EventMap {
    [event: string]: EventKey;
}

type Events = EventKey | EventMap;

interface Listener {
    listener: Function;
    once: boolean;
}

interface ListenerMap {
    [event: string]: Listener[];
}

type Listeners = Listener[] | ListenerMap;

declare class EventEmitter<E = EventKey> {
    static noConflict(): typeof EventEmitter;

    getListeners(event: E): Listeners;
    flattenListeners(listeners: Listener[]): void;
    getListenersAsObject(event: E): ListenerMap;
    addListener(event: E, listener: Listener | Function): this;
    on(event: E, listener: Listener | Function): this;
    addOnceListener(event: E, listener: Function): this;
    once(event: E, listener: Function): this;
    defineEvent(event: E): this;
    defineEvents(events: E[]): this;
    removeListener(event: E, listener: Function): this;
    off(event: E, listener: Function): this;
    addListeners(event: Events, listeners: Function[]): this;
    removeListeners(event: Events, listeners: Function[]): this;
    manipulateListeners(remove: boolean, event: Events, listeners: Function[]): this;
    removeEvent(event?: E): this;
    removeAllListeners(event?: E): this;
    emitEvent(event: E, args?: any[]): this;
    trigger(event: E, args?: any[]): this;
    emit(event: E, ...args: any[]): this;
    setOnceReturnValue(value: any): this;
}

interface Memento {
    (value: any): void;
    (key: string|number, value: any): void;
    setItem(key: string|number, value: any): void;
    getItem(key: string|number): any;
}

interface magik {
    /**
     *
     * Use the Node.js Event Emitter pattern to register event handlers
     *
     * @type {EventEmitter.EventEmitter}
     * @memberof magik
     */
    Events: EventEmitter<EventKey>;
    /**
     * Return a Java class reference to an org.bukkit.* class.
     *
     * Refer to the Bukkit API documentation at https://bukkit.magikcraft.io.
     */
    type(classname: string): JavaType;

    /**
     * Return a reference to the Magikcraft Bukkit Plugin
     *
     */
    getPlugin(): BukkitPlugin;

    TextComponent(label: string): TextComponent;

    /**
     * Execute the callback function once, after the delay in milliseconds
     *
     * @export
     * @param {() => void} callback
     * @param {number} delay
     * @returns {number}
     */
    setTimeout(callback: () => void, delay: number): number;


    /**
     * Wait for a number of seconds, then do the task.
     *
     * @param {number} delayInSeconds
     * @param {() => void} task
     * @returns {number}
     * @memberof magik
     */
    doAfter(delayInSeconds: number, task: () => void): number;

    /**
     * Execute the callback function multiple times, after the delay in milliseconds.
     * Returns a handle that can be used to clear the interval timer.
     *
     * @export
     * @param {() => void} callback
     * @param {number} delay
     * @returns {number}
     */
    setInterval(callback: () => void, delay: number): number;
    /**
     * Clear the interval timer.
     */
    clearInterval(handle: number): void;

    /**
     * User interface bars. These use BossBarAPI.
     */
    Bars: BossBarAPI;

    /**
     * Volare means to fly. This has you float up into the air.
     * Be careful, because you will take damage if you fall on the ground. Landing in water causes no damage.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function fly() {
     *      magik.volare();
     * }
     * ```
     */
    volare(duration?: number): void;

    /**
     *
     * Return a reference to where you are looking.
     *
     * Example:
     *
     * Here's a spell that teleports you to where you are looking.
     * ```
     * const magik = magikcraft.io;
     *
     * function blink() {
     *      const there = magik.aspecto();
     *      magik.ianuae(there);
     * }
     * ```
     */
    aspecto(): Location;

    /**
     * The caldarium function takes an array of ingredients and returns a secret. Sometimes it's a new function name, sometimes it's a clue.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function pot() {
     *
     * }
     * ```
     */
    caldarium(ingredientsList: string[]): string;

    /**
     *  Launch a firework.
     *
     * Example:
     * This spell will launch a firework where you are looking.
     * ```
     * const magik = magikcraft.io;
     *
     * function rocket() {
     *      const there = magik.aspecto();
     *      magik.stella(there);
     * }
     * ```
     */
    stella(location: Location): void;

    /**
     * Declaro - to manifest (to make clear, to bring into clarity). Manifests an item in Minecraft.
     *
     * The argument is a special code that can be found from clues in the Magikcraft universe.
     *
     * Example:
     * Here is how you get an elytra:
     * ```
     * const magik = magikcraft.io;
     *
     * function magik_carpet() {
     *      magik.declaro('elytra');
     * }
     * ```
     */
    declaro(item: string): void;

    /**
     *
     * Strike lightning.
     *
     * Defaults to where you are looking if you do not specify a location.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function lightning() {
     *      magik.shakti();
     * }
     * ```
     */
    shakti(location?: Location): void;

    /**
     * Satio feeds you with magik, giving you a full health bar.
     *
     * Example:
     *
     * ```
     * function feedme() {
     *      magik.satio();
     * }
     * ```
     */
    satio(): void;

    /**
     * Generate and return a random number.
     *
     * Example:
     *
     * Here's a spell that rolls a die and produces a random number.
     * ```
     * const magik = magikcraft.io;
     *
     * function rollDie(sides = 6) {
     *      const dieroll = magik.random(1, sides);
     *      magik.dixit(`You rolled:  ${dieroll}`);
     *      return dieroll;
     * }
     * ```
     */
    random(min: number, max: number): number;

    /**
     * Return a reference to the current player Bukkit API object.
     * On Magikcraft campaign servers this will return null if you do not have sufficient permissions.
     * On Magikcraft Open Source Platform servers this always returns a reference to the player Bukkit API object.
     *
     */
    getSender(): Player;

    /**
     * Dixit prints a message out to the user's Minecraft console. It's useful for debugging.
     * This is the equivalent of `console.log`.
     * You can send a message to another user by passing their name as the optional second argument.
     *
     * Example:
     * ```
     *  const magik = magikcraft.io;
     *
     * function say(msg="Hello world!") {
     *      magik.dixit(msg);
     * }
     * ```
     */
    dixit(message: string, playername?: string): void;

    /**
     * Call a task function the specified number of times. When finished, optionally execute a callback function. Delay is the number of milliseconds between invocations of the task function.
     *
     * Example:
     * This spell will have you jump multiple times in a row, to get extra height. Be careful though - jump too high and you'll hurt yourself if you fall!
     * ```
     * const magik = magikcraft.io;
     *
     * function multiJump(times = 2) {
     *      magik.doNTimes(exsultus, times, 1000);
     * }
     * ```
     *
     * Here is a version with a callback function that executes when it is finished:
     * ```
     * const magik = magikcraft.io;
     *
     * function mj(times = 2, delay = 1000) {
     *      magik.doNTimes(exsultus, times, delay, () => magik.dixit("Done!"));
     * }
     * ```
     */
    doNTimes(task: () => void | any, times: number, delay: number, callback?: () => void | any): void;

    /**
     * Jump into the air.
     *
     * The power parameter is between 0 and 100 - it is a percentage of your maximum jumping power.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function jump(power = 100) {
     *      magik.exsultus(power);
     * }
     * ```
     */
    exsultus(power: number): void;

    /**
     *
     * Recall your memory, which can be of any type, including a dictionary-like object.
     *
     * Examples:
     *
     * Here is a simple example that retrieves your memory:
     * ```
     * const magik = magikcraft.io;
     *
     * function remember() {
     *      const thing = magik.exmemento();
     *      magik.dixit(thing.toString());
     * }
     * ```
     *
     * Here's a more advanced example that retrieves memories by name, using a dictionary-like object:
     * ```
     * const magik = magikcraft.io;
     *
     * function remember(name = "default") {
     *      const memory = magik.exmemento() || {};
     *      if (memory[name]) {
     *          magik.dixit(memory[name]);
     *      } else {
     *          magik.dixit("I don't remember that!");
     *      }
     * }
     */

    exmemento(): any;

    /**
     * Create a global namespace. Use this to maintain state.
     *
     * Example:
     * Create a namespace called 'mct1'.
     * ```
     *  const magik = magikcraft.io;
     *
     * function initialiseMCT1() {
     *      const mct1 = magik.global('mct1');
     *      mct1.state = {
     *          insulin: 0.4,
     *          bgl: 0.3
     *      }
     * }
     * ```
     */
    global(namespace: string): object;

    /**
     * Return a reference to the current location.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function where() {
     *      const here = magik.hic();
     *      magik.dixit(here);
     *      return here;
     * }
     * ```
     *
     */
    hic(): Location;

    /**
     * Toss another player. Iacta gives us "eject" in English.
     *
     * Example:
     * ```
     *  const magik = magikcraft.io;
     *
     * function toss(playername) {
     *      magik.iacta(playername);
     * }
     * ```
     */
    iacta(playername: string): void;

    /**
     * Teleport. Ianuae comes from Janus, the guardian of doorways. January is the gateway or entry to the year.
     *
     * Examples:
     * Here is a spell that takes a location from your memory and teleports you there.
     * ```
     *  const magik = magikcraft.io;
     *
     * function teleport() {
     *      const where = magik.exmemento();
     *      magik.ianuae(where);
     * }
     * ```
     * Here is a more advanced version that assumes that your memory contains a dictionary of locations:
     * ```
     * const magik = magikcraft.io;
     *
     * function tp(where = "default") {
     *      const memory = magik.exmemento();
     *      if (memory[where]) {
     *          magik.ianuae(memory[where]);
     *      } else {
     *          magik.dixit(`I don't remember ${where}!`);
     *      }
     * }
     * ```
     */
    ianuae(location: Location): void;

    /**
     * Set another player on fire.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function ignite(name: string) {
     *      magik.incendium(name);
     * }
     */
    incendium(playername: string): void;

    /**
     * Memorize something for later. You have a single memory location that can store anything, including a dictionary-like object. This memory is wiped when you disconnect from the server.
     *
     * Examples:
     *
     * Here is a simple example that allows you to remember the current location:
     * ```
     * const magik = magikcraft.io;
     *
     * function memorize() {
     *      const here = magik.hic();
     *      magik.memento(hic);
     * }
     * ```
     *
     * Here's a more advanced example that allows you to remember various locations:
     * ```
     * const magik = magikcraft.io;
     *
     * function memorize(name = "default") {
     *      const memory = magik.exmemento() || {};
     *      memory[name] = magik.hic();
     *      magik.memento(memory);
     * }
     */

    memento: Memento;

    /**
     * Shoot a fireball.
     *
     * Example:
     * ```
     *  const magik = magikcraft.io;
     *
     * function fireball() {
     *      magik.infierno();
     * }
     * ```
     */
    infierno(): void;
}

declare namespace http {

    /**
     * HTTP GET a resource from a URL
     *
     * @param {string} url
     * @returns {*}
     */
    function get(url: string): any;
    function post(url: string, data: any, contentType?: string): any;
}
/**
 * The eventbus is a global pub/sub system. It is useful for your own code, and it also the mechanism that allows your code to communicate with code that others are running on the server.
 *
 * Use it to publish to a topic, and other players can consume the data by subscribing to the same topic.
 *
 */
declare namespace eventbus {
    interface MessageData {
        data: string | object;
        type: string;
    }

    /**
     * Your subscription callback function will receive a single parameter of type `MessageData`.
     */
    type SubscriptionCallback = (message: MessageData) => void;

    interface Subscription {
        /**
         * Cancel the subscription. This stops your callback from being triggered when this topic is published.
         *
         * Example:
         * ```
         * const mysub = eventbus.subscribe('sitapati.highscore', (score) => {
         *      if (score === "-1") {
         *          return mysub.cancel(); // Stop listening to this topic.
         *      }
         *      magik.dixit(`High score is ${score`);
         * });
         * ```
         * @memberof Subscription
         */
        cancel(): void;
    }
    /**
     * Subscribe to a topic on the eventbus.
     * Topic names are arbitrary, and the topic namespace is global, so you probably want to namespace your topics, for example by using your username, like: 'sitapati.myTopic'
     *
     * Example:
     * ```
     * const sub = eventbus.subscribe('sitapati.messages', (msg) => {
     *      if (msg.type === "string") {
     *          magik.dixit(msg.data);
     *      }
     *      if (msg.type === "json") {
     *          magik.dixit(Object.keys(msg.data).toString());
     *      }
     * });
     * ```
     */
    function subscribe(topic: string, callback: SubscriptionCallback): Subscription;

    /**
     * Publish to a topic. You can publish a string, or a JSON Object.
     *
     * Example:
     * ```
     * eventbus.publish('sitapati.messages', 'Hope everyone is feeling fabulous today!');
     *
     * eventbus.publish('sitapati.messages', {data: 'You can also publish JSON objects', moredata: 'The consumer should check the data type in their subscription'});
     * ```
     *
     */
    function publish(topic: string, data: string | object): void;

    /**
     * To cancel a subscription, you call the `cancel()` method of the subscription object returned from `eventbus.subscribe()`.
     * However, sometimes you lose the reference to that object - or you want to unsubscribe a bunch of listeners all at once.
     *
     * In this case, you can use `eventbus.unsubscribeFromTopic()`.
     * You specify which topic you want to unsubscribe from, and all your subscriptions to that topic will be cancelled.
     *
     * This does not unsubscribe anyone else - just your subscriptions.
     *
     * Example:
     * ```
     * // Subscribe without getting a reference to the subscription
     * eventbus.subscribe('magikcraft.news', news => magik.dixit(news.data));
     * ...
     * // Somewhere else, we don't have a subscription to cancel, but we can cancel all subscriptions to that topic:
     * eventbus.unsubscribeFromTopic('magikcraft.news');
     * ```
     */
    function unsubscribeFromTopic(topic: string): boolean;

    /**
     * Sometimes, things get real messed up and you just need to hit the reset button.
     *
     * You can quit from the server and rejoin, and this will clear all your eventbus subscriptions.
     *
     * You can also call `eventbus.cancelAllSubscriptions()`. This will cancel all subscriptions you have created for all topics.
     *
     */
    function cancelAllSubscriptions(): boolean;
}

declare const magikcraft: {io: magik};
