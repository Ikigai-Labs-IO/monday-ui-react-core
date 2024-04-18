import Text from "../Text/Text";
import React, { useMemo } from "react";
import styles from "./Stepper.module.scss";
import StepsDot from "./components/StepsDot";

interface StepperProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The index of the current displayed step. Starting from 0.
     */
    activeStepIndex: number;
    /**
     * The total number of steps
     */
    totalStepsCount: number;
}

const Stepper: React.FC<StepperProps> = ({
    activeStepIndex = 0,
    totalStepsCount = 2
}) => {
    const galleryDots = useMemo(() => {
        const dots = [];

        if (activeStepIndex > totalStepsCount - 1)
            activeStepIndex = totalStepsCount - 1;
        else if (activeStepIndex < 0)
            activeStepIndex = 0;

        for (let stepIndex = 0; stepIndex < totalStepsCount; stepIndex++) {
            dots.push(
                <div className={styles.flexStyles}>
                    <Text style={activeStepIndex === stepIndex ? { color: "var(--divider-selected)" } : { color: "var(--type-secondary)" }} type={Text.types.TEXT2}>Step {stepIndex + 1}</Text>
                    <StepsDot
                        key={`Ikigai-stepper-dot-${stepIndex + 1}`}
                        isActive={activeStepIndex === stepIndex}
                        className={styles.galleryHeaderDot}
                        isFirst={stepIndex === 0}
                        isLast={stepIndex === totalStepsCount - 1}
                    />
                </div>
            );
        }
        return dots;
    }, [activeStepIndex, totalStepsCount]);

    return (
        <div role="group" className={styles.galleryHeader}>
            {galleryDots}
        </div>
    );
}

export default Stepper;
