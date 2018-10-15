import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import TextButton from './TextButton';

const StyledUI = styled.div`
  background: #ddd;
  border: 1px solid #999;
  border-radius: 4px;
  padding: 10px;
  position: fixed;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`;

class FloatingUI extends React.Component {

  state = {
    isMouseDown: false,
    UILeft: 50,
    UITop: 50
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseDown = (e) => {
    const node = ReactDOM.findDOMNode(this);
    const { target } = e;
    if (!node.contains(target)) return;
    this.setState({
      isMouseDown: true
    });
  }

  onMouseUp = () => {
    this.setState({
      isMouseDown: false
    });
  }

  onMouseMove = (e) => {
    if (!this.state.isMouseDown) return;
    this.setState({
      UILeft: this.state.UILeft + e.movementX,
      UITop: this.state.UITop + e.movementY
    });
  }

  addElement = () => {
    const { data, update } = this.props;
    console.log(data);
    data[Math.random()] = true;
    update(data);
  }

  render() {
    const { UILeft, UITop } = this.state;
    return <StyledUI left={UILeft} top={UITop}>
      <TextButton onMouseDown={this.addElement} />
    </StyledUI>
  }
}

export default FloatingUI;
