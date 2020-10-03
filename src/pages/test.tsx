//import styles from './test.less';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import pdfFile from './1.pdf';
//import PDF from 'react-pdf-js';
// import pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
import BScroll from 'better-scroll'
const pdfFile = "http://localhost:5000/1.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js`;

// const testpdf = require("./1.pdf");
function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // wrapper = React.createRef();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {/*{Array.from(*/}
          {/*new Array(numPages),*/}
          {/*(el, index) => (*/}
            {/*<Page*/}
              {/*key={`page_${index + 1}`}*/}
              {/*pageNumber={index + 1}*/}
            {/*/>*/}
          {/*),*/}
        {/*)}*/}
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>

  );
}
// const pdfurl = require('./1.pdf')
export default () => {
  return (
    // <PDF file={pdfurl} />
    // <div>ddd</div>
    <div>
      <MyApp/>
    </div>

  );
}

