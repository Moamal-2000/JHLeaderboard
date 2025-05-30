import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import ScrollToTopBtn from "@/Components/Shared/Buttons/ScrollToTopBtn/ScrollToTopBtn";
import GlobalOverlay from "@/Components/Shared/GlobalOverlay/GlobalOverlay";
import LayoutLayer from "@/Components/Shared/LayoutLayer/LayoutLayer";
import "../Styles/globals.scss";
import RootProviders from "./RootProviders";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <RootProviders>
      <html lang="en">
        <body>
          <LayoutLayer>
            <Header />
            {children}
            <Footer />
            <ScrollToTopBtn />
            <GlobalOverlay />
          </LayoutLayer>
        </body>
      </html>
    </RootProviders>
  );
}
