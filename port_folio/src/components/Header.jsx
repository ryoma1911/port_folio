const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <h1 style={styles.logo}>Ryoma Abe's Portfolio</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#skills">Career</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor: '#333',
    color: "#fff",
    padding: "1rem 0",
    zIndex: 1000,
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
    
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
};

export default Header;

