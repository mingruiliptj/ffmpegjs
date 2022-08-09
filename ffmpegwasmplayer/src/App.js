import logo from './logo.svg';
import './App.css';

import useUploader from './useUploader.js';
import useEditor from './useEditor.js';

// const createWorker = createWorkerFactory(() => import('http://localhost:3000/ffmpeg-worker-mp4.min.js'));

function App() {

  const {
      isUpload,
      videoUrl,
      videoBlob,
      renderUploader,
  } = useUploader();

  const {renderEditor} = useEditor({videoBlob});

  return (
    <div className="App">
      <header className="App-header">
      {isUpload ? renderUploader() : renderEditor()}
      </header>
    </div>
  );
}

export default App;
