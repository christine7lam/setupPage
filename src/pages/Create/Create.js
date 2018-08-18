import React from "react";
import { Layout, Row, Column } from "@paciolan/primitives";
import Button from "@material-ui/core/Button";
import SetupCard from "./sections/SetupCard";
import DonationCard from "./sections/DonationCard";
import OptionsCard from "./sections/OptionsCard";
import styled from "styled-components";

const CardsContainer = styled(Layout)`
  justify-content: center;
  align-items: center;
`;

const TempPadding = styled.div`
  padding-bottom: 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 18px;
  padding-bottom: 8px;

  @media (min-width: 824px) {
    width: 824px;
  }
`;

const SubmitButton = styled(Button)`
  color: #ffffff !important;
  background-color: #2a69b7 !important;
  border-radius: 4px;
  height: 32px;
  width: 128px;
`;

const CancelButton = styled(Button)`
  color: #2a69b7 !important;
  background-color: none !important;
  margin-right: 12px !important;
  border-radius: 4px;
  height: 32px;
  width: 128px;
`;

const BackButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 824px) {
    width: 824px;
  }
`;

const BackButton = CancelButton.extend`
  margin-right: 0px !important;
  position: relative;
  right: 32px;
`;
class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { startCreate } = this.props;
    startCreate("996");
  }

  componentDidUpdate() {}

  render() {
    return (
      <CardsContainer>
        <BackButtonContainer>
          <BackButton>Go Back</BackButton>
        </BackButtonContainer>
        <Row>
          <Column>
            <SetupCard />
            <OptionsCard />
            <DonationCard />
            <TempPadding />
          </Column>
        </Row>
        <ButtonsContainer>
          <CancelButton>Cancel</CancelButton>
          <SubmitButton>Submit</SubmitButton>
        </ButtonsContainer>
      </CardsContainer>
    );
  }
}

export default Create;
