import Container from './Container'
import articleBanner from '../assets/article-banner.png'
import author from '../assets/author.png'
import back from '../assets/back.png'
import lin from '../assets/in.png'
import facebook from '../assets/facebook.png'
import tw from '../assets/twitter.png'
import like from '../assets/like.png'
import save from '../assets/save.png'
import comments from '../assets/comments.png'
import Footer from './Footer'
import Logo from './logo'
function Article(){
    return(
        <> 
            <Logo />
            <Container>
            <div className='modal-article'>
                <button className='close-modal' style = {{
                    border:0,
                    backgroundColor:'transparent',
                    cursor:'pointer'
                }}>
                    <img src={back} alt="back" style={{
                            padding:'64px 0'
                        }} />
                </button>
                
                <div style = {{
                    display:'flex',
                    alignItems:'center',
                    marginTop:'96px',
                    justifyContent:'space-between'
                }}>
                    <div style ={{
                    display:'flex',
                    gap:"10px",
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                        <img src={author} alt="photo" style={{
                            width:'64px',
                            height:'64px'
                        }}/>
                        <div style = {{
                            display:'flex',
                            flexDirection:'column',
                        }}>
                            <p style={{
                                margin:0
                            }}>Authors name</p>
                            <div style={{
                                display:'flex',
                                color:'gray',
                            }}>
                                <p style={{
                                    margin:0,
                                    marginTop:'10px'
                                }}>7 july · 12 min read · Member-only</p>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        display:'flex',
                        alignItems:'start'
                    }}>
                        <a href=""><img src={lin} alt="in" /></a>
                        <a href=""><img src={facebook} alt="in" /></a>
                        <a href=""><img src={tw} alt="in" /></a>
                    </div>
                </div>

                <div>
                    <h2 style={{
                        fontSize:'34px',
                        fontWeight:'600'
                    }}>
                        7 Practical CSS Tips
                    </h2>
                    <h3 style={{
                        fontSize:'24px',
                        fontWeight:'400'
                    }}>
                        How product designers can break from the status quo and healp out planet
                    </h3>
                    <img src={articleBanner} alt="card" style={{
                        width:'100%'
                    }}/>
                    <h4 style={{
                        fontSize:'24px',
                        fontWeight:'600'
                    }}>Subheader</h4>
                    <p style={{
                        fontSize:'24px',
                        fontWeight:'400'
                    }}>
                        How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.
                        And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.
                        But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.
                    </p>
                </div>
                <div  style = {{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center'
                }}>
                    <div style = {{
                        display:'flex',
                        gap:'20px',
                        alignItems:'center'
                    }}>
                        <div style = {{
                            display:'flex',
                            gap:'10px',
                            alignItems:'center'
                    }}>
                            <img src={like} alt="like" />
                            <p style={{
                                color:'gray',
                                margin:0
                            }}>180</p>
                        </div>
                        <div style = {{
                            display:'flex',
                            gap:'10px',
                            alignItems:'center'
                    }}>
                            <img src={comments} alt="comment" />
                            <p style={{
                                color:'gray',
                                margin:0
                            }}>12</p>
                        </div>
                    </div>

                    <div>
                        <img src={save} alt="save" />
                    </div>
                </div>
            </div>
            
        </Container>
        <Footer />
        </>
        
    )
}

export default Article;