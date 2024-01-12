import { useState, useEffect } from 'react';

interface UseAnimatedVisibilityProps {
    initialIsVisible: boolean;
    animationDuration: number;
    animationIn: string;
    animationOut: string;
}

const useAnimatedVisibility = ({
    initialIsVisible,
    animationDuration,
    animationIn,
    animationOut,
}: UseAnimatedVisibilityProps) => {
    const [isVisible, setIsVisible] = useState(initialIsVisible);
    const [shouldRender, setShouldRender] = useState(initialIsVisible);
    const [animationClass, setAnimationClass] = useState('');

    const cssAnimationDuration = animationDuration
    animationDuration = animationDuration - 2;

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isVisible) {
            setShouldRender(true);
            setAnimationClass(`${animationIn} animation-duration-${cssAnimationDuration} `);
        } else {
            setAnimationClass(`${animationOut} animation-duration-${cssAnimationDuration}`);
            timeoutId = setTimeout(() => {
                setShouldRender(false);
            }, animationDuration);
        }

        return () => clearTimeout(timeoutId);
    }, [isVisible, animationDuration, animationIn, animationOut, cssAnimationDuration]);

    return { isVisible, setIsVisible, shouldRender, animationClass };
};

export default useAnimatedVisibility;
