import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { IState } from "./../interfaces/state.interface"
import { dispatchContent } from "./../config/constants"
import Col6Layout from "./../components/Layout/Col6Layout"
import Header from "./../components/Header"
import About from "./../components/About"
import Skills from "./../components/Skills"
import Certifications from "./../components/Certifications"
import Works from "./../components/Works"
import Contact from "./../components/Contact"
import Loading from "./../components/Loading"
import Nav from "./../components/Nav"
import Head from "./../components/Head"
import formatHomePage from "./../helpers/homePageHelpers"

const Home = ({ data, dispatchFullContent }: any) => {
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    dispatchFullContent({
      header: formatHomePage.header(data.allMarkdownRemark.edges),
      about: formatHomePage.about(data.allMarkdownRemark.edges),
      certifications: formatHomePage.certifications(data.allFile.edges),
      works: formatHomePage.works(data.allMarkdownRemark.edges),
    })
    setLoading(false)
  }, [])

  return (
    <>
      <Head
        data={{
          ...data.site.siteMetadata,
          pageName: "Pierre-Alexis Blond - Portfolio",
        }}
      />
      <Nav />

      {!loading ? (
        <>
          <Header />
          <section id="about">
            <About />
            <Col6Layout>
              {typeof window !== "undefined" && <Skills />}
              <Certifications />
            </Col6Layout>
          </section>
          <section id="works">
            <Works />
          </section>
        </>
      ) : (
        <Loading />
      )}

      <section id="contact">
        <Contact hidden={!!loading} />
      </section>
    </>
  )
}

export const HomePage = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "certifications" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        themeColor
      }
    }
  }
`

const mapDispatchToProps = (dispatch: any) => ({
  dispatchFullContent: (payload: IState) =>
    dispatch({ type: dispatchContent, payload }),
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
