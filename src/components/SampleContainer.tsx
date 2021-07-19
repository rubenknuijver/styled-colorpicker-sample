import { HTMLAttributes } from "react";
import styled from "styled-components";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  text-align: left;
  border-color: var(--border-color, #ccc);
`;

const SampleContainer = ({ children }: any) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default SampleContainer;
