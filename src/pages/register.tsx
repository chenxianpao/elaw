// import React from 'react';
// import styles from './register.less';
//
// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page register</h1>
//     </div>
//   );
// }
//import styles from './test.less';

import React, { useState, Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import pdfFile from './1.pdf';
//import PDF from 'react-pdf-js';
import Scroll from 'react-bscroll'
import { Scrollbars } from 'react-custom-scrollbars';

import 'react-bscroll/lib/react-scroll.css'
// import pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
import BScroll from 'better-scroll'
const pdfFile = "http://localhost:5000/2.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js`;

// const testpdf = require("./1.pdf");
class MyApp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {setNumPages: null, numPages: null, pageNumber: 1, setPageNumber: 1, Bscroll: '',}
    // this.setNumPages = null;
    // this.numPages = null;
    // this.pageNumber = 1;
    // this.setPageNumber = 1;
  }
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // wrapper = React.createRef();
  // onDocumentLoadSuccess({ numPages }) {
  //   this.setState({numPages: numPages})
  //   // setNumPages(numPages);
  // }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages: numPages,
    })
  }

  changePage(offset) {
    this.setState((state) => {
      return {pageNumber: state.pageNumber + offset}
    })
    // this.setState({pageNumber: offset+ state.pageNumber})
    // setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  componentDidMount() {
    const wrapper = document.querySelector('.wrapper')
    //选中DOM中定义的 .wrapper 进行初始化
    const scroll = new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
    this.setState({
      Bscroll: scroll,
    })
  }
  // componentDidMount () {
  //   this.scrollObj = this.refs.scroll.getScrollObj()
  // }

  previousPage() {
    this.changePage(-1);
  }

  nextPage() {
    this.changePage(1);
  }
  render() {
    const { pageNumber, Bscroll, numPages } = this.state
    return (
    <Scrollbars style={{ width: 500, height: 300 }}>
      <div>register</div>
      <Document
        file={pdfFile}
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}
        <Page pageNumber={pageNumber} />
      </Document>
    </Scrollbars>
    // <div className="container">
    //   <Scroll ref='scroll'>
    //
    //     {/*<p>Page {this.props.pageNumber} of {this.props.numPages}</p>*/}
    //     {/*<div>*/}
    //     {/*<p>*/}
    //     {/*Page {this.props.pageNumber || (this.props.numPages ? 1 : '--')} of {numPages || '--'}*/}
    //     {/*</p>*/}
    //     {/*<button*/}
    //     {/*type="button"*/}
    //     {/*disabled={pageNumber <= 1}*/}
    //     {/*onClick={previousPage}*/}
    //     {/*>*/}
    //     {/*Previous*/}
    //     {/*</button>*/}
    //     {/*<button*/}
    //     {/*type="button"*/}
    //     {/*disabled={pageNumber >= numPages}*/}
    //     {/*onClick={nextPage}*/}
    //     {/*>*/}
    //     {/*Next*/}
    //     {/*</button>*/}
    //     {/*</div>*/}
    //   </Scroll>
    // </div>

    )
  }

}
// const pdfurl = require('./1.pdf')
export default () => {
  return (
    // <PDF file={pdfurl} />
    // <div>ddd</div>
    <div>
      <MyApp1/>
    </div>

  );
}

