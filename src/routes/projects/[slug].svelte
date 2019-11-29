<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Bio from "../../components/Bio.svelte";
  import Figure from "../../components/Figure.svelte";

  export let post;
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #aaa;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  header hr {
    min-width: 100px;
    width: 30%;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<header>
  <p>{post.printDate} ~ {post.printReadingTime}</p>

  <a href={post.link}>
    <h1>{post.title}</h1>
  </a>

  <div class="post-item-image">
    {#if post.image}
      <Figure {...post} />
    {/if}
  </div>
  <h4>
    <a href={post.link}>&gt;Github&lt;</a>
  </h4>
  <hr />
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
  <hr />
  <Bio />
</div>
