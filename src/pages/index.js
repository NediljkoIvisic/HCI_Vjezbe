import React from "react"
 
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import PageContent from '../modules/PageContent'
import First from '../components/Images/First'
import Second from '../components/Images/Second'
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <TitlePage />
    <PageContent />
  </HeaderFooterLayout>
)
 
export default IndexPage