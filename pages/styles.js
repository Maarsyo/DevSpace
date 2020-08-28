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
    padding: 30px 70px;

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
    margin-left: 70px;
    max-height: 90vh;
    .imgGooglePlay{
        width: 180px;
        margin-top: 15px;
    }

`

export const Texts = styled.div`
    color: white;
    max-width: 550px;
    padding-top: 170px;
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
    }
    
`