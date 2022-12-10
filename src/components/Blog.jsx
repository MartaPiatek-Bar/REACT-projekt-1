import offersData from "../data/offersData";
import Offer from "./Offer";

const Blog = () => {

  return (
      
      <section class="blog padding">
        <div class="container blog-container">
          <div id="blog" class="list" href="#blog">Przygody:</div>
            <div class="adventure-box">
            {offersData.map(({ id, name, isNew }) => {
              return <Offer key={id} name={name} isNew={isNew}/> 
            })}
          </div>
        </div>
      </section>

  );
}

export default Blog;


