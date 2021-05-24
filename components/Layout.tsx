import React, { Component } from 'react';
import Head from 'next/head';

class Layout extends Component {
    render () {
        const { children } = this.props;

        return (
            <div>
                <Head>
                    <title>Title</title>
                    <link rel="icon" href="/assets/favicon.png" />
                    <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
                </Head>
                    {children}
            </div>
        )
    }
}

export default Layout