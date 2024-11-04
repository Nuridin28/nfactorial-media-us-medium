import Container from './Container'
import cardImg from '../assets/Img.png'
import author from '../assets/author.png'

function Card(){
    return(
        <Container>
            <div style ={{
                    display:'flex',
                    justifyContent:'space-between',
                    maxHeight:'376px',
                    marginTop:'45px'
                }}>
                <div style = {{
                    width:"60%"
                }}>
                    <div style = {{
                        display:'flex',
                        gap:"10px",
                        alignItems:'center',
                        
                    }}>
                        <img src={author} alt="photo" />
                        <p>Authors name</p>
                        <p style = {{
                            color:'gray'
                        }}>in</p>
                        <p>Topics Name</p>
                        <p> · </p>
                        <p style = {{
                            color:'gray'
                        }}>7 july</p>
                    </div>

                    <div>
                        
                        <button style = {{
                            color:'black',
                            border:0,
                            backgroundColor:'transparent',
                            fontSize:'28px',
                            fontWeight:'600',
                            padding: 0,
                            cursor:'pointer',
                            lineHeight:'34px',
                            marginTop:'48px',
                        }} className='close-modal'>7 Practical CSS Tips</button>
                        
                        <p>
                            You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.
                        </p>
                    </div>

                    <div style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        marginTop:'70px'
                    }}>
                        <div style = {{
                            display:'flex',
                            gap:'10px'
                        }}>
                            <button style ={{
                                backgroundColor:'#E1E0E6',
                                border:0,
                                borderRadius:'20px',
                                padding: '0px 16px',
                                cursor:"pointer"
                            }}>Java Script</button>
                            <p style = {{
                            color:'gray'
                        }}>12 min read</p>
                            <p style = {{
                            color:'gray'
                        }}>Selected for you</p>
                        </div>
                        <div style={{
                            display:'flex',
                            gap:'14px'
                        }}>
                            <div style = {{
                                backgroundColor:'#E1E0E6',
                                width:'24px',
                                height:'24px'
                            }}></div>
                            <div style = {{
                                backgroundColor:'#E1E0E6',
                                width:'24px',
                                height:'24px'
                            }}></div>
                            <div style = {{
                                backgroundColor:'#E1E0E6',
                                width:'24px',
                                height:'24px'
                            }}></div>
                        </div>
                    </div>

                </div>

                <div>
                    <img src={cardImg} alt="card1" />
                </div>
            </div>
        </Container>
    )
}

export default Card;