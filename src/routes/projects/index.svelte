<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`projects.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  .post-item-image a img {
    display: block;
    margin: auto;
  }
  hr {
    margin: 60px auto;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h1>Projects</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">

      <div class="post-item-image">
        {#if post.thumbnail}
          <a rel="prefetch" href="projects/{post.slug}">
            <img alt={post.title} src={post.thumbnail} />
          </a>
        {/if}
      </div>
      <h2>
        <a rel="prefetch" href="projects/{post.slug}">{post.title}</a>
      </h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
