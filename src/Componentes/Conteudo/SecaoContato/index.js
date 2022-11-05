import React from 'react'
import './style.css'

export default function Contato() {
    return(
        <section id='contato'>
             <div>
             <h2>FALE CONOSCO</h2>
             <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
             </div>
             <div className='grade'>
                <div>
                    <h4>Contato</h4>
                    <div className='infosGrade'>
                        <div className='infoLinha'>
                            <div className='infoImagem'>
                                <img src='/assets/local.png' alt='Endereço' />
                            </div>
                            <div>
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                        </div>
                        <div className='infoLinha'>
                            <div className='infoImagem'>
                                <img src='/assets/telefone.png' alt='Telefone' />
                            </div>
                            <div>
                                <p>(21) 9999-9999</p>
                            </div>
                        </div>
                        <div className='infoLinha'>
                            <div className='infoImagem'>
                                <img src='/assets/email.png' alt='E-mail' />
                            </div>
                            <div>
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Nossas Redes Sociais</h4>
                    <div className='infosGrade'>
                        <div className='infoLinha'>
                            <div className='infoImagem'>
                                <img src='/assets/fb.png' alt='Facebook' />
                            </div>
                            <div>
                                <p>/OticaVida</p>
                            </div>
                        </div>
                        <div className='infoLinha'>
                            <div className='infoImagem'>
                                <img src='/assets/ig.png' alt='Instagram' />
                            </div>
                            <div>
                                <p>@oticavidarj</p>
                            </div>
                        </div>
                        <div className='infoLinha'>
                            <div className='infoImagem'>
                                <img src='/assets/tt.png' alt='Twitter' />
                            </div>
                            <div>
                                <p>@oticavidarj</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}