import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import contract from "../../ethereum/charity";


import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

/**
 * CharityNew:
 * -this class will take users input and create new campaign
 * -has a variable onSubmit that equals arrow function so 'this' works accordingly
 */

class ContractNew extends Component {
  state = {    
    errorMessage: "",
    loading: false,
    taskName : "",
    location : "",
    telephone : "",
    dateRange : "",
    requestExpiry : "",
    taskDuration : ""
  };

  /**
   * -onSubmit:
   *    -function handles the form submission
   *    -must be async because calling factory methods are asyncronous
   *    -preventDefault() prevents the browser to send the form to backend server (default functionality)
   * -web3 gets the account that willl send the transaction
   * -factory will deploy new instance of smart contract with parameter that comes from this.state.minumumContribion
   *    -remenber to specify what account sends the transaction (from field in send())
   * -spinner and error message:
   *    -are handled through state
   *    -error handling in the try catch block: update state (errorMessage) with the error.message if the block throws an error
   *    -when user clicks button: set loading true and remove any error messages
   *    -when try catch block finishes: set loading false
   * -Router:
   *    -pushRoute(/) takes user to page in paranthesis
   */
  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    /*try {
      if (this.state.minimumContribution === '') throw 'field is empty';
      if (this.state.minimumContribution <= 0) throw 'field is less than equal to zero';
      if (isNaN(Number(this.state.minimumContribution))) throw "field is not a number";
      if (this.state.minimumContribution % 1 != 0) throw 'field is a decimal number';
    } catch (error) {
      this.setState({ loading: false, errorMessage: 'Invalid minimum contribution (' + error + ')', minimumContribution: '' })
      return;
    }*/

    console.log(this.state.taskName)
    console.log(this.state.location)
    console.log(this.state.telephone)
    console.log(this.state.dateRange)
    console.log(this.state.requestExpiry)
    console.log(this.state.taskDuration)

    try {
      console.log("yes");
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      await factory.methods.createContract(this.state.taskName,
       this.state.location, this.state.telephone,
        this.state.dateRange, this.state.requestExpiry, this.state.taskDuration).send({
        from: accounts[0]
      });
      console.log('contract made');

      console.log("a")

      Router.pushRoute("/");
    } catch (error) {
      /*if(error.message.includes('Returned error: Error: MetaMask Tx Signature: User denied')) {
        this.setState({ errorMessage: 'Transaction rejected by user' })
      } else if (error.message.includes('No "from" address')) {
        this.setState({ errorMessage: 'MetaMask log in is required to create new charity' })
      } else {
        this.setState({ errorMessage: err.message }); // for production change errorMessage to: 'something went wrong!
      }*/
      console.log(error);
    }

    this.setState({ loading: false, taskName: '', location: '', telephone: '', dateRange: '', requestExpiry: '', taskDuration: '', });
  };

  /**
   * -form:
   *    -the form watches event handler onSubmit and executes this.onSubmit when it happens
   * -error:
   *    -import Message from semantic-ui
   *    -set proporties error, header, content to it
   *    -set error property to Form (expects boolean value (!!this.state.errorMessage))
   *
   */

  render() {
          console.log(this.state.dateRange)

    return (


      <Layout>
        <h3>Create New Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          


          <Form.Field>
            <label>Description of the Request</label>
            <Input  
              type="text"
              value={this.state.taskName} onChange={event => this.setState({taskName: event.target.value})} 
            />
          </Form.Field>

          <Form.Field>
            <label>Location</label>
            <Input  
              value={this.state.location} onChange={event => this.setState({location: event.target.value})} 
            />
          </Form.Field>
          <Form.Field>
            <label>Contact Information</label>
            <Input  
              value={this.state.telephone} onChange={event => this.setState({telephone: event.target.value})} 
            />
          </Form.Field>
          <Form.Field>
            <label>Preferred Time and Day in a Week</label>
            <Input  
              value={this.state.dateRange} onChange={event => this.setState({dateRange: event.target.value})} 
            />
          </Form.Field>
          <Form.Field>
            <label>Time limit for Request</label>
            <Input  
              value={this.state.requestExpiry} onChange={event => this.setState({requestExpiry: event.target.value})} 
            />
          </Form.Field>
          <Form.Field>
            <label>Time limit to Complete Task</label>
            <Input  
              value={this.state.taskDuration} onChange={event => this.setState({taskDuration: event.target.value})} 
            />
          </Form.Field>

          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default ContractNew;