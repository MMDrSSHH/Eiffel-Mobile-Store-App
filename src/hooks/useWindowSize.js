import { useEffect, useState } from "react";


// This custom hook will keep track of window resizes and return's the current width.
const useWindowSize = () => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        const updateSize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return width;
}

export default useWindowSize;