import React from 'react';
import styles from './legalDocuments.less';
import { Button, Tag, Divider, Tabs } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { Document, Page, pdfjs } from 'react-pdf';
const { TabPane } = Tabs;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const pdfFile = "http://localhost:5000/1.pdf";
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

function callback(key) {
  console.log(key);
}
class legalDocuments extends React.Component {
  constructor(props){
    super(props);
    this.state = {setNumPages: null, numPages: null, pageNumber: 1, setPageNumber: 1,
      liList: ["a", "b", "c"]}

  }

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


  render(){
    const { pageNumber, numPages, liList } = this.state

    return (
      <div>
        <div>
          <div className={styles.middleButton}>
            <input className={styles.searchInput} type="text"/>
            <Button type="primary">Go</Button>
          </div>
          <div className={styles.tagContainer}>
            <label htmlFor="" className={styles.tagLabel}>合同协议：</label>
            {liList.map((item) =>
              <Tag className={styles.li}>{item}</Tag>
            )}
          </div>
          <br/>
          <div className={styles.tagContainer}>
            <label htmlFor="" className={styles.tagLabel}>场景用途：</label>
            {liList.map((item) =>
              <Tag className={styles.li}>{item}</Tag>
            )}
          </div>
          <br/>

          <Divider/>
          <div>
            <label htmlFor="" className={styles.tagLabel}>商品类型：</label>
            {liList.map((item) =>
              <Tag className={styles.li}>{item}</Tag>
            )}
          </div>
          <br/>
          <br/>
        </div>
        <div>
          <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="综合排序" key="1">
                <ul>
                  {liList.map((item) =>
                    <li>{item}</li>
                  )}
                </ul>
              </TabPane>
              <TabPane tab="销量优先" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="新品优先" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="人气优先" key="4">
                Content of Tab Pane 4
              </TabPane>
            </Tabs>
          </div>
        </div>
        {/*<div className={styles.pdfView}>*/}
          {/*<Scrollbars style={{ width: 500, height: 300 }}>*/}
            {/*<Document*/}
              {/*file={pdfFile}*/}
              {/*onLoadSuccess={this.onDocumentLoadSuccess}*/}
            {/*>*/}
              {/*{Array.from(*/}
                {/*new Array(numPages),*/}
                {/*(el, index) => (*/}
                  {/*<Page*/}
                    {/*key={`page_${index + 1}`}*/}
                    {/*pageNumber={index + 1}*/}
                  {/*/>*/}
                {/*),*/}
              {/*)}*/}
              {/*<Page pageNumber={pageNumber} />*/}
            {/*</Document>*/}
          {/*</Scrollbars>*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default legalDocuments;