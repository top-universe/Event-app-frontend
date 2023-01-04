<template>
  <div>
    <!-- header component -->
    <Header />

    <!-- Event details -->
    <main class="details-box">
      <!-- Hero section -->
      <section class="image-section flex align-items-center justify-center">
        <div class="overlay"></div>
        <div class="content">
          <h1 class="content-title">Daily Grand Sprint</h1>
          <p class="content-subtitle">
            Lorem ipsum dolor sit amet consectetur. Mattis scelerisque aliquet
            vel libero
          </p>
        </div>
      </section>

      <!-- Map section -->
      <section class="map-section">
        <!-- Event Location -->
        <div
          class="gallery-form flex justify-space-between align-items-center wrap"
        >
          <div class="gallery">
            <div class="gallery-img">
              <h3>Event Details</h3>
              <div class="gallery-img-box flex">
                <div class="img-box">
                  <img src="../assets/images/pool.png" alt="Pool" />
                </div>
                <div class="img-box">
                  <img
                    src="../assets/images/cocktail.png"
                    alt="cocktail Party"
                  />
                </div>
                <div class="img-box">
                  <img src="../assets/images/pine.png" alt="Beach Party" />
                </div>
                <div class="img-box">
                  <img src="../assets/images/wine.png" alt="Party" />
                </div>
                <div class="img-box">
                  <img src="../assets/images/outing.png" alt="Outing" />
                </div>
              </div>
            </div>
            <div class="gallery-details flex align-items-center wrap">
              <p class="italics para">By Amaka</p>
              <div class="rate">
                <p class="para">
                  <img src="../assets/icons/star.svg" alt="Rating" /> 4.25
                  reviews
                </p>
              </div>
              <div class="gallery-follow flex align-items-center">
                <p class="para">1.4k followers</p>
                <button class="follow para">Follow</button>
              </div>
            </div>
            <div class="gallery-location">
              <h3>When and where</h3>
              <div class="date-location flex justify-space-between wrap">
                <div class="date flex mb-20">
                  <img src="../assets/icons/calendar.svg" alt="calendar" />
                  <div class="location-content">
                    <h4 class="location-heading">Date, Time & Duration</h4>
                    <p>Wed, Feb 15, 2023, 9:00 AM WAT, 7hrs</p>
                  </div>
                </div>
                <div class="location flex mb-20">
                  <img src="../assets/icons/location.svg" alt="Location" />
                  <div class="location-content">
                    <h4 class="location-heading">Location</h4>
                    <p>
                      Landmark centre water corporation <br />
                      Drive #2 &4 Annex m La !06104
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-box">
            <form action="">
              <div class="form-header">
                <h3>Register for event</h3>
              </div>
              <div class="form-control">
                <label for="" class="form-label">Full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="input-style"
                  placeholder="Name of event"
                />
              </div>
              <div class="form-control">
                <label for="" class="form-label">Date</label>
                <input
                  type="date"
                  name=""
                  id=""
                  class="input-style"
                  placeholder="Enter a date"
                />
              </div>
              <div class="form-control flex justify-space-between">
                <input
                  type="time"
                  name=""
                  id=""
                  class="input-style input-time"
                />
                <input
                  type="time"
                  name=""
                  id=""
                  class="input-style input-time"
                />
              </div>
              <div class="button-box">
                <button class="cta-btn">Submit</button>
              </div>
            </form>
          </div>
          <!-- Event Map -->
          <div class="map">
            <picture>
              <source
                media="(max-width:799px)"
                srcset="../assets/images/map-mobile.png"
              />
              <source
                media="(min-width:800px)"
                srcset="../assets/images/map.png"
              />
              <img src="../assets/images/map-mobile.png" alt="" />
            </picture>

            <div class="direction flex align-items-center">
              <h4>How to get there?</h4>
              <div class="map-way">
                <img src="../assets/icons/car.svg" alt="Car Icon" />
                <img src="../assets/icons/foot.svg" alt="man Icon" />
                <img src="../assets/icons/bicycle.svg" alt="Bicycle Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Text section -->
      <section class="text-section">
        <!-- About the Event -->
        <div class="about">
          <h2 class="about-title">About this event</h2>
          <p class="about-content">
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque non
            mauris quis viverra tortor donec in nascetur. Duis amet ac
            vestibulum neque eget a porttitor sollicitudin. Id sodales iaculis
            mauris est. Amet aliquet at non purus mauris feugiat. Sed proin id
            urna amet velit massa parturient. In vitae nibh lacus congue
            pretium. Placerat tristique malesuada faucibus egestas quisque sit
            enim id nulla. Amet in cursus quis auctor dolor vulputate fringilla
            facilisis dictum. Phasellus elementum diam quisque blandit. <br />
            <br />
            Sapien sed amet condimentum at. Nulla nibh egestas adipiscing
            ultricies viverra dignissim sit. Ultrices diam sed convallis gravida
            egestas enim vitae id velit. Quisque bibendum eget malesuada
            vulputate pulvinar tincidunt felis mauris neque. Faucibus amet
            tristique malesuada cum nulla tempor malesuada a. Viverra risus in
            euismod tempor convallis sollicitudin malesuada enim nibh. Proin
            suscipit risus malesuada pretium id arcu. Massa id consectetur
            fermentum nam sapien. Quis tortor feugiat magna urna in tristique
            hac facilisis viverra. Commodo turpis adipiscing elit nunc lacus.
            Congue scelerisque sem purus venenatis suspendisse.
          </p>
        </div>

        <!-- Download Event -->
        <div class="download flex">
          <a href="#" class="flex">
            <p>Download card</p>
            <img src="../assets/icons/Download-icon.svg" alt="Download Icon" />
          </a>
          <a href="#" class="flex">
            <p>Share event</p>
            <img src="../assets/icons/Share.svg" alt="Share Icon" />
          </a>
        </div>

        <!-- Event Host/guest -->
        <div class="contact">
          <div class="host">
            <h3 class="host-title">Hosts & Managers</h3>
            <p class="host-subtitle">
              Add hosts, special guests, and event managers.
            </p>
          </div>
          <div class="hosts flex">
            <div class="hosts-box flex">
              <img src="../assets/images/creator.png" alt="Event Creator" />
              <div class="creator ms-10">
                <h4>Nwamaka Nwosu</h4>
                <a href="#">Creator</a>
              </div>
            </div>
            <div class="hosts-box flex ms-10">
              <img src="../assets/images/guest.png" alt="Event Guest" />
              <div class="guest ms-10">
                <h4>Marvelous Akporo...</h4>
                <a href="#">Guest</a>
              </div>
            </div>
          </div>
          <div class="more flex">
            <p>Learn more about adding hosts / managers</p>
            <a href="#" class="ms-10"
              ><img src="../assets/icons/Share-link.svg" alt="Share Link"
            /></a>
          </div>
          <div class="social">
            <h4>Share with Friends</h4>
            <div class="socials flex">
              <img src="../assets/icons/twitter.svg" alt="Twitter Icon" />
              <img src="../assets/icons/facebook.svg" alt="Facebook Icon" />
              <img src="../assets/icons/linkedin.svg" alt="Linkedin Icon" />
              <img src="../assets/icons/dribbble.svg" alt="Dribbble Icon" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    a {
  text-decoration: none;
}

