import Header from "../components/AppBar/Header";
import Footer from "../components/Footer/Footer";
import styled from "@emotion/styled";
import "../styles/globals.css";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [router]);
  return (
    <Root>
      {!loading ? (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <LoadingScreen />
      )}
    </Root>
  );
}

export default MyApp;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`;
