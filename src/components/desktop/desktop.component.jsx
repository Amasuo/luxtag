import React from 'react'
import './desktop.styles.css' 
// import CKEditor from 'react-ckeditor-component';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Desktop({data,setData}) {
    const handleChange = ( event) => {
        setData(data => data = event.target.value);
        console.log('data :', data)
    }
    return (
        <div className="center">
            <h1>Text</h1>
            <input
                value={data}
                onChange={handleChange}
            />
        </div>
    )
}

export default Desktop;