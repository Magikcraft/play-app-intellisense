declare module 'magikcraft/tools' {
    export function uuid(): string;
    export function locationToJSON(location: any): {
        worldName: any;
        x: any;
        y: any;
        z: any;
        yaw: any;
        pitch: any;
    };
    export function locationFromJSON(locationJSON: any): any;
    export function itemStackToJSON(itemStack: any): {
        type: any;
        amount: any;
        data: any;
        meta: {
            displayName: any;
            colorRGB: any;
            title: any;
            author: any;
            pages: any[] | undefined;
        };
    };
    export function itemStackFromJSON(itemStackJSON: any): any;
    export function range(num: number, offset?: number): number[];
}
