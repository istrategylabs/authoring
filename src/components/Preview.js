import React from 'react';
import styled from 'styled-components';

let payload = null;

function parseUnit(x) {
  if (!isNaN(x)) return x + 'px';
  const len = x.length;
  if (len === 0) return x;
  if (x.slice(len - 2, len) === 'dp') return x.slice(0, len - 2) + 'px';
  return x;
}

function fromPayload(str) {
  const len = str.length;
  if (str.slice(0, 2) === '${' && str.slice(len - 1, len) === '}') {
    const data = str.slice(2, len - 1).split('.').slice(1);
    let value = payload;
    data.forEach(key => {
      const isArr = key.indexOf('[') > 0 && key.indexOf(']') > 2;
      if (isArr) {
        const index = +(key.slice(key.indexOf('[') + 1, key.indexOf(']')));
        key = key.slice(0, key.indexOf('['));
        value = value[key];
        value = value[index];
      } else {
        value = value[key];
      }
    });
    return value;
  }
  return str;
}

const StyledPreview = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

const StyledContainer = styled.div`
  display: flex;
  height: ${({ height }) => height ? parseUnit(height) : 'auto'};
  padding-left: ${({ paddingLeft }) => paddingLeft ? parseUnit(paddingLeft) : '0'};
  padding-top: ${({ paddingTop }) => paddingTop ? parseUnit(paddingTop) : '0'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom ? parseUnit(paddingBottom) : '0'};
  padding-right: ${({ paddingRight }) => paddingRight ? parseUnit(paddingRight) : '0'};
  position: ${props => props.position || 'relative'};
  margin-left: ${({ marginLeft }) => marginLeft ? parseUnit(marginLeft) : '0'};
  margin-top: ${({ marginTop }) => marginTop ? parseUnit(marginTop) : '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom ? parseUnit(marginBottom) : '0'};
  margin-right: ${({ marginRight }) => marginRight ? parseUnit(marginRight) : '0'};
  width: ${({ width }) => width ? parseUnit(width) : '100%'};
`;

const StyledFrame = styled(StyledContainer)`
  background: ${props => props.backgroundColor || 'transparent'};
`;

const StyledImage = styled.div`
  background-image: ${props => `url(${fromPayload(props.source)})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: ${({ scale }) => {
    switch (scale) {
      case 'best-fit':
        return 'contain';
      case 'best-fill':
        return 'cover';
      default:
        return '100% auto';
    }
  }};
  height: ${({ height }) => height ? parseUnit(height) : 'auto'};
  position: ${props => props.position || 'relative'};
  width: ${({ width }) => width ? parseUnit(width) : '100%'};
`;

function parse(item, i) {
  switch (item.type) {
    case 'ScrollView':
    case 'Container':
      return <StyledContainer key={i} {...item}>
        {item.item ? parse(item.item) : null}
        {item.items ? item.items.map(parse) : null}
      </StyledContainer>;
    case 'Image':
      return <StyledImage key={i} {...item} />;
    case 'Frame':
      return <StyledFrame key={i} {...item}>
        {item.item ? item.item.map(parse) : null}
      </StyledFrame>;
    case 'Text':
      return <div key={i}>{item.text}</div>;
    default:
      return null;
  }
}

class Preview extends React.Component {
  render() {

    const { data } = this.props;
    const { items } = data.document.mainTemplate;
    payload = data.dataSources;

    return <StyledPreview>
      {items.map(parse)}
    </StyledPreview>
  }
}

export default Preview;
