import { toNumber } from "lodash-es";
import { forwardRef, useMemo } from "react";
import { VibeComponent, withStaticProps } from "../../types";
import { CircularProgress, ProgressValue } from "./ProgressRingStyles";
import PercentageLabel from "../ProgressBars/PercentageLabel/PercentageLabel";
import { ProgressRingColors, ProgressRingSizes } from "./ProgressRingConstants";

const calculatePercentage = (value: number) => {
    const valuePercentage = toNumber(value);
    if (valuePercentage > 100)
        return 100;
    if (valuePercentage < 0)
        return 0;
    else
        return valuePercentage;
};

interface ProgressRingProps {
    /**
    * The progress bar current value.
    */
    value: number;
    size?: ProgressRingSizes;
    color?: ProgressRingColors;
}

export const ProgressRing: VibeComponent<ProgressRingProps> & {
    sizes?: typeof ProgressRingSizes,
    colors?: typeof ProgressRingColors,
} = forwardRef(
    (
        {
            value = 0,
            size = ProgressRingSizes.LARGE,
            color = ProgressRingColors.PRIMARY
        }
    ) => {
        const valuePercentage = useMemo(() => {
            if (value === null || value === undefined) return 0;
            return calculatePercentage(value);
        }, [value]);
        return (
            <CircularProgress size={size} degreeValue={value} color={color}>
                <ProgressValue size={size}>
                    <PercentageLabel forElement="progress-ring" value={valuePercentage} />
                </ProgressValue>
            </CircularProgress>
        );
    }
);

export default withStaticProps(ProgressRing, {
    sizes: ProgressRingSizes,
    colors: ProgressRingColors
});
