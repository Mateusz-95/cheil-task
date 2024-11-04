import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
}

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
