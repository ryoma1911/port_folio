const About = () => (
  <section style={styles.section}>
    <div style={styles.inner}>
      <h2 style={styles.heading}>About - 自己紹介</h2>
      <div style={styles.content}>
        <div style={styles.textContainer} className="fade-in">
          <p style={styles.text}>
            初めまして、1996年生まれのITエンジニア、アオベと申します。社会人歴は7年目になります。
          </p>
          <p style={styles.text}>
            新卒で都内中小のソフトハウスに入社し、SES事業部に配属されました。<br />
            最初の現場では某信用金庫にて運用監視オペレータを約1年間担当。<br />
            その後は某クレジットカード会社にてRPAを活用した業務自動化開発に携わっています。<br />
            要件定義から運用保守まで、幅広い工程を経験させていただきました。
          </p>
          <p style={styles.text}>
            一方で、独学で他言語の開発を学ぶ中で<br />
            「もっと技術を身につけたい」「Web系の開発に挑戦したい」<br />
            という思いが強くなり、転職を決意しました。
          </p>
          <p style={styles.text}>
            現在は成果物とこのポートフォリオを通して自身をアピールし、Web系エンジニアを目指して活動しています。
          </p>
        </div>
      </div>
    </div>
  </section>
);

// インラインCSS
const styles = {
  section: {
    padding: '5rem 1rem',
    backgroundColor: '#e2e8f0',
  },
  inner: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#0f172a',
  },
  content: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  image: {
    width: '240px',
    height: '240px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1.2s ease-in-out forwards',
  },
  textContainer: {
    flex: 1,
    minWidth: '280px',
    animation: 'fadeIn 1.4s ease-in-out forwards',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#334155',
    marginBottom: '1.2rem',
    textAlign: 'center',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0f172a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

// アニメーションをCSSで追加（index.css などに追加してください）
/*
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/

export default About;
