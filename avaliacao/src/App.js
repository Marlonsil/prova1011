import Imagem from'./img/b.jpg'
import Imagem2 from'./img/a.jpg'
import './App.css';
import Pro from './com/pro';


function App() {
  return (
    <div className='app'>
<h1>
Roubo no Banco da Caixa Choca Comunidade Local</h1>
<Pro
titulo={"Banco da Caixa"}
imagem={Imagem}
alt={"teste"}
/>
<p className='descrição.'>
Na manhã de hoje, um audacioso roubo abalou a tranquila cidade de [Nome da Cidade]. O alvo do crime foi a agência do Banco da Caixa, situada no coração da cidade. Segundo informações da polícia local, os criminosos, fortemente armados, invadiram o banco por volta das 10h e renderam funcionários e clientes.

Os assaltantes agiram com rapidez e precisão, esvaziando os cofres e levando uma quantia ainda não confirmada. A ação criminosa durou cerca de 20 minutos, durante os quais os moradores da cidade foram mantidos sob tensão, enquanto a polícia era acionada.

As autoridades já estão investigando o caso e analisando as imagens das câmeras de segurança em busca de pistas que possam levar à identificação e captura dos suspeitos. A comunidade local está em choque com o ocorrido, e o Banco da Caixa ainda não se pronunciou oficialmente sobre o assalto.

Mais informações serão divulgadas à medida que a investigação avançar. A população aguarda ansiosamente por respostas e por notícias sobre a segurança da cidade.
</p>
<p className='categoria'>
Roubo no barco da Caixa
</p>
<p className='descrição'>
descrição
<h1>teste</h1>
<Pro

imagem={Imagem2}
titulo={"luiz239:"}
alt={"teste"}
/>
  </p>
<p>
  luiz239:foda
</p>
<p>
  maria67:nossa
</p>
<p>
  lucas876:né me camaro
</p>


    </div>
  );
}

export default App;
