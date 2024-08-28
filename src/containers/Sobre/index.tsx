import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, porro
      voluptatem, autem placeat aliquam temporibus asperiores consequatur fugiat
      architecto, perspiciatis minima illum quisquam culpa. Animi maiores porro
      recusandae mollitia officia?
    </Paragrafo>
    <GitSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=GfCarvalho77&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="icone"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=GfCarvalho77&layout=compact&langs_count=7&theme=dracula"
        alt="icone"
      />
    </GitSecao>
  </section>
)

export default Sobre
