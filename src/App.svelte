<script>
	import { onMount } from "svelte";
	import { Alert, Button } from "sveltestrap";
	import { createEventDispatcher } from "svelte";
	import Besoins from "../src/Besoins.svelte";

	let lang;
	let showText = true;
	let animatedText = "";

	const dispatch = createEventDispatcher();
	let dataArray = [];

	function initTraductionData() {
		dataArray = [
			{
				lang: "FR",
				langData: {
					t1: "Je viens d'arriver",
					t2: "Les lieux utiles",
					t3: "Lieux utiles",
					t4: "Je signale mon arrivée en Belgique",
					t5: "J'ai besoin d'aide administrative",
					t6: "J'ai besoin de me coiffer",
					t7: "J'ai besoin qu'on m'écoute",
					t8: "Je cherche des vêtements",
					t9: "J'ai besoin de me soigner",
					t10: "J'ai besoin de me doucher",
					t11: "J'ai besoin de manger",
					q1: "Quand je viens d'arriver en Belgique, je me présente au service des tutelles",
					q2: "Je peux aussi contacter le service moi-même",
					q3: "S'il y a un doute sur mon âge, je devrais passer un examen médical",
					q4: "Le service des tutelles m'aide à m'identifier",
					q5: "Et on me donne un tuteur si j'en ai besoin",
					title: "Etape",
					contact: "Nous contacter",
					contactTxt: "Pour contacter l'équipe Kit Mena",
					coordTel: "+33 06 21 20 06 49",
					coordMail: "KITMENA@gmail.com",
				},
			},
			{
				lang: "ENG",
				langData: {
					t1: "I have just arrived",
					t2: "Useful places",
					t3: "Useful places",
					t4: "I report my arrival in Belgium",
					t5: "I need administrative help",
					t6: "I need to get my hair done",
					t7: "I need someone to listen to me",
					t8: "I am looking for clothes",
					t9: "I need medical care",
					t10: "I need to take a shower",
					t11: "I need to eat",
					q1: "When I arrive in Belgium, I introduce myself to the guardianship service",
					q2: "I can also contact the service myself",
					q3: "If there is a 	doubt about my age, I should undergo a medical examination",
					q4: "The guardianship service helps me to identify myself",
					q5: "And I am provided with a guardian if needed",
					title: "Step",
					contact: "Contact: Contact us",
					contactTxt: "To contact the Kit Mena team",
					coordTel: "+33 06 21 20 06 49",
					coordMail: "KITMENA@gmail.com",
				},
			},
			{
				lang: "ARA",
				langData: {
					t1: "لقد وصلت للتو",
					t2: "الأماكن المفيدة",
					t3: "الأماكن المفيدة",
					t4: "أبلغ عن وصولي إلى بلجيكا",
					t5: "أحتاج إلى مساعدة إدارية",
					t6: "أحتاج إلى ترتيب شعري",
					t7: "أحتاج شخصًا يستمع لي",
					t8: "أبحث عن ملابس",
					t9: "أحتاج الرعاية الطبية",
					t10: "أحتاج إلى الاستحمام",
					t11: "أحتاج إلى تناول الطعام",
					q1: "عندما أصل إلى بلجيكا، أقدم نفسي لخدمة الوصاية",
					q2: "يمكنني أيضًا الاتصال بالخدمة بنفسي",
					q3: "إذا كان هناك شك في عمري، يجب أن أخضع لفحص طبي",
					q4: "تساعدني خدمة الوصاية في التعرف على نفسي",
					q5: "ويتم توفير وصي لي في حال الحاجة",
					title: "الخطوة ",
					contact: "اتصل: تواصل معنا",
					contactTxt: "للتواصل مع فريق كيت مينا",
					coordTel: "+33 06 21 20 06 49",
					coordMail: "KITMENA@gmail.com",
				},
			},
			{
				lang: "LING",
				langData: {
					t1: "Nakofuta kosalama",
					t2: "Mapɛ́si oyo ezali na manáki",
					t3: "Mapɛ́si oyo ezali na manáki",
					t4: "Nazwaki kosalama na Belziki",
					t5: "Nakoki kosalama ya kotambola",
					t6: "Nakoki na kosala monoko na ngai",
					t7: "Nazwaki mutu moko amonisaki",
					t8: "Nazwaki mabɔ́tɛ",
					t9: "Nazwaki kosalama ya kokufa",
					t10: "Nazwaki kosalama ya koyiba",
					t11: "Nazwaki kosalama ya koyéma",
					q1: "Lokola nakofuta na Belziki, nakofuka na libota ya babɔ́tɛlɛ",
					q2: "Nakoki mosusu kokopésa libota na ngai",
					q3: "Mɛsɛki ete likambo moko eleki na âge na ngai, nakokoka kokutandá maladie",
					q4: "Libota ya babɔ́tɛlɛ ekomisaki ngai na koyokela ngai",
					q5: "Na ngai mosusu akufi kokomisa ngai lokola nazwaki",
					title: "Boloko",
					contact: "Kokomana",
					contactTxt: "Ya kokoma ekipe ya Kit Mena",
					coordTel: "+33 06 21 20 06 49",
					coordMail: "KITMENA@gmail.com",
				},
			},
		];
	}

	setTimeout(() => {
		showText = false;
		lang = "none";
		dispatch("langChanged", lang);
	}, 4000);

	function selectLang(newLang) {
		lang = newLang;
		dispatch("langChanged", lang);
	}

	onMount(() => {
		// process to animate text letter by letter
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

		// init trad array
		initTraductionData();
	});
</script>

<main class="global_box" align="center">
	{#if showText}
		<div class="container">
			<h3 class="logo"><b>{animatedText}</b></h3>
		</div>
	{:else if lang != "none"}
		<Besoins {dataArray} {lang} />
	{:else}
		<div class="container" style="display: flex; justify-content: center;">
			<div class="col" style="padding: 0.2vh;">
				<Button
					style="width: 100%;"
					color="primary"
					on:click={() => selectLang("FR")}>Français</Button
				>
			</div>
			<div class="col" style="padding: 0.2vh;">
				<Button
					style="width: 100%;"
					color="danger"
					on:click={() => selectLang("ENG")}>English</Button
				>
			</div>
			<div class="col" style="padding: 0.2vh;">
				<Button
					style="width: 100%;"
					color="warning"
					on:click={() => selectLang("ARA")}>عربي</Button
				>
			</div>
			<div class="col" style="padding: 0.2vh;">
				<Button
					style="width: 100%;"
					color="success"
					on:click={() => selectLang("LING")}>Lingála</Button
				>
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
