
import React, {useEffect , useState, useRef} from 'react';

const useUploader = () => {

	//Boolean state handling whether upload has occured or not
	const [isUpload, setIsUpload] = useState(true)

	//State handling storing of the video
	const [videoUrl, setVideoUrl] = useState('')
	const [videoBlob, setVideoBlob] = useState('')
    
    
    const uploadFile = async (fileInput) => {
		console.log(fileInput[0])
		let fileUrl = URL.createObjectURL(fileInput[0])
		setIsUpload(false)
		setVideoUrl(fileUrl)
		setVideoBlob(fileInput[0])
	}

    	//Function handling file input as well as file drop library and rendering of those elements
	const renderUploader = () => {
		return (
			<div>
				<input
					onChange={(e) => uploadFile(e.target.files)}
					type='file'
					id='up_file'
				/>
			</div>
		)
	}
    return {
        isUpload,
        videoUrl,
        videoBlob,
        renderUploader,
    };
}

export default useUploader;