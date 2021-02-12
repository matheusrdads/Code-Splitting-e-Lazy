import React from 'react';
import { Suspense, lazy } from 'react';

const Banner = lazy(() => import('../.././components/Banner'))

export default function Home() {
    return (

        <div div className="container text-center">
            <div className="row text-dark">
                <h4 className="text-dark"> Be welcome !</h4>
                <h4 className="text-danger">Here in our store, <em>programmers have discounts</em> on vinyl disks!</h4>


                <Suspense fallback={<h2>Caregando...</h2>}>
                    <Banner />
                </Suspense>
            </div>
        </div>
    );
}