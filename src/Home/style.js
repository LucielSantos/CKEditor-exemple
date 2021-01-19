import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Body = styled.div`
  max-width: 50rem;
  width: 100%;
`;

export const EditorContainer = styled.div`
  width: 100%;
`;

export const OutputContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #c4dbff;
  padding: 1rem;
  box-sizing: border-box;

  img{
    width: 100%;
  }
`;

export const OutputTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 2rem 0 .5rem 0;
`;
