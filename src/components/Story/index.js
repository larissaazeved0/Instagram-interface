import './style.css'
import scalene from '../../images-profiles/scalene.jpg'
import proa from '../../images-profiles/proa.png'


export function Story(){

    return(
        <div className='container'>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={scalene} />
                </div>

                <span>scalene</span>

            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={proa} />
                </div>

                <span>instituto.proa</span>

            </div>





        </div>
    )

}
