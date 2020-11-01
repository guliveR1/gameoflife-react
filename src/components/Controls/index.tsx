import React from 'react';

export interface ControlsProps {
    onStep: () => void,
    onRun: () => void
}

const Controls = ({onStep, onRun}: ControlsProps) => {
    return <>
        <button data-hook="stepButton" onClick={onStep}>Step</button>
        <button data-hook="runButton" onClick={onRun}>Run</button>
    </>;
}

export default Controls;
