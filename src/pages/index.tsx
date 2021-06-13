import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.css"

import Button from "../components/Button"
import Landing from "../partials/Landing"
import Download from "../partials/Download"
import Distro from "../partials/Distro"
import Kernel from "../partials/Kernel"
import Team from "../partials/Team"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <StaticImage
      src="../images/nucleus.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <Landing></Landing>
    <Distro></Distro>
  
    <Download></Download>
    <div className="p-5 my-10" style={{
      background : "linear-gradient(to right top, #0f0f0f, #181818, #212020, #2a2828, #323130)"
    }}>
      <h1 className="text-4xl text-center text-yellow-400"> Neutrix is coming to ARM</h1>
    </div>
    <Kernel></Kernel>   
    <Team></Team>
    <footer className="text-2xl text-center font-light pb-10">
      Copyright to the team above © 2021
    </footer>
    

  </Layout>
)

export default IndexPage
