const careerData = [
  {
    year: '2019〜2020',
    company: '某信用金庫（SES）',
    role: '運用監視オペレータ',
    project: '信用金庫のシステム運用業務',
    phase: '運用・監視',
    tasks: [
      '日次・月次・年次バッチ処理の対応',
      '各支店からのヘルプデスク対応',
      '日々のシステム運用監視'
    ],
    comment: '既存システムの運用保守を担当。<br />手作業部分の繋ぎ業務なども担い、2020年7月以降の自動化案件に役立つ知見を得ました。'
  },
  {
    year: '2020/2〜2020/6',
    company: '自社内RPA開発（社内SE）',
    role: '業務自動化エンジニア',
    project: '社内の事務作業自動化（RPA）',
    phase: '要件整理〜開発',
    tasks: [
      'Blue Prismを用いた定型業務の自動化開発',
      '業務ヒアリングとプロセス設計'
    ],
    comment: '社内初のRPA導入で基本設計〜テストまで一通り経験。<br />後続の大型案件の基礎スキルをこの時期に習得しました。'
  },
  {
    year: '2020/7〜2025（現在）',
    company: 'カード会社業務自動化RPA開発（SES）',
    role: '業務自動化RPAエンジニア',
    project: '大手カード会社向け業務自動化開発（RPA導入プロジェクト）',
    phase: '要件定義～設計・開発～テスト～運用保守',
    tasks: [
      'オペレーション業務の業務ヒアリング・要件定義',
      'RPAツールを用いた業務プロセスの自動化シナリオ作成',
      'Salesforceからのデータ取得処理の自動化',
      '取得データを基幹システムへ連携・登録処理の構築',
      'カード審査結果PDFの自動ダウンロードと保存処理の実装',
      '年2回の自動化リリース対応および定期メンテナンス'
    ],
    comment: ['RPA導入プロジェクトにおいて、要件定義から運用保守まで全工程を一貫して対応。<br />定期的な自動化リリースのほか、障害時の迅速なエラー対応や、処理時間の短縮に向けた改善提案なども実施。<br />安定稼働と継続的な業務改善に貢献しました。'
    ]
  },
  {
    year: '2024年10月〜現在',
    company: '個人開発',
    role: 'Webアプリ開発エンジニア',
    project: 'プロ野球の試合情報をJSON形式で取得・提供するWebアプリの開発',
    phase: '要件整理〜設計〜開発〜インフラ構築〜保守運用',
    tasks: [
      'Go言語によるバックエンド処理の実装（試合データの取得・API提供）',
      'Dockerを用いたローカル開発環境の構築',
      'AWS（EC2 / S3など）によるインフラ構築・デプロイ対応',
      'GitHubでのソースコード管理／Issue活用でのタスク管理',
      'JSON形式での試合データ配信機能の実装',
      '今後の追加予定：選手別成績の取得・表示機能'
    ],
    comment: '日本のプロ野球における情報提供の選択肢が限られる中で、独自に設計・構築を試みた初のフルスタック開発プロジェクトです。<br />Go・Docker・AWSを用いた実践的なスキル習得とアウトプットに挑戦しました。'
  }
];

const Career = () => (
  <section style={styles.section} id="career" className="career-section">
    <h2 style={styles.heading} className="section-title">Career - 経歴</h2>
    <div style={styles.cardContainer} className="timeline">
      {careerData.map((item, index) => (
        <div key={index} style={styles.card} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="year">{item.year}</span>
            <h3 style={styles.cardTitle}>{item.company}</h3>
            <h4 style={styles.role}>{item.role}</h4>
            <p><strong>【プロジェクト概要】</strong><br />{item.project}</p>
            <p><strong>【担当フェーズ】</strong><br />{item.phase}</p>
            <p><strong>【業務内容】</strong><br />
            <ul>
              {item.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
            </p>
            <p>
              <strong>《コメント／アピールポイント》</strong><br />
              <span dangerouslySetInnerHTML={{ __html: item.comment }} />
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

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
    marginBottom: '3rem',
    textAlign: 'center',
    color: '#0f172a',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
  card: {
    color: '#0f172a',
    backgroundColor: '#ffffff',
    display: 'grid',
    padding: '1.5rem 2rem',
    borderRadius: '1rem',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: '#1e293b',
    marginBottom: '0.5rem',
  },
  role: {
    fontSize: '0.95rem',
    color: '#475569',
    fontWeight: 'bold',
    marginBottom: '0.8rem',
  },
  cardDescription: {
    fontSize: '0.95rem',
    color: '#334155',
    lineHeight: '1.6',
  },
};

export default Career;
