import React from "react";
import { Text, Image } from "@paciolan/primitives";
import { Tooltip } from "@paciolan/tooltip";
import styled from "styled-components";
import OpCard from "./OpCard";
import Info from "./../../../img/info.svg";
import Checkmark from "./../../../img/checkmark.svg";
import Add from "./../../../img/add.svg";
import { InputForm, InputLabel, Input } from "./../../../global/styles";

const TogglesContainer = styled.div`
  display: inline-grid;
  padding-left: 74px;
`;

const ToggleContainer = styled.div`
  display: block;
  padding-top: ${props => (props.last ? "18px" : "")};
  position: ${props => (props.last ? "relative" : "")};
  left: ${props => (props.last ? "52px" : "")};
`;

const ToggleTitleContainer = styled.div`
  display: flex;
`;

const ToggleTitle = styled(Text)`
  font-weight: 500;
  display: grid;
  font-size: 14px;
  color: #333333;
  opacity: 0.85;
  margin-bottom: 0px;
  padding-bottom: 6px;
  padding-right: 6px;
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  margin-left: 4px;
`;

const ToggleLabel = styled.button`
  color: ${props => {
    if (!props.disabled) {
      return props.active ? "#ffffff" : "#333333";
    } else {
      return "#9a9a9a";
    }
  }};
  opacity: ${props => (props.active ? "1" : "0.85")};
  font-weight: 500;
  background-color: ${props => {
    if (!props.disabled) {
      return props.active ? "#2a69b7" : "#FFFFFF";
    } else {
      return "#d7d7d7";
    }
  }};
  border: ${props => {
    if (!props.disabled) {
      return props.active ? "none" : "1px solid #979797";
    } else {
      return "none";
    }
  }};
  width: 62px;
  height: 36px;
  font-size: 12px;
  line-height: 36px;
  text-align: center;
  margin: 0px;

  :focus {
    outline: none !important;
    border: 1px solid #2a69b7;
    box-shadow: 0 0 10px #2a69b7;
  }
`;
const ToggleLabelLeft = styled(ToggleLabel)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
const ToggleLabelRight = styled(ToggleLabel)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const InfoIcon = styled(Image)`
  padding-top: 1px;
  width: 12px;
`;

const PaymentsTitleContainer = styled.div`
  display: grid;
  padding-top: 24px;
  width: 100%;
`;

const PaymentsTitle = styled(Text)`
  font-size: 18px;
  color: #333333;
  opacity: 0.85;
  padding-left: 62px;
  margin-bottom: 0px;
  padding-bottom: 16px;
  font-weight: 500;
`;

const PaymentsContainer = styled.div`
  display: flex;
`;

const PaymentOptionsContainer = styled.div`
  display: inline-grid;
`;

const PaymentOptionContainer = styled.div`
  display: flex;
  padding-left: 78px;
  padding-bottom: 4px;
`;

const PaymentCheckboxContainer = styled.div`
  display: flex;
  width: 26px;
  height: 26px;
`;

const PaymentInput = styled.input.attrs({
  type: "checkbox"
})`
  opacity: 0;
`;

const PaymentCheckmark = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  padding: 4px;
  border: 1px solid #979797;
  border-radius: 4px;

  &:hover {
    background: #e6e6e6;
  }

  ${PaymentInput}:checked ~ & {
    content: url(${Checkmark});
    background: #2a69b7;
    border: none;
    width: 14px;
    height: 14px;

    &:hover {
      background: #3f7be1;
    }
  }
  ${PaymentInput}:focus ~ & {
    border: 1px solid #3f7be1;
  }
`;

const PaymentsLabel = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  color: #333333;
  opacity: 0.85;
  margin: 0px;
  padding-top: 4px;
  padding-left: 8px;
`;

const PaymentsInfoContainer = styled.div`
  width: 260px;
  height: 140px;
  margin-left: 180px;
  margin-bottom: 12px;
  border: 1px solid #9a9a9a;
  border-radius: 4px;
`;

const PaymentsInfoText = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  opacity: 0.85;
  padding: 8px;
  margin: 0px;
`;

const ApplicationCodesContainer = styled.div`
  display: inline-flex;
`;

const NewRowText = styled(Text)`
  color: #6a6a6a;
  font-size: 12px;
  text-align: center;
  margin: 0px;
  padding-top: 12px;
  padding-left: 68px;
`;

const NewRowButtonContainer = styled.div`
  cursor: pointer;
`;

const NewRowButton = styled(Image)`
  width: 24px;
  height: 24px;
  position: relative;
  bottom: 53px;
  left: 236px;
`;

const DividerLine = styled.div`
  background-color: #d7d7d7;
  height: 1px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
