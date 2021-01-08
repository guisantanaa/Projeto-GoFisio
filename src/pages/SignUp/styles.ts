import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.jpg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 700px;
    
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromRight} 1s;

    hr {
        background-color: #96E072;
        padding: 0.9px;
        padding-right: 200px;
        border: 0;
    }

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }

    h1 {
        margin-bottom: 24px;
    }

    h2 {
        font-size: 50px;
        color: #96E072;
        
    }


    a {
        color: #96E072;
        display: block;
        margin-top: 26px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#96E072')};
        }
    }

    > a {
        color: #96E072;
        display: flex;
        margin-top: 26px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: $shade(0.2, '#96E072');
        }
    }
    
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;