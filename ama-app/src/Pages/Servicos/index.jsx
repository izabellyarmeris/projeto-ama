import styles from './Servicos.module.css'
import { Link } from "react-router-dom";
import BolhaBackground from '../../Componentes/BolhaBackground'
import BotaoRetorno from '../../Componentes/BotaoRetorno'
import CardServico from '../../Componentes/CardServico';
import NovoCardServico from '../../Componentes/NovoCardServico';

export default function Servicos() {

    const dados = [
        {
            titulo: 'Terapia Cognitiva',
            descricao: 'Terapia cognitiva online semanal. Datas a discutir.',
            preco: 90,
            prazo: 'Semanal'
        },
        {
            titulo: 'Terapia Familiar',
            descricao: 'Terapia cognitiva em grupo online semanal voltada para famílias e casais. Datas a discutir',
            preco: 120,
            prazo: 'Semanal'
        },
        {
            titulo: 'Instrução de amamentação',
            descricao: 'Serviço de amamentação com ênfase na "pega humanizada". Nossa lactarista está aqui para apoiar e orientar mães e bebês, garantindo que o processo de amamentação seja uma experiência orgânica e natural. Nosso objetivo é criar um ambiente acolhedor onde mães e bebês possam se conectar e nutrir um ao outro, promovendo a saúde e o bem-estar. Com o apoio de nossa equipe especializada, você pode esperar uma jornada de amamentação suave e gratificante.',
            preco: 150,
            prazo: '15 dias'
        },
    ]

    const ativo = { backgroundColor: '#401759', color: '#FFF', boxShadow: 'none'}
    return (
        <div className={styles.container}>
            <BolhaBackground />
            <div className={styles.container_botao}>
                <BotaoRetorno caminho='/' />
                <div className={styles.container_link}>
                    <Link to='/servicos' className={styles.link} style={ativo}>Serviços</Link>
                    <Link to='/cursos' className={styles.link}>Cursos</Link>
                </div>
            </div>
            <div className={styles.container_card}>
                <NovoCardServico />
                {dados.map((dado) => (
                    <CardServico
                        key={dado.titulo}
                        titulo={dado.titulo}
                        descricao={dado.descricao}
                        preco={dado.preco}
                        prazo={dado.prazo} />
                ))}
            </div>
        </div>
    )
}
