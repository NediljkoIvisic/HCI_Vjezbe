import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import SeperatorBar from '../modules/SeperatorBar'
import ContactForm from '../modules/ContactForm'
 
const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <SeperatorBar text="Contact"/>
        <ContactForm />
    </HeaderFooterLayout>
)
 
export default ContactPage