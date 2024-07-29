import React, { useState } from 'react';

export const Code1: React.FC = () => {
    const sampleCode = `
    import React from 'react';
  
    const HelloWorld = () => {
      return <h1>Hello, world!</h1>;
    };
  
    export default HelloWorld;
    `;
  
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyClick = () => {
      navigator.clipboard.writeText(sampleCode).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }).catch((err) => {
        console.error('Failed to copy text: ', err);
      });
    };
  
    return (
      <div style={{ position: 'relative', padding: '1rem', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f5f5f5' }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', color:"black"}}>
          <code>{sampleCode}</code>
        </pre>
        <button
          onClick={handleCopyClick}
          style={{ position: 'absolute', top: '10px', right: '10px', padding: '5px 10px', cursor: 'pointer' }}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
};

export default Code1;