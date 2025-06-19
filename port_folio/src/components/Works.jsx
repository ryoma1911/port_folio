import React from 'react';

const works = [
    {
        title: '野球速報API',
        description: 'Goで開発したプロ野球速報を取得するREST API。スクレイピングで情報収集し、JSON形式で提供します。',
        github: 'https://github.com/ryoma1911/bb_api',
    },
    {
        title: 'やきゅうたNEO',
        description: '野球速報APIと連携し、打席に立つ選手の応援歌をライブ表示できるアプリです。（現在開発中）',
        github: 'https://github.com/ryoma1911/bb_chant_neo',
    },
    {
      title: 'ポートフォリオサイト',
      description: 'Reactを使用し、作成してみました。成果物をGithubに格納しています',
      github: 'https://github.com/ryoma1911/portfolio',
    },
];

const Works = () => (
<section style={styles.section} id="portfolio">
    <div style={styles.inner}>
        <h2 style={styles.heading}>Works - 成果物</h2>
        <div style={styles.cardContainer}>
        {works.map((work, index) => (
        <div key={index} style={styles.card} className="fade-in">
            <h3 style={styles.cardTitle}>{work.title}</h3>
            <p style={styles.cardDescription}>{work.description}</p>
            <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
            >
                GitHubを見る
            </a>
        </div>
        ))}
    </div>
    </div>
</section>
);

const styles = {
  section: {
    padding: '5rem 1rem',
    backgroundColor: '#f1f5f9',
  },
  inner: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    textAlign: 'center',
    color: '#0f172a',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#1e293b',
  },
  cardDescription: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#334155',
    lineHeight: '1.6',
  },
  button: {
    display: 'inline-block',
    padding: '0.5rem 1.2rem',
    borderRadius: '0.5rem',
    backgroundColor: '#1d4ed8',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Works;
