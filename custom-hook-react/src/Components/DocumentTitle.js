import React, { useEffect, useState } from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle';

const DocumentTitle = () => {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count- ${count}`;
    // }, [count]);

    // Created our own custom hook useDocumentTitle hook & using it in DocumentTitle Component
    useDocumentTitle(count);
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Count- {count}</button>
    </div>
  )
}

export default DocumentTitle