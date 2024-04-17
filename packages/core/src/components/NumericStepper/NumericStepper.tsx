import { forwardRef } from "react";
import { VibeComponent } from "../../types";
import TextField from "../TextField/TextField";

interface NumericStepperProps {
    value?: string;
    disabled?: boolean;
    placeholder?: string;
}

const NumericStepper: VibeComponent<NumericStepperProps> = forwardRef(
    (
        {
            value = "1",
            disabled = false,
            placeholder = ""
        }
    ) => {
        return (
            <div style={{ width: "80px" }}>
                <TextField placeholder={placeholder} value={value} disabled={disabled} type={TextField.types.NUMBER} />
            </div>
        );
    }
);

export default NumericStepper;
