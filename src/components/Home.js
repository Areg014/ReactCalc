import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Link to="/calc">
            <section>
                <div class="content">
                    <h2>CALCULADORA</h2>
                    <h2>CALCULADORA</h2>
                </div>
            </section>
            </Link>
        </>
    );
}