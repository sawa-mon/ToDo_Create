import React from 'react';
import styled from 'styled-components';

export const ProgressBar = ({checked, length}) => {
  const percent = Math.floor((checked / length) * 100);
  return (
    <div>
        {percent === 100 ? (
          <StyledBackGauge>
            <StyledNoneGauge>{percent}%タスク完了！！</StyledNoneGauge>
          </StyledBackGauge>
            ) : (
          <StyledBackGauge>
          {percent >= 0 ? (
              <StyledGauge style={{ width: `${percent}%` }}>
                  <span>{percent}%</span>
              </StyledGauge>
          ): (
            <span>NowLoading...</span>
          )}
          </StyledBackGauge>
        )}
    </div>
  );
};

const StyledBackGauge = styled.div`
  position: absolute;
  top: 125px;
  background-color: #bbb;
  height: 40px;
  width: 400px;
  margin: 0 25px 0 25px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  `;

const StyledGauge = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  background-color: orange;
  height:40px;
  border-radius: 20px;
`;

const StyledNoneGauge = styled.div`
  display: grid;
  place-items: center;
  height: 40px;
  width: 500px;
`;