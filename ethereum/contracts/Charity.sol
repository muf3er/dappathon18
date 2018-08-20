pragma solidity ^0.4.17;

contract ContractFactory {
    address[] public deployedContracts;
    //Feedback feedback;
    /* function createContract() public {
        address newContract = new MainContract(msg.sender, feedback);
        deployedContracts.push(newContract);
    } */

    function createContract(string _taskName, string _location, string _telephone,
        string _dateRange, string _requestExpiry, string _taskDuration) public
        {
        address newContract = new MainContract(msg.sender,  _taskName,  _location,
         _telephone,  _dateRange,  _requestExpiry,
         _taskDuration);
        deployedContracts.push(newContract);
    }

    function getDeployedContracts() public view returns (address[]) {
        return deployedContracts;
    }
    /* function setFeedback(Feedback _feedback) public {
        feedback = _feedback;
    } */
}

/* contract Feedback {
    mapping(address => uint) feedbackPositive;
    mapping(address => uint) feedbackNegative;
    
    function giveFeedback(bool feedback, address feedbackTo) public {
        if (feedback) {
            feedbackPositive[feedbackTo] += 1;
        }

        if (!feedback) {
            feedbackNegative[feedbackTo] += 1;
        }
    }
    
    function getPositiveByAddress(address adr) public view returns (uint) {
        return feedbackPositive[adr];
    }
    
    function getNegativeByAddress(address adr) public view returns (uint) {
        return feedbackNegative[adr];
    }
    
} */


contract MainContract {

    struct Bid {
        uint value;
        address doerAddress;
    }

    struct Request {
        string taskName;
        string location;
        string telephone;
        string dateRange;
        string requestExpiry;
        string taskDuration;
    }

    // variables
    //Feedback feedback;
    Request public request;
    address public owner;
    address public doer;
    Bid[] public bids;
    bool ownerComplete;
    bool doerComplete;
    bool ownerStart;
    bool doerStart;
    uint finalValue;
    bool completeTask;
    string taskName;
    string location;
    string telephone;
    string dateRange;
    string requestExpiry;
    string taskDuration;

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    modifier doerOnly() {
        require(msg.sender == doer);
        _;
    }

    modifier ownerAndDoerOnly() {
        require(msg.sender == doer || msg.sender == owner);
        _;
    }

    /* function MainContract(address _owner, Feedback _feedback) public {
        owner = _owner;
        //feedback = _feedback;
    } */

    function MainContract(address _owner, string _taskName, string _location,
        string _telephone, string _dateRange, string _requestExpiry,
        string _taskDuration) public
        {
        owner = _owner;
        //feedback = _feedback;
    }

    function makeRequest(string _taskName, string _location,
        string _telephone, string _dateRange, string _requestExpiry,
        string _taskDuration) public ownerOnly {
            taskName = _taskName;
            location = _location;
            telephone = _telephone;
            dateRange = _dateRange;
            requestExpiry = _requestExpiry;
            taskDuration = _taskDuration;
            
    } 

    function bid(uint _value) public {
        Bid memory newBid;
        newBid.value = _value;
        newBid.doerAddress = msg.sender;

        bids.push(newBid);
    }

    function chooseBidder(address selectedAddress, uint value) public payable ownerOnly{
        doer = selectedAddress;        
        require(msg.value == value);
    }

    function readyToStart() public ownerAndDoerOnly {
        if(msg.sender == owner) {
            ownerStart = true;
        }

        if(msg.sender == doer) {
            doerStart = true;
        }

        if(doerStart && ownerStart) {
            uint value = this.balance / 2;
            doer.transfer(value);
        }
    }

    function readyTocomplete(bool positiveRating) public ownerAndDoerOnly {
        if(msg.sender == owner) {
            ownerComplete = true;
            //feedback.giveFeedback(positiveRating, doer);
        }

        if(msg.sender == doer) {
            doerComplete = true;
            //feedback.giveFeedback(positiveRating, owner);
        }

        if(doerComplete && ownerComplete) {
            completeTask = true;
            doer.transfer(this.balance);
        }    
    }

    function getRequest() public view returns (string, string, string, string, string, string) {
        return(
            taskName,
            location,
            telephone,
            dateRange,
            requestExpiry,
            taskDuration
        );
    }
}