import React from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useState } from 'react'

function RichText(props) {

  // const [data, setData]=useState('')
  // const handleChange = ( e, editor ) => {
  //   setData(editor.getData())
  // }
  // console.log(data)

  const handleChange = (event, editor) =>{
    const data = editor.getData();
          props.onData(data)
  }
    
  return (
    <div className='editor'>
      {/* <CKEditor editor={ClassicEditor} onChange={(e,editor)=>(handleChange(e,editor))}/> */}
      <CKEditor
                    editor={ ClassicEditor }
                    onReady={ editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log( 'Editor is ready to use!', editor );
                  } }
                    onChange={ handleChange }
                    onBlur={ ( event, editor ) => {
                      console.log( 'Blur.', editor );
                  } }
                  onFocus={ ( event, editor ) => {
                      console.log( 'Focus.', editor );
                  } }
                />
    
    </div>
  )
}

export default RichText
