import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactSeparator from '../modules/ContactSeperator'
import ContactForm from '../modules/ContactForm'
 
const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <ContactSeparator />
        <ContactForm />
    </HeaderFooterLayout>
)
 
export default ContactPage