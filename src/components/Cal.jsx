import { Calendar, Col, Row, Select, Radio, Typography, Progress } from 'antd'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { green, red } from '@ant-design/colors'

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const Cal = () => {
  const [url, setUrl] = useState('');
  const [encodedUrl, setEncodedUrl] = useState('');
  const [decodedUrl, setDecodedUrl] = useState('');

  const [selectedText, setSelectedText] = useState({'start':0,'end':0, 'string':""});
  
  const handleTextareaSelect = (event) => {
    const textarea = event.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);
    console.log(textarea.value);
    setSelectedText({'start':start,'end':end, 'string':selected});
    setUrl(textarea.value);
  };

  const handleEncode = () => {
    const encoded = encodeURIComponent(selectedText.string);
    setEncodedUrl(encoded);
    setSelectedText({...selectedText, string:encoded});
  };

  const handleDecode = () => {
    const decoded = decodeURIComponent(selectedText.string);
    setDecodedUrl(decoded);
    setSelectedText({...selectedText, string:decoded});

  };

  return (
    <div style={{padding:"20px"}}>
      <h1>URL Encoder and Decoder</h1>
      <textarea
        rows="6"
        value={url}
        onChange={e => setUrl(e.target.value)}
        onSelect={handleTextareaSelect}
        placeholder="Select text here..."
        className='textarea-local'
      />
      <br />
      <button onClick={handleEncode}>Encode</button>
      <button onClick={handleDecode}>Decode</button>
      <br />
      <label>Final URL:</label>
      <textarea rows="3" className='textarea-local' value={url.substring(0, selectedText.start) + selectedText.string + url.substring(selectedText.end)} readOnly />
  
      <button onClick={() => setUrl(url.substring(0, selectedText.start) + selectedText.string + url.substring(selectedText.end))}>Update URL</button>
      <br />
      <label>Encoded Part:</label>
      <textarea rows="3" className='textarea-local' value={encodedUrl} readOnly />
      <br />
      <label>Decoded Part:</label>
      <textarea rows="3" className='textarea-local' value={decodedUrl} readOnly />


      <h1>Selected Text in Textarea</h1>
      <p>Selected Text Object:{JSON.stringify(selectedText)}</p>
      <p>Length: {url.length}</p>
      {/* <p>1 : {url.substring(0, selectedText.start)}</p>
      <p>2 : { selectedText.string}</p>
      <p>3 : { url.substring(selectedText.end)}</p> */}
      </div>
  )
}
export default Cal
