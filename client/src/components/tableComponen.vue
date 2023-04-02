<script>
import { useMenuStore } from '../stores/counter'
import { mapActions } from 'pinia'
export default {
  props: ['item', 'index'],
  methods: {
    ...mapActions(useMenuStore, ['deleteOrder'])
  }
}
</script>
<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ item.Menu.name }}</td>
    <td>{{ item.order }}</td>
    <td>{{ item.keterangan ? item.keterangan : '-' }}</td>
    <td>Rp.{{ item.Menu.harga }}</td>
    <td>Rp.{{ item.Menu.harga * item.order }}</td>
    <td>
      <button @click="deleteOrder(item.id)"><i class="fa-solid fa-trash"></i></button>
    </td>
  </tr>
</template>
