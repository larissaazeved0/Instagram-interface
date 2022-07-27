import './style.css'
import {FiMoreHorizontal, FiSend} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsBookmark, BsEmojiSmile} from 'react-icons/bs'
import proa from '../../images-profiles/proa.png'
import { IconContext } from 'react-icons/lib'

export function Post(){
    return (
        <>
            <header className='header-post'>

                <div className="infos-post">
                    <img className='img-header-post' src={proa}/>
                    <p>instituto.proa</p>
                </div>
                <FiMoreHorizontal/>

            </header>

            <div className='img-post'>
                <img src='https://classic.exame.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-11-at-16.36.38.jpeg?quality=70&strip=info&w=1024'/>
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size:'30px'}}>

                    <section className='engagement-post'>
                        <div className='icons-1'>
                            <div className='icon'> <IoMdHeartEmpty/> </div>
                            <div className='icon'> <BsChat/> </div>
                            <div className='icon'> <FiSend/> </div>
                        </div>
                        <div className='icon'><BsBookmark/></div>
                    </section>

                </IconContext.Provider> 
            
                <section className='like'>
                    <span>61 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>instituto.proa</strong> Últimos dias de inscrições para o PROPROFISSÃO (curso de programação do PROA)
                    </p>
                </div>

                <div className='time-post'>
                    <time> HÁ 1 HORA</time>
                </div>

                <div className='comment'>

                    <div className='fake-comment'>
                        <IconContext.Provider value={{size: '25px'}}> 

                            <div className='icon'>
                                <BsEmojiSmile/>
                            </div>

                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />

                    </div>

                    <button>Publicar</button>

                </div>

            </div>









            

        </>
    )

}