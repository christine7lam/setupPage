import React from "react";
import styled from "styled-components";
import { Text, Heading, Image } from "@paciolan/primitives";
import Button from "@material-ui/core/Button";
import Dropzone from "react-dropzone";
import OpCard from "./OpCard";
import Add from "./../../../img/add.svg";
import { InputForm, InputLabel, Input } from "./../../../global/styles";

const FileDropContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled(Heading)`
  font-size: 18px;
  color: #333333;
  opacity: 0.85;
  margin-bottom: 0px;
  padding-top: 16px;
  padding-bottom: 2px;
  padding-left: 62px;
  font-weight: 500;
`;

const DropContainer = styled(Dropzone)`
  border: ${props =>
    props.highlightborder ? "2px dashed #4caf50" : "2px dashed #979797"};
  border-radius: 4px;
  height: 80px;
  width: 586px;
  cursor: pointer;
`;

const DropText = styled(Text)`
  font-size: 14px;
  color: #333333;
  opacity: 0.85;
  text-align: center;
  margin-bottom: 0px;
  padding-top: 12px;
  font-weight: 500;
`;

const DownloadTemplateButtonContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8px;
`;

const DownloadTemplateButton = styled.button`
  color: #ef6c00;
  cursor: pointer;
  font-size: 12px;
  text-decoration: none !important;
  text-align: right !important;
  border: none;
  background: none;

  &:hover {
    background-color: white;
  }
`;

const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
`;

const BrowseButton = styled(Button)`
  color: #ffffff !important;
  background-color: #2a69b7 !important;
  border-radius: 4px;
  height: 32px;
  width: 128px;
`;

const OrDividerContainer = styled.div`
  display: flex;
  height: 22px;
  padding-top: 16px;
  justify-content: center;
  align-items: center;
`;

const DividerLine = styled.div`
  padding-left: 8vw;
  background-color: #d7d7d7;
  height: 1px;
  width: 80px;
`;

const DividerText = styled(Text)`
  font-size: 18px;
  color: #6a6a6a;
  opacity: 0.85;
  font-weight: 600;
  margin-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
`;

const MaunalEnterLineContainer = styled.div`
  display: flex;
  padding-bottom: 12px;
`;

const CurrencyInputContainer = styled.div`
  display: flex;
`;

const DollarText = styled(Text)`
  margin-bottom: 0px;
  padding-top: 16px;
`;

const NewRowText = styled(Text)`
  color: #6a6a6a;
  font-size: 12px;
  text-align: end;
  margin: 0px;
  padding-right: 12px;
`;

const NewRowButtonContainer = styled.div`
  height: 0px;
`;

const NewRowButton = styled(Image)`
  width: 24px;
  height: 24px;
  left: 632px;
  bottom: 42px;
  position: relative;
  cursor: pointer;
`;

class DonationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragEntered: false,
      donationRows: [{}]
    };
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPress);
  }

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.addDonationInputRow();
    }
  };

  addDonationInputRow = () => {
    if (this.rowFinished()) {
      let rows = this.state.donationRows;
      rows.push({});
      this.setState({
        donationRows: rows
      });
    }
  };

  onDrop = files => {
    this.setState({
      dragEntered: false
    });
  };

  onDragEnter = () => {
    this.setState({
      dragEntered: true
    });
  };

  onDragLeave = () => {
    this.setState({
      dragEntered: false
    });
  };

  dragAndDropContent = () => {
    return (
      <React.Fragment>
        <Header>Upload donation CSV file</Header>
        <DownloadTemplateButtonContainer
          method="get"
          action="https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/rsd-upload-structure.xlsx"
        >
          <DownloadTemplateButton>Download CSV template</DownloadTemplateButton>
        </DownloadTemplateButtonContainer>
        <FileDropContainer>
          <DropContainer
            onDrop={this.onDrop}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            highlightborder={this.state.dragEntered ? 1 : 0}
          >
            <DropText>{"Drag & drop here, or"}</DropText>
            <UploadButtonContainer>
              <BrowseButton>Browse</BrowseButton>
            </UploadButtonContainer>
          </DropContainer>
        </FileDropContainer>
      </React.Fragment>
    );
  };

  divider = () => {
    return (
      <OrDividerContainer>
        <DividerLine />
        <DividerText>OR</DividerText>
        <DividerLine />
      </OrDividerContainer>
    );
  };

  manualEnterContent = () => {
    return (
      <React.Fragment>
        <Header>Enter donation amounts manually</Header>
        <InputForm grid center>
          {this.state.donationRows.map((donation, i) => {
            return this.getInputFields(
              donation,
              i,
              i === this.state.donationRows.length - 1
            );
          })}
        </InputForm>
      </React.Fragment>
    );
  };

  updateDonations = (event, key) => {
    const index = event.target.name;
    let rows = this.state.donationRows;
    let row = rows[index];
    row = {
      ...row,
      [key]: event.target.value
    };
    rows[index] = row;
    this.setState({
      donationRows: rows
    });
  };

  priceLevelChanged = event => {
    this.updateDonations(event, "priceLevel");
  };

  priceTypeChanged = event => {
    this.updateDonations(event, "priceType");
  };

  donationAmountChanged = event => {
    this.updateDonations(event, "donationAmount");
  };

  getInputFields = (donation, index, isLastRow) => {
    return (
      <React.Fragment key={index}>
        <MaunalEnterLineContainer>
          {this.getTextInput(
            "Price Level",
            index,
            this.priceLevelChanged,
            isLastRow && index > 0
          )}
          {this.getTextInput("Price Type", index, this.priceTypeChanged)}
          {this.getCurrencyInput(
            "Donation amount",
            index,
            this.donationAmountChanged
          )}
        </MaunalEnterLineContainer>
        {isLastRow &&
          this.rowFinished() && (
            <React.Fragment>
              <NewRowButtonContainer onClick={this.addDonationInputRow}>
                <NewRowButton src={Add} />
              </NewRowButtonContainer>
              <NewRowText>Press ENTER to add new row</NewRowText>
            </React.Fragment>
          )}
      </React.Fragment>
    );
  };

  rowFinished = () => {
    const row = this.state.donationRows[this.state.donationRows.length - 1];
    return row.priceLevel && row.priceType && row.donationAmount;
  };

  getTextInput = (label, index, onChange, autofocus) => {
    return (
      <InputLabel padding="12px">
        {index === 0 ? label : ""}
        <Input
          width="162px"
          placeholder={label + "..."}
          type="text"
          name={index}
          onChange={onChange}
          autoFocus={autofocus}
        />
      </InputLabel>
    );
  };

  getCurrencyInput = (label, index, onChange) => {
    return (
      <InputLabel padding="12px">
        {index === 0 ? label : ""}
        <CurrencyInputContainer>
          <DollarText>$</DollarText>
          <Input
            width="162px"
            placeholder="123.45"
            type="number"
            step=".01"
            min="0"
            name={index}
            onChange={onChange}
            autoComplete="off"
          />
        </CurrencyInputContainer>
      </InputLabel>
    );
  };

  getDonationCardContent = () => {
    return (
      <React.Fragment>
        {this.dragAndDropContent()}
        {this.divider()}
        {this.manualEnterContent()}
      </React.Fragment>
    );
  };

  render() {
    return (
      <OpCard
        title={"Donation Amount Creation"}
        content={this.getDonationCardContent()}
      />
    );
  }
}

export default DonationCard;
