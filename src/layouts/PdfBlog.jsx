import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const PdfBlog = () => {
    return (
        <Document>
            <Page>
                <Text>
                    Blog page Questions.
                </Text>
            </Page>
        </Document>
    )
};

export default PdfBlog;