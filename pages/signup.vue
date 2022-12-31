<template>
    <main class="signup-container flex">
        <section class="pic-side flex">
            <div class="overlay"></div>
            <div class="header">
                <h2 class="header-title">Evently</h2>
            </div>
            <div class="signup-main">
                <h2 class="header-title mobile">Evently</h2>
                <div class="signup-header">
                    <h2 class="title">Sign Up</h2>
                    <p class="subtitle">
                        Create an account and start creating events today
                    </p>
                </div>
                <div class="signup-footer">
                    <div class="signup-button">
                        <button class="signup-btn flex">
                            <img src="@/assets/icons/google-icon.svg" alt="Google" />
                            <p>Google</p>
                        </button>
                    </div>
                    <p class="text">
                        Already have an Account?
                        <NuxtLink to="login">Sign in</NuxtLink>
                    </p>
                </div>
            </div>
        </section>
        <section class="content-side">

        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    font-family: "Inter", sans-serif;
    font-style: normal;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* sign up */
.signup-container {
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
}

.pic-side {
    background: url(./assets/images/sign-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    flex-direction: column;
    position: relative;
    z-index: -1;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
}

.header {
    position: relative;
    z-index: 1;
}

.header-title {
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 100px;
    color: white
}

.signup-main {
    background: white;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 24px;
    width: 300px;
}

.signup-main .mobile {
    display: none;
}

.signup-header {
    margin-bottom: 24px;
}

.signup-header .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #191d23;
    margin-bottom: 8px;
}

.signup-header .subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #64748b;
}

.signup-btn {
    gap: 8px;
    width: 100%;
    height: 32px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #191d23;
    border: 1px solid #d0d5dd;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
}

.signup-btn img {
    width: 16px;
    height: 16px;
}

.signup-footer .text {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #191d23;
    margin-top: 32px;
}

.signup-footer .text a {
    text-decoration: none;
    color: #191d23;
    font-weight: bold;
}

.content-side {
    display: none;
}

@media (max-width: 560px) {
    .header {
        display: none;
    }

    .overlay {
        display: none;
    }

    .header-title.mobile {
        display: block;
        text-align: left;
        margin-bottom: 24px;
        color: #151515;
    }

    .signup-main {
        position: absolute;
        width: 380px;
        top: 55vh;
        z-index: 9;
    }

    .pic-side {
        background: url(./assets/images/sign-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 60vh;
        position: relative;
    }

    .content-side {
        display: block;
        /* width: 100%; */
        height: 40vh;
        background: white;
    }
}
</style>