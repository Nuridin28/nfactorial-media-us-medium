import Container from './Container'
import cardImg from '../assets/Img.png'
import author from '../assets/author.png'

function Card({ item }) {
    const { name, topicsName, date, title, descr, lang, timeToRead, category, img } = item;
    
    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxHeight: '376px',
                marginTop: '45px'
            }}>
                <div style={{
                    width: "60%"
                }}>
                    <div style={{
                        display: 'flex',
                        gap: "10px",
                        alignItems: 'center',
                    }}>
                        <img src={author} alt="photo" />
                        <p>{name}</p>
                        <p style={{ color: 'gray' }}>in</p>
                        <p>{topicsName}</p>
                        <p> · </p>
                        <p style={{ color: 'gray' }}>{date}</p>
                    </div>

                    <div>
                        <button style={{
                            color: 'black',
                            border: 0,
                            backgroundColor: 'transparent',
                            fontSize: '28px',
                            fontWeight: '600',
                            padding: 0,
                            cursor: 'pointer',
                            lineHeight: '34px',
                            marginTop: '48px',
                        }} className='close-modal'>{title}</button>

                        <p>{descr}</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '70px'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <button style={{
                                backgroundColor: '#E1E0E6',
                                border: 0,
                                borderRadius: '20px',
                                padding: '0px 16px',
                                cursor: "pointer"
                            }}>{lang}</button>
                            <p style={{ color: 'gray' }}>{timeToRead}</p>
                            <p style={{ color: 'gray' }}>{category}</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '14px'
                        }}>
                            <div style={{
                                backgroundColor: '#E1E0E6',
                                width: '24px',
                                height: '24px'
                            }}></div>
                            <div style={{
                                backgroundColor: '#E1E0E6',
                                width: '24px',
                                height: '24px'
                            }}></div>
                            <div style={{
                                backgroundColor: '#E1E0E6',
                                width: '24px',
                                height: '24px'
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
