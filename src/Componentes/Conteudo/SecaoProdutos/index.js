import React from 'react'
import './style.css'

export default function Produtos() {
    return(
        <section id='produtos'>
            <div className='limitarSecao'>
                <h2>Nossos produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <section className='galeriaDeProdutos'>
                    <div className='cardProduto'>
                        <h4 className='nomeProduto'>Óculos de Grau</h4>
                        <img src='/assets/oculos01.png' className='imgProduto'/>         
                        <p className='precoProduto'>R$ 500,00</p>
                    </div>
                    <div className='cardProduto'>
                        <h4 className='nomeProduto'>Óculos Trasition</h4>
                        <img src='/assets/oculos02.png' className='imgProduto'/>       
                        <p className='precoProduto'>R$ 750,00</p>
                    </div>
                    <div className='cardProduto'>
                        <h4 className='nomeProduto'>Óculos de Sol</h4>
                        <img src='/assets/oculos03.png' className='imgProduto' />
                        
                        <p className='precoProduto'>R$ 700,00</p>
                    </div>
                    <div className='cardProduto'>
                        <h4 className='nomeProduto'>Óculos Infantil</h4>
                        <img src='/assets/oculos04.png' className='imgProduto'/> 
                        
                        <p className='precoProduto'>R$ 500,00</p>
                    </div>
                </section>
                <p>Todos os nossos produtos incluem:</p>
                <ul>                
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção Preventiva</li>
                    <li>Descontos especiai na compra da segunda unidade.</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )

}