// app/page.tsx

'use client'

import MintSBT from "@/components/MintSBT";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const MANIFEST_URL = 'https://finer-9a857.web.app/manifest.json';

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl={MANIFEST_URL}>
      <MintSBT />
    </TonConnectUIProvider>
  );
}
