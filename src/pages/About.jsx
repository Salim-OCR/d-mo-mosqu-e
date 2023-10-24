function About() {
  return (
    <section id="pageAbout">
      <h2>qui somme nous?</h2>
      <div className="container-infos">
        <div className="infos-imam">
          <img src="./images/imam_profil.png" alt="profil imam" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            tempore explicabo minus ullam earum, odit, possimus rerum animi eum
            reiciendis sequi dolor ducimus. Impedit aspernatur officia aliquam,
            molestias deleniti reprehenderit non consequatur obcaecati
            voluptatem perferendis consequuntur veritatis voluptas expedita
            commodi quidem odio qui repellat aliquid dolorem quo! Fugit, cum
            reiciendis?
          </p>
        </div>
        <div className="img-bg"></div>
      </div>

      <div className="islamPillars">
        <h3>5 piliers de l'islam</h3>

        <ul>
          <li>
            <span>la foie</span>

            <div className="img">
              <img src="./images/coran.jpg" alt="" />
            </div>
            <h4>1er pilier de l'islam</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              recusandae{" "}
            </p>
          </li>
          <li>
            <span>la prière</span>

            <div className="img">
              <img src="./images/salat1.jpg" alt="" />
            </div>
            <h4>2ème pilier de l'islam</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              recusandae{" "}
            </p>
          </li>
          <li>
            <span>le jeûne</span>
            <div className="img">
              <img src="./images/salat2.jpg" alt="" />
            </div>
            <h4>3ème pilier de l'islam</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              recusandae{" "}
            </p>
          </li>
          <li>
            <span>la zakat</span>
            <div className="img">
              <img src="./images/mosquee1.jpg" alt="" />
            </div>
            <h4>4ème pilier de l'islam</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              recusandae{" "}
            </p>
          </li>
          <li>
            <span>le hajj</span>
            <div className="img">
              <img src="./images/kaaba.jpg" alt="" />
            </div>
            <h4>5ème pilier de l'islam</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              recusandae{" "}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default About;
