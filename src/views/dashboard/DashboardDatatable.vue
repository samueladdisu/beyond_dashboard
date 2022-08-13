<template>
  <v-card>
    <!-- {{ data }} -->
    <v-data-table :headers="headers" :items="data" class="table-rounded" hide-default-footer disable-sort>
      <!-- name -->
      <!-- <template #[`item.full_name`]="{ item }">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </template>
      <template #[`item.salary`]="{ item }">
        {{ `$${item.salary}` }}
      </template>
      <template #[`item.status`]="{ item }">
        <v-chip small :color="statusColor[status[item.status]]" class="font-weight-medium">
          {{ status[item.status] }}
        </v-chip>
      </template> -->
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
// import data from './datatable-data'
import axios from 'axios'
import { onMounted, reactive, ref } from '@vue/composition-api'

export default {
  data() {
    return {
      data: [],
      headers: [
        { text: 'NAME', value: 'student_name' },
        { text: 'PARENT NAME', value: 'parent_name' },
        { text: 'GENDER', value: 'gender' },
        { text: 'DATE OF BIRTH', value: 'date_of_birth' },
        { text: 'AGE GROUP', value: 'age_group' },
        { text: 'SCHOOL', value: 'school' },
        { text: 'EMAIL', value: 'email' },
        { text: 'PHONE', value: 'phone' },
        { text: 'INSTAGRAM', value: 'instagram' },
        { text: 'INTEREST', value: 'interest' },
        { text: 'SHOE SIZE', value: 'shoe_size' },
        { text: 'ADDITIONAL INFO', value: 'additional_info' },
      ],

      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor: {
        /* eslint-disable key-spacing */
        Current: 'primary',
        Professional: 'success',
        Rejected: 'error',
        Resigned: 'warning',
        Applied: 'info',
        /* eslint-enable key-spacing */
      },

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
  async mounted() {
    const res = await axios.get('http://localhost:8080/register')

    this.data = res.data
  },
}
</script>
