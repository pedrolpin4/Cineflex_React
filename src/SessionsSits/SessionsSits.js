import './SessionsSits.css'

const SessionsSits = () =>{
    return(
        <div className = "sits-page-content">
            <h1>Selecione o(s) assento(s)</h1>
            <div className = "sits-container">
                <div className = "sit selected">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit available">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit unavailable">1</div>
                <div className = "sit selected">1</div>
                <div className = "sit selected">1</div>
            </div>
            <div className = "sits-status-container">
                <div>
                    <div className = "sits-status selected"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className = "sits-status available"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className = "sits-status unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className ="buyers-info">
                <p>Nome do comprador:</p>
                <input placeholder = "Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input placeholder = "Digite seu CPF..."></input>
            </div>
            <footer>
                <div className = "mini-poster">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kekV1GGgplhQY1_KvaLVDa6ZGCoxcW18KHms8sMwl6tG28n8VXk0hN2mf_YChaam0DE&usqp=CAU"/>
                </div>
                <div className = "sessions-info">
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
        </div>
    )
}

export default SessionsSits