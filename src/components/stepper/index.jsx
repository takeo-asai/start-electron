import React from 'react';
import {
    Step,
    Stepper,
    StepLabel
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
            text1: ''
        };
    }

    next() {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 1,
        });
    };

    prev() {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <div>
                    登録: <TextField
                        hintText="Hint Text"
                        errorText={this.state.text1 !== "" ? null : "Error"}
                        value={this.state.text1}
                        onChange={(e) => this.setState({ text1: e.target.value })}
                    />

                </div>;
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
                            {this.getStepContent(stepIndex)}
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onTouchTap={() => this.prev()}
                            />
                            <RaisedButton
                                label={stepIndex === 1 ? 'Finish' : 'Next'}
                                primary={true}
                                onTouchTap={() => this.next()}
                            />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default HorizontalLinearStepper;
