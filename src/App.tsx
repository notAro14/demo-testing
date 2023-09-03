import { Theme } from "@radix-ui/themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { setupClient } from "./store/queryClient";
import Users from "./components/users";

const queryClient = setupClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme appearance="dark">
        <Users />
      </Theme>
    </QueryClientProvider>
  );
}
