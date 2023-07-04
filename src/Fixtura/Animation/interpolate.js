import {interpolate,useCurrentFrame, useVideoConfig} from 'remotion';

export const interpolateOpacity = (frame)=>{
    const opacity = interpolate(frame, [0, 30], [0, 1], {extrapolateRight: "clamp",});
    return opacity;
}

export const interpolateOpacityByFrame=(FRAME, START, END, IN, OUT)=>{
    
    const opacity = interpolate(FRAME, [START, END], [IN, OUT], {extrapolateRight: "clamp",});
    return opacity;
}

export const interpolateValueByFrame=(FRAME, START, END, IN, OUT)=>{
    const opacity = interpolate(FRAME, [START, END], [IN, OUT], {extrapolateRight: "clamp",});
    return opacity;
}