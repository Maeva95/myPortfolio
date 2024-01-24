import './style.css'

import React from 'react'

export default function HeroImage2 (props) {
    return (
        <div className='hero-image'>
            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )

}
// class HeroImage2 extends Component {
//     render() {
//         return (
//             <div className='hero-image'>
//                 <div className='heading'>
//                     <h1>{this.props.heading}</h1>
//                     <p>{this.props.text}</p>
//                 </div>
//             </div>
//         )
//     }
// }

// export default HeroImage2