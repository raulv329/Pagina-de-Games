import "./styles.css";

import { Header } from "./components/Header/Header"
import { Jogos } from "./components/Jogos/jogos";
import { Streamers } from "./components/Streamers/Stream";
import { RedeSocial } from "./components/Redes-Sociais/rede-social";



export function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Jogos
          Title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
        />
        <Streamers
          Title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
        />
        <RedeSocial
          Title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
        />
      </main>
    </div>
  )
}
