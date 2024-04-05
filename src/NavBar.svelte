<script>
    import { Button } from "sveltestrap";

    export let type;
    export let lang;
    let language = lang;
    $: language = lang; // auto update when lang value change
    function goToHome() {
        window.location.href = "/";
    }
</script>

{#if type === "globalTop"}
    <nav class="navbar">
        <button class="nav-button" on:click={goToHome}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                />
            </svg>
        </button>
        <div class="flexible-space"></div>
        <Button color="light">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-translate"
                viewBox="0 0 16 16"
            >
                <path
                    d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"
                />
                <path
                    d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"
                />
            </svg>
            {language}
        </Button>
    </nav>
{:else if (type = "mapTop")}
    <nav class="navbar_map">
        <button
            class="nav-button"
            on:click={goToHome}
            style="margin-left: 2vh;"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                />
            </svg>
        </button>
        <div class="flexible-space"></div>
        <Button disabled color="light" caret style="margin-right: 2vh;">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-translate"
                viewBox="0 0 16 16"
            >
                <path
                    d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"
                />
                <path
                    d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"
                />
            </svg>
            {language}
        </Button>
    </nav>
{/if}

<!-- Styles CSS -->
<style>
    .navbar_map {
        margin-bottom: 2vh;
        width: 90vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--secondary);
        color: white;
        padding: 1.5vh;
        border-radius: 2vh;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--secondary);
        color: white;
        padding: 1.5vh;
    }

    .nav-button {
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
    }

    .flexible-space {
        flex: 1;
    }
</style>
