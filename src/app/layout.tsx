import type { Metadata } from "next";
import Favicon from "/public/favicon.ico";
import "@/app/css/reset.css";
import StyledComponentsRegistry from "@/app/registry";

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "Gerado e criado por next app",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
