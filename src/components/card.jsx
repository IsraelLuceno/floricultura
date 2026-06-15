// export const Card = (props) => {
//     return(
//         <>
//             <img src={props.imagem} alt={props.nome} />
//               <div>
//                 <h2>{props.nome}</h2>
//                 <p>{props.descricao}</p>
//                 <h3>${(props.valor).toFixed(2)}</h3>
//               </div>
//         </>
//     )
// }

import e from './card.module.css'

export const Card = ({imagem, nome, descricao, valor}) => {
    return(
        <>
            <img className={e.cardImage} src={imagem} alt={nome} />
            <div className={e.wrapText}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <h3>${valor.toFixed(2)}</h3>
            </div>
       </>
    )
}