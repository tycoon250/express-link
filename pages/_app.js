import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Express Link</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="We are a non-emergency medical transportation company that provides ambulatory, wheelchair and gurney transports. The Express Link team prides themselves on reliable, on-time and friendly service as well as open and honest communication with customers and staff at facilities and hospitals. Our Express Link staff come from all backgrounds, young and old, near and far but we have one common belief. That belief is that when people are hurt, sick or have an illness, they do not choose this pain so we will do our utmost to care and comfort them for the short time they are in our hands." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Express Link" />
                <meta name="keywords" content="non-emergency medical transportation, ambulatory transport, wheelchair transport, gurney transport, reliable service, on-time service, friendly service, medical care, patient comfort" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}