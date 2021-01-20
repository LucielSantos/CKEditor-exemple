import React, { useState } from 'react';

import { EditorComponent } from '../components';

import { Container, EditorContainer, Body, OutputTitle, OutputContainer } from './style'

import './contentEditorStyle.css';
// import './editorStyle.css';

function Home({
   ...props
}) {
   const [ data, setData ] = useState('<p>Hello from CKEditor 5!</p>');

   const handleChange = (e, editor) => {
      console.log(editor);

      const data = editor.getData();
      
      setData(data);
   }

   return (
      <Container>
         <h2>Using CKEditor 5 build in React</h2>

         <Body>
            <EditorContainer>
               <EditorComponent onChange={handleChange} data={data} />
            </EditorContainer>

            <OutputTitle>
               Output
            </OutputTitle>

            <OutputContainer>
               {data}
            </OutputContainer>

            <OutputTitle>
               Output rendered
            </OutputTitle>

            <OutputContainer dangerouslySetInnerHTML={{ __html: data }} className='ck-content' />
         </Body>
      </Container>
   );
}

export default Home;