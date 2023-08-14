import { Dispatch, SetStateAction, useState } from "react";

export class State<T> {
    public readonly value: T;
    public readonly set: Dispatch<SetStateAction<T>>;
    public readonly defaultValue: T;

    constructor(defaultValue: T) {
        const [value, set] = useState<T>(defaultValue);

        this.value = value;
        this.set = set;
    }

    public reset() {
        this.set(this.defaultValue);
    }
}