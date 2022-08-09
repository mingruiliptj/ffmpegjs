
import React, {useEffect , useState, useRef} from 'react';

const useFFmpeg = () => {
    const workerRef = useRef(null);
    
    useEffect(() => {
        const worker = new Worker("http://localhost:3000/ffmpeg-worker-mp4.min.js");
        workerRef.current=worker;
        worker.onmessage = function(e) {
            const msg = e.data;
            switch (msg.type) {
                case "ready":
                    worker.postMessage({type: "run", arguments: ["-version"]});
                    break;
                case "stdout":
                    console.log(msg.data);
                    break;
                case "stderr":
                    console.log(msg.data);
                    break;
                case "done":
                    console.log(msg.data);
                    break;
                default:
                    break;
            }
    };
  }, []);

}

export default useFFmpeg;