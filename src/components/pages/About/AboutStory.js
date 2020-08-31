import React from 'react';
import { Animated } from 'react-animated-css';

const AboutStory = () => {
  return (
    <article className='mw7 center pa4-ns'>
      <Animated animationIn='fadeInDownBig' animationOut='zoomOutDown'>
        <div>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            eius distinctio doloribus qui repellat et necessitatibus. Optio
            harum, veritatis fugit aliquam corporis voluptatibus nesciunt
            repudiandae!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            mollitia dicta voluptatem quaerat fugiat modi architecto neque, ad
            magni, ut rerum ipsam rem dolores. Praesentium voluptate eos quae
            repudiandae illum ullam atque saepe tenetur alias dolor! Suscipit
            optio sequi nobis vitae, adipisci quo quasi excepturi facere atque
            eveniet laboriosam blanditiis ipsa asperiores sint beatae hic
            inventore quos saepe maiores ratione perspiciatis. Ipsum, cum
            exercitationem fugiat ex maiores nobis necessitatibus commodi atque
            qui eaque provident voluptate!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            hic iste, culpa ducimus expedita neque libero id nam animi ea,
            omnis, dolor deserunt ratione nostrum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ullam eveniet aspernatur consequatur. Incidunt, saepe.
          </p>
        </div>
        <div>
          <hr
            className='mw6 bb bw1 b--black-10'
            style={{ marginBottom: '40px', marginTop: '40px' }}
          ></hr>
          <h2>Education </h2>
          <p>
            <i className='fas fa-graduation-cap' /> Lorem ipsum dolor sit amet.
          </p>
          <p>
            <i className='fas fa-graduation-cap' /> Lorem ipsum dolor sit amet.
          </p>
        </div>
        <a
          className='f6 link dim grow no-underline br-pill ph3 pv2 mb2 mt2 dib white bg-dark-gray'
          href='https://drive.google.com/file/d/1Fie_rtaAlraWcZsBTKmKQWYjyKqR6NrV/view?usp=sharing'
          download
          target='_blank'
          rel='noopener noreferrer'
        >
          Download My Resume
        </a>
      </Animated>
    </article>
  );
};

export default AboutStory;
