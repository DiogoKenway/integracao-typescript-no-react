interface IContadorValorProps {
    contador: number;
}

const ContadorValor = (props: IContadorValorProps) => <p>{props.contador}</p>
  

export default ContadorValor;
