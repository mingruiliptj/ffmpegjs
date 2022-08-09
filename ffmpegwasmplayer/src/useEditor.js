
import React, {useEffect , useState, useRef} from 'react';


import useFFmpeg from './useFFmpeg.js';


function Editor({videoUrl}) {
    return (
        <video className='video'
    >
        <source src={videoUrl} type='video/mp4' />
    </video>
    );
}



const useEditor = ({videoBlob}) => {

    
    const ffmpeg=useFFmpeg({videoBlob});

    
	const renderEditor = () => {
		return (
		// videoUrl --> URL of uploaded video
			<Editor
				videoBlob={videoBlob}
			/>
		)
	}

    return {
        renderEditor,
    }


}

export default useEditor;


