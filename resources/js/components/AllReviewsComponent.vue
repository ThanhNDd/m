<template>
    <div>
        {{ created_date | moment("from", "now") }}
    </div>
</template>

<script>
    export default {
        props: ['created_date'],
    }

</script>
