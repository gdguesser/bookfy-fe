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

export default {
	name: "App",
	components: {
		Header,
		Footer
	}
}
</script>

<style>

</style>