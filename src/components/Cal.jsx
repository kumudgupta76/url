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

  const [selectedText, setSelectedText] = useState('');
  
  const handleTextareaSelect = (event) => {
    const textarea = event.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);
    setSelectedText(selected);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleEncode = () => {
    const encoded = encodeURIComponent(url);
    setEncodedUrl(encoded);
  };

  const handleDecode = () => {
    const decoded = decodeURIComponent(url);
    setDecodedUrl(decoded);
  };

  return (
    <div>
      <h1>URL Encoder and Decoder</h1>
      <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter URL" />
      <br />
      <button onClick={handleEncode}>Encode</button>
      <button onClick={handleDecode}>Decode</button>
      <br />
      <label>Encoded URL:</label>
      <textarea rows="4" cols="50" value={encodedUrl} readOnly />
      <br />
      <label>Decoded URL:</label>
      <textarea rows="4" cols="50" value={decodedUrl} readOnly />


      <h1>Selected Text in Textarea</h1>
      <textarea
        rows="4"
        cols="50"
        onSelect={handleTextareaSelect}
        placeholder="Select text here..."
      />
      <p>Selected Text: {selectedText}</p>
    </div>
  )
}
export default Cal
