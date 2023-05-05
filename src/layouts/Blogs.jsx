import React from 'react';
import PdfBlog from './PdfBlog';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page, Text } from '@react-pdf/renderer';

const Blogs = () => {

    // pdf document
    const pdf = (
        <Document>
            <Page style={{ padding: '30px 20px' }}>
                <Text style={{ fontSize: '30px', textAlign: 'center', color: 'blue' }}>Blogs</Text>

                <Text style={{ fontSize: '14px', padding: '10px 0' }}>Q1.What is the differences between uncontrolled and controlled components?</Text>
                <Text style={{ fontSize: '12px', color: 'gray' }}>When dealing with form data in React, we can use either controlled components or uncontrolled components. A controlled component is the recommended way to go for most cases.An uncontrolled component is similar to a traditional HTML form input element. We can get the value of the input by accessing the reference to the input.On the other hand, we have a controlled component. Rather than accessing the value of the input through the reference of the element, we can store the value in React state.</Text>

                <Text style={{ fontSize: '14px', padding: '10px 0' }}>Q2.How can we validate React props using PropTypes?</Text>
                <Text style={{ fontSize: '12px', color: 'gray' }}>To validate React props using PropTypes, we can define the propTypes property of a React component. The propTypes property is an object that maps the prop names to the corresponding validator functions provided by the PropTypes library.React PropTypes are a good way to help you catching bugs by validating data types of values passed through props. They also offer possibilities to flag props as mandatory or set default values. They provide a great benefit with little effort</Text>

                <Text style={{ fontSize: '14px', padding: '10px 0' }}>Q3.what is the difference between nodejs and express js?</Text>
                <Text style={{ fontSize: '12px', color: 'gray' }}>Node.js brought JavaScript to the next level. While JavaScript is used as a client-side development language, Node.js covers the server-side programming.The JS frontend and Node.js backend are easier to keep in sync because of a single language used on both sides of the application. Node.js allows programs to be written in JavaScript and to be executed on the server.<br></br>Express.js is a minimal, flexible, and open-source Node.js web application framework.We can use it on top of Node.js to ensure better web functionality</Text>

                <Text style={{ fontSize: '14px', padding: '10px 0' }}>Q4.What is a custom hook, and why will you create a custom hook?</Text>
                <Text style={{ fontSize: '12px', color: 'gray' }}>React hooks are functions that let you use and interact with state in React function components.We can also build our own hooks using the built-in hooks as building blocks. These are often referred to as “custom hooks” to differentiate them from the built-in hooks.The main reason to write a custom hook is for code reusability</Text>
            </Page>
        </Document>
    )



    return (
        <div>
            <div className='container pt-6 lg:pt-16'>
                <h1 className='text-center text-4xl font-semibold pb-2 lg:pb-5'>Blogs</h1>
                <PDFDownloadLink document={pdf} fileName='React Blogs-Mahmud'>
                    <div className='flex justify-center'><button className='btn-primary'>Download blogs</button></div>
                </PDFDownloadLink>
                <div className='border-b py-3'>
                    <h2 className='text-2xl pb-2'>Q1.What is the differences between uncontrolled and controlled components?</h2>
                    <p className='text-gray-500'>When dealing with form data in React, we can use either controlled components or uncontrolled components. A controlled component is the recommended way to go for most cases.An uncontrolled component is similar to a traditional HTML form input element. We can get the value of the input by accessing the reference to the input.On the other hand, we have a controlled component. Rather than accessing the value of the input through the reference of the element, we can store the value in React state.</p>
                </div>
                <div className='border-b py-3'>
                    <h2 className='text-2xl pb-2'>Q2.How can we validate React props using PropTypes?</h2>
                    <p className='text-gray-500'>To validate React props using PropTypes, we can define the propTypes property of a React component. The propTypes property is an object that maps the prop names to the corresponding validator functions provided by the PropTypes library.React PropTypes are a good way to help you catching bugs by validating data types of values passed through props. They also offer possibilities to flag props as mandatory or set default values. They provide a great benefit with little effort</p>
                </div>
                <div className="border-b py-3">
                    <h2 className="text-2xl pb-2">Q3.what is the difference between nodejs and express js?</h2>
                    <p className='text-gray-500'>Node.js brought JavaScript to the next level. While JavaScript is used as a client-side development language, Node.js covers the server-side programming.The JS frontend and Node.js backend are easier to keep in sync because of a single language used on both sides of the application. Node.js allows programs to be written in JavaScript and to be executed on the server.<br></br>Express.js is a minimal, flexible, and open-source Node.js web application framework.We can use it on top of Node.js to ensure better web functionality</p>
                </div>
                <div className="border-b py-3">
                    <h2 className="text-2xl pb-2">Q4.What is a custom hook, and why will you create a custom hook?</h2>
                    <p className="text-gray-500">React hooks are functions that let you use and interact with state in React function components.We can also build our own hooks using the built-in hooks as building blocks. These are often referred to as “custom hooks” to differentiate them from the built-in hooks.The main reason to write a custom hook is for code reusability</p>
                </div>
            </div>
        </div>
    );

};

export default Blogs;