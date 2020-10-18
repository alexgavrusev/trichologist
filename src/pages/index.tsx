import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import type { FluidObject } from "gatsby-image";
import scrollIntoView from "scroll-into-view";

import Layout from "components/layout";
import GridContainer from "components/grid-container";

import Hero from "sections/hero";
import About from "sections/about";
import Process from "sections/process";
import Reviews from "sections/reviews";
import Cta from "sections/cta";
import Footer from "sections/footer";

type Image = {
  childImageSharp: { fluid: FluidObject };
};

const Index = () => {
  const { site, ...data } = useStaticQuery<
    {
      [K in
        | "hero"
        | "heroSm"
        | "about"
        | "aboutSm"
        | "cta"
        | "ctaSm"
        | "ctaMd"
        | "ctaLg"]: Image;
    } & {
      site: {
        siteMetadata: {
          title: string;
        };
      };
    }
  >(graphql`
    fragment Image on File {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    query Images {
      hero: file(relativePath: { eq: "hero.png" }) {
        ...Image
      }
      heroSm: file(relativePath: { eq: "hero_desktop.png" }) {
        ...Image
      }

      about: file(relativePath: { eq: "about.png" }) {
        ...Image
      }
      aboutSm: file(relativePath: { eq: "about_desktop.png" }) {
        ...Image
      }

      cta: file(relativePath: { eq: "cta.png" }) {
        ...Image
      }
      ctaSm: file(relativePath: { eq: "cta_landscape.png" }) {
        ...Image
      }
      ctaMd: file(relativePath: { eq: "cta_tablet.png" }) {
        ...Image
      }
      ctaLg: file(relativePath: { eq: "cta_desktop.png" }) {
        ...Image
      }

      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const {
    hero,
    heroSm,
    about,
    aboutSm,
    cta,
    ctaSm,
    ctaMd,
    ctaLg,
  } = Object.fromEntries(
    Object.entries(data).map(([key, value]: [string, Image]) => [
      key,
      value.childImageSharp.fluid,
    ])
  ) as { [K in keyof typeof data]: FluidObject };

  const ctaRef = useRef<HTMLDivElement>(null);
  const onHeroButtonClick = () => {
    if (ctaRef.current) {
      scrollIntoView(ctaRef.current);
    }
  };

  return (
    <Layout title={site.siteMetadata.title}>
      <GridContainer>
        <Hero image={hero} imageSm={heroSm} onButtonClick={onHeroButtonClick} />
        <About image={about} imageSm={aboutSm} />
        <Process />
        <Reviews />
        <Cta
          ref={ctaRef}
          image={cta}
          imageSm={ctaSm}
          imageMd={ctaMd}
          imageLg={ctaLg}
        />
        <Footer />
      </GridContainer>
    </Layout>
  );
};
export default Index;
