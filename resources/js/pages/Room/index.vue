<template>
  <v-container fluid>
    <v-app-bar color="primary">
      <v-toolbar-title>Rooms</v-toolbar-title>
      <v-spacer/>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-icon
            v-bind="attrs"
            v-on="on"
            @click.stop="showCreateRoom=true">
            mdi-text-box-plus
          </v-icon>
        </template>
        <span>Add Room</span>
      </v-tooltip>

      <ShowCreatePage v-model="showCreatePage"/>
    </v-app-bar>
    <v-data-table
      :headers="headers"
      :items="rooms"
      :items-per-page="5"
      :search="search"
      class="elevation-1">
      <template #expand="props">
        <v-data-table v-model="selected" :headers="headers" :items="props.item.food" :pagination.sync="pagination"
                      expand="true" select-all item-key="category" class="elevation-1" hide-actions>
          <!-- I should be able to hide headers and have the parent row checkbox act like the select all headers' checkbox -->
          <template #items="props">
            <tr @click="props.expanded = !props.expanded">
              <td>
                <v-checkbox :input-value="props.selected" primary hide-details/>
              </td>
              <td>{{ props.item.name }}</td>
            </tr>
          </template>
        </v-data-table>
      </template>

      <template #top>
        <v-toolbar flat>
          <v-spacer/>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details/>
        </v-toolbar>
      </template>

      <template #item.uid="{ item }">
        <a :href="`/rooms/${item.uid}`">{{ item.uid }}</a>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import Admin from '@/layouts/Admin/Layout';

  export default {
    layout: Admin,
    name: 'Room',
    props: {
      rooms: Array
    },
    data() {
      return {
        search: '',
        headers: [
          {
            text: 'ID', align: 'start', sortable: false, value: 'id'
          },
          {text: 'Name', value: 'name'},
          {text: 'UID', value: 'uid'},
          {text: 'Description', value: 'description'},
          {text: 'Actions', value: 'actions', sortable: false}
        ]
      };
    },
    methods: {
      //
    }
  };
</script>

<style lang="scss" scoped>

</style>
