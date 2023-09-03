import { StateHook } from "../../../hooks/state.hook";

export interface RangeInputProps {
    minValue: number;
    maxValue: number;
    state: StateHook<{ min: number; max: number }>;
    step: number;
}

export interface TrackStyleProps {
    p1: number;
    p2: number;
}