import Stepper from "../Stepper";

export default {
    title: "Data display/Stepper",
    component: Stepper
};

export const Overview = {
    render: () => <Stepper activeStepIndex={2} totalStepsCount={5} />,

    name: "Overview"
};