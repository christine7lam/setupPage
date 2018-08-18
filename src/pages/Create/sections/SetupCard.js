import React from "react";
import OpCard from "./OpCard";
import {
  InputForm,
  InputLabel,
  InputSubLabel,
  Input
} from "./../../../global/styles";

class SetupCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getTextInput = (label, subtext) => {
    return (
      <InputForm padding="62px">
        <InputLabel>
          {label}
          {subtext !== null &&
            subtext !== "" && <InputSubLabel>&ensp;{subtext}</InputSubLabel>}
          <Input placeholder={label + "..."} type="text" name={label} />
        </InputLabel>
      </InputForm>
    );
  };

  getSetupCardContent = () => {
    return (
      <React.Fragment>
        {this.getTextInput("Code", "- Must be unique")}
        {this.getTextInput("Name")}
        {this.getTextInput("Season Code")}
        {this.getTextInput("Item Code")}
      </React.Fragment>
    );
  };

  render() {
    return (
      <OpCard
        title={"Required Seat Donation Details"}
        content={this.getSetupCardContent()}
        top
      />
    );
  }
}

export default SetupCard;
