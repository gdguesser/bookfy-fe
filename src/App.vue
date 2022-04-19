<template>
	<Header />
	<div>
		<router-view/>
	</div>
	<Footer />
</template>

<script>
import Header from "./components/AppHeader.vue"
import Footer from "./components/AppFooter.vue"
import { store } from "./components/store.js"

export default {
	name: "App",
	components: {
		Header,
		Footer
	},
	data() {
		return {
			store
		}
	}
}
</script>

<style>

</style>