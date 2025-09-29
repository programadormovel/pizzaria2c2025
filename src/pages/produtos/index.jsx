// Hooks do React para controlar estado e renderização
import {useState, useEffect} from 'react'
// Ferramenta para consumir rotas (endponts) de APIs
import axios from 'axios'

const Produtos = () => {
    // Estado para armazenar a lista de pizzas
    const [pizzas, setPizzas] = useState(['Calabresa', 'Marguerita', 'Portuguesa'])

    // Consumir rota com lista de produtos
    // GET - captura os dados do endpoint
    // then - é uma Promise ou função assíncrona
    // catch - tratamento do erros encontrados durante requisição
    useEffect(()=>{
        axios.get("http://172.19.0.49/pizzariateste/api/v1/produto")
        .then(response=>{
            console.log(response.data.data)
            setPizzas(response.data.data)
        })
        .catch(error=>{console.log(error)})
    }, [])
    
    // Iteração da lista de pizzas - pizza a pizza (um a um)
    const listaPizzas = pizzas.map(pizza=>
    <li key={pizza.id}>{pizza.nome}</li>)

    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
