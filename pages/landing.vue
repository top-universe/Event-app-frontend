<template>
    <main>
        <Header />
        

    <!-- upper section start -->

    <section class="section-one">
      <p class="section-one-para text-one">
        Smart email campaign builder, made for Developers
      </p>
      <h1 class="section-one-header">
        Turn your visitors into profitable <span>business</span>
      </h1>
      <div class="section-one-button">
        <button class="section-one-button-one primary-btn">
          Get more customers
        </button>
        <div class="button-two-container">
          <button class="section-one-button-two outline-btn">
            <img
              src="../assets/icons/Icon-play.svg"
              alt="play-icon"
              class="play-icon outline"
            />Watch free demo
          </button>
        </div>
      </div>

      <p class="section-one-para text-two">
        60 Days free trial . No credit card required
      </p>
      <div class="section-one-mp4">
        <!-- <img src="assets\images\Group11.png" alt="" class="mp4-frame"> -->
        <button class="play-button">
          <img
            src="../assets/icons/Icon.svg"
            alt="play-icon"
            class="play-icon solid"
          />
        </button>
      </div>
    </section>

    <!-- upper section end  -->

    <!-- middle section start  -->

    <div class="review-section">
      <h2>Over 1000+ people trust us</h2>
      <p>
        Clarity gives you the Blocks & components you need to create a truly
        professional website, landing page or admin panel for your SaaS
      </p>
      <ul class="reviews">
        <li class="review">
          <img
            src="../assets/images/profile1.png"
            alt="cust-image"
            class="review-top"
          />
          <div class="bottom-float">
            <div class="customer-details">
              <div class="cust-name">Albert Flores</div>
              <div class="cust-post">Founder of GearUp</div>
            </div>
            <button>
              <img src="../assets/icons/button-play1.svg" alt="pause" />
            </button>
          </div>
        </li>

        <li class="review">
          <img
            src="../assets/images/profile2.png"
            alt="cust-image"
            class="review-top"
          />
          <div class="bottom-float">
            <div class="customer-details">
              <div class="cust-name">Leslie Alexander</div>
              <div class="cust-post">Co-Founder of Womenia</div>
            </div>
            <button>
              <img src="../assets/icons/button-play1.svg" alt="pause" />
            </button>
          </div>
        </li>
        <li class="review">
          <img
            src="../assets/images/profile3.png"
            alt="cust-image"
            class="review-top"
          />
          <div class="bottom-float">
            <div class="customer-details">
              <div class="cust-name">Courtney Henry</div>
              <div class="cust-post">Founder of CH Beauty</div>
            </div>
            <button>
              <img src="../assets/icons/button-play1.svg" alt="pause" />
            </button>
          </div>
        </li>
      </ul>
      <a href="#more-review" class="more-review">
        See all reviews by our customers
        <img src="../assets/icons/arrow-upright.svg" alt=""
      /></a>
    </div>

    <!-- middle section end  -->

    <!-- bottom section start  -->

    <div class="service">
      <div class="service-header">
        <h2 class="title">Make every step user-centric</h2>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </p>
      </div>
      <div class="service-box">
        <div class="support box">
          <img src="../assets/icons/support.svg" alt="" />
          <h3 class="box-title">Support</h3>
          <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
        <div class="sales box">
          <img src="../assets/icons/sales.svg" alt="" />
          <h3 class="box-title">Sales</h3>
          <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
        <div class="onboarding box">
          <img src="../assets/icons/onboarding.svg" alt="" />
          <h3 class="box-title">Onboarding</h3>
          <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
        <div class="product box">
          <img src="../assets/icons/product.svg" alt="" />
          <h3 class="box-title">Product</h3>
          <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
        <div class="quality box">
          <img src="../assets/icons/quality.svg" alt="" />
          <h3 class="box-title">Quailty</h3>
          <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
        <div class="result box">
          <img src="../assets/icons/result.svg" alt="" />
          <h3 class="box-title">Result</h3>
          <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
      </div>
    </div>

    <!-- review section up -->

    <!-- footer start here -->

   <footer>
      <div class="line"></div>
      <div class="footer-down">
        &#169 Copyright 2022, All Rights Reserved by Evently
      </div>
    </footer> 

    <!-- ends here -->
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

/* upper section start */

.section-one {
  /* width: 100vw; */
  text-align: center;
  margin: 185px auto 102px;

  /* display: flex; */
}

.section-one-para {
  font-size: var(--fontsize-content);
  font-weight: 400;
  color: #71717a;
}

.section-one-header {
  position: relative;
  width: 627px;
  font-size: 52px;
  font-weight: 800;
  line-height: 62px;
  margin: 0 auto 36px;
  z-index: 1;
}

.section-one-header > span::before {
  position: relative;
  color: var(--primary-text-clr);
  font-size: 52px;
}

