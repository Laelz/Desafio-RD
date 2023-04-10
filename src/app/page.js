import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import logo from '../assets/rdlogodefault.png'
import Link from 'next/link'
import EastIcon from '../assets/rightarrowLeft.svg';
import ImgWoman from '../assets/imgwoman.png';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.topbar}>
        <Image className={styles.logo} src={logo} width={174} height={32} />
        <nav>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
            <li>Menu 5</li>
          </ul>
        </nav>
        <div>
          <Link href={'/'} className={styles.buttonSecondaryEnabled}> BUTTON</Link>
          <Link href={'/'} className={styles.buttonPrimaryEnabled}> BUTTON<Image src={EastIcon} width={20} height={20} /></Link>
        </div>
      </header>
      <div className={styles.banner}>
        <div className={styles.topBanner}>
          <h2>Gere mais oportunidades para seu negócio</h2>
          <p>O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados.</p>
        </div>
        <div className={styles.midBanner}>
          <h3>Estaremos juntos desde o primeiro passo!</h3>
          <p>Se você ainda não sabe como extrair o máximo das ações digitais, não tem problema. O RD Station Marketing é mais que uma ferramenta, nos importamos com os seus resultados.</p>
          <p>Estaremos com você do planejamento até a prática!</p>
        </div>
        <div className={styles.bottomBanner}>
          <Image src={ImgWoman} width={600} height={600} />
          <div>
            <h3>Resultados previsíveis
              e mais clientes para sua empresa</h3>
            <p>Torne sua atuação no Marketing Digital mais eficaz</p>
            <ul>
              <li>Ferramentas intuitivas e com modelos prontos, vídeos explicativos e passo a passo guiado</li>
              <li>Implementação com especialistas focada em planejamento e prática (nos planos Marketing Pro e Enterprise)</li>
              <li>Time de especialistas em Sucesso do Cliente para apoiar na otimização da estratégia em cada fase da sua jornada (nos planos Marketing Pro e Enterprise)</li>
              <li>Suporte técnico em português, espanhol e inglês para tirar dúvidas, com 97% de satisfação entre nossos clientes</li>
              <li>Muito conteúdo educativo, eventos, cursos da RD University e comunidades para você continuar evoluindo</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={styles.form}>
        <form>
          <div>
            <h4>Comece seus 10 dias de teste grátis do RD Station Marketing!</h4>
          </div>
          <div className={styles.formGroup}>
            <label name="nome">Diga, qual seu nome?</label>
            <input
              name='nome'
              placeholder='Insira seu nome'
              type="text"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label name="email">Seu email de trabalho</label>
            <input
              name='email'
              placeholder='Insira seu e-mail'
              type="email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label name="telefone">Seu telefone</label>
            <input
              name='fone'
              placeholder='Insira seu telefone com DDD'
              type="number"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label name="cargo">Seu cargo de ocupação</label>
            <input
              name='cargo'
              placeholder='Selecione seu cargo'
              type="select"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label name="senha">Crie uma senha</label> <input
              name='senha'
              type="password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label name="senha2">Confirme sua senha</label> <input
              name='senha2'
              type="password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label name="siteTrue">Meu site é</label>
            <input
              name='siteMark'
              type="radio"
            />
            <label name="site">Qual o site da sua empresa?</label>
            <input
              name='site'
              placeholder='Insira o endereço do seu site'
              type="text"
              required
            />
            <label name="siteFalse">Ainda não tenho site</label>
            <input
              name='siteMark'
              type="radio"
            />
          </div>

          <div className={styles.formGroup}>
            <ul>
              <li>Ao criar minha conta estou de acordo com os termos de uso do software e política de privacidade.</li>
              <li>Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.</li>
              <li>*Você pode alterar suas permissões de comunicação a qualquer tempo</li>
            </ul>
          </div>
          <div className={styles.formGroup}>
            <button
              type="submit"
            >
              CRIAR MINHA CONTA
            </button>
          </div>
        </form>
      </section>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image}>
          </div>
          <div className={styles.content}>
            <p >
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div>
              <p>57 Min</p>
              <p>Free</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
          </div>
          <div className={styles.content}>
            <p >
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div>
              <p>57 Min</p>
              <p>Free</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
          </div>
          <div className={styles.content}>
            <p >
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div>
              <p>57 Min</p>
              <p>Free</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
          </div>
          <div className={styles.content}>
            <p >
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div>
              <p>57 Min</p>
              <p>Free</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
