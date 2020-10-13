import React from "react";
import Liliane from "../../assects/Liliane.jpg";

export default class PerfilLiliane extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="upper-container">
            <div className="image-container">
              <img src={Liliane} alt="Perfil Liliane" />
            </div>
          </div>
        </div>

        <div className="lower-container">
          <div>
            <h3>Liliane Silva de Arruda</h3>
            <h4>Front-ent Developer</h4>
          </div>

          <div>
            <p>
              Considero-me uma pessoa determinada, comprometida, e muito
              dedicada a aprender.
            </p>
          </div>

          <div>
            <h5>Contato: </h5>
            <p>(81)99908-8863/(81)98501-2322</p>
          </div>
          <div>
            <a href="#" className="btn">
              View Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}
