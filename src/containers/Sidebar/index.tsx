import Paragrafo from '../../components/Paragrafo'
import Avatar from '../../components/Projeto/Avatar'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descrição, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Guilherme Carvalho</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        GfCarvalho77
      </Paragrafo>
      <Descrição tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descrição>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
