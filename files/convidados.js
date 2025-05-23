const { useState } = React;

const Convidados = () => {
  // Lista de convidados atualizada com links opcionais
  const convidados = [
    {
      id: 1,
      nome: "Profa. Dra. Silvina Paola Gómez Martínez",
      avatar: "https://i.pravatar.cc/300?img=1",
      descricao: "Possui Bacharelado em Física pela Universidade Estadual de Ponta Grossa (2005), mestrado em Ciências (área de concentração em Física) pela Universidade Estadual de Ponta Grossa (2008) e Doutorado em Física Ambiental pela Universidade Federal de Mato Grosso. Atualmente é professor adjunto da Universidade Federal do Amazonas (UFAM). Tem experiência na área de Física e Física Ambiental, atuando principalmente nos seguintes temas: gráficos de recorrência e reconstrução de atratores, séries temporais, alometria, sensoriamento remoto, conforto térmico, ensino de física e uso de TICs na educação.",
      linkedin: "https://linkedin.com",
      lattes: "http://lattes.cnpq.br"
    },
    {
      id: 2,
      nome: "Prof. Dr. Carlos Eduardo Lima",
      avatar: "https://i.pravatar.cc/300?img=2",
      descricao: "Designer UX/UI especializado em interfaces acessíveis.",
      linkedin: "https://linkedin.com"
    },
    {
      id: 3,
      nome: "Profa. Dra. Ana Carolina Santos",
      avatar: "https://i.pravatar.cc/300?img=3",
      descricao: "Product Manager com foco em metodologias ágeis.",
      lattes: "http://lattes.cnpq.br"
    },
    {
      id: 4,
      nome: "Prof. Dr. Rodrigo Fernandes",
      avatar: "https://i.pravatar.cc/300?img=4",
      descricao: "Especialista em marketing digital e growth hacking."
    },
    {
      id: 5,
      nome: "Profa. Dra. Juliana Almeida",
      avatar: "https://i.pravatar.cc/300?img=5",
      descricao: "Desenvolvedora backend com expertise em Node.js.",
      linkedin: "https://linkedin.com",
      lattes: "http://lattes.cnpq.br"
    },
    {
      id: 6,
      nome: "Prof. Dr. Marcelo Costa",
      avatar: "https://i.pravatar.cc/300?img=6",
      descricao: "Cientista de dados e especialista em machine learning.",
      linkedin: "https://linkedin.com"
    }
  ];

  // Estado do modal
  const [modalAberto, setModalAberto] = useState(false);
  const [convidadoSelecionado, setConvidadoSelecionado] = useState(null);

  // Funções do modal
  const abrirModal = (convidado) => {
    setConvidadoSelecionado(convidado);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      {/* Grid de convidados */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px',
        justifyItems: 'center',
        alignItems: 'start'
      }}>
        {convidados.map(convidado => (
          <div 
            key={convidado.id} 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              width: '100%',
              maxWidth: '220px',
              transition: 'transform 0.3s',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
            onClick={() => abrirModal(convidado)}
          >
            {/* Container circular para o avatar */}
            <div style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginBottom: '20px',
              border: '5px solid #f0f0f0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f8f8f8'
            }}>
              <img 
                src={convidado.avatar} 
                alt={convidado.nome}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
            
            {/* Nome do convidado */}
            <span style={{ 
              textAlign: 'center', 
              fontWeight: '600',
              fontSize: '16px',
              color: '#333',
              wordBreak: 'break-word',
              lineHeight: '1.4'
            }}>
              {convidado.nome}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAberto && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={fecharModal}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            maxWidth: '700px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            position: 'relative',
            '@media (max-width: 600px)': {
              padding: '30px 20px'
            }
          }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={fecharModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                ':hover': {
                  color: '#333'
                }
              }}
            >
              ×
            </button>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '10px'
            }}>
              {/* Avatar no modal */}
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '25px',
                border: '6px solid #f5f5f5',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (max-width: 600px)': {
                  width: '150px',
                  height: '150px'
                }
              }}>
                <img 
                  src={convidadoSelecionado.avatar} 
                  alt={convidadoSelecionado.nome}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <h3 style={{ 
                margin: '0 0 15px 0',
                fontSize: '22px',
                color: '#222',
                lineHeight: '1.3',
                '@media (max-width: 600px)': {
                  fontSize: '20px'
                }
              }}>
                {convidadoSelecionado.nome}
              </h3>
              
              {/* Ícones de LinkedIn e Lattes */}
              <div style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '20px'
              }}>
                {convidadoSelecionado.linkedin && (
                  <a 
                    href={convidadoSelecionado.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#0077b5',
                      fontSize: '30px',
                      transition: 'transform 0.3s',
                      ':hover': {
                        transform: 'scale(1.1)',
                        color: '#005582'
                      }
                    }}
                    title="LinkedIn"
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="38" height="38" focusable="false">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                  </a>
                )}
                
                {convidadoSelecionado.lattes && (
                  <a 
                    href={convidadoSelecionado.lattes} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#006341',
                      fontSize: '30px',
                      transition: 'transform 0.3s',
                      ':hover': {
                        transform: 'scale(1.1)',
                        color: '#004a30'
                      }
                    }}
                    title="Currículo Lattes"
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{marginBottom:'-4px'}}>
                            <path d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5Z" fill="#005195" />
                            <path d="M11.2933 22.658C9.56414 19.1322 8.53535 17.0029 8.53535 16.95C8.53535 16.8638 8.64102 16.8758 9.67994 17.0785C11.5072 17.4355 12.4834 17.5362 14.1108 17.5368C16.2638 17.5374 18.0171 17.1981 19.3793 16.5162C20.1 16.1555 20.5334 15.8356 20.8883 15.4025C21.3255 14.8685 21.466 14.5008 21.471 13.8819C21.4754 13.2933 21.3957 12.9829 21.0534 12.2626C20.918 11.978 20.799 11.6513 20.7877 11.5366C20.77 11.3521 20.7851 11.3257 20.9218 11.31C21.2205 11.2748 22.6946 12.6989 23.2375 13.547C24.1733 15.0095 24.2492 16.5917 23.4571 18.1217C22.9705 19.0617 22.4328 19.712 21.5324 20.4512C20.036 21.6789 18.2967 22.5339 15.895 23.2227C14.6049 23.5929 12.5189 24.0418 12.0893 24.0418C11.9982 24.0418 11.8273 23.7447 11.2946 22.6574L11.2933 22.6579L11.2933 22.658ZM11.7748 16.972C10.095 16.7554 8.68535 16.5671 8.6417 16.5533C8.56707 16.5294 8.30007 15.6429 8.14947 14.9214C8.11152 14.7388 8.05583 14.2553 8.02547 13.8461C7.89 12.0202 8.28926 10.7578 9.35914 9.62265C11.1706 7.70238 15.0491 7.46876 19.4248 9.01633C20.1929 9.28831 20.4979 9.4772 20.3568 9.59491C20.2525 9.68179 19.5451 9.68053 18.3227 9.5911C16.4119 9.45134 14.9574 9.71577 14.2076 10.3403C13.0662 11.291 13.2402 13.375 14.7125 16.3813C14.872 16.7068 15.0327 17.0254 15.0694 17.0903C15.1549 17.2395 15.0928 17.378 14.9441 17.3711C14.8808 17.368 13.4546 17.1887 11.7748 16.972V16.972ZM17.4103 15.3363C16.0696 15.0965 14.8643 14.2692 14.4752 13.3229C14.2885 12.8683 14.2974 12.2752 14.4966 11.9202C14.677 11.5991 15.1426 11.2276 15.5596 11.0721C16.2537 10.8133 17.4691 10.9166 18.3549 11.3101C19.1957 11.6835 19.9411 12.3401 20.2182 12.9509C20.5738 13.7347 20.2776 14.6092 19.5159 15.0267C19.0109 15.303 18.0296 15.4472 17.4096 15.3364H17.4103L17.4103 15.3363Z" fill="white" />
                        </svg>
                  </a>
                )}
              </div>
              
              <p style={{ 
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '25px',
                '@media (max-width: 600px)': {
                  fontSize: '15px'
                }
              }}>
                {convidadoSelecionado.descricao}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Renderização do app
const App = () => {
  return (
    <div>
      <Convidados />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('convidados'));