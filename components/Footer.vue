<template>
  <footer>
    <div class="company-and-links">
      <div class="company-details">
        <div class="logo">
          <img src="../assets/icons/logo.svg" alt="logo" />
          <h1>Evently</h1>
        </div>
        <div class="description">
          Design amazing digital experiences that create more happy in the
          world.
        </div>
      </div>

      <div class="web-links">
        <div class="link-group">
          <h3>Company</h3>
          <ul class="link-list">
            <li class="links">
              <a href="#about">About Us</a>
            </li>
            <li class="links">
              <a href="#career">Careers</a>
            </li>
            <li class="links">
              <a href="#press">Press</a>
            </li>
            <li class="links">
              <a href="#news">News</a>
            </li>
          </ul>
        </div>

        <div class="link-group">
          <h3>Resources</h3>
          <ul class="link-list">
            <li class="links">
              <a href="#blog">Blog</a>
            </li>
            <li class="links">
              <a href="#career">Newsletter</a>
            </li>
            <li class="links">
              <a href="#press">Events</a>
            </li>
            <li class="links">
              <a href="#news">Help centre</a>
            </li>
          </ul>
        </div>

        <div class="link-group">
          <h3>Socials</h3>
          <ul class="link-list">
            <li class="links">
              <a href="#about">Twitter</a>
            </li>
            <li class="links">
              <a href="#career">LinkedIn</a>
            </li>
            <li class="links">
              <a href="#press">Facebook</a>
            </li>
          </ul>
        </div>

        <div class="link-group">
          <h3>Legal</h3>
          <ul class="link-list">
            <li class="links">
              <a href="#about">Terms</a>
            </li>
            <li class="links">
              <a href="#career">Policy</a>
            </li>
            <li class="links">
              <a href="#press">Cookies</a>
            </li>
            <li class="links">
              <a href="#news">Licenses</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="copyright">?? 2023 Untitled UI. All rights reserved.</div>
      <div class="social-icons">
        <a href="#twitter"
          ><img src="../assets/icons/Vectortwitter.svg" alt=""
        /></a>
        <a href="#linkedin"
          ><img src="../assets/icons/Vectorlinkedin.svg" alt=""
        /></a>
        <a href="#facebook"
          ><img src="../assets/icons/Vectorfacebook.png" alt=""
        /></a>
        <a href="#webpage"
          ><img src="../assets/icons/Vectorwebpage.svg" alt=""
        /></a>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
a {
  text-decoration: none;
  color: var(--primary-text-clr);
}

a:hover {
  color: var(--purple-color);
}

footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 86px;
  padding: 200px 135px 47.5px;

}

.company-and-links {
  display: flex;
  width: 100%;
  gap: 64px;
  flex-direction: row;
  justify-content: space-between;
  
}

.company-details {
  width: 320px;
}

.logo {
  margin-bottom: 32px;
}

.description {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #151515;
}

.dt-none {
  display: none;
}

.web-links {
  display: flex;
  flex-wrap: wrap;
  max-width: 616px;
  width: 100%;
  gap: 40px;
  justify-content: space-between;
}

.link-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px 0 0;
  gap: 16px;
}

.link-group h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #151515;
}

.link-list {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex-direction: column;
  list-style-type: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #151515;
}

.foot {
  display: flex;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.copyright {
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #98a2b3;
}

.social-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
}

.social-icons a img {
  width: 24px;
  height: 24px;
}

@media (max-width: 800px) {

  footer {
    padding: 150px 5% 50px;
  }
  .company-and-links {
    flex-direction: column;
  }
  .foot {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
