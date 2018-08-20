import React, { Component } from "react";
import { Label, Menu, Button, Table, Message, Icon, Row, HeaderCell, Body } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Charity from "../../../ethereum/charity";
import MilestoneRow from "../../../components/MilestoneRow";

class MilestoneIndex extends Component {
  state = {
    hideMessage: true
  }



  render() {
    return (
      <Layout>
        <h3>Biddings</h3>
        <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Bidder Address</Table.HeaderCell>
        <Table.HeaderCell>Bidding Amount</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>0x51faf60385005a51b29e58ddd6a6f582922916f3</Table.Cell>
        <Table.Cell>0.18 Eth</Table.Cell>
        <Table.Cell>3/0</Table.Cell>
        <Table.Cell><Button primary >Choose Bid</Button></Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>0x4762e7618ebbff633e02635325f6c44a895594d6</Table.Cell>
        <Table.Cell>0.22 Eth</Table.Cell>
        <Table.Cell>12/2</Table.Cell>
        <Table.Cell><Button primary >Choose Bid</Button></Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>0x80e314c524f71a0f1c36eff9b791cd6bcc76a1f0</Table.Cell>
        <Table.Cell>0.2 Eth </Table.Cell>
        <Table.Cell>4/0</Table.Cell>
        <Table.Cell><Button primary >Choose Bid</Button></Table.Cell>
        
      </Table.Row>
    </Table.Body>

  </Table>


      </Layout>
    );
  }
}

export default MilestoneIndex;