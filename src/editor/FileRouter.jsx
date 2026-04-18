import React from 'react';
import CodeViewer from './CodeViewer';
import MarkdownPreview from './MarkdownPreview';
import HomePreview from './HomePreview';

export default function FileRouter({ content, type, name }) {
  if (name === 'README.md') {
    return <MarkdownPreview />;
  }
  if (name === 'home.tsx') {
    return <HomePreview />;
  }
  return <CodeViewer content={content} type={type} />;
}
