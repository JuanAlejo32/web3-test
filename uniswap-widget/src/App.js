import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'


const jsonRpcUrlMap = {
  1: ['https://eth-mainnet.g.alchemy.com/v2/E2HbvxalVEIwdFH1McL0tSkcBkpxD1aV']
}

const theme = {
  primary: '#1F4A05',
  secondary: '#5F7D52',
  interactive: '#CBD6BA',
  container: '#D9ECD9',
  module: '#E9F7DF',
  accent: '#8E8B78',
  outline: '#CADDC2',
  dialog: '#FFF',
  fontFamily: 'Nunito',
  borderRadius: 0.8,
}

function App() {
  return (
    <div className="Uniswap">
    <SwapWidget jsonRpcUrlMap={jsonRpcUrlMap}  theme={theme}/>
  </div>
  );
}

export default App;
