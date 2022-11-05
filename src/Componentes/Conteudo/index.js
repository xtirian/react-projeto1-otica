import React from 'react'
import Capa from './SecaoCapa/';
import Produtos from './SecaoProdutos/'
import Sobre from './SecaoSobre/'
import Contato from './SecaoContato/'

export default function Conteudo() {
    return (
        <main>            
            <Capa />
            <Produtos />
            <Sobre />
            <Contato />
        </main>
    );
  }
 