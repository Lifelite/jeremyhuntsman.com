import {
    Box,
    Step,
    StepIcon,
    StepIndicator,
    StepNumber,
    Stepper,
    StepStatus,
    StepTitle,
    useSteps
} from "@chakra-ui/react";
import steps from "../content/stepperList.js"

export const NavStepper = () => {
    const {activeStep} = useSteps({
        index:1,
        count: steps.length
    })

    return (
        <Stepper index={activeStep} orientation='vertical' height='60vh' gap='0'>
            {steps.map((step, index) =>(
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />} />
                    </StepIndicator>
                    <Box flexShrink='0'>
                        <StepTitle>{step.title}</StepTitle>
                    </Box>
                </Step>
            ))}
        </Stepper>
    )
}