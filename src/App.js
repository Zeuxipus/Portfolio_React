import Layout from "./component/layout/layout";
import imageSrc from "./style/img/photo_de_profil_cartoon-removebg-preview.png"

function App() {
  // let toto = "tata";

  return (
    <Layout>
      <div className="container">
        <div className="hero">
          <h4 id="home">Heyy !</h4>
          <h2>Je suis <span id="text">Orlane</span></h2>
          <div className="text">
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies, ornare.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies, ornare.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies, ornare
            </p>
          </div>
          <img src={imageSrc} alt="profil"/>
        </div>
        {/* ... Autres parties de votre contenu */}
      </div>
    </Layout>
  );
}

export default App;
