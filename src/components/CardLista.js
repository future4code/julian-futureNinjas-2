import React from 'react';
import CardServiçoMin from './CardServiçoMin'

export const CardLista = props =>{
    return <div>
    {props.servicosDisponiveis.map(servico => (
        <CardServiçoMin key={servico.id} servico={servico} />
    ))}
    </div>;
};

