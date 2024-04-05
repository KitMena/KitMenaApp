<script>
    import { Alert, Button, Card, Icon } from "sveltestrap";
    import { ListGroup, ListGroupItem } from "sveltestrap";
    import { createEventDispatcher } from "svelte";
    import Help from "./Help.svelte";
    import Map from "./Map.svelte";

    // maps components
    import ArmeeDuSalutMap from "./maps/ArméeeDuSalutMap.svelte";
    import CroixRougeMap from "./maps/CroixRougeMap.svelte";
    import DouchefluxMap from "./maps/DouchefluxMap.svelte";
    import FedasilMap from "./maps/FedasilMap.svelte";
    import HubHummanitaireMap from "./maps/HubHummanitaire.svelte";
    import JamaisSansToitMap from "./maps/JamaisSansToitMap.svelte";
    import LaFontaineMap from "./maps/LaFontaineMap.svelte";
    import HubHummanitaire from "./maps/HubHummanitaire.svelte";
    import ServiceDesTutellesMap from "./maps/ServiceDesTutellesMap.svelte";
    import NavBar from "./NavBar.svelte";

    export let dataArray;
    export let lang;
    let switchToHelp = false;
    let switchToMap = false;
    const dispatch = createEventDispatcher();
    let currentMap = "all";

    function scrollToElement() {
        const element = document.getElementById("mapPlace");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    function displayMapManager() {
        switchToMap = true;
    }

    function selectLang(newLang) {
        lang = newLang;
        dispatch("langChanged", lang);
    }

    function textSelectLang(target, langCode) {
        const languageData = dataArray.find(
            (item) => item.lang === langCode,
        )?.langData;

        if (languageData && target in languageData) {
            //console.log(langCode + " | " + target);
            return languageData[target];
        } else {
            console.log(
                "Traduction non trouvée pour la cible " +
                    target +
                    " dans la langue " +
                    langCode,
            );
            return null;
        }
    }
</script>

{#if switchToMap === false && switchToHelp === false}
    <NavBar {lang} type="globalTop" />
    <main class="box" align="center">
        <ListGroup>
            <ListGroupItem
                style="background-color: transparent; border-style: none;"
            >
                <Button
                    color="success"
                    style="font-weight: bold;"
                    on:click={() => (switchToHelp = true)}
                >
                    {textSelectLang("t1", lang)}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-flag"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"
                        />
                    </svg>
                </Button>
            </ListGroupItem>
            <ListGroupItem
                style="background-color: transparent; border-style: none;"
            >
                <Button
                    color="primary"
                    style="font-weight: bold;"
                    on:click={displayMapManager}
                >
                    &nbsp; {textSelectLang("t2", lang)}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
                        />
                        <path
                            d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                        />
                    </svg>
                    &nbsp;
                </Button>
            </ListGroupItem>
        </ListGroup>
    </main>
{:else if switchToHelp === true}
    <NavBar {lang} type="globalTop" />
    <Help {lang} {dataArray} />
{:else}
    <NavBar {lang} type="mapTop" />
    <main class="box_map">
        <div class="card">
            <div id="mapPlace" align="center">
                <!-- Default map -->
                {#if currentMap == "all"}
                    <Map status="default" />
                {:else if currentMap == "ServiceDesTutelles"}
                    <NavBar {lang} type="mapTop" />
                    <ServiceDesTutellesMap status="default" />
                {:else if currentMap == "Fedasil"}
                    <NavBar {lang} type="mapTop" />
                    <FedasilMap status="default" />
                {:else if currentMap == "Doucheflux"}
                    <NavBar {lang} type="mapTop" />
                    <DouchefluxMap status="default" />
                {:else if currentMap == "JamaisSansToit"}
                    <NavBar {lang} type="mapTop" />
                    <JamaisSansToitMap status="default" />
                {:else if currentMap == "HubHummanitaire"}
                    <NavBar {lang} type="mapTop" />
                    <HubHummanitaire status="default" />
                {:else if currentMap == "CroixRouge"}
                    <NavBar {lang} type="mapTop" />
                    <CroixRougeMap status="default" />
                {:else if currentMap == "LaFontaine"}
                    <NavBar {lang} type="mapTop" />
                    <LaFontaineMap status="default" />
                {:else if currentMap == "ArméeDuSalut"}
                    <NavBar {lang} type="mapTop" />
                    <ArmeeDuSalutMap status="default" />
                {/if}
            </div>
            <!-- L2 -->
            <h3 style="font-weight: bold; margin-bottom: 4vh; margin-top: 6vh;">
                {textSelectLang("t3", lang)}
            </h3>
            <Card color="light" style="padding: 2vh; margin-bottom: 2vh;">
                <p>
                    {textSelectLang("t4", lang)}<br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person-raised-hand"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"
                        />
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "ServiceDesTutelles"), scrollToElement()
                    )}
                >
                    Service des Tutelles
                </Button>
                <br />
            </Card>
            <Card color="light" style="padding: 2vh; margin-bottom: 2vh;">
                <p>
                    {textSelectLang("t5", lang)}
                    <br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-book-half"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"
                        />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "Fedasil"), scrollToElement()
                    )}>FEDASIL</Button
                >
                <br />
            </Card>
            <Card color="light" style="padding: 2vh; margin-bottom: 2vh;">
                <p>
                    {textSelectLang("t6", lang)}<br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-scissors"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
                        />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "Doucheflux"), scrollToElement()
                    )}>Doucheflux</Button
                >
                <br />
            </Card>
            <Card color="light" style="padding: 2vh; margin-bottom: 2vh;">
                <p>
                    {textSelectLang("t1", lang)}<br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-ear"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8.5 1A4.5 4.5 0 0 0 4 5.5v7.047a2.453 2.453 0 0 0 4.75.861l.512-1.363a5.6 5.6 0 0 1 .816-1.46l2.008-2.581A4.34 4.34 0 0 0 8.66 1zM3 5.5A5.5 5.5 0 0 1 8.5 0h.16a5.34 5.34 0 0 1 4.215 8.618l-2.008 2.581a4.6 4.6 0 0 0-.67 1.197l-.51 1.363A3.453 3.453 0 0 1 3 12.547zM8.5 4A1.5 1.5 0 0 0 7 5.5v2.695q.168-.09.332-.192c.327-.208.577-.44.72-.727a.5.5 0 1 1 .895.448c-.256.513-.673.865-1.079 1.123A9 9 0 0 1 7 9.313V11.5a.5.5 0 0 1-1 0v-6a2.5 2.5 0 0 1 5 0V6a.5.5 0 0 1-1 0v-.5A1.5 1.5 0 0 0 8.5 4"
                        />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "JamaisSansToit"), scrollToElement()
                    )}
                >
                    Jamais sans toit
                </Button>
                <br />
            </Card>
            <Card color="light" style="padding: 2vh; margin-bottom: 2vh;">
                <p>
                    {textSelectLang("t8", lang)}<br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-backpack"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"
                        />
                        <path
                            d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"
                        />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "HubHummanitaire"), scrollToElement()
                    )}
                >
                    Hub humanitaire
                </Button>
                <br />
            </Card>
            <Card color="light" style="padding: 2vh; margin-bottom: 2vh;">
                <p>
                    {textSelectLang("t9", lang)}<br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-bandaid"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242M12.293 8 8.027 3.734 3.738 8.031 8 12.293zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492z"
                        />
                        <path
                            d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707"
                        />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "CroixRouge"), scrollToElement()
                    )}>Croix rouge</Button
                >
                <br />
            </Card>
            <Card color="light" style="padding: 2vh; margin-bottom: 2vh;">
                <p>
                    {textSelectLang("t10", lang)}<br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-droplet-half"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"
                        />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "LaFontaine"), scrollToElement()
                    )}>La fontaine</Button
                >
                <br />
            </Card>
            <Card color="light" style="padding: 2vh;">
                <p>
                    {textSelectLang("t11", lang)}<br />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-cup-hot"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"
                        />
                        <path
                            d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"
                        />
                    </svg>
                </p>
                <Button
                    color="primary"
                    block
                    style="font-weight: bold;"
                    on:click={() => (
                        (currentMap = "ArméeDuSalut"), scrollToElement()
                    )}
                >
                    Armée du salut
                </Button>
                <br />
            </Card>
        </div>
    </main>
{/if}

<style>
    /* before selection */
    .box {
        height: 100vh;
        margin-top: 0vh;
        margin-bottom: 0vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* after selection (map)*/
    .box_map {
        overflow-y: hidden;
        height: 100vh;
        margin-top: 0vh;
        margin-bottom: 0vh;
        justify-content: center;
        text-align: center;
    }

    .card {
        padding: 4vh;
        padding-top: 0.2vh;
        width: auto;
        height: 200vh;
        overflow-y: scroll;
    }

    /* scroll bar 
    .card::-webkit-scrollbar {
        width: 1vw;

        border-top-right-radius: 0.5vh;
        border-bottom-right-radius: 0.5vh;
    }

    .card::-webkit-scrollbar-track {
        background-color: inherit;
    }

    .card::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 2vh;
    }

    .card::-webkit-scrollbar-thumb:hover {
        background-color: var(--primary);
        border-radius: 2vh;
    }
    */
</style>
