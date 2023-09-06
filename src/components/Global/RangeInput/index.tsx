import { useEffect } from "react";
import { RangeInputProps } from "./interface";
import { RangeInputStyle, TrackStyle } from "./style";

const RangeInput: React.FC<RangeInputProps> = ({ state, minValue, maxValue, step }) => {
    const maxDifference = maxValue / 50;

    const handleChangeMin: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = Number(event.target.value);

        if (!(value > (state.value.max - maxDifference))) {
            state.set({ ...state.value, min: value });
        };
    };

    const handleChangeMax: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = Number(event.target.value);

        if (!(value < (state.value.min + maxDifference))) {
            state.set({ ...state.value, max: value });
        };
    };

    useEffect(() => {
        state.set({ min: minValue, max: maxValue });
    }, [minValue, maxValue]);

    const percent1 = (state.value.min / maxValue) * 100;
    const percent2 = (state.value.max / maxValue) * 100;

    return (
        <RangeInputStyle>
            <TrackStyle p1={percent1} p2={percent2} />
            <input
                type="range"
                onChange={handleChangeMin}
                value={state.value.min}
                min={minValue}
                max={maxValue}
                step={step}
            />
            <input
                type="range"
                onChange={handleChangeMax}
                value={state.value.max}
                min={minValue}
                max={maxValue}
                step={step}
            />
        </RangeInputStyle>
    );
};

export default RangeInput;