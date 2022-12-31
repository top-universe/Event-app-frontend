<template>
    <main>
        <div>
            <a target="_blank" href="https://www.figma.com/file/tkGj15F3w8BkMu76BV951C/Evently?t=n3dYqbtRWEqaPfoj-6">
                <strong>Figma Link</strong>
            </a>
        </div>

        <div class="grid">
            <NuxtLink to="landing">
                <div>
                    <p>Landing</p>
                </div>
            </NuxtLink>

            <NuxtLink to="login">
                <div>
                    <p>Login</p>
                </div>
            </NuxtLink>

            <NuxtLink to="profile">
                <div>
                    <p>Profile</p>
                </div>
            </NuxtLink>
            
            <NuxtLink to="signup">
                <div>
                    <p>Signup</p>
                </div>
            </NuxtLink>
            
            <NuxtLink to="interest">
                <div>
                    <p>Select Interest</p>
                </div>
            </NuxtLink>
        </div>
    </main>
</template>

<style scoped>
main {
    display: grid;
    place-items: center;
    height: 100vh;
}

.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.grid > * {
    all: unset;
    height: 250px;
    width: 250px;
    border: 1px solid black;
    flex-basis: 300px;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-family: "Inter", sans-serif;
}
</style>