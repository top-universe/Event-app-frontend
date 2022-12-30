<template>
    <main class="main-container">
      <section>
        <div class="btn-container">
          <button class="btn-skip">Skip</button>
        </div>

        <div class="header-section">
          <h2>Select Your Interests</h2>
          <p>Select at most five (5) items</p>
        </div>
        <div class="check-group-container">
          <label class="check-container container-one">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Sport</label>
          </label>
          <label class="check-container container-two">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Fitness</label>
          </label>
          <label class="check-container container-three">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Music</label>
          </label>
          <label class="check-container container-four">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Fashion</label>
          </label>
          <label class="check-container container-five">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Technology</label>
          </label>
          <label class="check-container container-six">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Food</label>
          </label>
          <label class="check-container container-seven">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Health</label>
          </label>
          <label class="check-container container-eight">
            <input type="checkbox" name="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Business</label>
          </label>
          <label class="check-container container-nine">
            <input type="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Art</label>
          </label>
          <label class="check-container container-ten">
            <input type="checkbox" id="" />
            <span class="checkmark"></span>
            <label>Spirituality</label>
          </label>
        </div>
        <button class="primary-btn submit">Done</button>
      </section>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
      .main-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* width: 100vw; */
  /* height: 100vh; */
  padding: 58px 132px;
  background: #ffffff;
}

.main-container > section {
  text-align: center;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 35px;
}

.btn-skip {
  color: #1aa8ef;
  font-size: 14px;
  font-weight: 500;
  width: 49px;
  height: 24px;
  background: #ecf8fe;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-section {
  margin-bottom: 40px;
}

.header-section > h2 {
  color: var(--primary-text-clr);
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 7px;
}

.header-section > p {
  color: var(--secondary-text-clr);
  font-size: 14px;
  font-weight: 400;
}

.check-group-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 33px;
  max-width: 1017px;
  justify-content: center;
}

.check-container {
  position: relative;
  display: flex;
  object-fit: cover;
  object-position: center;
  width: 177px;
  height: 217.46px;
  flex-direction: column;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.check-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.check-container > label {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  top: 150px;
  left: 20px;
  display: flex;
}

.checkmark {
  position: relative;
  display: flex;
  left: 140px;
  top: 15px;
  /* margin: 20px 0 0 auto; */
  height: 24px;
  width: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.checkmark::before {
  content: "";
  position: absolute;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin: auto;
  background: #ffffff;
}

.check-container:hover {
  opacity: 0.5;
}

.check-container input:checked ~ .checkmark::before {
  background: #1aa8ef;
}

.check-container input:checked ~ .checkmark {
  background: #ffffff;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.check-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.check-container input:checked ~ .checkmark:after {
  display: block;
}

.container-one {
  background-image: url("assets/images/sport.png");
}
.container-two {
  background-image: url("assets/images/fitness.png");
}
.container-three {
  background-image: url("assets/images/music.png");
}
.container-four {
  background-image: url("assets/images/fashion.png");
}
.container-five {
  background-image: url("assets/images/technology.png");
}
.container-six {
  background-image: url("assets/images/food.png");
}
.container-seven {
  background-image: url("assets/images/health.png");
}
.container-eight {
  background-image: url("assets/images/business.png");
}
.container-nine {
  background-image: url("assets/images/arts.png");
}
.container-ten {
  background-image: url("assets/images/spirituality.png");
}

.submit {
  width: 369px;
  margin-top: 40px;
}

@media screen and (max-width: 430px) {
  .main-container {
    padding: 48px 10px;
  }

  .check-group-container {
    gap: 20px;
  }

  .submit {
    width: 177px;
  }
}

</style>