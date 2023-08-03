import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Routers } from "./Routers"
import { CartContextProvider } from "./context/CartContext"
import { OrderContextProvider } from "./context/OrderContext"

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
        <OrderContextProvider>
          <CartContextProvider>
            <Routers />
            <GlobalStyle/>
          </CartContextProvider>
        </OrderContextProvider>
    </ThemeProvider>
  )
}

export default App
