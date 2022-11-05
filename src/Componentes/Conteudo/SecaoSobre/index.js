import React from 'react'
import './style.css'

export default function Sobre() {
    return(
        <section id='sobre'>
            <div className='limitarSecao'>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente com atendimento, qualidade e preço baixo.</p>
                <div className='galeriaSobre'>    
                    <img src='/assets/loja.png' />
                    <div className='sobreTexto'>
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                    </div>
                    <div className='sobreTexto'>
                        <h3>Atendimento Flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender.</p>
                    </div>
                    <img src='/assets/atendimento.png' />

                </div>
            </div>
        </section>
    )
}