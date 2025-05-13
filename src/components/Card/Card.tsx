import { ReactNode } from "react";
import styles from "./Card.module.css";


const Card = () => {
    return (
        <div className={styles.card}>
            Soy una card!
        </div>
    )
}

/*interface CardProps {
    children: ReactNode;
}

function Card(props: CardProps) {
    const { children } = props;
    return (
        <div className="card">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

interface CardBodyProps {
    title: string;
    text?: string;
}

export function CardBody(props: CardBodyProps) {
    const { title, text } = props;

    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </>
    );
}*/

export default Card;