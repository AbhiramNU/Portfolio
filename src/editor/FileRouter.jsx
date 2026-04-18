import React from 'react';
import CodeViewer from './CodeViewer';
import MarkdownPreview from './MarkdownPreview';

export default function FileRouter({ content, type, name }) {
  if (name === 'README.md') {
    return <MarkdownPreview />;
  }
  return <CodeViewer content={content} type={type} />;
}
