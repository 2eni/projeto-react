import { useEffect, useState } from 'react'
import ProdutoCard from './components/produtos'
import './App.css'

function App() {

  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [novoProduto, setNovoProduto] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false)
    }, 2000);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novoProduto.nome.trim() === '') return;

    const nova = { nome: novoProduto.nome.trim(),
      preco: novoProduto.preco || 0,
      descricao: novoProduto.descricao || '',
      imagem: novoProduto.imagem || '',
      id: produtos.length + 1
    };
    setProdutos([...produtos, nova]);
    setNovoProduto({ nome: '', preco: '', descricao: '', imagem: '' });
  }

  return (
    <main>
      <h1>Produtos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Produto"
          value={novoProduto.nome || ''}
          onChange={(e) => setNovoProduto({...novoProduto, nome: e.target.value})}
        />
        <input
          type="number"
          placeholder="Preço do Produto"
          value={novoProduto.preco || ''}
          onChange={(e) => setNovoProduto({...novoProduto, preco: parseFloat(e.target.value)})}
        />
        <textarea
          placeholder="Descrição do Produto"
          value={novoProduto.descricao || ''}
          onChange={(e) => setNovoProduto({...novoProduto, descricao: e.target.value})}
        ></textarea>
        <input
          type="file"
          accept="image/*"
          alt="Imagem do Produto"
          
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setNovoProduto({...novoProduto, imagem: reader.result});
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <button type="submit">Adicionar Produto</button>
      </form>
      
      <ul>
        {carregando ? <p>Carregando...</p> : produtos.map((produto) => {
          return (
            <ProdutoCard
              key={produto.id}
              imagem={produto.imagem}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao} />
          )
        })
        }
      </ul>
    </main>
  )
}
export default App

