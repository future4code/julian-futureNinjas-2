import React from 'react';
import CardServiçoMin from './CardServiçoMin'


// export default class CardLista extends React.Component {

//     render(){
//     return <div className='card-list'>
//     {this.props.servicosDisponiveis.map(servico => (
//         <CardServiçoMin key={servico.dueDate} servico={servico} />
//     ))}
//     </div>;
//     }
// };

export const CardLista = props =>{
    return <div>
    {props.servicosDisponiveis.map(servico => (
        <CardServiçoMin key={servico.dueDate} servico={servico} />
    ))}
    </div>;
};