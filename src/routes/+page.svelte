<script>
		export let data;
</script>

<p>
    one: {data.one}
</p>
<p>
    two: {data.two}
</p>
<p>
    three:
    {#await data.streamed.three}
        Loading...
    {:then value}
        {value}
    {:catch error}
        {error.message}
    {/await}
</p>