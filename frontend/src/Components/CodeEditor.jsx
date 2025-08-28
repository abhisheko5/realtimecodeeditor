import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// Write your code here"
      onMount={handleEditorDidMount}
    />
  );
}

export default CodeEditor;
