import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import './index.css'


const jsonRpcUrlMap = {
  1: ['https://eth-mainnet.g.alchemy.com/v2/E2HbvxalVEIwdFH1McL0tSkcBkpxD1aV']
}

const theme = {
  primary: '#000',
  secondary: '#666',
  interactive: '#AFAFAF',
  container: '#DADADA',
  module: '#FFF',
  accent: '#0018F4',
  outline: '#000',
  dialog: '#FFF',
  fontFamily: 'Comic Sans MS',
  borderRadius: 0.2,
}

function App() {
  return (
    <div className="Uniswap">
    <SwapWidget jsonRpcUrlMap={jsonRpcUrlMap}  theme={theme} width="100%"/>
  </div>
  );
}

export default App;
