import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  connectors: [
    injected({
      // @ts-expect-error
      target() {
        return {
          id: "windowProvider",
          name: "Window Provider",
          provider(window?: Window) {
            return window?.ethereum;
          },
        };
      },
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
