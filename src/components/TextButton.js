import React from 'react';
import styled from 'styled-components';

const StyledTextButton = styled.div`
  background: red;
  width: 20px;
  height: 20px;
`;

class TextButton extends React.Component {
  render() {
    return <StyledTextButton {...this.props} />
  }
}

export default TextButton;
