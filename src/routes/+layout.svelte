<script>
  import favicon from "$lib/assets/favicon.svg"
  import "./styles/stylesheet.css"
  import background from "$lib/assets/images/background.png"

  let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Profile card Semih Demir</title>
</svelte:head>


{@render children()}

<style>
  :global(body) {
    min-height: 100vh;
    min-height: 100dvh;

	background-image: url('$lib/assets/images/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
