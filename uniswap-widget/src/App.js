import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'


const jsonRpcUrlMap = {
  1: ['https://eth-mainnet.g.alchemy.com/v2/E2HbvxalVEIwdFH1McL0tSkcBkpxD1aV']
}

function App() {
  return (
    <div className="Uniswap">
    <SwapWidget jsonRpcUrlMap={jsonRpcUrlMap}/>
  </div>
  );
}

export default App;
