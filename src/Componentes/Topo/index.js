import React from 'react'
import './style.css'

export default function Topo() {
    return (
        <header>
            <div className='limitarSecao'>
                <img src='/assets/logo.png' alt='Óticas vida logo' className='logo' />
                
                <nav>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
} 