.flex {
  display: flex;
}
.wrap {
  flex-wrap: wrap;
}
.align-items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-space-between {
  justify-content: space-between;
}
.ms-10 {
  margin-left: 10px;
}

/* main */
/* Hero section starts */
.details-box {
  padding: 76px 5% 0px;
}

.image-section {
  background: url(../assets/images/bg-details.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  position: relative;
  height: 306px;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
}
.content {
  text-align: center;
  color: var(--white-clr);
  position: relative;
  z-index: 1;
}
.content-title {
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  margin-bottom: 20px;
}
.content-subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}

/* Event Location */
.gallery {
  flex-basis: 55%;
}
.map-section {
  margin-top: 47px;
}

.gallery-img > h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--text-2-color);
  margin-bottom: 25px;
}
.gallery-img-box {
  gap: 24px;
}
.para {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: var(--text-2-color);
}
.gallery-details .italics {
  font-style: italic;
}
.gallery .follow {
  padding: 3px 15px;
  width: 67px;
  height: 23px;
  background: var(--white-clr);
  border: 0.4px solid #000000;
  border-radius: 100px;
}
.gallery-details {
  gap: 30px;
  margin-top: 58px;
}
.gallery-follow {
  gap: 10px;
}

/* Gallery Location */
.gallery-location {
  margin-top: 53px;
  color: var(--text-2-color);
}
.gallery-location > h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
}
.gallery-location img {
  align-self: flex-start;
  margin-right: 13px;
}
.gallery-location .location-heading {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;
}
.gallery-location p {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
}
.date-location {
  margin-top: 20px;
}

