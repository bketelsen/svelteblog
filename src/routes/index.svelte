<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts: posts.filter(featured) };
      });
  }

  function featured(post) {
    return post.featured || false;
  }
</script>

<script>
  import Card from "../components/Card.svelte";

  export let posts;
</script>

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  figcaption {
    font-size: 0.8em;
    font-style: italic;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>Brian Ketelsen</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Brian Ketelsen</h1>
    <p>This is my home on the internet.</p>
  </div>

  <figure>
    <img alt="Person typing on laptop" src="undraw-illustration.svg" />
    <figcaption>
      Illustration thanks to
      <a href="https://undraw.co" target="_blank">Undraw</a>
    </figcaption>
  </figure>
</div>

{#each posts as post, index}
  <Card {post} />
{/each}
