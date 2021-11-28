require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember snake good knee outer shed'; 
let testAccounts = [
"0xfde7d3f69820875e85efba2917a94f2712a4ced5bbcacc84575ff77ad9b7e229",
"0x6904da933d768c8dea7106dc355c06dfa74e2a6aa49ffa68b8e0d4b7c675498d",
"0x2c8ba38265f13cbe8cf383a99a9fdf53871994113eca8a4c90731f3f35735b73",
"0x1540edd3fab1db87238855b8a4726368450dbbe02b07fdcad16894c53178acef",
"0x59efcccb9727760e9660f660b6f3882243c05e90611f6f798e8bc58bf462b3e6",
"0x1561607efa45e8ea330d75aa1a6f8d2d9f6faea08d8a751a17a74f1c60ace6ad",
"0x12e86de2551c13f110163e7dc970464acf33755ebe60f016591f9b128031f49f",
"0xbde58e7659a99286e096c46e96c16743f01a487be7b8cf5dc09a0a422a559e28",
"0xf7c88ecd501fd69a9f905cee65a0a13e6cce90c0c8ed79f5d27cf007fe6eb1d7",
"0x9ccf3c64a69951ee7f5b4787ff01b3d13b98fe1d6fb5ad8e626d155f961fc0fa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


