<template>
  <div>
       <!-- header component -->
    <Navigation />
    <!-- header ends -->
  <main>

    <!-- CTA > Call To Action -->
    <div class="hero">
      <h1>Turn your visitors into profitable business</h1>
      <div class="search-event">
        <input type="text" name="search" placeholder="Search Events" />
        <button>
          <img src="@/assets/images/magnifyingglass.svg" alt="" />
        </button>
      </div>
    </div>

    <!-- Events -->
    <div class="events">
      <div class="filter-by-location">
        Popular in <span class="location">Lagos</span>
        <span>
          <img src="@/assets/images/dropdown-arrow.svg" alt="select" />
        </span>
      </div>

      <ul class="event-tag-list">
        <li class="tags present">All</li>
        <li class="tags">For you</li>
        <li class="tags">Online</li>
        <li class="tags">Today</li>
        <li class="tags mb-none">This weekend</li>
        <li class="tags mb-none">Free</li>
        <li class="tags mb-none">Music</li>
        <li class="tags mb-none">Food & Drink</li>
        <li class="tags mb-none">Charity & Causes</li>
        <li class="tags dt-none">More</li>
      </ul>

      <!-- Category-mobile -->
      <div class="event-by dt-none">
        <h2>Categories</h2>
        <ul class="event-cards category">
          <li class="category-card">
            <img src="@/assets/images/sport.png" alt="sport" />
            <h3 class="category-title">Sport</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/fitness.png" alt="sport" />
            <h3 class="category-title">fitness</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/music.png" alt="sport" />
            <h3 class="category-title">Music</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/fashion.png" alt="sport" />
            <h3 class="category-title">Fashion</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/technology.png" alt="sport" />
            <h3 class="category-title">Technology</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/arts.png" alt="sport" />
            <h3 class="category-title">Arts</h3>
          </li>
        </ul>
      </div>

      <!-- based on interest -->
      <div class="event-by">
        <h2>Based on you interest</h2>
        <ul class="event-cards">
          <CardResult/>
        </ul>
      </div>

      <!-- Category -->
      <div class="event-by mb-none">
        <h2>Categories</h2>
        <ul class="event-cards category">
          <li class="category-card">
            <img src="@/assets/images/sport.png" alt="sport" />
            <h3 class="category-title">Sport</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/fitness.png" alt="sport" />
            <h3 class="category-title">fitness</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/music.png" alt="sport" />
            <h3 class="category-title">Music</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/fashion.png" alt="sport" />
            <h3 class="category-title">Fashion</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/technology.png" alt="sport" />
            <h3 class="category-title">Technology</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/arts.png" alt="sport" />
            <h3 class="category-title">Arts</h3>
          </li>
          <li class="category-card">
            <img src="@/assets/images/food.png" alt="sport" />
            <h3 class="category-title">Food</h3>
          </li>
        </ul>
      </div>

      <!-- recommendation -->
      <div class="event-by mb-none">
        <h2>Best recommendation</h2>
        <ul class="event-cards">
          <CardResult/>
        </ul>
      </div>

      <div class="promote mb-none">
        <div class="product-advert">
          <div class="advert-text">
            <h2 class="advert-title">
              Turn your visitors into profitable business events
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis scelerisque aliquet
              vel libero
            </p>
          </div>
        </div>
        <div class="get-action">
          <h2>Tell us what you love to see</h2>
          <p>We’ll find event recommendations just for you</p>
          <button class="outline-btn outline-white">Get Started</button>
        </div>
      </div>
    </div>
  </main>
      <!-- footer -->
    <Footer />
  </div>
</template>


<script>

</script>

<style scoped>
/* utilities */
.big-text {
  font-size: 50px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: var(--primary-text-clr);
}
/* ends of utility */

.center {
  text-align: center;
}

.navbar {
  top: 0;
}

main {
  width: 100vw;
  padding: 0 100px;
}

.hero {
  margin-top: 103px;
}

@media (max-width: 750px) {
  main {
    padding: 0 50px;
  }
}

@media (max-width: 500px) {
  main {
    padding: 0 20px;
  }
}

a {
  text-decoration: none;
  color: var(--primary-text-clr);
}

a:hover {
  color: var(--purple-color);
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 93px 0;
  gap: 50px;
}

.hero h1 {
  max-width: 566.7px;
  font-family: "Inter";
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 56px;
  text-align: center;
  color: var(--primary-text-clr);
}

.search-event {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 16.5px;
  gap: 6px;
  max-width: 398px;
  width: 100%;
  height: 55px;
  background: #f6f6f6;
  border-radius: 200px;
}

.search-event:focus {
  outline: none;
}

.search-event input {
  border: none;
  background-color: transparent;
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
}

.search-event input::placeholder {
  color: rgba(60, 60, 67, 0.6);
}

.search-event button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.events {
  padding: 30px 0px;
}

.filter-by-location {
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: -0.408px;
  color: #000000;
  display: flex;
  place-items: center;
  gap: 5px;
}

.filter-by-location span {
  cursor: pointer;
}

.filter-by-location .location {
  color: var(--purple-color);
  font-weight: 700;
}

.filter-by-location span:last-child {
  margin-top: -10px;
}

ul.event-tag-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 37px 0;
  justify-content: space-between;
  max-width: 753px;
  width: 100%;
}

.tags {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #0f0e0e;
}

.tags.present {
  font-weight: 700;
}

.event-by {
  padding: 30px 0;
}

.event-by h2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 30px;
}

.event-cards {
  width: 100%;
  gap: 40px;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.category {
  gap: 22px;
}

.category-card {
  position: relative;
}

.category-card img {
  width: 135px;
  height: 72px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.category-title {
  width: 135px;
  height: 72px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    179.66deg,
    rgba(0, 0, 0, 0) 61.45%,
    rgba(0, 0, 0, 0.8) 123.7%
  );
  border-radius: 10px;
  padding: 8.5px 10px;
  display: flex;
  align-items: flex-end;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--white-color);
}

.promote {
  display: flex;
  color: var(--white-color);
  gap: 20px;
  flex-wrap: wrap;
}

.product-advert {
  flex: 1;
  height: 322px;
  background-image: url("@/assets/images/sign-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}

.advert-text {
  background-image: url("@/assets/images/Noise-Animation.png");
  width: 100%;
  height: 100%;
  display: flex;
  padding: 35px;
  justify-content: flex-end;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
}

.advert-title {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  width: 397px;
}

.advert-text p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  width: 312px;
}

.get-action {
  width: 348px;
  height: 322px;
  background: linear-gradient(129.41deg, #8150f7 1.68%, #5123bf 106.21%);
  border-radius: 10px;
  padding: 43px 27px 69px;
}

.get-action h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 11px;
}

.get-action p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 30px;
}

.get-action button {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.408px;
  padding: 5px 10px;
  gap: 10px;
  width: 118px;
  height: 32px;
  border: 1px solid #ffffff;
  border-radius: 4px;
}

.dt-none {
  display: none;
}

/* media query start */
@media (max-width: 750px) {
  .hero h1 {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
  }

  .search-event {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.408px;
  }

  .filter-by-location {
    padding-left: 22px;
  }

  .dt-none {
    display: block;
  }

  ul.event-tag-list {
    padding: 20px 22px;
  }

  .mb-none {
    display: none;
  }

  .event-by {
    padding-left: 5px;
    padding-right: 5px;
  }

}

@media (max-width: 600px) {
 

  .category-card img {
    width: 108px;
    height: 53px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }

  .category-title {
    width: 108px;
    height: 53px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: var(--white-color);
  }
}
</style>
