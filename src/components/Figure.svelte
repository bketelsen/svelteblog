<script>
  export let credit;
  export let image;
  export let title;
</script>

<style>
  figure {
    margin: 0 1em;
    text-align: center;
  }

  figcaption {
    font-size: 0.8em;
    font-style: italic;
  }
</style>

<figure>
  <img alt={title} src={image} />
  {#if credit}
    <figcaption>
      Image credit:
      <a href={credit} target="_blank">{credit}</a>
    </figcaption>
  {/if}
</figure>
