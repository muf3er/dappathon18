import React, { Component } from "react";
import { Form, TextArea, Input, Button, Table, Message, Icon } from "semantic-ui-react";
import Layout from "../../../components/Layout";

class MilestoneIndex extends Component {
  state = {
  }


  render() {

    return (
      <Layout>
        <h3>Confict</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          <Form.Field>
            <label>Description of the conflict</label>
            <TextArea
              type="text"
              value={this.state.taskName} onChange={event => this.setState({ taskName: event.target.value })}
            />
          </Form.Field>

          <Button loading={this.state.loading} primary>
            Send!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default MilestoneIndex;
