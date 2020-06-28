import React from "react";
import cx from "classnames";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Parallax, ParallaxLayer } from 'react-spring';
import home from "../images/green-building.jpg";
import Timeline from '../components/timeline';
import builders from '../images/builders.jpg';
import ImageSlider from '../components/image-slider';

const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-indigo-700 hover:bg-indigo-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-red-700 hover:text-red-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};


function Index({ data }) {
  const services = data.services.edges;

  return (
    <>
      <div className="h-indexscreen" >
        <ImageSlider />
      </div>
      <Layout headerClass="relative bg-white">
        <SEO title="Home" />
        <div
          className="mt-8 mb-20 bg-size-full md:bg-size-screen bg-no-repeat flex flex-col items-right"
        >

          <div className="bg-fixed bg-center" style={{ backgroundImage: `url(${builders})` }}>
            <div className="mb-20 flex flex-col mt-10 md:mt-16" >
              <p className="mb-2 text-4xl text-gray-800 self-center">
                За нас
            </p>

              <div className="flex flex-wrap text-m md:text-l lg:text-xl px-4 md:px-8 lg:px-12" >
                <p className="mb-4">
                Строителна фирма „С.И.Т.” ООД е регистрирана през 1995 г. в Пловдивски окръжен съд по ф. д. № 3550 и пререгистрирано в Агенция по вписванията Търговски регистър със съдружници и управители инж. Стефан Георгиев и Петър Георгиев и от тази дата осъществява строителна дейност. Основната дейност, която е реализирана от създаването до момента е изграждане на промишлени, търговски и жилищни сгради чрез възлагане и собствено строителство с цел продажба.
                </p>
                <p className="mb-4">
                Дружество „С.И.Т.” ООД  предлага бързина, сигурност и високо качество на строителство. Този факт се дължи на прецизната и упорита работа на ръководството, инженерно-техническите кадри и високо квалифицираният изпълнителски персонал.
                </p>
                <p className="mb-4">
                При ценообразуването дружеството предлага конкурентни цени в резултат на осигуреността със собствена механизация и  поддържането на добри и коректни бизнес отношения с доставчиците на материали, което е предпоставка за ритмично изпълнение графиците за строителство и срочното им предаване на инвеститорите за експлоатация.
                </p>
              </div>
            </div>

          </div>

        </div>
        <Timeline />
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
