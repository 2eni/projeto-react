function ProdutoCard({ imagem, nome, preco, descricao }) {
  return (
    <div className="produto-card">
      <div className="produto-imagem">
        {imagem ? (
          <img
            src={imagem}
            alt={nome}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <span>Sem imagem</span>
        )}
      </div>

      <div className="produto-info">
        <h2>{nome}</h2>
        <h3>R$ {Number(preco).toFixed(2)}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default ProdutoCard;