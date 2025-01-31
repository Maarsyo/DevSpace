import styled from 'styled-components';

export const Container = styled.div`

    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
export const Header = styled.div`
    display: flex;
	align-items: center;
    justify-content: space-between;
    background-color: rgba(18, 20, 33, 0.2);
    padding: 30px 8%;

    img{
        width: 149px;
    }
`

export const Ul = styled.div`
    display: flex;
	width: 15%;
    justify-content: space-between;
    list-style: none;
    
    li a{
        font-weight: 700;
        text-decoration: none;
        color: white;
    }
`

export const Landing = styled.div`
    max-height: 90vh;
    .imgGooglePlay{
        width: 180px;
        top: 62%;
        left: 8%;
        position: absolute;
    }

`

export const Texts = styled.div`
    color: white;
    max-width: 550px;
    position: absolute;
    top: 40%;
    left: 8%;
    h1{
        font-size: 1.8em;
        margin-bottom: 10px;
    }
    h2{
        font-size: 1.5em;
        font-weight: 700;
    }
`

export const ImageContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    @media(max-width: 768px){
        display: none;
    }
    .imgHand{
        width: 620px;
        @media(max-width: 1024px){
            width: 400px;
            background-color: transparent;
        }
    }
    
`