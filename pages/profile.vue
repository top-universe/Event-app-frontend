<template>
    <main>
        <div class="side-img"></div>

        <div class="profile-form">
            <h1>Let's get you started</h1>
            <p>
                You can reach us at anytime via
                <b>hi@evently.com</b>
            </p>
            <form action="#">
                <div class="form-input">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                </div>
                <div class="form-input">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="you@company.com" />
                </div>
                <div class="form-input">
                    <label for="phone">Phone number</label>
                    <input type="number" id="phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div class="form-input">
                    <label for="message">How can we help you</label>
                    <textarea name="message" id="message" cols="30" rows="10"
                        placeholder="Tell us little about the project"></textarea>
                </div>
                <div class="form-input-check">
                    <label for="policy">
                        <input type="checkbox" id="policy" />
                        you agreed to our <a href="#">privacy and policy</a>
                    </label>
                </div>
                <div class="form-input">
                    <button class="primary-btn">Get Started</button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main {
    display: grid;
    width: 100%;
    height: 100vh;
    align-items: flex-start;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}

.side-img {
    width: 100%;
    height: 100%;
    content: "";
    background: url("./assets/images/profile-image.png");
    background-position: center;
    background-size: cover;
}

.profile-form {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.profile-form h1 {
    font-family: "Inter";
    font-style: normal;
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 35px;
    line-height: 42px;
    letter-spacing: -0.02em;
    color: #101828;
}

.profile-form p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 48px;
    color: #667085;
}

p b {
    font-weight: 600;
    color: #101828;
}

form {
    gap: 24px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.form-input {
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 6px;
    flex-direction: column;
}

.form-input label,
label {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
}

.form-input input,
.form-input textarea {
    width: 100%;
    padding: 12px 16px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 4px;
}

.form-input button {
    width: 100%;
}

.form-input-check {
    display: flex;
    width: 100%;
    gap: 12px;
    color: #344054;
    align-items: flex-start;
}

.form-input-check a {
    text-decoration: underline;
    color: #344054;
}

@media screen and (max-width: 750px) {
    main {
        grid-template-columns: 1fr;
    }

    .side-img {
        display: none;
    }
}
</style>