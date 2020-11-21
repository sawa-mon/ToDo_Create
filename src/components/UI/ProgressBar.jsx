import React from 'react';
import styled from 'styled-components';

export const ProgressBar = ({checked, length}) => {
  const percent = Math.floor((checked / length) * 100);
  return (
    <div>
      <StyledWrapGauge>
      {percent >= 0 ? (
        <div>
          <StyledGauge 
          style={{ width: `${percent}%` }}
          >{percent}%</StyledGauge>
        </div>
        ) : (
          <StyledNoneGauge>表示する項目はありません</StyledNoneGauge>
        )}
      </StyledWrapGauge>
      <div>
        <div>
        </div>
        {percent === 100 && (
          <p>完了！！</p>
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
  height: 50px;
  width: 100%;
  border-radius: 20px;
`;

const StyledGauge = styled.div`
  display: grid;
  place-items: center;
  background-color: orange;
  height:50px;
  border-radius: 20px;
`;

const StyledNoneGauge = styled.div`
  display: grid;
  place-items: center;
  
`;