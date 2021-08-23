import React from 'react'
import './desktop.styles.css' 
import CKEditor from 'ckeditor4-react';
import ReactHtmlParser from 'react-html-parser';

// import CKEditor from 'react-ckeditor-component';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Desktop({data,setData}) {
    const handleChange = (event) => {
        setData(data => data = event.editor.getData().replace(/<[^>]+>/g, ''));
        console.log('data :', data)
    }
    return (
        <div className="center">
            <h1>Text</h1>
            <CKEditor
                data= {data}
                onChange = {handleChange}
            />
        </div>
    )
}

export default Desktop;