import { useEffect, useState } from 'react';
import Desktop from './Desktop'
import Mobile from './Mobile'





function FullRender (){
    const [mobile, setMobile] = useState(window.innerWidth <= 768);

    useEffect(()=>{
        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            {mobile ? <Mobile/> : <Desktop/>}
        </>
    ) ;
}

export default FullRender;