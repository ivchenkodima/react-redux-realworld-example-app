import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis commodi eius eligendi ipsa ipsam maiores molestiae optio
            porro, quasi repellendus, reprehenderit vitae. Ad dolor ipsum
            numquam, obcaecati provident sequi vel?
          </li>
          <li>Adipisci assumenda dolor esse eum fugiat fugit hic iste labore,
            minima mollitia odio officia quam quis quisquam rem tenetur totam
            ullam vel? Exercitationem expedita, fuga iure molestiae numquam quo
            voluptatum.
          </li>
          <li>Ad aliquam aperiam blanditiis corporis deserunt dolore doloribus
            ea eveniet facilis fugit illum modi molestiae, nemo nesciunt non
            optio perspiciatis possimus quisquam quo recusandae sunt ullam
            veritatis vero, voluptas voluptatum.
          </li>
          <li>Amet aperiam at error est exercitationem expedita fuga incidunt
            libero magni molestias numquam quasi, quis repellendus tempora
            temporibus vel veritatis vitae voluptas! Aliquid dolores iusto
            minima pariatur perferendis quidem repellat.
          </li>
          <li>Adipisci aperiam asperiores aut consectetur culpa deserunt dicta
            dignissimos distinctio dolores eaque, et facilis inventore itaque
            magnam nisi nobis possimus provident quasi qui quisquam rem
            repudiandae similique, sit tempora voluptatum.
          </li>
        </ul>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
