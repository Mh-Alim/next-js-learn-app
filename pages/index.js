import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'


export default function Home() {
  return (
  
    <div className={styles.container}>
        <Head>
            <title>Instagram Posts</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Instagram Posts</h1>
        <div className="embedsocial-hashtag" data-ref="264f2554aba405b41402c7d2ad5e029216f49351"></div>
        <Script
  
          dangerouslySetInnerHTML={{
            __html: `(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));`,
          }}
        />
      </div>
    
  );
}
