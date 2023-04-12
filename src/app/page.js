
// import { useState } from 'react';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import logo from '../assets/logo.svg';
import logoInvert from '../assets/logoinvert.svg';
import Link from 'next/link';
import EastIcon from '../assets/rightarrowLeft.svg';
import ImgWoman from '../assets/imgwoman.png';
import IconGraphic from '../assets/icongraphic.svg';
import IconGlobal from '../assets/iconglobal.svg';
import IconGraphicPizza from '../assets/icongraphicpizza.svg';
import IconOutFone from '../assets/iconoutfone.svg';
import IconThink from '../assets/iconthink.svg';
import IconStar from '../assets/iconstar.svg';
import IconFacebook from '../assets/facebook.svg';
import IconFacebookLinks from '../assets/facebookLinks.svg';
import IconLinkedinLinks from '../assets/linkedinLinks.svg';
import IconLinkedin from '../assets/linkedin.svg';
import IconWordpress from '../assets/wordpress.svg';
import IconShopify from '../assets/shopify.svg';
import IconGoogle from '../assets/google.svg';
import IconInstagram from '../assets/Instagram.svg';
import IconPagSeguro from '../assets/pagseguro.svg';
import IconSalesForce from '../assets/salesforce.svg';
import IconTwitter from '../assets/twitter.svg';
import IconYoutube from '../assets/youtube.svg';
import IconZapier from '../assets/zapier.svg';
import IconRD from '../assets/symbolRD.svg';
import IconHotmart from '../assets/hotmart.svg';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = {
  //     first: event.target.first.value,
  //     last: event.target.last.value,
  //   }
  // }

  return (
    <main className={styles.main}>
      <header className={styles.topbar}>
        <Image className={styles.logo} src={logo} />
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
          <Image src={ImgWoman} />
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
        <form >
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
            {/* <label name="siteTrue">Meu site é</label>
            <input
              name='siteMark'
              type="radio"
            /> */}
            <label name="site">Qual o site da sua empresa?</label>
            <input
              name='site'
              placeholder='Insira o endereço do seu site'
              type="text"
              required
            />
            {/* <label name="siteFalse">Ainda não tenho site</label>
            <input
              name='siteMark'
              type="radio"
            /> */}
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

      <section >
        <h2>
        </h2>
        <div className={styles.cards}>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={IconGraphic} width={32} height={32} />
            </div>
            <div className={styles.content}>
              <p >
                Torne sua operação de Marketing Digital mais produtiva
              </p>
              <div>
                <p>Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={IconOutFone} width={32} height={32} />
            </div>
            <div className={styles.content}>
              <p >
                Crie facilmente campanhas que funcionam
              </p>
              <div>
                <p>É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas poderosas, e contam com dezenas de modelos — como de Landing Pages, Pop-ups, emails — para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={IconThink} width={32} height={32} />
            </div>
            <div className={styles.content}>
              <p >
                Construa jornadas personalizadas e gere vendas em escala
              </p>
              <div>
                <p>Envie a mensagem certa na hora certa e construa jornadas personalizadas que geram até 5x mais conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade de Marketing e Vendas.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={IconStar} width={32} height={32} />
            </div>
            <div className={styles.content}>
              <p >
                Encontre automaticamente as melhores oportunidades
              </p>
              <div>
                <p>Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários. Defina critérios para identificar automaticamente Leads com maior potencial de compra e envie para o comercial oportunidades qualificadas.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={IconGraphicPizza} width={32} height={32} />
            </div>
            <div className={styles.content}>
              <p >
                Saia da incerteza e comprove resultados
              </p>
              <div>
                <p>Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing Digital traz mais vendas e clientes.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={IconGlobal} width={32} height={32} />
            </div>
            <div className={styles.content}>
              <p >
                Suporte ágil e na sua língua
              </p>
              <div>
                <p>Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97% entre nossos clientes e um tempo médio de resolução de 6 horas. E o melhor: tudo isso em português.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <h2>Por que mais de 25.000 empresas escolheram o RD Station?</h2>
        <p>Combinamos nossos produtos de Marketing e Vendas com pessoas que se importam com seus resultados e um ecossistema que apoia o seu negócio do planejamento à prática.</p>
        <Link
          href={'https://app.rdstation.com.br/signup'}
        >
          CRIAR MINHA CONTA
        </Link>
      </section>
      <section className={styles.demo}>
        <div>
          <h3>Entenda melhor como o RD Station Marketing funciona na prática</h3>
          <button>ASSISTIR A DEMONSTRAÇÃO</button>
        </div>
        <iframe src='https://www.youtube.com/embed/lGCesaaLi4s' title="W3Schools Free Online Web Tutorials"></iframe>
      </section>
      <section className={styles.integrations}>
        <div className={styles.conta}>
          <h2>Torne sua operação de Marketing ainda mais poderosa</h2>
          <p>O RD Station Marketing se conecta as principais ferramentas nacionais e internacionais </p>
          <Link
            href={'https://app.rdstation.com.br/signup'}
            className={styles.buttonPrimaryEnabled}
          >
            CRIAR CONTA GRATUITA
          </Link>
        </div>
        <div className={styles.gridIcon}>
          <div>
            <div>
              <Image src={IconRD} />
              <p> RD Station CRM</p>
            </div>
            <div>
              <Image src={IconSalesForce} />
              <p>SalesForce</p>
            </div>
            <div>
              <Image src={IconGoogle} />
              <p>Google</p>
            </div>
            <div>
              <Image src={IconFacebook} />
              <p>Facebook</p>
            </div>
            <div>
              <Image src={IconLinkedin} />
              <p>Linkedin</p>
            </div>
          </div>
          <div>
            <div>
              <Image src={IconWordpress} />
              <p>Wordpress</p>
            </div>
            <div>
              <Image src={IconHotmart} />
              <p>Hotmart</p>
            </div>
            <div>
              <Image src={IconPagSeguro} />
              <p>PagSeguro</p>
            </div>
            <div>
              <Image src={IconShopify} />
              <p>Shopify</p>
            </div>
            <div>
              <Image src={IconZapier} />
              <p>Zapier</p>
            </div>
          </div>



        </div>
      </section>
      <section className={styles.footer}>
        <footer>
          <Image src={logoInvert} />
          <div>
            <Image src={IconTwitter} />
            <Image src={IconFacebookLinks} />
            <Image src={IconLinkedinLinks} />
            <Image src={IconInstagram} />
            <Image src={IconYoutube} />
          </div>
        </footer>
      </section>
    </main>
  )
}
