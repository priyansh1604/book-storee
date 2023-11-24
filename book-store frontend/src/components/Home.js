import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <Carousel>
      <Carousel.Item className='items1' interval={1000}>
        <center><img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627673942i/58341222.jpg' text="First slide" />
        </center>
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <center><img src='https://media1.popsugar-assets.com/files/thumbor/lkMJJPPf_jCYYpdwdl1Op2wMadU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/01/003/n/44498184/1a7b7fa75adf0ee3_Normal_People/i/Normal-People-by-Sally-Rooney.jpg' text="Second slide" />
        </center>

      </Carousel.Item>
      <Carousel.Item interval={500}>
      <center><img src='https://i.insider.com/61dc67054ede320018b6d54b?width=1000&format=jpeg&auto=webp' text="Third slide" />
      </center>
        
      </Carousel.Item>   
    </Carousel>
    <br/>
    <br/>
    
    <Link to="/books"><div class="container">
  <div class="box">
    <div class="imgBx">
      <img src="https://i.insider.com/610186180d35a9001825a2ce?width=1000&format=jpeg&auto=webp"/>
      
    </div>
    <div class="content">
      <div>
        <Link to="/books"> <h2>Book 1</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/48d89e48-d208-4ba0-b1f9-7b52d1a6539d/Dune%20cover.jpg?w=270&h=417&auto=format&bg=%23efefef&fit=crop"/>
    </div>
    <div class="content">
      <div>
        <h2>Book 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627673942i/58341222.jpg"/>
    </div>
    <div class="content">
      <div>
        <h2>Book3</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://i.insider.com/61dc68814ede320018b6d5b9?width=1000&format=jpeg&auto=webp"/>
    </div>
    <div class="content">
      <div>
        <h2>Book 4</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
</div>
</Link>

<Link to="/books"><div class="container">
  <div class="box">
    <div class="imgBx">
      <img src="https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL330_SR330,330_.jpg"/>
      
    </div>
    <div class="content">
      <div>
        <Link to="/books"> <h2>Shoes</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660145160i/61718053.jpg"/>
    </div>
    <div class="content">
      <div>
        <h2>Book 5</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://www.oberlo.com/media/1603897574-image30-1.jpg?w=1824&fit=max"/>
    </div>
    <div class="content">
      <div>
        <h2>Book 6</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1652631076i/60784636.jpg"/>
    </div>
    <div class="content">
      <div>
        <h2>Book 7</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
</div>
</Link>

    </>
  );
}


export default Home;