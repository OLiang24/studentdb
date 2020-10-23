<template>
  <div>
    <v-form ref="form">
      ชื่อ รหัส วันเกิด ที่อยู่ หมายเลข รูปภาพ ปุ่ม
      <v-text-field
        v-model="name"
        :counter="50"
        :rules="nameRules"
        label="ชื่อ-สกุล"
        class="ma-3"
        required
      ></v-text-field>
      <v-text-field
        v-model="stuID"
        label="รหัส"
        class="ma-3"
        required
      ></v-text-field>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="date"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <v-text-field
        v-model="ad"
        label="ที่อยู่"
        class="ma-3"
        required
      ></v-text-field>
      <v-text-field
        v-model="numphone"
        label="หมายเลขโทรศัพท์"
        class="ma-3"
        required
      ></v-text-field>
      <v-file-input
        v-model="fileimage"
        show-size=""
        label="File input"
      ></v-file-input>
      <div class="row md-5">
        <v-btn color="#F4D03F" class="mr-4" @click="yes"> yes </v-btn>
        <v-btn color="#F4D03F" class="mr-4" @click="no"> no </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      stuID: '',
      date: '',
      ad: '',
      numphone: '',
      fileimage: null,
    }
  },
  yes() {
    this.$refs.form.yes()
  },
  no() {
    this.$refs.form.no()
  },
}
</script>
<style></style>
