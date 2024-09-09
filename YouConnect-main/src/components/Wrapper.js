import SplineUi from './SplineUi';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  margin-left: 650px;

  .spline {
    margin: 0;
    top: 0;
    right: 0;
  }
`;

function Wrapper() {
  return (
    <StyledWrapper>
      <SplineUi className="spline" />
    </StyledWrapper>
  );
}

export default Wrapper;
