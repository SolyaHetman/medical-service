<template>
    <section class="dashboard">
        <div class="row">
            <div class="col-md-11 mx-md-auto">
                <Table />
            </div>
        </div>
    </section>
</template>

<script>
import Table from "@/components/Doctor/Table.vue";
export default {
  components: {
    Table
  }
};
</script>


