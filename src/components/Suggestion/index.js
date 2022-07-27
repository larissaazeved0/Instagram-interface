import { useEffect, useState } from 'react'
import './style.css'
import user from '../Header/eu.jpeg'

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/larissaazeved0/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    return(
        <div className='container-suggestion'>
            <div className='header-suggestion'>
                <img src={user}/>

                <div className='user-infos-suggestion'>

                    <div className='infos'>
                        <span>_laralissa</span>
                        <p>Larissa Azevedo</p>
                    </div>

                    <button className='switch'>Mudar</button>

                </div>
            </div>

            <div className='header-main-suggestion'>
                <p> Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='user-suggestion'>

                {slice.map((suggestion, key) => (
                        <div className="infos-suggestion" key={key}>
                            <img src={`https://github.com/${suggestion.login}.png`} />
        
                            <div className="info-suggestion" >
                                <span>{suggestion.login}</span>
                                <p>Novo no Instagram</p>
                            </div>
        
                            <button className='follow' >Seguir</button>
                        </div>
                    ))
                }

                
            </div>

            <footer className='footer-suggestion'>
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>
            </footer>
        
        </div>
    )
}