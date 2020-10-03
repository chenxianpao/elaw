import React from 'react';
// import styles from './news.less';
//
// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page news</h1>
//     </div>
//   );
// }
import { Scrollbars } from 'react-custom-scrollbars';
import { Button } from 'antd';
//ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import ex = require("umi/dist");

// Or Access Link,Element,etc as follows
// let Link      = Scroll.Link;
// let Element   = Scroll.Element;
// let Events    = Scroll.Events;
// let scroll    = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;

// ES5
// var React  = require('react');
// var Scroll = require('react-scroll');
//
// var Link      = Scroll.Link;
// var Element   = Scroll.Element;
// var Events    = Scroll.Events;
// var scroll    = Scroll.animateScroll;
// var scrollSpy = Scroll.scrollSpy;

class Section extends React.Component {
  componentDidMount(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }
  render() {
    return (
      <div>
        <Scrollbars style={{ width: 500, height: 300 }}>
          <p>Some great content...Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..Some great content..</p>
        </Scrollbars>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Test 1
        </Link>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
          Test 2 (delay)
        </Link>
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link>
        <Button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </Button>

        <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>

        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>
        <div className="element" id="containerElement">
          <Element name="firstInsideContainer">
            first element inside container
          </Element>

          <Element name="secondInsideContainer">
            second element inside container
          </Element>
        </div>

        <a onClick={this.scrollToTop}>To the top!</a>
        <br/>
        <a onClick={this.scrollToBottom}>To the bottom!</a>
        <br/>
        <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
      </div>
    );
  }
}

export default Section;
// React.render(
//   <Section />,
//   document.getElementById('example')
// );