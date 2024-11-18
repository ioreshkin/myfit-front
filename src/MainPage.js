import { useKeycloak } from '@react-keycloak/web';
import { useState } from 'react';
import upload from './api'

const MainPage = () => {
  const { keycloak, initialized } = useKeycloak();
  const [file, setFile] = useState({})
  const [files, setFiles] = useState([])

  const onFileChangeHandler = e => {
    e.preventDefault();
    if (e?.target) {
      setFile({
        selectedFile: e.target.files[0]
      });
    }
  }


  const startUpload = e => {
    if (!file?.selectedFile) return
    const form = new FormData();
    form.append('file', file.selectedFile)
    upload(form, keycloak.token)
      .then(res => {
        setFiles([...files, res.data.path])
      })
      .catch(e => console.log(e))
  }


  if (!initialized) {
    return <div>Loading...</div>;
  }

  return keycloak.authenticated
    ? (<>
      <button onClick={() => keycloak.logout()}>Logout</button>
      <p> теперь можно загрузить файл</p>
      <label>Upload Your File </label>
      <input type="file" onChange={onFileChangeHandler} />
      <button onClick={startUpload}>отправить</button>
      <p />
      {files.map((link, i) => <><img key={i} src={link} alt={i}/></>)}
    </>
    )
    : (
      <>
        <button onClick={() => keycloak.login()}>Login</button>
      </>
    );
}

export default MainPage