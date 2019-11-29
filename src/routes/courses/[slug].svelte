<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`courses/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Bio from '../../components/Bio.svelte'
  export let post
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #AAA;
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
  <h1>{post.title}</h1>
  <hr />
</header>
<div class="container">
<button class="snipcart-add-item"
  data-item-id="{post.slug}"
  data-item-price="{post.price}"
  data-item-url="/courses/{post.slug}"
  data-item-description="{post.excerpt}"
  data-item-image="/images/courses/{post.slug}.png}"
  data-item-name="{post.title}">
  Add to cart
</button>

  <article class="content">
    {@html post.html}
  </article>
  <hr />
  <Bio />
</div>
