
import React, { useEffect, useState, useRef } from 'react';

const useFFmpeg = ({ videoBlob }) => {
    const workerRef = useRef(null);
    
    const probe= async ()=> {
        if (!videoBlob || !workerRef.current) return;
        console.log("probe",videoBlob.name)
        const worker=workerRef.current;

        const buffer = await videoBlob.arrayBuffer()

        worker.postMessage({
            type: "run",
            MEMFS: [{ name: videoBlob.name, data: buffer }],
            arguments: ["-i", videoBlob.name, "-f" , "mp4", "-c:v" , "libx264", "out.mp4"]
        });

    };

    useEffect(() => {
        probe();
    }, [videoBlob]);

    useEffect(() => {
        const worker = new Worker("http://localhost:3000/ffmpeg-worker-mp4.min.js");
       
        worker.onmessage = function (e) {
            const msg = e.data;
            switch (msg.type) {
                case "ready":
                    workerRef.current = worker;
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