`;

class OptionsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSalesActive: false,
      renewalsActive: false,
      twoMonths: false,
      threeMonths: false,
      fourMonths: false,
      sixMonths: false,
      applicationCodes: [""]
    };
  }

  getOptionsCardContent = () => {
    return (
      <React.Fragment>
        {this.getToggles()}
        {/* {this.getApplicationCodes()} */}
        <DividerLine />
        {this.getPaymentFrequencyOptions()}
      </React.Fragment>
    );
  };

  setSalesStatusActive = () => {
    this.setState({
      newSalesActive: true
    });
  };

  setSalesStatusInactive = () => {
    this.setState({
      newSalesActive: false
    });
  };

  setRenewalsActive = () => {
    this.setState({
      renewalsActive: true
    });
  };

  setRenewalsInactive = () => {
    this.setState({
      renewalsActive: false
    });
  };

  getToggles = () => {
    return (
      <React.Fragment>
        <PaymentsTitleContainer>
          <PaymentsTitle>Sales and Renewals</PaymentsTitle>
        </PaymentsTitleContainer>
        <TogglesContainer>
          {this.getToggle(
            "New Sales Status",
            "Set to active if the event is ready to sell tickets",
            this.state.newSalesActive,
            this.setSalesStatusInactive,
            this.setSalesStatusActive,
            true,
            false
          )}
          <ApplicationCodesContainer>
            {this.getApplicationCodes()}
            {this.getToggle(
              "Renewal Status",
              "Set to active if you are processing renewal applications, requires at least one application code to be entered",
              this.state.renewalsActive,
              this.setRenewalsInactive,
              this.setRenewalsActive,
              this.hasApplications(),
              true
            )}
          </ApplicationCodesContainer>
        </TogglesContainer>
      </React.Fragment>
    );
  };

  getToggle = (
    title,
    tooltipText,
    activeFlag,
    onClickInactive,
    onClickActive,
    isAvailable,
    isLast
  ) => {
    return (
      <ToggleContainer last={isLast}>
        <ToggleTitleContainer>
          <ToggleTitle>{title}</ToggleTitle>
          <Tooltip placement="top" title={tooltipText}>
            <InfoIcon src={Info} />
          </Tooltip>
        </ToggleTitleContainer>
        <ToggleButtonContainer>
          <ToggleLabelLeft
            active={!activeFlag}
            onClick={isAvailable ? onClickInactive : null}
            disabled={!isAvailable}
          >
            Inactive
          </ToggleLabelLeft>
          <ToggleLabelRight
            active={activeFlag}
            onClick={isAvailable ? onClickActive : null}
            disabled={!isAvailable}
          >
            Active
          </ToggleLabelRight>
        </ToggleButtonContainer>
      </ToggleContainer>
    );
  };

  getApplicationCodes = () => {
    return (
      <React.Fragment>
        <InputForm nopadding={false} grid>
          {this.state.applicationCodes.map((code, i) => {
            return (
              <React.Fragment key={i}>
                <InputLabel>
                  {i === 0 ? "Application Codes" : ""}
                  <Input
                    width="200px"
                    placeholder={"Application Code..."}
                    type="text"
                    name={i}
                    onChange={this.onApplicationCodeChange}
                    onKeyPress={this.onKeyPress}
                    autoFocus={i > 0 && this.isLastRow(i)}
                    autoComplete="off"
                  />
                </InputLabel>
                {this.isLastRow(i) &&
                  this.rowFinished() && (
                    <React.Fragment>
                      <NewRowText>Press ENTER to add new row</NewRowText>
                      <NewRowButtonContainer onClick={this.addAppCodeRow}>
                        <NewRowButton src={Add} />
                      </NewRowButtonContainer>
                    </React.Fragment>
                  )}
              </React.Fragment>
            );
          })}
        </InputForm>
      </React.Fragment>
    );
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.addAppCodeRow();
    }
  };

  addAppCodeRow = () => {
    if (this.rowFinished()) {
      let rows = this.state.applicationCodes;
      rows.push("");
      this.setState({
        applicationCodes: rows
      });
    }
  };

  onApplicationCodeChange = event => {
    const index = event.target.name;
    let rows = this.state.applicationCodes;
    rows[index] = event.target.value;
    this.setState({
      applicationCodes: rows
    });
  };

  isLastRow = index => {
    return index === this.state.applicationCodes.length - 1;
  };

  rowFinished = () => {
    return (
      this.state.applicationCodes[this.state.applicationCodes.length - 1] !== ""
    );
  };

  hasApplications = () => {
    return (
      this.state.applicationCodes.length > 0 &&
      this.state.applicationCodes[0] !== ""
    );
  };

  togglePaymentOption = (key, value) => {
    this.setState({
      [key]: !value
    });
  };

  getPaymentFrequencyOptions = () => {
    const textSuffix = " monthly payments";
    return (
      <React.Fragment>
        <PaymentsTitleContainer>
          <PaymentsTitle>Allowed Payment Plans</PaymentsTitle>
        </PaymentsTitleContainer>
        <PaymentsContainer>
          <PaymentOptionsContainer>
            {this.getPaymentCheckbox(
              "twoMonths",
              this.state.twoMonths,
              "2" + textSuffix
            )}
            {this.getPaymentCheckbox(
              "threeMonths",
              this.state.threeMonths,
              "3" + textSuffix
            )}
            {this.getPaymentCheckbox(
              "fourMonths",
              this.state.fourMonths,
              "4" + textSuffix
            )}
            {this.getPaymentCheckbox(
              "sixMonths",
              this.state.sixMonths,
              "6" + textSuffix
            )}
          </PaymentOptionsContainer>
          <PaymentsInfoContainer>
            <PaymentsInfoText>
              Note: When offering payment schedules, donors will be required to
              pay the first installment at the time of purchase. Each subsequent
              payment will be scheduled monthly from the original transaction
              date.
            </PaymentsInfoText>
            <PaymentsInfoText>
              Pay in full is always available.
            </PaymentsInfoText>
          </PaymentsInfoContainer>
        </PaymentsContainer>
      </React.Fragment>
    );
  };

  getPaymentCheckbox = (key, checkedFlag, labelText) => {
    return (
      <PaymentOptionContainer>
        <PaymentCheckboxContainer
          onClick={() => this.togglePaymentOption(key, checkedFlag)}
        >
          <PaymentInput checked={checkedFlag} />
          <PaymentCheckmark />
        </PaymentCheckboxContainer>
        <PaymentsLabel>{labelText}</PaymentsLabel>
      </PaymentOptionContainer>
    );
  };

  render() {
    return (
      <OpCard
        title={"eVenue Parameters"}
        content={this.getOptionsCardContent()}
      />
    );
  }
}

export default OptionsCard;
