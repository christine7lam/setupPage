import React from "react";
import { Text } from "@paciolan/primitives";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #ffffff;
  align-self: center;
  width: 100%;
  height: auto;
  padding-bottom: 24px;
  border-top: 3px solid #3f7be1;
  border-radius: 4px;
  margin-top: ${props => (props.isTop ? "8px" : "24px")};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 4px 0 rgba(0, 0, 0, 0.048),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */

  @media (min-width: 824px) {
    width: 824px;
  }
`;

const CardHeaderContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d7d7d7;
`;

const CardHeaderTitle = styled(Text)`
  width: 100%;
  padding-left: 12px;
  font-size: 22px;
  margin-bottom: 0px;
  font-weight: 500;
  color: #6a6a6a;
`;

const getCardHeader = title => {
  return (
    <React.Fragment>
      <CardHeaderContainer>
        <CardHeaderTitle>{title}</CardHeaderTitle>
      </CardHeaderContainer>
    </React.Fragment>
  );
};

const OpCard = props => {
  return (
    <CardContainer isTop={props.top}>
      {getCardHeader(props.title)}
      {props.content}
    </CardContainer>
  );
};

export default OpCard;
