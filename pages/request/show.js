import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Charity from "../../ethereum/charity";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";



class CharityShow extends Component {
  /**
   * getInitialProps() is asynchronous lifecycle method that populates props
   * 1. use the address from props.query.address and use it to create new campaign instance
   * 2. call getSummary() and assign the returned object to summary variable
   * 3. return an object that contains key-value pairs labeled for later use
   */
  static async getInitialProps(props) {
    console.log("address", props.query.address)
    const charity = Charity(props.query.address);
    const summary = await charity.methods.getRequest().call();
    console.log("this  is summary",summary);

    /**
     * Rather than passign the summary object that doesn't give much information
     * we'll return an object that describes the key value pairs (it goes to props).
     */
    return {
      address: props.query.address, // add address so we can pass it to contributeForm later on
      taskName: summary[0],
      location : summary[1],
      telephone: summary[2],
      dateRange: summary[3],
      requestExpiry: summary[4],
      taskDuration: summary[5]
    };
   
  }

  onSubmit = async event => {
    event.preventDefault();


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
   * 1. To make use of variables inside renderCards() let's destruct variables from props.
   */
  renderCards() {
    const {
      address,
      taskName,
      location,
      telephone,
      dateRange,
      requestExpiry,
      taskDuration
    } = this.props;

    /**
     * 2. array of objects containing the information we want to display
     * 3. return <Card.Group> and add in items property and pass in the array of objects
     */
    const items = [
      {
        header: "Change lightbulb",
        meta: "Task description",
        style: { overflowWrap: "break-word" } // additional property for styling
      },{
        header: "0x51faf60385005a51b29e58ddd6a6f582922916f3",
        meta: "Address of owner",
        style: { overflowWrap: "break-word" } // additional property for styling
      },
      {
        header: "Kuala Lumpur",
        meta: "Location of the request",
      },
      {
        header: "01020209872",
        meta: "Telephone number",
        },
      {
        header: "1.10.2018 - 4.10.2018",
        meta: "Date to when available",
      },
      {
        header: "12.10.2018",
        meta: "Date",
        
      },
      {
        header: "2 days",
        meta: "Time to complete",
      },
      {
        meta: <Button color={"teal"} >Start</Button>,
      },
      {
        meta: <Button color={"teal"} >Complete</Button>,
      },
      {
        meta: <Link route={`/request/milestone/new`}>
        <a>
        <Button color={"teal"} >Show Bids</Button>
        </a>
          </Link>,
      },
      {
        meta: <Link route={`/request/milestone/feedback`}>
        <a>
          <Button color={"green"} >Rating</Button>
        </a>
      </Link>,
      },
      {
        meta: <Link route={`/request/milestone/index`}>
                <a>
                  <Button color={"red"} >Conflict</Button>
                </a>
              </Link>,
      }
    ];





    return <Card.Group items={items} />;
  }

  /**
   * render():
   * -create first <Grid.Row>
   *    -display cards in <Grid.Column> with width=10
   *    -display contributeForm is <Grid.Column> with width=6
   * -second row:
   *    -button to view requests
   * -pass in the address as property so the contributeForm can use it later
   *               <Link route={`/charities/${this.props.address}/feedback`}>
                <a>
                  <Button primary>Give Feedback</Button>
                </a>
              </Link>
   */
  render() {
    console.log("add", this.address)

    return (
      <Layout>

        <h3>Request Details</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            
            </Grid.Column>
          </Grid.Row>'
          <Grid.Row>
            <Grid.Column>
           
            </Grid.Column>
            
          </Grid.Row>'
        



        </Grid>
      </Layout>
    );
  }
}

export default CharityShow;
