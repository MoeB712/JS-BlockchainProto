/* blockchain.js testing*/
const Blockchain = require('./blockchain.js');

const bitcoinTest = new Blockchain();

/* TEST: NEW BLOCKS */
    // bitcoinTest.createNewBlock();
    // console.log(bitcoinTest);

/* TEST: BLOCK MINING AND TRANSACTIONS */
    // bitcoinTest.createNewBlock(789456, 'sdf82fekjdf8', 'sdf82fefijdf0');
    // bitcoinTest.createNewTransaction(100, 'Alex2ef298efe9f8', 'Jennlkj123jh23h');

    // bitcoinTest.createNewBlock(789457, 'abc82fekjdf8', 'xyz82fefijdf0');

    // bitcoinTest.createNewTransaction(0.5, 'Alex2ef298efe9f8', 'Jennlkj123jh23h');
    // bitcoinTest.createNewTransaction(47, 'Alex2ef298efe9f8', 'Jennlkj123jh23h');
    // bitcoinTest.createNewTransaction(2000, 'Alex2ef298efe9f8', 'Jennlkj123jh23h');

    // bitcoinTest.createNewBlock(789458, 'abc82fekjdf8', 'xyz82fefijdf0');

    // console.log(bitcoinTest);
    // console.log(bitcoinTest.chain[1]);
    // console.log(bitcoinTest.chain[2]);


/* TEST: HASHING */
// const prevBlockHash = '123456789';
// const curBlockData = [
//     {
//         amount: 10,
//         sender: '1234567gdfg',
//         recipient: 'sdf098sdfkj2'
//     },
//     {
//         amount: 0.789,
//         sender: 'sdf654sdf654',
//         recipient: 'we2r1v98e7v'
//     },
//     {
//         amount: 157,
//         sender: '12e1f1ffv11',
//         recipient: '1f1f13fbf1dsfv'
//     }
// ];
// const nonce = 100;
// console.log(bitcoinTest.hashBlock(prevBlockHash, curBlockData, nonce));

