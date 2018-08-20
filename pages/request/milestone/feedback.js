import React, { Component } from "react";
import { Button, Table, Message, Icon } from "semantic-ui-react";
import Layout from "../../../components/Layout";

class MilestoneIndex extends Component {
  state = {
  }


  render() {
    
    return (
      <Layout>
        <h3>feedback</h3>
        <Button color={"green"} >Positive</Button>
        <Button color={"red"} >Negaive</Button>

      </Layout>
    );
  }
}

export default MilestoneIndex;
