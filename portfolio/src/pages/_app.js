import "@/styles/globals.css";
import { HeaderLayout } from "@/components/HeaderLayout";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </NextThemesProvider>
  );
}
