import React, { Component } from 'react';
//import logo from ‘./logo.svg’;
import '../../src/App.css';
//import '../css/add_data.css';
import web3 from '../web3';
import ipfs from '../ipfs';
import storehash from '../storehash';
import { Button} from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { Table} from 'react-bootstrap';
import { Grid} from 'react-bootstrap';
import '../css/bootstrap.css';
import '../css/main.css';
import '../css/util.css';
import '../css/all.css';
import Navbar from './navbar/navbar';

import firebase from 'firebase';
class Adddata  extends Component {
 
    state = {
      ipfsHash:null,
      buffer:'',
      ethAddress:'',
      blockNumber:'',
      transactionHash:'',
      gasUsed:'',
      txReceipt: ''   
    };
captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
 convertToBuffer = async(reader) => {
      
        const buffer = await Buffer.from(reader.result);
    
        this.setState({buffer});
    };
onClick = async () => {
try{
        this.setState({blockNumber:"waiting.."});
        this.setState({gasUsed:"waiting..."});

await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{
          console.log(err,txReceipt);
          this.setState({txReceipt});
        }); 
await this.setState({blockNumber: this.state.txReceipt.blockNumber});
        await this.setState({gasUsed: this.state.txReceipt.gasUsed});    
      } 
    catch(error){
        console.log(error);
      } 
  } 
  componentWillMount()
    {
        const config={
            apiKey: "AIzaSyBMGzaJI04frjjWcDQ3FH4TZC79gBKXHks",
            authDomain: "car-docs.firebaseapp.com",
            databaseURL: "https://car-docs.firebaseio.com",
            projectId: "car-docs",
            storageBucket: "car-docs.appspot.com",
            messagingSenderId: "1504690872"
        };
        firebase.initializeApp(config);
    }
onSubmit = async (event) => {
      event.preventDefault();
     
      const accounts = await web3.eth.getAccounts();
     
      console.log('Sending from Metamask account: ' + accounts[0]);
    
      const ethAddress= await storehash.options.address;
      this.setState({ethAddress});
    
      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        console.log(err,ipfsHash);
        this.setState({ ipfsHash:ipfsHash[0].hash });
        console.log(this.state.ipfsHash);

        const itemsRef = firebase.database().ref('transaction_values');
        console.log(this.state);
        itemsRef.push(this.state);


        storehash.methods.sendHash(this.state.ipfsHash).send({
          from: accounts[0] 
        }, (error, transactionHash) => {
          console.log(transactionHash);
          this.setState({transactionHash});
        }); 
      }) 
      
      
      
     


    }; 
render() {
      
      return (
        <div className="add_data" >
          <Navbar/>
          
          <hr />
<Grid>
          <h3> Choose file to send to IPFS </h3>
          <Form onSubmit={this.onSubmit}>
            <input 
              type = "file"
              onChange = {this.captureFile}
            />
             <Button 
             bsStyle="primary" 
             type="submit"> 
             Send it 
             </Button>
          </Form>
<hr/>
 <Button onClick = {this.onClick}> Get Transaction Receipt </Button>
  <Table bordered responsive>
                <thead>
                  <tr>
                    <th>Tx Receipt Category</th>
                    <th>Values</th>
                  </tr>
                </thead>
               
                <tbody>
                  <tr>
                    <td>IPFS Hash # stored on Eth Contract</td>
                    <td>{this.state.ipfsHash}</td>
                  </tr>
                  <tr>
                    <td>Ethereum Contract Address</td>
                    <td>{this.state.ethAddress}</td>
                  </tr>
                  <tr>
                    <td>Tx Hash # </td>
                    <td>{this.state.transactionHash}</td>
                  </tr>
                  <tr>
                    <td>Block Number # </td>
                    <td>{this.state.blockNumber}</td>
                  </tr>
                  <tr>
                    <td>Gas Used</td>
                    <td>{this.state.gasUsed}</td>
                  </tr>
                
                </tbody>
            </Table>
        </Grid>

     </div>
      );
    } 
} 
export default Adddata;