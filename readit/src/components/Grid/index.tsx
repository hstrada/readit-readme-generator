import React from 'react';

import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const Col = styled.div`
  flex-grow: 1;
  flex-basis: 300px;
  margin: 10px;
`;
