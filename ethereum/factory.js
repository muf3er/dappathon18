/**
 * setup campaignFactorty contract:
 * this file creates a new CampaignFactory contract and exports the
 * instance so it can be used elsewhere in in the project.
 * 
 * note:
 * -address in the instance must always be the newest!
 * -update it whenever campaignFactory gets redeployed
 */
import web3 from './web3';
import CharityFactory from './build/ContractFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CharityFactory.interface),
    '0x485c2A74C4651Ed0c0fC4f05012e71A063728A83'
);

export default instance;
