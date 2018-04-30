<template>
    <div>
        <!-- {{ $route.params.id }} -->
        <Modify/>
    </div>
</template>

<script>
import Modify from '@/components/Modify'

export default {
    async asyncData ({ app, params }) {
        return {
            id: params.id
        }
    },
    components: {
        Modify
    }
}
</script>

<style scoped>

</style>