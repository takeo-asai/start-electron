import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class HorizontalLinearStepper extends React.Component {

    constructor() {
        super();
        this.state = {
            finished: false,
            stepIndex: 0,
        };
    }

    handleNext() {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 1,
        });
    };

    handlePrev() {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <div><TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    />登録</div>;
            case 1:
                return <div>確認</div>;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <div style={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
                <Stepper activeStep={stepIndex}>
                    <Step><StepLabel>登録</StepLabel></Step>
                    <Step><StepLabel>確認</StepLabel></Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ?
                        <p>登録が完了しました</p>
                        :
                        <div>
                            <p>{this.getStepContent(stepIndex)}</p>
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onTouchTap={() => this.handlePrev()}
                            />
                            <RaisedButton
                                label={stepIndex === 1 ? 'Finish' : 'Next'}
                                primary={true}
                                onTouchTap={() => this.handleNext()}
                            />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default HorizontalLinearStepper;