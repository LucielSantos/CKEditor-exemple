import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { editorConfig } from './config';

import { Container } from './style';

export const EditorComponent = ({
   data,
   onChange,
}) => {
    return (
        <Container>
            <CKEditor
                editor={Editor}
                data={data}
                onChange={onChange}
                config={editorConfig}
            />
        </Container>
    );
}