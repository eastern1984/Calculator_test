
import React from 'react';
import './app.css';
import SumForm from "./SumForm";
import Header from "./Header";

interface MainProps {

}

const Main: React.FC<MainProps> = props => {
    return (<>
            <Header />
            <main className='main-wrapper'>
                <SumForm />
            </main>
        </>
    );
};

export default Main;