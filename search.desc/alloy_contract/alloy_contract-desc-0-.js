searchState.loadedDescShard("alloy_contract", 0, "alloy-contract\nAn error occurred ABI encoding or decoding.\nA builder for sending a transaction via <code>eth_sendTransaction</code>…\nA trait for decoding the output of a contract function.\nA handle to an Ethereum contract at a specific address.\n<code>contractAddress</code> was not found in the deployment …\n<code>CallBuilder</code> using a <code>Function</code> as the call decoder.\nContains the error value\nError when interacting with contracts.\nAn <code>alloy_provider::EthCall</code> with an abi decoder.\nHelper for managing the event filter before querying or …\nAn event poller.\nAn event subscription.\nA smart contract interface.\nCalled <code>deploy</code> with a transaction that is not a deployment …\nContains the success value\n<code>CallBuilder</code> that does not have a call decoder.\nDynamic contract result type.\n<code>CallBuilder</code> using a <code>SolCall</code> type as the call decoder.\nAn error occurred interacting with a contract over RPC.\nUnknown function referenced.\nUnknown function selector referenced.\nThe filter to use for querying or streaming logs.\nThe inner poller.\nThe provider to use for querying or streaming logs.\nThe provider.\nThe provider.\nThe provider.\nThe provider.\nThe inner poller.\nA builder for sending a transaction via <code>eth_sendTransaction</code>…\n<code>CallBuilder</code> using a <code>Function</code> as the call decoder.\n<code>CallBuilder</code> that does not have a call decoder.\n<code>CallBuilder</code> using a <code>SolCall</code> type as the call decoder.\nSets the <code>access_list</code> in the transaction to the provided …\nSets the <code>block</code> field for sending the tx to the chain\nCalculates the address that will be created by the …\nQueries the blockchain via an <code>eth_call</code> without submitting …\nQueries the blockchain via an <code>eth_call</code> without submitting …\nReturns the underlying transaction’s ABI-encoded data.\nClears the decoder, returning a raw call builder.\nClears the decoder, returning a raw call builder.\nClears the decoder, returning a raw call builder.\nClears the decoder, returning a raw call builder.\nDecodes the output of a contract function using the …\nBroadcasts the underlying transaction to the network as a …\nReturns the estimated gas cost for the underlying …\nSets the <code>from</code> field in the transaction to the provided …\nReturns the argument unchanged.\nSets the <code>gas</code> field in the transaction to the provided value\nSets the <code>gas_price</code> field in the transaction to the …\nCalls <code>U::from(self)</code>.\nSets the transaction request to the provided tx kind.\nUses a Legacy transaction instead of an EIP-1559 one to …\nApplies a function to the internal transaction request.\nSets the <code>max_fee_per_gas</code> in the transaction to the provide …\nSets the <code>max_priority_fee_per_gas</code> in the transaction to …\nCreates a new call builder with the provided provider and …\nCreates a new call builder with the provided provider and …\nCreates a new call builder with the provided provider and …\nCreates a new call builder with the provided provider and …\nSets the <code>nonce</code> field in the transaction to the provided …\nThe provider.\nThe provider.\nThe provider.\nThe provider.\nBroadcasts the underlying transaction to the network.\nSets the <code>sidecar</code> field in the transaction to the provided …\nSets the state override set.\nSets the <code>to</code> field in the transaction to the provided …\nSets the <code>value</code> field in the transaction to the provided …\nClones the provider and returns a new builder with the …\nSets the decoder to the provided <code>SolCall</code>.\nSets the decoder to the provided <code>SolCall</code>.\nAn error occurred ABI encoding or decoding.\n<code>contractAddress</code> was not found in the deployment …\nContains the error value\nError when interacting with contracts.\nCalled <code>deploy</code> with a transaction that is not a deployment …\nContains the success value\nDynamic contract result type.\nAn error occurred interacting with a contract over RPC.\nUnknown function referenced.\nUnknown function selector referenced.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA trait for decoding the output of a contract function.\nAn <code>alloy_provider::EthCall</code> with an abi decoder.\nFuture for the <code>EthCall</code> type. This future wraps an RPC call …\nRaw coder.\nSet the block to use for this call.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>EthCall</code>.\nCreate a new <code>EthCall</code>.\nSet the state overrides for this call.\nSwap the decoder for this call.\nHelper for managing the event filter before querying or …\nAn event poller.\nThe filter to use for querying or streaming logs.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nStarts the poller and returns a stream that yields the …\nCreates a new event with the provided provider and filter.\nThe inner poller.\nThe provider to use for querying or streaming logs.\nQueries the blockchain for the selected filter and returns …\nQueries the blockchain for the selected filter and returns …\nSubscribes to the stream of events that match the filter.\nWatches for events that match the filter.\nClones the provider and returns a new event with the …\nAn event subscription.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConverts the subscription into a stream.\nThe inner poller.\nA handle to an Ethereum contract at a specific address.\nReturns a reference to the contract’s ABI.\nReturns a reference to the contract’s address.\nReturns a new contract instance at <code>address</code>.\nReturns an <code>Event</code> builder with the provided filter.\nReturns the argument unchanged.\nReturns a transaction builder for the provided function …\nReturns a transaction builder for the provided function …\nCalls <code>U::from(self)</code>.\nCreates a new contract from the provided address, …\nReturns a reference to the contract’s provider.\nSets the contract’s address.\nClones the provider and returns a new contract instance …\nA smart contract interface.\nReturns a reference to the contract’s ABI.\nCreate a <code>ContractInstance</code> from this ABI for a contract at …\nUtility function for creating a mapping between a unique …\nABI-decodes the given data according to the function’s …\nDecode the provided ABI encoded bytes as the input of the …\nDecode the provided ABI encoded bytes as the output of the …\nDecode the provided ABI encoded bytes as the output of the …\nReturns the ABI encoded data (including the selector) for …\nReturns the ABI encoded data (including the selector) for …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConsumes the interface, returning the inner ABI.\nCreates a new contract interface from the provided ABI.")