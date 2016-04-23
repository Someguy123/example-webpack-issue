import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Bitcoin from 'bitcoinjs-lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tx: "n/a"
        }
    }
    sendCoins() {
        var key = "T5kGYs5ecvMvyPQCJiW2TADT2SMQxkhqsimX31YDxmwcGFxepdGs";
        var input = {
            "tx": "5cf482a1732fe411f5e2638f392f5e20b1f36911288a9b71a62c54fc99c7a1f5", 
            "amount": "0.00300000", 
            "n": 1, 
            "confirmations": 69, 
            "script": "76a91405a7ebfcec09e7901d7e709e599356898449daae88ac"
        };

        var tx = new Bitcoin.TransactionBuilder(Bitcoin.networks.litecoin);
        tx.addInput(input.tx, input.n);
        // send 0.001
        tx.addOutput("LiLiMKcihpK8rZQ3CBsEKrakAbgeTPknVY", 100000)
        // change
        tx.addOutput("LXT73wu3m3kwu6DDEwaQoKX9God46Pv5Us", 100000)
        tx.inputs.forEach(function(input, index) {
            tx.sign(index, new Bitcoin.ECPair.fromWIF(key, Bitcoin.networks.litecoin));
        }.bind(this));
        var raw_tx = tx.build().toHex();
        console.log('Raw TX: ', raw_tx);
        this.setState({tx: raw_tx});
    }
    render() {
        return (
            <div>
                <button onClick={this.sendCoins.bind(this) }>Click Me</button>
                <br/>
                <strong>Raw TX: </strong> <div className="tx">{this.state.tx}</div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));

