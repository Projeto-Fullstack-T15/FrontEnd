import { ProductCard } from "./Components/ProductCard";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./style/globalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <RoutesMain /> */}
      <ProductCard />
    </>
  );
};
