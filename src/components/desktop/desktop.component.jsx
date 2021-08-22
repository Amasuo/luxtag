import React from 'react'
import './desktop.styles.css' 
import CKEditor from 'react-ckeditor-component';

function Desktop({data,setData}) {
    const handleChange = (event) => {
        setData(data => data = event.target.value);
        console.log('data :', data)
    }
    return (
        <div class="center">
            <h1>Text</h1>
            <CKEditor
                onChange={handleChange}
            />
        </div>
    )
}

export default Desktop;