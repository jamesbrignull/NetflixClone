import React from 'react';
import { OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home(){
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Input placeholder='Email address' />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Text> Ready to watch? Enter your emails to create or restart your membership</OptForm.Text>
                </OptForm>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}