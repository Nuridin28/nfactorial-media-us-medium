import Logo from './components/logo'
import TitleMain from './components/TitleMain'
import Card from './components/Card'
import Footer from './components/Footer'
import Article from './components/Article'
import articles from './data/articles'

function App() {
    
    return (
       <>
            <Logo />
            <TitleMain />
            {articles.map((article, index) => (
                <Card key={index} item={article} />
            ))}
            <Footer/>
            <Article />
       </>
            

    )
}

export default App
