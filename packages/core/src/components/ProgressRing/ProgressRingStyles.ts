import styled from "styled-components";
import { ProgressRingColors, ProgressRingSizes } from "./ProgressRingConstants";

const getSizeValue = (size: ProgressRingSizes): number => {
    switch (size) {
        case ProgressRingSizes.SMALL:
            return 16;
        case ProgressRingSizes.MEDIUM:
            return 24;
        case ProgressRingSizes.LARGE:
            return 64;
        case ProgressRingSizes.XL:
            return 128;
        case ProgressRingSizes.XXL:
            return 216;
        default:
            return 64;
    }
};

const getColorVariable = (color: ProgressRingColors): string => {
    switch (color) {
        case ProgressRingColors.SUCCESS:
            return "--background-greenbold";
        case ProgressRingColors.ERROR:
            return "--negative-color";
        case ProgressRingColors.PRIMARY:
            return "--primary-color";
        default:
            return "--primary-color";
    }
};

interface ProgressRingProps {
    size: ProgressRingSizes;
    degreeValue: number;
    color: ProgressRingColors;
}

export const CircularProgress = styled.div<ProgressRingProps>`
    position: relative;
    height: ${(props) => getSizeValue(props.size)}px;
    width: ${(props) => getSizeValue(props.size)}px;
    border-radius: 50%;
    background: conic-gradient(var(${(props) => getColorVariable(props.color)}) ${(props) => { return (props.degreeValue * 360) / 100 }}deg, var(--ui-border-color) 0deg);
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
    content: "";
    position: absolute;
    height: calc(${(props) => getSizeValue(props.size)}px - ${(props) => { if (props.size === ProgressRingSizes.SMALL) return 3; else return 6 }}px);
    width: calc(${(props) => getSizeValue(props.size)}px - ${(props) => { if (props.size === ProgressRingSizes.SMALL) return 3; else return 6 }}px);
    border-radius: 50%;
    background-color: var(--text-color-on-primary);
    }
`;

export const ProgressValue = styled.span<{ size: ProgressRingSizes; }>`
    font-size: ${(props) => {
        if (props.size === ProgressRingSizes.XXL)
            return 32;
        else if (props.size === ProgressRingSizes.XL)
            return 20;
        else if (props.size === ProgressRingSizes.LARGE)
            return 14;
        else
            return 0;
    }}px;
    font-weight: 400;
    position: relative;
    font-family: var(--font-family);
`;
