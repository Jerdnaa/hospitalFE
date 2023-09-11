import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="about-cnt">
        <div>
          <h1 className="hero-header">MediCare</h1>
          <p className="motto">For every patients benefit</p>
        </div>
        <p className="hero-about">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda adipisci ducimus
          placeat magnam? Quia, asperiores incidunt sed modi, repudiandae dignissimos nobis rerum
          iure optio architecto suscipit blanditiis laudantium consequatur quaerat? Ratione
          perspiciatis magnam id aspernatur aperiam labore illum eos, sed consequuntur aliquid.
          Distinctio, totam modi ducimus nisi similique deserunt necessitatibus sed temporibus quia
          laborum quas, soluta odio, fugiat voluptates veritatis.
        </p>
      </div>
      <div className="registration-cnt">
        <Link to="/login" className="registration-link">
          Login
        </Link>
        <p className="registration-sen">If you dont have an account you can</p>
        <Link to="/signup" className="registration-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Hero;
