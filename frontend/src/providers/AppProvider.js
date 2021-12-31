import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import styled from "styled-components";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <StyledLayout>{children}</StyledLayout>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
