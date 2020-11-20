import React from 'react';
import styled from 'styled-components';

export const ProgressBar = ({checked, length}) => {
  const percent = Math.floor((checked / length) * 100);
  return (
    <div>
      <StyledWrapGauge>
      {percent >= 0 && (
        <p>{percent}%</p>
        )}
          <StyledGauge
            style={{ width: `${percent}%` }}
          />
      </StyledWrapGauge>
      <div>
        <div>
        </div>
        {percent === 100 && (
          <p>全タスク完了！！</p>
        )}
      </div>
      <div>
        {/* <p>{`${checked} / ${length}`}</p> */}
      </div>
    </div>
  );
};

const StyledWrapGauge = styled.div`
  background-color: #bbb;
  height: 50%;
  width: 100%;
  border-radius: 20px
`;

const StyledGauge = styled.div`
  background-color: orange;
  height: 100%;
  border-radius: 20px
`;