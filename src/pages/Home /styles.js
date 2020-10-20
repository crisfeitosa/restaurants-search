import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 1rem;
`

export const Logo = styled.img`
    margin-bottom: 1rem;
`

export const Map = styled.div`
    background-color: red;
    width: 500px;
`
export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 30px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 29px;
    margin: 1rem 0;
`

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    line-height: 29px;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    line-height: 19px;
    font-size: 1rem;
    font-weight: normal;
`;













