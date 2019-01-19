declare module 'magikcraft/world' {
export const Worlds: any;
export function worldly(world: any): World;
export function worldDelete(world: any): void;

export class World {
        private world;
        private started;
        private regions;
        private regionEvents;
        private worldPlayers;
        private logger;
        private events;
        private intervals;
        private timers;
        private destroyWorldIfEmpty;
        private destroyWorldIfEmptyDelay;
        constructor(world: any);
        start(): void;
        stop(): void;
        cleanse(): void;
        setTime: (time: "dawn" | "day" | "dusk" | "night") => any;
        setDawn: () => any;
        setDay: () => any;
        setDusk: () => any;
        setNight: () => any;
        setSun: () => any;
        setStorm: () => any;
        registerRegion(regionName: string, loc1: any, loc2: any): void;
        log(label: string, log?: any): void;
        registerPlayerEnterRegionEvent: (regionName: any, handler: any, player?: any) => void;
        registerPlayerExitRegionEvent(regionName: any, handler: any, player?: any): void;
        preventDeadPlayerDrops(): void;
        preventBlockBreak(except?: string[]): void;
        allowMobSpawning: () => void;
        preventMobSpawning(except?: string[]): void;
        setDestroyWorldIfEmpty(bool: boolean, delay?: number): void;
        setTimeout(callback: any, interval: number, key?: string): void;
        clearTimeout(key: string): void;
        clearTimeoutsLike(wildcard: string): void;
        clearAllTimeouts(): void;
        setInterval: (callback: any, interval: number, key?: string | undefined) => void;
        clearInterval(key: string): void;
        clearIntervalsLike(wildcard: string): void;
        clearAllIntervals(): void;
        registerEvent(type: string, callback: any, key?: string): void;
        unregisterEvent(key: string): void;
        unregisterEventsLike(wildcard: string): void;
        unregisterAllEvents(): void;
        private _registerPlayerRegionEvent;
        private _watchPlayersJoinWorld;
        private _playerJoinedWorld;
        private _watchPlayersLeaveWorld;
        private _playerLeftWorld;
        private _watchPlayersMove;
        private _playerMove;
        private _regionContainsLocation;
    }
}