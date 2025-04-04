import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "서은정 | 경력기술서",
  description: "",
  canonical: "",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "",
    title: "",
    site_name: "",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "서은정 | 경력기술서",
    },
    {
      name: "msapplication-tooltip",
      content: "서은정 | 경력기술서",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "robots",
      content: "noindex, nofollow", // 검색 엔진 크롤링 방지
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
