import React from 'react';
import './index.css';

export interface ControlsProps {
    onStep: () => void,
    onRun: () => void,
    onClear: () => void,
    onStop: () => void
}

const Controls = ({onStep, onRun, onClear, onStop}: ControlsProps) => {
    return <div className="controls">
        <button data-hook="stepButton" onClick={onStep}>Step</button>
        <button data-hook="runButton" onClick={onRun}>Run</button>
        <button data-hook="clearButton" onClick={onClear}>Clear</button>
        <button data-hook="stopButton" onClick={onStop}>Stop</button>
    </div>;
}

export default Controls;