/* Form */
.form-box {
  flex-basis: 35%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.form-header h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--text-2-color);
  margin-bottom: 19px;
}
.form-label {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--text-3-color);
  margin-bottom: 5px;
}
.form-box .input-style {
  height: 40px;
  border: 1px solid var(--border-2-color);
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #64748b;
  width: 100%;
  padding-left: 8px;
  margin: 5px 0 19px;
}
.input-time {
  width: 47% !important;
}
.cta-btn {
  height: 44px;
  background: var(--text-2-color);
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--white-clr);
  width: 100%;
  cursor: pointer;
  padding: 12.5px 0;
}
/* map */
.map {
  margin-top: 50px;
}
.direction {
  margin: 52.4px 0;
}
.direction > h4 {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--text-2-color);
  margin-right: 26px;
}
.map-way img {
  margin-right: 30px;
}
.map picture {
  width: 100%;
}

/* About */
.about {
  color: var(--black-clr);
}
.about-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 30px;
}
.about-content {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
}

/* Download */
.download {
  margin: 50px 0;
}
.download a {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: var(--text-4-color);
  height: 27px;
  background: #f5f5f5;
  border-radius: 100px;
  text-decoration: none;
  padding: 5px 10px;
  gap: 5px;
}
.download a:first-child {
  margin-right: 10px;
}
.host-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--text-2-color);
  margin-bottom: 10px;
}
.host-subtitle {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: var(--text-4-color);
  margin-bottom: 16px;
}
.hosts-box {
  padding: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.hosts h4 {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: var(--text-4-color);
}
.hosts a {
  padding: 3px 5px;
  height: 18px;
  background: rgba(148, 255, 148, 0.1);
  border-radius: 100px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #5eb35e;
}
.more {
  margin: 16px 0;
}
.more p {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: rgba(83, 83, 83, 0.5);
}
.social > h4 {
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: var(--black-clr);
  margin-bottom: 20px;
}
.socials img {
  margin-right: 24px;
}
@media (max-width: 769px) {
  .form-box {
    flex: 1;
  }
  .gallery-img-box {
    gap: 17px;
  }
  .gallery-img-box img {
    width: 52.15px;
    height: 52.15px;
  }
  .gallery-img-box .img-box {
    padding: 3.6px;
  }
  .date {
    margin-bottom: 20px;
  }
  .gallery-details {
    gap: 23px;
    margin-top: 23.6px;
  }
}

@media (max-width: 560px) {
  .details-box {
    padding: 25px 0;
  }
  .map-section {
    padding: 0 25px;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
  }
  .text-section {
    padding: 0 25px;
  }
  .image-section {
    background: url(./assets/images/sign-bg.png);
    border-radius: 0px;
    height: 361px;
  }
  .content-title {
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 10px;
  }
  .content-subtitle {
    font-size: 14px;
    line-height: 20px;
    width: 70%;
    margin: 0 auto;
  }
  .gallery-form {
    flex-wrap: wrap;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .gallery-follow {
    width: 100%;
  }
  .gallery-img > h3 {
    margin-bottom: 23px;
  }
  .form-box {
    flex-basis: 100%;
    padding: 0px;
    border: none;
    order: 3;
    margin-bottom: 63px;
  }
}

</style>