.section-one-header > span::before {
  content: "";
  position: absolute;
  width: 228.24px;
  height: 36.82px;
  bottom: 10px;
  background: linear-gradient(
    90deg,
    #44bcff -0.55%,
    #44b0ff 22.86%,
    #ff44ec 48.36%,
    #ff44ec 73.33%,
    #ff675e 99.34%
  );
  filter: blur(25px);
  transform: rotate(0deg);
  z-index: -1;
}

.section-one-button {
  display: flex;
  justify-content: center;
  gap: 19px;
  margin-bottom: 34px;
}

.section-one-button button {
  width: 220px;
  height: 56px;
}

.section-one-button-two {
  background: none;
}

.play-icon.outline {
  margin-right: 10px;
}

.section-one-mp4 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("./assets/images/Group11.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 880px;
  height: 526px;
  margin: 102px auto 88px;
}

.section-one-mp4::before {
  content: "";
  position: absolute;
  height: 90%;
  width: 90%;
  background: linear-gradient(
    90deg,
    #4484ff -0.55%,
    #44b0ff 22.86%,
    #ff44ec 48.36%,
    #44a5ff 73.33%,
    #f2ff5e 99.34%
  );
  filter: blur(35px);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  z-index: -1;
}

.play-button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 24px 154px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7px);
  cursor: pointer;
}

/* upper section end */

/* middle section start */
.service {
  text-align: center;
  padding: 60px 8%;
}
.title {
  font-weight: 500;
  font-size: 32px;
  line-height: 35px;
  color: var(--primary-text-clr);
  margin-bottom: 27px;
}
.sub-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: var(--secondary-text-clr);
  margin-bottom: 50px;
}
.box {
  padding: 38px 35px 44px;
  border-bottom: 1px solid var(--border-clr);
}
.box-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: var(--primary-text-clr);
  margin: 23px 0;
}
.box-content {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--secondary-text-clr);
}

/* a {
  text-decoration: none;
  color: #2563eb;
  font-weight: 600;
  font-size: 16px;
}

button {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: #fff;
  border: none;
  font-size: 16px;
  background: #2563eb;
  border-radius: 9px;
} */

.review-section {
  padding: 106px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.review-section h2 {
  text-align: center;
  font-weight: 600;
  font-size: 52px;
  line-height: 62px;
  padding-bottom: 23px;
}

.review-section p {
  max-width: 710px;
  text-align: center;
  font-weight: 400;
  color: var(--secondary-text-clr);
  font-size: var(--fontsize-content);
  line-height: 30px;
  padding-bottom: 87px;
}

.reviews {
  list-style-type: none;
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* review component start here */

.review {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  margin-bottom: 57px;
  height: 568px;
  width: 316px;
}

.review-top {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

.review-top img {
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform 0.5s;
}

.review img:hover {
  transform: scale(1.2);
}

.bottom-float {
  position: absolute;
  bottom: 0;
  width: 316px;
  height: 223px;
  display: flex;
  left: 0;
  background-image: linear-gradient(
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0.4),
    rgb(0, 0, 0)
  );
  color: #fff;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 30px 30px 30px;
}

.bottom-float button {
  border: 2px solid silver;
  width: 58px;
  height: 58px;
  background-color: transparent;
  background: rgba(255, 255, 255, 0.09);
  border: 2px solid #ffffff;
  box-shadow: 0px 15px 75px rgba(27, 25, 68, 0.3);
  backdrop-filter: blur(13px);
  border-radius: 19px;
}

.bottom-float button img {
  width: 11.44px;
  height: 11.44px;
  margin: auto;
}

.more-review {
  color: var(--primary-text-clr);
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.more-review > img {
  padding-left: 9px;
  color: var(--fontsize-content);
  height: 18px;
}

.cust-name {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}

.cust-post {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 5px;
  margin-bottom: 3px;
  color: #d4d4d8;
}

.footer-down {
  display: flex;
  justify-content: center;
  border-top: 2px solid var(--border-clr);
  color: var(--primary-text-clr);
  padding: 20px 0;
}

.line .footer-down {
  display: flex;
}

/* ends --> review component styling */

/* media screens */

@media (min-width: 765px) {
  .service {
    /* padding: 120px 152px; */
    padding: 120px 10%;
  }
  .title {
    font-weight: 700;
    font-size: 42px;
    line-height: 48px;
    margin-bottom: 27px;
  }
  .sub-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 95px;
  }
  .service-box {
    display: flex;
    flex-wrap: wrap;
  }
  .box {
    padding: 58px 30px 50px;
    /* padding: 3.3% 3% 4%; */
    flex-basis: 50%;
  }
  .support,
  .onboarding,
  .quality {
    border-right: 1px solid var(--border-clr);
  }
  .quality,
  .result {
    border-bottom: none;
  }
  .box-title {
    font-weight: 700;
    font-size: 21px;
    margin: 45px 0 22px;
  }
}
@media (min-width: 1023px) {
  .box {
    padding: 58px 55px 64px;
    flex-basis: 33.3%;
  }
  .sales,
  .product {
    border-right: 1px solid var(--border-clr);
  }
  .onboarding {
    border-right: none;
  }
  .product {
    border-bottom: none;
  }
}
/* Services Section ends */



</style>