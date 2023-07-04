import {SpringToFrom} from './RemotionSpring'


export const FromMiddle= (START=0, EASE='fast')=>{
    return `inset(0 ${SpringToFrom(START,50,0,EASE)}% 0 ${SpringToFrom(START,50,0,EASE)}%)`
}

export const EraseFromMiddle= (START=0, EASE='fast')=>{
    return `inset(0 ${SpringToFrom(START,0,50,EASE)}% 0 ${SpringToFrom(START,0,50,EASE)}%)`
}
export const EraseToMiddleFromTop= (START=0, EASE='fast')=>{
    return `inset(${SpringToFrom(START,0,50,EASE)}% 0 ${SpringToFrom(START,0,50,EASE)}% 0)`
}

export const  FromTopToBottom= (START=0, EASE='fast')=>{
    return `inset( 0 0 ${SpringToFrom(START,100,0,EASE)}% 0)`
}

export const FromBottomToTop = (START=0, EASE='fast')=>{
    return `inset( ${SpringToFrom(START,100,0,EASE)}% 0 0  0)`
}

export const FromLeftToRight = (START=0, EASE='fast')=>{
    return `inset(0 ${SpringToFrom(START,100,0,EASE)}% 0 0 )`
}
export const FromRightToLeft = (START=0, EASE='fast')=>{
    return `inset(0  0 0 ${SpringToFrom(START,100,0,EASE)}% )`
}

export const SquareWipe= (START=0, EASE='fast')=>{
    return `inset(${SpringToFrom(START,50,0,EASE)}% ${SpringToFrom(START,50,0,EASE)}% ${SpringToFrom(START,50,0,EASE)}% ${SpringToFrom(START,50,0,EASE)}%)`
}