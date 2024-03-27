<script>
	import { onMount } from "svelte";
	import { Alert, Button } from "sveltestrap";
	import { createEventDispatcher } from "svelte";
	import Besoins from "../src/Besoins.svelte";

	let lang = "";
	let showText = true;
	let animatedText = "";

	const dispatch = createEventDispatcher();

	// Function to change language after 5 seconds
	setTimeout(() => {
		showText = false;
		lang = "none"; // Change to your default language
		dispatch("langChanged", lang);
	}, 4000);

	function selectLang(newLang) {
		lang = newLang;
		dispatch("langChanged", lang);
	}

	onMount(() => {
		// Function to animate text letter by letter
		const text = "Kit Mena";
		let index = 0;

		const animateText = () => {
			if (index < text.length) {
				animatedText += text.charAt(index);
				index++;
				setTimeout(animateText, 100); // Adjust the delay (in milliseconds) between letters
			}
		};
		animateText();
	});
</script>

<main class="global_box">
	{#if showText}
		<div class="container">
			<h3 class="logo"><b>{animatedText}</b></h3>
		</div>
	{:else if lang != "none"}
		<Besoins />
	{:else}
		<div class="container">
			<!-- Afficher les boutons de sélection de langue -->
			<div class="container">
				<!-- Afficher les boutons de sélection de langue -->
				<div class="container">
					<div class="row">
						<div class="col">
							<Button
								color="primary"
								on:click={() => selectLang("francais")}
								>Francais</Button
							>
						</div>
						<div class="col">
							<Button
								color="danger"
								on:click={() => selectLang("anglais")}
								>Anglais</Button
							>
						</div>
						<div class="col">
							<Button
								color="warning"
								on:click={() => selectLang("arabe")}
								>Arabe</Button
							>
						</div>
						<div class="col">
							<Button
								color="success"
								on:click={() => selectLang("lingala")}
								>Lingala</Button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>

<style>
	.global_box {
		animation: bg_anim 3s ease-in forwards;
	}
	@keyframes bg_anim {
		from {
			background-color: #f4f9fc;
		}
		60% {
			background-color: #82c5f5;
		}
		to {
			background-color: #82c5f5;
		}
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.logo {
		animation: logo_nim 4s ease-in forwards;
	}
	@keyframes logo_anim {
		0% {
			color: #82c5f5;
		}
		60% {
			color: #f4f9fc;
		}
		100% {
			color: #f4f9fc;
		}
	}
	h3 {
		color: white;
	}
</style>
