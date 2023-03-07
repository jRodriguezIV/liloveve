import "./Components/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about__info">
        <p>
          LILOVEVE (live + love) is a jewelry company that channels passion
          beyond design to a way of life. With recognition from New York
          Magazine's BEST OF NEW YORK Engagement Ring, artist Caroline Glemann
          founded Liloveve in 2009, seamlessly blending her jewelry aesthetic
          with a focus on personal service and attention to detail.
        </p>
        <p>
          Our clients are entertained in an expansive, white-walled, private
          atelier tucked away on a hidden street in South Williamsburg. Sun
          pools across the floor, alighting on strange artifacts, organic
          objects that serve as both decoration and inspiration, and glass
          showcases of handmade, one-of-a-kind wedding, engagement and bespoke
          jewelry.
        </p>
        <p>
          Visitors to the Gallery can choose from Caroline's existing collection
          or order a piece custom made. Working with recycled platinum and golds
          and carefully selected gems, Liloveve also specializes in upcycling,
          using pieces from sentimental vintage jewelry to imagine something
          new. Clients are invited to fully engage with both designer and
          process, from initial inquiry to complementary gemstone and diamond
          consultation, to having a piece customized to fit the client's unique
          personal style. Clients are invited down a narrow staircase into
          Caroline's fully equipped studio, where she creates her original work
          and conducts one of the top jewelry schools in the area.
        </p>
        <p>
          A true destination for New York's alternative creative set, Liloveve
          Jewelry pieces are cherished as a modern classic; a new heirloom that
          will be loved for a lifetime and passed down for generations to come.
        </p>
      </div>
      <div className="about__contact">
        <h2>Contact Us</h2>
        <p>
          To make an appointment or for more information, please contact the
          Gallery at <a href="mailto:info@liloveve.com">info@liloveve.com</a> or
          call <a href="tel:718-388-2190">718-388-2190</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
