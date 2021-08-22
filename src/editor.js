import React from 'react';
import Mobile from './components/mobile/mobile.component';
import Desktop from './components/desktop/desktop.component';
import { useEffect , useState, useCallback } from 'react';


function Editor({data, setData}) {
    // const [data,setData] = useState('');
    const [isMobile,setIsMobile] = useState();

    const getDimensions = () => {
        setIsMobile(isMobile => isMobile = window.innerWidth<786);
    }

    useEffect(() => {
        window.addEventListener('resize', getDimensions);
        return () => window.removeEventListener('resize', getDimensions);
    },[getDimensions]);

    return (
        <div>
            {isMobile? <Mobile data={data}/> : <Desktop data={data} setData={setData}/>}
        </div>
    )
}

export default React.memo(Editor);