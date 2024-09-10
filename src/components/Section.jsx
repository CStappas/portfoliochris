import "./section.css";
import TypewriterEffect from "./type-effet.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import StarryBackground from "./StarryBackground.jsx";


const Section = () => {
  const introtext = "Hi I'm Christos, a front-end developer.";

  return (
    <div >
      <div>
        <div id="title" className="title">
          <TypewriterEffect text={introtext} />
        </div>
        <div id="about" className="section">
          <div id="content-box">
            <section class="about-me">
              <div class="title-box">
                <span class="title-text">About Me</span>
              </div>
              <div class="description">
                <p>
                  Hey, I'm Christos, a computer enthusiast turned software
                  developer. I've been hooked on computers since childhood, and
                  that early fascination sparked my journey into coding.
                </p>

                <p>
                  <strong>Why Code?</strong> For me, coding is about turning
                  ideas into reality. I thrive on solving problems and enjoy the
                  art of crafting seamless digital experiences.
                </p>

                <p>
                  <strong>Skills Snapshot</strong>
                  <ul class="skills-list">
                    <li>
                      Proficient in JavaScript (React) and modern front-end
                      development practices.
                    </li>
                    <li>
                      Experienced in building responsive UIs, working with
                      RESTful APIs, and managing state effectively.
                    </li>
                    <li>
                      Skilled in front-end tools and technologies like HTML5,
                      CSS3, and modern JavaScript (ES6+).
                    </li>
                    <li>
                      Team player with a knack for elegant solutions and clean
                      code practices.
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>Projects</strong> From Netflix Clones to Pokemon
                  Pokedex, my work reflects my dedication to creating meaningful
                  digital solutions.
                </p>

                <p>
                  <strong>Beyond the Code</strong> When I'm not coding, I'm
                  exploring the latest tech trends and contributing to the
                  developer community. Let's connect and explore the
                  possibilities of code!
                </p>

                <p>Cheers, Christos</p>
              </div>
            </section>
          </div>
        </div>
        <Projects />
      </div>
      <Contact />
    </div>
  );
};
export default Section;
