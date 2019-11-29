<script>
  export let post;
</script>

<style>
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  .card a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .cardcontainer {
    padding: 2px 16px;
    text-align: center;
  }
  .cardimage {
    float: left;
  }
  img {
    width: 100%;
    max-width: 400px;
  }
</style>

<div class="card">

  <a rel="prefetch" href="blog/{post.slug}">
    {#if post.thumbnail}
      <div class="cardimage">
        <img alt={post.title} src={post.thumbnail} style="width:100%" />
      </div>
    {/if}

    <div class="cardcontainer">
      <h4>
        <b>{post.title}</b>
      </h4>
      <p>{post.printDate}</p>
      <p>
        <i>{post.excerpt}</i>
      </p>
    </div>

  </a>
</div>
