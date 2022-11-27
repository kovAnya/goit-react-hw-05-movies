import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 30px;
  margin-left: auto;
  margin-right: auto;
`;
export const MovieInfo = styled.div`
  display: flex;
  gap: 30px;
`;
export const AdditionalInfo = styled.div`
  margin-top: 20px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;

  & li {
    list-style: square;
  }

  & a {
    color: #000;
    font-size: 20px;
    line-height: 28px;
    padding: 5px;

    &:hover {
      color: coral;
    }
  }
`;
