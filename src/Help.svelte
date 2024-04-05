<script>
    import { onMount } from "svelte";
    import {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardTitle,
    } from "sveltestrap";

    export let lang;
    export let dataArray;

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

    let cards = [
        {
            title: textSelectLang("title", lang) + " 1",
            content: textSelectLang("q1", lang),
        },
        {
            title: textSelectLang("title", lang) + " 2",
            content: textSelectLang("q2", lang),
        },
        {
            title: textSelectLang("title", lang) + " 3",
            content: textSelectLang("q3", lang),
        },
        {
            title: textSelectLang("title", lang) + " 4",
            content: textSelectLang("q4", lang),
        },
        {
            title: textSelectLang("title", lang) + " 5",
            content: textSelectLang("q5", lang),
        },
        {
            title: textSelectLang("contact", lang),
            contactTxt: textSelectLang("contactTxt", lang),
            coordTel: textSelectLang("coordTel", lang),
            coordMail: textSelectLang("coordMail", lang),
        },
    ];

    let currentCardIndex = 0;

    const nextCard = () => {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex += 1;
        }
    };

    const previousCard = () => {
        if (currentCardIndex > 0) {
            currentCardIndex -= 1;
        }
    };

    onMount(() => {});
</script>

<main>
    {#if cards.length > 0}
        <Card style="border-radius: 2vh; height: 80vh;">
            <CardHeader>
                <CardTitle style="margin-top: 1vh;"
                    ><h3>{cards[currentCardIndex].title}</h3></CardTitle
                >
            </CardHeader>
            <CardBody
                style="display: flex; flex-direction: column; align-items: center; justify-content: center;"
            >
                {#if currentCardIndex == 1}
                    <div style="margin-bottom: 1rem;">
                        <h4>{cards[currentCardIndex].content}</h4>
                    </div>
                    <div class="btn_call">
                        <button
                            style="border: none; border-radius: 2vh;"
                            alt="+3225426511"
                        >
                            <a href="tel:+3225426511">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    fill="currentColor"
                                    class="bi bi-telephone"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                                    />
                                </svg>
                            </a>
                        </button>
                    </div>
                {:else if currentCardIndex == 5}
                    <div class="contact">
                        <h4>{cards[currentCardIndex].contactTxt} :</h4>
                        <br />
                        <div class="contact-entry">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                />
                            </svg>&nbsp;&nbsp;
                            <b>Rémi Jegat</b>
                        </div>
                        <br />
                        <div class="contact-entry">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                />
                            </svg>&nbsp;&nbsp;
                            <b>Lisa Saidoun-Helal</b>
                        </div>
                        <br />
                        <div class="contact-entry">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                />
                            </svg>&nbsp;&nbsp;
                            <b>Andy Malungu</b>
                        </div>
                    </div>
                    <br />

                    <h4>{cards[currentCardIndex].coordMail}</h4>
                    <h4>{cards[currentCardIndex].coordTel}</h4>
                {:else}
                    <div style="margin-bottom: 1rem;">
                        <h4>{cards[currentCardIndex].content}</h4>
                    </div>
                {/if}
            </CardBody>

            <CardFooter>
                {#if currentCardIndex > 0}
                    <Button on:click={previousCard} color="primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            class="bi bi-arrow-left-circle"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                            />
                        </svg>
                    </Button>
                {/if}
                {#if currentCardIndex < cards.length - 1}
                    <Button on:click={nextCard} color="primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            class="bi bi-arrow-right-circle"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                            />
                        </svg>
                    </Button>
                {/if}
            </CardFooter>
        </Card>
    {:else}
        <p>Error (404)</p>
    {/if}
</main>

<style>
    main {
        padding: 2vh;
        height: 91.3vh;
    }

    .btn_call:hover {
        background-color: white;
        border: solid 0.2vh #40b0ff;
        border-radius: 2vh;
    }

    .contact-entry {
        display: inline-flex;
        align-items: center;
        margin-right: 10px;
    }
</style>
